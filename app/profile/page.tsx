"use client";

import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

import { UserClient } from '../components/UserClient';
import { UserServer }from '../components/UserServer';

// eslint-disable-next-line @next/next/no-async-client-component
const Profile = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) redirect('/');

    return (
        <>
        <div>
            <h1>Client component</h1>
            <UserClient />
        </div>
        <div>
            <h1>Server component</h1>
            <UserServer />
        </div>
        </>
    )
}

export default Profile;