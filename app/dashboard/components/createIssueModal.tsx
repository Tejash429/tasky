'use client';
import React, { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { SquarePen } from '@/app/components/icons';
import { Circle, Tag } from 'lucide-react';
import { addTask } from '../(dashboard)/action';
import {
  Done,
  HighPriority,
  InProgress,
  InReview,
  LowPriority,
  MediumPriority,
  UrgentPriority,
} from './icons';
const status = [
  { label: 'Todo', value: 'todo', icon: <Circle size={14} /> },
  { label: 'In Progress', value: 'inProgress', icon: <InProgress /> },
  { label: 'In Review', value: 'inReview', icon: <InReview /> },
  { label: 'Done', value: 'done', icon: <Done /> },
];
export const priorities = [
  { label: 'Urgent', value: 'urgent', icon: <UrgentPriority /> },
  { label: 'High', value: 'high', icon: <HighPriority /> },
  { label: 'Medium', value: 'medium', icon: <MediumPriority /> },
  { label: 'Low', value: 'low', icon: <LowPriority /> },
];

const labels = [
  {
    label: 'Bug',
    value: 'bug',
    icon: <Circle size={12} color='red' fill='red' />,
  },
  {
    label: 'Feature',
    value: 'feature',
    icon: <Circle size={12} color='#BB87FC' fill='#BB87FC' />,
  },
  {
    label: 'Improvement',
    value: 'improvement',
    icon: <Circle size={12} color='#4EA7FC' fill='#4EA7FC' />,
  },
];

export default function CreateIssueModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className='h-8 p-2 px-3 rounded-[4px] w-[80%] justify-start text-white bg-[#272939]  border border-[#313230] hover:bg-[#2B2C44] hover:border-[#3E3E4A] transition-all ease-out duration-75'
      >
        <SquarePen />
        <span className='text-base'>Add task</span>
      </Button>
      <Modal
        isOpen={isOpen}
        backdrop='blur'
        onOpenChange={onOpenChange}
        className='bg-[#1C1C1C]'
      >
        <ModalContent>
          {(onClose) => (
            <form action={addTask}>
              <ModalHeader className='flex flex-col gap-1'>
                Add Task
              </ModalHeader>
              <ModalBody>
                <Input
                  placeholder='Enter Title'
                  labelPlacement='outside'
                  type='text'
                  label='Title'
                  name='title'
                />
                <Input
                  type='text'
                  label='Description'
                  labelPlacement='outside'
                  placeholder='Enter Description'
                  name='description'
                />
                <div className='flex gap-3'>
                  <StatusInput />
                  <PriopityInput />
                  <LabelInput />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
                <Button color='primary' type='submit' onPress={onClose}>
                  Add Task
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
function LabelInput() {
  return (
    <Select
      placeholder='Label'
      name='label'
      labelPlacement='outside'
      className='max-w-xs'
      required
    >
      {labels.map((label) => (
        <SelectItem
          key={label.value}
          value={label.value}
          startContent={label.icon}
        >
          {label.label}
        </SelectItem>
      ))}
    </Select>
  );
}

function PriopityInput() {
  return (
    <Select
      placeholder='Priority'
      name='priority'
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

function StatusInput() {
  return (
    <Select
      placeholder='status'
      name='status'
      labelPlacement='outside'
      className='max-w-xs'
      required
    >
      {status.map((status) => (
        <SelectItem
          key={status.value}
          value={status.value}
          startContent={status.icon}
        >
          {status.label}
        </SelectItem>
      ))}
    </Select>
  );
}
