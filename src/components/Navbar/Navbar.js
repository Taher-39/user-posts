import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const date = new Date().toLocaleDateString()
    return (
        <nav className='md:flex justify-around py-6 navbar px-3'>
            <div><Link to='/' className='hover:underline'>Home</Link></div>
            <div className='text-2xl'>Welcome Your Site</div>
            <div>{date}</div>
        </nav>
    );
};

export default Navbar;