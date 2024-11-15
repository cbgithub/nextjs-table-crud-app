'use client';
import React from 'react';
import AuthButton  from './AuthButton';
import { useUser } from '@auth0/nextjs-auth0/client';



const Navbar = () => {
const { user } = useUser();
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">NextJS Table Crud App</div>
      <div>
      {user ? (

<strong>Hello {user.name}, <AuthButton /></strong>


):     <AuthButton />}
    
      </div>
    </nav>
  );
};

export default Navbar;
