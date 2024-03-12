'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function addTask(formData: FormData) {
  const cookieStore = cookies();
  const supabase = createServerActionClient({ cookies: () => cookieStore });
  const task = Object.fromEntries(formData);

  const { error } = await supabase.from('task').insert({ ...task });

  if (error) {
    throw error.code;
  }
  revalidatePath('/dashboard');
}
