import React from 'react';
import DropDown from './dropDown';

export default function navbar() {
  return (
    <div className='flex justify-between  items-center'>
      <div className='flex gap-3 items-center'>
        <div>Active</div>
        <DropDown />
      </div>
      <div></div>
    </div>
  );
}
