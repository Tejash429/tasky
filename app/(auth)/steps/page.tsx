'use client';
import { createClient } from '@/app/utils/supabase/client';
import { Button, Input, User } from '@nextui-org/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | null>(null);
  // const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const client = createClient();

  useEffect(() => {
    async function getUser() {
      setUser((await client.auth.getUser()).data.user);
    }
    getUser();
  }, []);
  console.log(user, '-----------------');

  return (
    <div className='bg-[#191A23] h-screen flex justify-center items-center  flex-col '>
      <div className='w-96 flex flex-col gap-8'>
        <div className='text-center '>
          <h1 className='mb-6 text-2xl font-medium'>Create a new workspace</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            fugit facilis reprehenderit.
          </p>
        </div>
        <div className='p-6 bg-[#20212E] rounded-md '>
          <div className='flex flex-col gap-4'>
            <Input
              key='workspaceName'
              type='text'
              label='Workspace Name'
              placeholder='Enter your Workspace name'
              labelPlacement='outside'
              variant='bordered'
              className='rounded-lg'
              onChange={(e) => setName(e.target.value)}
              radius='sm'
              size='lg'
            />
            <Input
              key='workspaceName'
              size='lg'
              type='text'
              label='Workspace URL'
              value={`tasky.app/${name.toLowerCase().replace(/\s+/g, '-')}`}
              labelPlacement='outside'
              isReadOnly
              variant='bordered'
              radius='sm'
            />
          </div>
        </div>
        <div className='text-center w-full'>
          <Button
            className='w-9/12 font-medium text-sm bg-blue-800 rounded-[4px]'
            radius='none'
            as={Link}
            href='/dashboard'
          >
            Create Workspace
          </Button>
        </div>
      </div>
      <div className=' '>
        <Button
          className='text-sm text-[#D2D3E0] absolute left-6 top-6 rounded-sm'
          radius='none'
          variant='light'
        >
          Log out
        </Button>
        <div className='text-[#858699] text-sm absolute right-6 top-6'>
          {user ? (
            <>
              <p className=''>Logged in as</p>
              <span className='text-[#D2D3E0]'>{user.email}</span>
            </>
          ) : (
            <p>Not logged in</p>
          )}
        </div>
      </div>
    </div>
  );
}
