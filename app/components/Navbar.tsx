"use client";

import { useUser } from '@auth0/nextjs-auth0/client';
import { SignupButton } from '../components/SignupButton';
import { SigninButton } from '../components/SigninButton';
import { SignoutButton } from '../components/SignoutButton';

export const Navbar = () => {
    const { user, isLoading } = useUser();

    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/profile">Server Protected Profile</a></li>
                    <li><a href="/middleware">Middleware Protected</a></li>
                    <li><a href="/auth-protected/">Auth Protected</a></li>
                    <li><a href="/api/data">Api protected</a></li>

                </ul>
                <div>
                    {!user && !isLoading && (
                        <>
                        <SignupButton />
                        <SigninButton />
                        </>
                    )}
                    {user && !isLoading && (
                        <>
                        <SignoutButton />
                        </>
                    )}
                </div>
            </nav>
        </div>
    )
}