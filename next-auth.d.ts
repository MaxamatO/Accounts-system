import NextAuth, { DefaultSession } from 'next-auth';
import { User } from './types';

declare module 'next-auth' {
    interface Session {
        user: User;
    }
}