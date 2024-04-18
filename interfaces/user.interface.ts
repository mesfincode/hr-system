
export interface User {
    id: string;
    name: string | null; // Allow null for optional name
    email: string;
    emailVerified: boolean | null; // Allow null for optional email verification status
    image: string | null; // Allow null for optional image
    password: string; // Password should be hashed and not stored in plain text
    role: string;
    isTwoFactorEnabled: boolean;
  }