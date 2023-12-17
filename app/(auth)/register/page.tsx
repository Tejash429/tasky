'use client';

import GitHubButton from '@/app/components/form-elements/buttons';
import Input from '@/app/components/form-elements/input';
import Link from 'next/link';

export default function Register() {
  return (
    <>
      <button
        className='btn'
        onClick={() =>
          (
            document.getElementById('my_modal_2') as HTMLDialogElement
          ).showModal()
        }
      >
        open modal
      </button>
      <dialog id='my_modal_2' className='modal backdrop-blur-sm '>
        <div className='modal-box flex flex-col justify-center text-center '>
          <div className=' flex flex-col gap-1 text-center text-white font-semibold text-lg mb-3 leading-7'>
            Login to your account
          </div>
          <div className='flex flex-col gap-3'>
            <GitHubButton i={0} />
            <GitHubButton i={1} />
          </div>

          <p className='text-center text-sm mt-2 leading-5 text-white'>
            or continue with email
          </p>

          <Input
            title='Email Adddress'
            placeholder='your@email.com'
            type='email'
          />

          <button className='btn btn-primary w-full text'>Login </button>

          <div className='flex justify-center gap-2 mt-2 '>
            <p className='text-center text-sm font-semibold'>
              Alreday have an account ?
            </p>
            <Link className='cursor-pointer text-sm btn-link' href={'/login'}>
              Login
            </Link>
          </div>
        </div>

        <form method='dialog' className='modal-backdrop text-white'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
