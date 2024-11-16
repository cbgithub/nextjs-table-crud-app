'use client';
import React, { useEffect, useState } from 'react';
import AuthButton  from './AuthButton';
import { useUser } from '@auth0/nextjs-auth0/client';




const Navbar = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);



  useEffect(() => {
    const updateWidth = () => {
      const newWidth = window.innerWidth;
      setIsSmallScreen(window.innerWidth < 1024);
    };
  
     // Initial check
     updateWidth();
    window.addEventListener("resize", updateWidth);
  
   // Cleanup event listener
   return () => window.removeEventListener('resize', updateWidth);
  }, []);
  


const { user } = useUser();
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">

      {/* Conditionally render title based on screen size */}
      <div className="text-xl font-bold">
        {isSmallScreen ? 'NTC App' : 'NextJS Table CRUD App'}
      </div>


      <div>
      {user ? (

 <AuthButton />


):     <AuthButton />}
    
      </div>
    </nav>
  );
};

export default Navbar;
