'use client';

import { Search } from "lucide-react";

export default function ManageMember() {
    return (
        <div className="bg-[#191A23] min-h-screen pt-2 font-mono">
            <div className="container mx-auto">
                <div className="inputs w-full max-w-2xl p-6 mx-auto">
                    <h2 className="text-2xl text-white">Team Member</h2>
                    <p className="leading-tight text-gray-400 font-medium mt-2">Manage who is a member of the
                        <span className="font-bold text-white font-mono"> College-project-12 </span>
                        team
                    </p>
                    <form className="mt-5 border-t border-gray-400 pt-4">
                        <div className='flex flex-wrap -mx-3 mb-6'>
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-white text-xs font-bold mb-2' htmlFor='grid-text-1'>Manage Member</label>
                            </div>
                            <div className='w-full md:w-full px-3 mb-6 relative'>
                                <input type="search" className="pr-6 pl-8 font-medium w-full py-[6px] px-3 bg-transparent border rounded-md border- outline-none" aria-label="Search" placeholder="Search by Email" spellCheck="false" autoComplete="off" inputMode="search" enterKeyHint="search" data-search-input="true" data-1p-ignore="true" />
                                <span className="absolute left-4 top-[20%]">
                                    <Search />
                                </span>
                            </div>
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>pick your country</label>
                                <div className="flex-shrink w-full inline-block relative">
                                    <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                        <option>choose ...</option>
                                        <option>USA</option>
                                        <option>France</option>
                                        <option>Spain</option>
                                        <option>UK</option>
                                    </select>
                                    <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>fav language</label>
                                <div className="flex-shrink w-full inline-block relative">
                                    <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                        <option>choose ...</option>
                                        <option>English</option>
                                        <option>France</option>
                                        <option>Spanish</option>
                                    </select>
                                    <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="personal w-full border-t border-gray-400 pt-4">
                                <h2 className="text-2xl text-gray-900">Personal info:</h2>
                                <div className="flex items-center justify-between mt-4">
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                                    </div>
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                                    </div>
                                </div>
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>user name</label>
                                </div>
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                                    <textarea className='bg-gray-100 rounded-md leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' required></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">save changes</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}