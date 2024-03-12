'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { useState } from 'react';
import LoginButtons from '@/app/components/form-elements/buttons';
import toast from 'react-hot-toast';

export default function Register() {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const notify = () => toast('Check Your mail for magic Link');

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: 'http://localhost:3000/login',
      },
    });
    if (error) {
      console.log(error);
      console.log(data);
    }
  }
  return (
    <>
      <dialog id='my_modal_2' className='modal' open>
        <div className='modal-box flex flex-col justify-center text-center '>
          <div className=' flex flex-col gap-1 text-center text-white font-semibold text-lg mb-3 leading-7'>
            Create an Account
          </div>
          <div className='flex flex-col gap-3'>
            <LoginButtons i={0} />
            <LoginButtons i={1} />
          </div>

          <p className='text-center text-sm mt-2 leading-5 text-white'>
            or continue with email
          </p>

          <label className='form-control w-full mb-4 '>
            <div className='label'>
              <span className='label-text font-semibold'>Email</span>
            </div>
            <input
              type='email'
              placeholder='Enter your email address'
              className='input input-bordered w-full'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <button
            className='btn  btn-primary w-full text'
            onClick={() => {
              signInWithEmail();
              notify();
              isDisabled ? setIsDisabled(false) : setIsDisabled(true);
            }}
            disabled={isDisabled}
          >
            {isDisabled ? 'Sending...' : 'Send Magic Link'}
          </button>

          <div className='flex justify-center gap-2 mt-2 '>
            <p className='text-center text-sm font-semibold'>
              Already have an account?
            </p>
            <Link className='cursor-pointer  text-sm btn-link' href={'/login'}>
              Login
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}
