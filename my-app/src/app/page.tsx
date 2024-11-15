'use client';

import React, { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';

const HomePage = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() =>{
     if(!isLoading && user){
         router.push('/employees');
     }
  }, [isLoading, user, router]);

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        {isLoading ? (

         <h1 className="text-3xl font-bold">Loading...</h1>
       
        ) : !user? (
         <h1 className="text-3xl font-bold">Welcome to My App</h1>
        ): null}
      </main>
    </>
  );
};

export default HomePage;
