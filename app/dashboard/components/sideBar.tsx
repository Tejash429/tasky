'use client';
import { Folder, Search, Users, User } from 'lucide-react';
import React from 'react';
import CreateIssueModal from './createIssueModal';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function SideBar() {
  return (
    <div className='fixed left-0 right-0 h-screen bg-[#191A23] w-[15%] p-5 flex flex-col gap-4 border-r border-[#2c2d3c]'>
      <div className='flex  justify-between'>
        <p>Team Name</p>
        {/* dropdown */}
        <div className='dropdown dropdown-bottom z-10'>
          <div tabIndex={0} role='button' className='avatar'>
            <User size={18} className='cursor-pointer' />
          </div>
          <ul
            tabIndex={0}
            className='z-auto shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-auto'
          >
            <div key='profile' className='h-14 gap-2 p-3'>
              <p className='font-semibold'>Signed in as</p>
              <p className='font-semibold'>zoey@example.com</p>
            </div>
            <div className=''>
              <li
                role='menuitem'
                aria-labelledby='react-aria9876499756-:r5:'
                data-key='settings'
                className='flex group gap-2 justify-between relative px-2 py-1.5 w-full h-full box-border rounded-small subpixel-antialiased cursor-pointer tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:dark:ring-offset-background-content1 data-[hover=true]:transition-colors data-[hover=true]:bg-default/40 data-[hover=true]:text-default-foreground data-[selectable=true]:focus:bg-default/40 data-[selectable=true]:focus:text-default-foreground'
              >
                <span
                  id='react-aria9876499756-:r5:'
                  className='flex-1 text-small font-normal truncate'
                >
                  My Settings
                </span>
              </li>
              <li
                role='menuitem'
                aria-labelledby='react-aria9876499756-:r8:'
                data-key='team_settings'
                className='flex group gap-2 justify-between relative px-2 py-1.5 w-full h-full box-border rounded-small subpixel-antialiased cursor-pointer tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:dark:ring-offset-background-content1 data-[hover=true]:transition-colors data-[hover=true]:bg-default/40 data-[hover=true]:text-default-foreground data-[selectable=true]:focus:bg-default/40 data-[selectable=true]:focus:text-default-foreground'
              >
                <span
                  id='react-aria9876499756-:r8:'
                  className='flex-1 text-small font-normal truncate'
                >
                  Team Settings
                </span>
              </li>
              <li
                role='menuitem'
                aria-labelledby='react-aria9876499756-:rb:'
                data-key='analytics'
                className='flex group gap-2 justify-between relative px-2 py-1.5 w-full h-full box-border rounded-small subpixel-antialiased cursor-pointer tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:dark:ring-offset-background-content1 data-[hover=true]:transition-colors data-[hover=true]:bg-default/40 data-[hover=true]:text-default-foreground data-[selectable=true]:focus:bg-default/40 data-[selectable=true]:focus:text-default-foreground'
              >
                <span
                  id='react-aria9876499756-:rb:'
                  className='flex-1 text-small font-normal truncate'
                >
                  Analytics
                </span>
              </li>
              <li
                role='menuitem'
                aria-labelledby='react-aria9876499756-:re:'
                data-key='system'
                className='flex group gap-2 justify-between relative px-2 py-1.5 w-full h-full box-border rounded-small subpixel-antialiased cursor-pointer tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:dark:ring-offset-background-content1 data-[hover=true]:transition-colors data-[hover=true]:bg-default/40 data-[hover=true]:text-default-foreground data-[selectable=true]:focus:bg-default/40 data-[selectable=true]:focus:text-default-foreground'
              >
                <span
                  id='react-aria9876499756-:re:'
                  className='flex-1 text-small font-normal truncate'
                >
                  System
                </span>
              </li>
              <li
                role='menuitem'
                aria-labelledby='react-aria9876499756-:rh:'
                data-key='configurations'
                className='flex group gap-2 justify-between relative px-2 py-1.5 w-full h-full box-border rounded-small subpixel-antialiased cursor-pointer tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:dark:ring-offset-background-content1 data-[hover=true]:transition-colors data-[hover=true]:bg-default/40 data-[hover=true]:text-default-foreground data-[selectable=true]:focus:bg-default/40 data-[selectable=true]:focus:text-default-foreground'
              >
                <span
                  id='react-aria9876499756-:rh:'
                  className='flex-1 text-small font-normal truncate'
                >
                  Configurations
                </span>
              </li>
              <li
                role='menuitem'
                aria-labelledby='react-aria9876499756-:rk:'
                data-key='help_and_feedback'
                className='flex group gap-2 justify-between relative px-2 py-1.5 w-full h-full box-border rounded-small subpixel-antialiased cursor-pointer tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:dark:ring-offset-background-content1 data-[hover=true]:transition-colors data-[hover=true]:bg-default/40 data-[hover=true]:text-default-foreground data-[selectable=true]:focus:bg-default/40 data-[selectable=true]:focus:text-default-foreground'
              >
                <span
                  id='react-aria9876499756-:rk:'
                  className='flex-1 text-small font-normal truncate'
                >
                  Help &amp; Feedback
                </span>
              </li>
              <li
                role='menuitem'
                aria-labelledby='react-aria9876499756-:rn:'
                data-key='logout'
                className='flex group gap-2 justify-between relative px-2 py-1.5 w-full h-full box-border rounded-small subpixel-antialiased cursor-pointer tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:dark:ring-offset-background-content1 data-[hover=true]:transition-colors data-[hover=true]:bg-danger/20 data-[hover=true]:text-danger data-[selectable=true]:focus:bg-danger/20 data-[selectable=true]:focus:text-danger'
              >
                <span
                  id='react-aria9876499756-:rn:'
                  className='flex-1 text-small font-normal truncate'
                >
                  Log Out
                </span>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className='flex gap-2  items-center'>
        <CreateIssueModal />
        <Button
          as={Link}
          href='/dashboard/search'
          className='p-2 bg-[#272939]  min-w-8 h-8 rounded-[4px] border border-[#313230] hover:bg-[#2B2C44] hover:border-[#3E3E4A] transition-all ease-out duration-75'
        >
          <Search
            size={16}
            className='text-[#858699] hover:text-white transition-all ease-out duration-0 cursor-pointer'
          />
        </Button>
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
