import { useUser } from '@auth0/nextjs-auth0/client';

export const UserClient = () => {
    const { user, error, isLoading } = useUser();
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    
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