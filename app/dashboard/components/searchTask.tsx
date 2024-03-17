'use client';
import SideBar from './sideBar';

export default function SearchTask() {
    return (
        <div className="">
            <div>
                <SideBar />
            </div>
            <div className="ml-[230px] text-[#FFFFFF] bg-[#191A23] max-h-14 border-b border-[#2C2D3C]">
                <form className=" mx-auto">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only bg-transparent">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-white rounded-lg bg-transparent outline-none" placeholder="Search..." required />
                    </div>
                </form>
            </div>
            {/* Display Content*/}
            <div className='ml-[228px]'>
                <div className="flex flex-col gap-4 rounde-lg m-2">
                    <div className="text-[16px] lg:p-3 p-1 font-black text-gray-500">Recent issues</div>
                </div>
            </div>
        </div>
    );
};