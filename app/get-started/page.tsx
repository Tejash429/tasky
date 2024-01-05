'use client';
import React from 'react';
import NavBarStarted from '../components/navBarStarted';
import Link from 'next/link';

export default function GetStarted() {
  return (
    <div className=''>
      <link
        href='https://cdn.jsdelivr.net/npm/daisyui@4.4.20/dist/full.min.css'
        rel='stylesheet'
        type='text/css'
      />

      <div className=' navbar bg-base-300'>
        <div className='container'>
          <div className='navbar-start text-xl pl-3'>Tasky</div>
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contect</a>
              </li>
            </ul>
          </div>
          <div className='navbar-end flex gap-3 justify-end'>
            <Link href={'/login'} className='btn'>
              Login
            </Link>
            <Link href={'/register'} className='btn'>
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className=''>
        <NavBarStarted />
      </div>
    </div>
  );
}
