import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { time } from 'console';
import { cookies } from 'next/headers';
import React from 'react';
import {
  Done,
  HighPriority,
  InProgress,
  InReview,
  LowPriority,
  MediumPriority,
  UrgentPriority,
} from './icons';
import { AlarmCheck, Circle } from 'lucide-react';
import { Select, SelectItem, Tooltip } from '@nextui-org/react';
import { priorities } from './createIssueModal';
import Link from 'next/link';

export async function getTasks() {
  const cokkieStore = cookies();

  const supabase = createServerComponentClient({ cookies: () => cokkieStore });
  const { data: task, error } = await supabase
    .from('task')
    .select('id, priority, status, title, label, created_at');
  if (error) {
    console.log(error.message);
  }
  return task;
}
interface Task {
  id: string;
  priority: string;
  status: string;
  title: string;
  label: string;
  created_at: string;
}

async function getSortedTask() {
  const tasks = await getTasks();
  const sortedTasks = tasks?.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  return sortedTasks;
}

function getDate({ task }: { task: Task; }) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Npv',
    'Dec',
  ];
  const d = new Date(task.created_at);
  const monthIndex = d.getMonth();
  return `${months[monthIndex]} ${d.getDate()}`;
}

export default async function Task() {
  const tasks = await getSortedTask();

  return (
    <>
      {tasks?.map((task: Task) => {
        let created_at_str = getDate({ task });
        return (
          <Link
            className='flex justify-between hover:bg-[#1C1D2A] py-1  px-7 border-b h-12 border-[#212234] transition-all duration-300 ease-in-out'
            key={task?.id}
            href={`/t/${task.id}`}
          >
            <div className='flex gap-3 items-center'>
              <Tooltip
                showArrow={true}
                content={task.priority}
                placement='bottom'
              >
                {task.priority === 'low' ? (
                  <LowPriority />
                ) : task.priority === 'medium' ? (
                  <MediumPriority />
                ) : task.priority === 'high' ? (
                  <HighPriority />
                ) : (
                  <UrgentPriority />
                )}
              </Tooltip>

              <div className='text-[#CCCCCC]'>TASK-{task.id}</div>
              <div className='flex items-center gap-3'>
                {Status(task.status)}
                <div className='text-white font-medium text-sm'>
                  {task.title}
                </div>
              </div>
            </div>
            <div className='flex gap-2 items-center '>
              {task.label && (
                <div className='bg-[#191A23] p-1.5 px-2.5 text-xs h-fit capitalize rounded-full text-[#858699] flex gap-2 items-center border border-[#313230]'>
                  <div className='h-2.5 w-2.5 bg-cyan-600 rounded-full' />
                  {task.label}
                </div>
              )}

              <div className='text-[#858699] text-sm'>{created_at_str}</div>
            </div>
          </Link>
        );
      })}
    </>
  );
}

function Status(status: string) {
  return (
    <Tooltip
      showArrow={true}
      content={status}
      placement='bottom'
      className='capitalize'
    >
      {status === 'done' ? (
        <Done />
      ) : status === 'inProgress' ? (
        <InProgress />
      ) : status === 'inReview' ? (
        <InReview />
      ) : (
        <Circle size={14} />
      )}
    </Tooltip>
  );
}

function ChangePriority(priority: string) {
  return (
    <Select
      placeholder='status'
      name='status'
      labelPlacement='outside'
      className='max-w-xs'
      required
    >
      {priorities.map((priority) => (
        <SelectItem
          key={priority.value}
          value={priority.value}
          startContent={priority.icon}
        >
          {priority.label}
        </SelectItem>
      ))}
    </Select>
  );
}
