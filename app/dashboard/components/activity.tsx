'use client';

import { Avatar } from '@nextui-org/react';
// import { User } from "@supabase/auth-helpers-nextjs";
import { User } from 'lucide-react';

export default function Activity() {
  return (
    <main className='flex gap-x-unit-9xl'>
      <div>
        <div className='flex gap-unit-9xl'>
          <div>
            <h2>Activity</h2>
            {/* <p className="">Unsubscribe</p> */}
          </div>
          <div tabIndex={0} role='button' className='avatar mt-1'>
            <User size={18} className='cursor-pointer' />
          </div>
        </div>
        <div className='flex mt-5'>
          <div className=''>
            {/* Add the user Icon, priority and other icon */}
          </div>
          <div className=' gap-5 font-thin'>
            <span className='flex items-center gap-2 text-[#959699]'>
              <p className='font-medium text-white'>Tejash </p>
              <p className='text-sm '> created the task </p>
              <span>
                <div className='inline-block text-sm '>
                  <span className='inline-block text-center font-bold w-3 pl-1'>
                    ·
                  </span>
                  <a href='#' aria-label=''>
                    4 weeks ago
                  </a>
                </div>
              </span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
