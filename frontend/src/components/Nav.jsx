import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className=' bg-transparent top-0 z-100 left-0 w-full min-h-[10vh] flex justify-center items-center'>
        <ul className='flex justify-around items-center gap-8 text-2xl text-black  '>
            <li className='hover:text-yellow-300 hover:underline'> <Link to="/">Home</Link></li>
            <li className='hover:text-yellow-300 hover:underline'><Link to="/about">About</Link></li>
            <li className='hover:text-yellow-300 hover:underline'><Link to="/login">Login</Link></li>
            <li className='hover:text-yellow-300 hover:underline'><Link to="/signup">SignUp</Link></li>
        </ul>
    </div>
  )
};

export default Nav