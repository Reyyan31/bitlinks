import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='h-14 bg-purple-700 flex justify-between px-4 text-white items-center'>
      <div className="logo font-bold text-lg">
      <Link href="/">BitLinks</Link>
      </div>
      <ul className='flex justify-center items-center gap-4'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <li className='flex gap-4'>
        <Link href="/shorten"> <button className='cursor-pointer rounded-full bg-purple-500 shadow-lg p-3 py-2 font-bold hover:bg-purple-900  '>Try Now</button> </Link>
        <Link href="/github"> <button className='cursor-pointer  rounded-full bg-purple-500 shadow-lg p-3 py-2 font-bold hover:bg-purple-900 '>GitHuB</button> </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar; 