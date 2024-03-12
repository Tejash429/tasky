'use client';
import DropDown from './dropDown';
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { AlignJustify, ListFilter, Table } from 'lucide-react';

export default function navbar() {
  return (
    <Navbar
      isBlurred={false}
      className='text-[#FFFFFF] bg-[#191A23] max-h-14 border-b border-[#2C2D3C]'
      maxWidth='full'
    >
      <NavbarBrand className='flex gap-5'>
        <p className='text-inherit'>All tasks</p>
        <div className='flex gap-1 items-center p-2 py-1 border border-[#313248] rounded-[4px]'>
          <ListFilter size={16} color='#858699' />
          <span className='text-[#D2D3E0] text-sm'>Filter</span>
        </div>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='end'>
        <NavbarItem>
          <div className='flex items-center bg-[#21232E] rounded-md'>
            <div className='px-2 py-1 bg-[#2C2D3C] border rounded-md border-[#313230]'>
              <AlignJustify color='white  ' />
            </div>
            <div className='px-2 py-1'>
              <Table color='#858699' />
            </div>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
