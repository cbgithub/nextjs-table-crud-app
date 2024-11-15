'use client';

import { Button } from '@/components/ui/button';
import { useUser } from '@auth0/nextjs-auth0/client';

const AuthButton = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return user ? (
    
    <Button
      variant="destructive"
      onClick={() => {
        window.location.href = '/api/auth/logout';
      }}
    >
      Logout
    </Button>
  ) : (
    <Button 
      onClick={() => {
        window.location.href = '/api/auth/login';
      }}
    >
      Login
    </Button>
  );
};

export default AuthButton;
