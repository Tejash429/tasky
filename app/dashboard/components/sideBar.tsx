import { Folder, Search, Users, User } from 'lucide-react';
import React from 'react';
import CreateIssueModal from './createIssueModal';

export default function SideBar() {
  return (
    <div className='fixed left-0 right-0 h-screen bg-[#191A23] w-[15%] p-5 flex flex-col gap-4 border-r border-[#2c2d3c]'>
      <div className='flex  justify-between items-center'>
        <p>Team Name</p>
        <User size={18} />
      </div>
      <div className='flex gap-2  items-center'>
        <CreateIssueModal />
        <div className='p-2 bg-[#272939] rounded-[4px] border border-[#313230] hover:bg-[#2B2C44] hover:border-[#3E3E4A] transition-all ease-out duration-75'>
          <Search
            size={16}
            className='text-[#858699] hover:text-white transition-all ease-out duration-0'
          />
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='flex gap-2 items-center hover:bg-[#262736] py-1 rounded-md pl-2'>
          <Folder size={20} />
          My Tasks
        </div>
        <div className='flex gap-2 items-center hover:bg-[#262736]  py-1 rounded-md pl-2'>
          <Users size={20} />
          Teams
        </div>
      </div>
    </div>
  );
}
