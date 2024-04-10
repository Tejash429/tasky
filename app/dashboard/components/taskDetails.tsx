'use client';
import {
    Avatar,
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    input,
} from '@nextui-org/react';
import SideBar from "./sideBar";
import { Plus, Star } from 'lucide-react';
import { Noto_Emoji } from 'next/font/google';
import { color } from 'framer-motion';
import Activity from './activity';

export default function TaskDetails() {
    return (
        <main className="ml-[228px]">
            <div>
                <SideBar />
            </div>
            <div className="">
                <Navbar
                    className='text-[#FFFFFF] bg-[#191A23] max-h-14 border-b border-[#2C2D3C]'
                    maxWidth='full'
                >
                    <div className="flex gap-3">
                        <Avatar className='h-5 w-5' />
                        <p>Project Name</p>
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="#959699" role="img" focusable="false" aria-hidden="true" className='text-[#959699] mt-1 cursor-pointer'><path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path></svg>
                        <Star className='h-5 w-5' />
                    </div>
                </Navbar>
                <form action="" className='h-screen bg-[#191A23]'>
                    <div className="ml-20 pt-11">
                        <div spellCheck="true" translate="no" className=''>
                            <p className="text-2xl outline-none" contentEditable="true">hello ( Task Title )</p>
                        </div>
                        <div className="mt-5 mb-7">

                            <input type="text" className=' bg-transparent outline-none my-5 max-h-8' placeholder='Add description' />
                        </div>
                        <div className="flex gap-x-unit-9xl">
                            <div>
                                <button aria-label="Add reaction" type="button"><svg className="" width="16" height="16" viewBox="0 0 16 16" fill="#959699" role="img" focusable="false" aria-hidden="true" style={{ color: '#959699' }}><path d="M8 1a7 7 0 0 1 7 7 .75.75 0 0 1-1.5 0A5.5 5.5 0 1 0 8 13.5.75.75 0 0 1 8 15 7 7 0 1 1 8 1Zm4.25 8.5a.75.75 0 0 1 .743.648l.007.102v1.249l1.25.001a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.648.743L14.25 13 13 12.999v1.251a.75.75 0 0 1-1.493.102l-.007-.102v-1.251L10.25 13a.75.75 0 0 1-.743-.648L9.5 12.25a.75.75 0 0 1 .648-.743l.102-.007 1.25-.001V10.25a.75.75 0 0 1 .75-.75ZM10.475 8a.5.5 0 0 1 .497.553C10.798 10.184 9.812 11 8.016 11c-1.795 0-2.789-.814-2.982-2.441a.5.5 0 0 1 .438-.556l.03-.002L10.475 8ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg></button>
                            </div>
                            <div>
                                <button aria-label="Attach images, files or videos" className='ml-9' type="button"><svg className="" width="16" height="16" viewBox="0 0 16 16" fill="#959699" role="img" focusable="false" aria-hidden="true" style={{ color: '#959699' }}><path d="M12.6429 7.69048L8.92925 11.4041C7.48164 12.8517 5.34347 13.0101 4.16667 11.8333C2.98733 10.654 3.14447 8.52219 4.59216 7.07451L8.00206 3.66461C8.93557 2.73109 10.2976 2.63095 11.0333 3.36667C11.7681 4.10139 11.6658 5.4675 10.7361 6.39727L7.32363 9.8097C6.90202 10.2313 6.32171 10.2741 6.02381 9.97619C5.72651 9.6789 5.76949 9.09718 6.1989 8.66776L9.29048 5.57619C9.56662 5.30005 9.56662 4.85233 9.29048 4.57619C9.01433 4.30005 8.56662 4.30005 8.29048 4.57619L5.1989 7.66776C4.24737 8.6193 4.13865 10.091 5.02381 10.9762C5.9095 11.8619 7.37984 11.7535 8.32363 10.8097L11.7361 7.39727C13.1876 5.94573 13.3564 3.68975 12.0333 2.36667C10.7099 1.04326 8.45782 1.20884 7.00206 2.66461L3.59216 6.07451C1.62229 8.04437 1.39955 11.0662 3.16667 12.8333C4.93146 14.5981 7.9596 14.3737 9.92925 12.4041L13.6429 8.69048C13.919 8.41433 13.919 7.96662 13.6429 7.69048C13.3667 7.41433 12.919 7.41433 12.6429 7.69048Z"></path></svg></button>
                            </div>
                        </div>
                        {/* <div className="mt-3">
                            <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 gap-2">
                                <Plus className='h-5 w-5 ' />
                                Add sub-issue
                            </button>
                        </div> */}
                        <hr className='mt-4 w-9/12' />
                        <div className="mt-7">
                            <Activity />
                        </div>
                    </div>
                </form>
            </div >
        </main >
    );
}


