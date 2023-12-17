'use client';

import GitHubButton from '@/app/components/form-elements/buttons';
import Input from '@/app/components/form-elements/input';
import Link from 'next/link';
import AuthForm from '../authForm';

export default function Login() {
  return (
    <AuthForm
      btnString='Login'
      msg='Dont have an Account yet?'
      title='Login to your Accout'
    />
  );
}
