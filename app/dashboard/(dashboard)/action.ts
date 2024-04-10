'use server';

import { createClient } from '@/app/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function addTask(formData: FormData) {
  const supabase = createClient();
  const task = Object.fromEntries(formData);

  const { error } = await supabase.from('task').insert({ ...task });

  if (error) {
    throw error.code;
  }
  revalidatePath('/dashboard');
}
