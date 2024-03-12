import { Github } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

import React from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function LoginButtons({ i }: { i: number }) {
  const supabase = createClientComponentClient();

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      throw error;
    }
    console.log(data);
  }

  async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    if (error) {
      throw error;
    }
    console.log(data);
  }
  return (
    <button
      className='bg-white btn hover:bg-slate-200 font-medium text-black'
      onClick={() => (i == 1 ? signInWithGithub() : signInWithGoogle())}
    >
      {i == 1 ? <Github size={22} /> : <FcGoogle size={22} />}
      {i == 1 ? 'Continue with GitHub' : 'Continue with Google'}
    </button>
  );
}
