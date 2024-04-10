import Content from '../components/content';
import { revalidatePath } from 'next/cache';
import DashNav from '../components/navbar';
import { createClient } from '@/app/utils/supabase/server';

export default async function page() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  // console.log(data, error?.message);

  if (data) {
    revalidatePath('/search');
  }

  return (
    <>
      <div className='ml-[228px]'>
        <DashNav />
        <Content />
      </div>
    </>
  );
}
