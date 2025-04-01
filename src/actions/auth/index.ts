import { toast } from 'react-hot-toast';
import { hashPassword } from "@/helpers/hashPassword";
import { gqlClient } from "@/lib/service/client";
import { SignupDocument, SignupMutation } from "lib/gql/graphql";

export interface RegisterDto {
    full_name: string;
    email: string;
    password: string;
}

export interface UserResponse {
    id: string;
    full_name: string;
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