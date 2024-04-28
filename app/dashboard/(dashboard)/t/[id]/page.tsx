import TaskDetails from '@/app/dashboard/components/taskDetails';
import { createClient } from '@/app/utils/supabase/server';

export const dynamicParams = true;

async function getTicket(id: number) {
  const supabase = createClient();

  const { data } = await supabase.from('task').select().eq('id', id).single();

  if (!data) {
    throw new Error('Task not found');
  }
  return data;
}

export default async function TicketDetails({
  params,
}: {
  params: { id: number };
}) {
  console.log(params, 'This are Params');
  const task = await getTicket(params.id);
  const supabase = createClient();
  console.log(task);

  return (
    <main>
      <TaskDetails task={task} />
    </main>
  );
}
