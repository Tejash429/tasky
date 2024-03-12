'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  router.push('/dashboard');

  return <main className='flex flex-wrap justify-between'></main>;
}
