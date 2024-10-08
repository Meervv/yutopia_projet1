import { getSession } from '@auth0/nextjs-auth0';

export const UserServer = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) return null;
    
    return user ? (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    ) : (
        <div>
            <p>No user logged in</p>
        </div>
    )
}