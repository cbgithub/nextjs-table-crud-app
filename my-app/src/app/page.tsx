'use client';

import React, { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
     
      <div className="container mx-auto text-center py-10">
        {isLoading ? (

         <h1 className="text-3xl font-bold">Loading...</h1>
       
        ) : !user? (
          <><header>
              <h1 className="text-4xl font-bold">Welcome</h1>
              <p className="mt-4 text-lg">
                Streamline your workflow with an easy-to-use CRUD application.
              </p>
            </header><main className="my-10">
                {/*<img
                  src="./favicon.ico" // Replace with your hero image path
                  alt="Hero"
                  className="mx-auto mb-6 max-w-full" />*/}
                <div className="space-y-4">
                  <p className="text-md">
                    Easily manage employee data with real-time updates and secure authentication.
                  </p>
                  <div>
                 
                      <Button    onClick={() => {
        window.location.href = '/api/auth/login';
      }}>Log In to Continue</Button>
                  
                  </div>
                </div>
              </main><footer className="mt-10 text-sm">
                <p>
                  By using this app, you agree to our <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Policy</Link>.
                </p>
              </footer></>
        ): null}
      </div>
      
    </>
  );
};

export default HomePage;
