import { Github } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

import React from 'react';

export default function GitHubButton({ i }: { i: number }) {
  return (
    <button className='bg-white btn hover:bg-slate-200 font-medium text-black'>
      {i == 1 ? <Github size={22} /> : <FcGoogle size={22} />}
      {i == 1 ? 'Continue with GitHub' : 'Continue with Google'}
    </button>
  );
}
