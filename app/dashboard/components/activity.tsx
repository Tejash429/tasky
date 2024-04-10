'use client';

import { Avatar } from "@nextui-org/react";
// import { User } from "@supabase/auth-helpers-nextjs";
import { User } from "lucide-react";

export default function Activity() {
    return (
        <main className="flex gap-x-unit-9xl">
            <div>
                <div className="flex gap-unit-9xl">
                    <div>
                        <h2>Activity</h2>
                        {/* <p className="">Unsubscribe</p> */}
                    </div>
                    <div tabIndex={0} role='button' className='avatar mt-1'>
                        <User size={18} className='cursor-pointer' />
                    </div>
                </div>
                <div className="flex mt-5">
                    <div className="">
                        {/* Add the user Icon, priority and other icon */}
                    </div>
                    <div className=" gap-5 font-thin">
                        <span>
                            <b>Patel168 </b>
                            Created the issue
                            <span >
                                <span className="inline-block text-center font-bold w-3 pl-1">·</span>
                                <div className="inline-block ml-3">
                                    <a href="#" aria-label="">4 Weeks ago</a>
                                </div>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </main >
    );
}
