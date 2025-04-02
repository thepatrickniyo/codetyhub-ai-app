/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-hot-toast';
import { hashPassword, verifyPassword } from "@/helpers/hashPassword";
import { gqlClient } from "@/lib/service/client";
import { LoginDocument, LoginQuery, SignupDocument, type SignupMutation } from "lib/gql/graphql";
import { createToken } from '@/helpers/jwt';
export interface RegisterDto {
    full_name: string;
    email: string;
    password: string;
}

export interface UserResponse {
    id: string;
    full_name: string;
}

export interface LoginDto {
    email: string;
    password: string;
}


export async function registerUserAction({
    full_name,
    email,
    password
}: RegisterDto): Promise<UserResponse | null> {
    try {
        // Hash the password before sending to Hasura
        const hashedPassword = await hashPassword(password);
        
        const response = await gqlClient.request<SignupMutation>(
            SignupDocument,
            {
                full_name,
                email,
                password: hashedPassword
            }
        );
        
        // Check if the response contains the expected data
        if (response?.insert_users_one?.id) {
            toast.success(`Welcome, ${response.insert_users_one.full_name}! Your account has been created successfully.`);
            return response.insert_users_one;
        } else {
            // Handle unexpected response format
            toast.error("Registration failed: Invalid response from server");
            console.error("Unexpected response format:", response);
            return null;
        }
    } catch (error: any) { // Using any here to handle various error types
        // Handle different types of errors
        if (error.response?.errors) {
            // GraphQL errors
            const errorMessage = error.response.errors[0]?.message || "Registration failed";
            
            // Check for common error types
            if (errorMessage.includes("unique constraint")) {
                toast.error("This email is already registered. Please use a different email or try logging in.");
            } else if (errorMessage.includes("validation")) {
                toast.error("Please check your information and try again.");
            } else {
                toast.error(errorMessage);
            }
        } else {
            // Network or other errors
            toast.error("Registration failed. Please check your connection and try again.");
        }
        
        console.error("Registration error:", error);
        return null;
    }
}

export async function loginUserAction({
    email,
    password
}: LoginDto): Promise<UserResponse | null> {
    try {
        // Fetch user data using the LoginDocument query
        const response = await gqlClient.request<LoginQuery>(
            LoginDocument,
            {
                email
            }
        );
        
        // Check if user exists
        if (!response?.users?.[0]) {
            toast.error("No account found with this email. Please check your email or sign up.");
            // Throw error
            return null;
        }
        
        const user = response.users[0];
        
        // Compare the provided password with the stored hash
        console.log("password: "+password+" hashedPassword: "+user.password)
        const isPasswordValid = await verifyPassword(password, user.password);
        console.log("password validity: ",isPasswordValid)
        
        if (!isPasswordValid) {
            toast.error("Invalid password. Please try again.");
            return null;
        }
        
        // Create and store authentication token
        console.log(JSON.stringify({
            userId: user.id,
            email: user.email,
            fullName: user.full_name
        }))
        const token = createToken({ 
            userId: user.id, 
            email: user.email,
            fullName: user.full_name
        });
        console.log("token: ",token)
        // Save token to localStorage
        localStorage.setItem('authToken', token);
        
        // Success message
        toast.success(`Welcome back, ${user.full_name}!`);
        
        // Return user data
        return {
            id: user.id,
            full_name: user.full_name
        };
        
    } catch (error: any) {
        // Handle different types of errors
        if (error.response?.errors) {
            // GraphQL errors
            const errorMessage = error.response.errors[0]?.message || "Login failed";
            // toast.error(errorMessage);
        } else {
            // Network or other errors
            // toast.error("Login failed. Please check your connection and try again.");
        }
        
        console.error("Login error:", error);
        return null;
    }
}