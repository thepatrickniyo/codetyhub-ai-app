/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
// auth.ts
import jwt from 'jsonwebtoken';

// Secret key for signing tokens - in production, use an environment variable
const JWT_SECRET = process.env.JWT_SECRET!;
// Token expiration time (in seconds) - default: 24 hours
const TOKEN_EXPIRATION = 60 * 60 * 24;

interface TokenPayload {
  userId: string;
  email: string;
  fullName: string;
  [key: string]: any; // Allow for additional custom fields
}

/**
 * Creates a JWT token with the provided user data
 */
export function createToken(payload: TokenPayload): string {
  return jwt.sign(
    payload,
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRATION }
  );
}

/**
 * Verifies a JWT token and returns the decoded payload
 */
export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

/**
 * Gets the authenticated user from localStorage
 */
export function getAuthenticatedUser(): TokenPayload | null {
  try {
    const token = localStorage.getItem('authToken');
    if (!token) return null;
    
    return verifyToken(token);
  } catch (error) {
    console.error('Error getting authenticated user:', error);
    return null;
  }
}

/**
 * Checks if a user is authenticated
 */
export function isAuthenticated(): boolean {
  return getAuthenticatedUser() !== null;
}

/**
 * Logs out the current user by removing the token
 */
export function logout(): void {
  localStorage.removeItem('authToken');
}