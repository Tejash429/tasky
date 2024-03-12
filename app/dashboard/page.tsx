import Navbar from './components/navbar';
import Content from './components/content';
import SideBar from './components/sideBar';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';

export default async function page() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.auth.refreshSession();
  const { session, user } = data;

  console.log(data);

  if (!data.session) {
    revalidatePath('/login');
  }

  return (
    <>
      <div className=''>
        <SideBar />
        <div className='ml-[228px]'>
          <Navbar />
          <Content />
        </div>
      </div>
    </>
  );
}
