'use client';
import { Avatar, Navbar, Textarea } from '@nextui-org/react';
import SideBar from './sideBar';
import { Plus, Star } from 'lucide-react';
import { Noto_Emoji } from 'next/font/google';
import { color } from 'framer-motion';
import Activity from './activity';

export default function TaskDetails({ task }) {
  return (
    <main className='ml-[228px]'>
      <div>
        <SideBar />
      </div>
      <div className=''>
        <Navbar
          className='text-[#FFFFFF] bg-[#191A23] max-h-14 border-b border-[#2C2D3C]'
          maxWidth='full'
        >
          <div className='flex gap-3'>
            <Avatar className='h-5 w-5' />
            <p>Project Name</p>
            <svg
              width='18'
              height='18'
              viewBox='0 0 16 16'
              fill='#959699'
              role='img'
              focusable='false'
              aria-hidden='true'
              className='text-[#959699] mt-1 cursor-pointer'
            >
              <path d='M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z'></path>
            </svg>
            <Star className='h-5 w-5' />
          </div>
        </Navbar>
        <form action='' className='h-screen bg-[#191A23]'>
          <div className='ml-20 pt-11'>
            <div spellCheck='true' translate='no' className=''>
              <p className='text-2xl outline-none' contentEditable='true'>
                {task.title}
              </p>
            </div>
            <div className='mt-5 mb-7'>
              <textarea
                className=' bg-transparent outline-none my-5 resize-none '
                cols={50}
                contentEditable='true'
                rows={3}
                placeholder='Add description'
                defaultValue={task.description}
              />
            </div>
            <div className='flex gap-x-unit-9xl'>
              <div>
                <button aria-label='Add reaction' type='button'>
                  <svg
                    className=''
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='#959699'
                    role='img'
                    focusable='false'
                    aria-hidden='true'
                    style={{ color: '#959699' }}
                  >
                    <path d='M8 1a7 7 0 0 1 7 7 .75.75 0 0 1-1.5 0A5.5 5.5 0 1 0 8 13.5.75.75 0 0 1 8 15 7 7 0 1 1 8 1Zm4.25 8.5a.75.75 0 0 1 .743.648l.007.102v1.249l1.25.001a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.648.743L14.25 13 13 12.999v1.251a.75.75 0 0 1-1.493.102l-.007-.102v-1.251L10.25 13a.75.75 0 0 1-.743-.648L9.5 12.25a.75.75 0 0 1 .648-.743l.102-.007 1.25-.001V10.25a.75.75 0 0 1 .75-.75ZM10.475 8a.5.5 0 0 1 .497.553C10.798 10.184 9.812 11 8.016 11c-1.795 0-2.789-.814-2.982-2.441a.5.5 0 0 1 .438-.556l.03-.002L10.475 8ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z'></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className='mt-4 w-9/12 border-b border-[#2c2d3c]' />
            <div className='mt-7'>
              <Activity />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
