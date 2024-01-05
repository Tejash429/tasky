import React from 'react';

export default function Infobox() {
  return (
    <div className='w-[270px] h-[274px] bg-secondary rounded shadow  mt-3 relative'>
      <div className="left-[22px] top-[6px] absolute text-neutral text-xl font-['Epilogue'] leading-[48px]">
        Task
      </div>
      <div className='px-[18.50px] py-[5px] left-[157px] top-[14px] absolute bg-violet-50 rounded-[14px] justify-center items-center inline-flex'>
        <div className="text-violet-500 text-[11px] font-normal font-['Inter'] leading-[18px]">
          completed
        </div>
      </div>
      <div className="w-[233px] h-[82px] left-[19px] top-[90px] absolute text-gray-700 text-xs font-normal font-['Inter'] leading-tight">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quae
        ratione repellendus quas autaccusantium assumenda a iste! Nisi, voluptas
        tempora! Unde odit soluta eum.
      </div>
      <div className='w-full h-[47px]  top-[226px] absolute bg-white rounded shadow'>
        <div className="left-[25px] top-[14.20px] absolute text-gray-700 text-xs font-normal font-['Inter'] leading-tight">
          Tejash Patel
        </div>
        <div className="left-[191px] top-[11.70px] absolute text-violet-500 text-sm font-normal font-['Inter'] leading-snug">
          16/09/2005
        </div>
      </div>
    </div>
  );
}
