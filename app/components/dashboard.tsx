import Image from 'next/image';
import Infobox from './infoBox';
import Navbar from './navbar';

export default function Dashboard() {
  function showNav(arg0: boolean): void {
    throw new Error('Function not implemented.');
  }

  return (
    <main className='w-4/5'>
      {/* <SideBar/> */}
      <div className='bg-neutral flex   items-center  rounded-md '>
        <Navbar />
        <div aria-label='toggler' className='flex justify-center items-center'>
          <button
            aria-label='open'
            id='open'
            className='hidden focus:outline-none focus:ring-2'
          >
            <svg
              className=''
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4 6H20'
                stroke='white'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M4 12H20'
                stroke='white'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M4 18H20'
                stroke='white'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>

      <div className='grid grid-rows-2 overflow-hidden grid-flow-col justify-center gap-10 '>
        <Infobox />
        <Infobox />
        <Infobox />
        <Infobox />
        <Infobox />
        <Infobox />
      </div>
    </main>
  );
}
