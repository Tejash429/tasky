
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button, Input } from "@nextui-org/react";
import { SearchIcon, UserIcon } from 'lucide-react';



export default function navbar() {
    return (
        <div className="p-6 w-1/5 h-screen bg-slate-800 z-20 fixed top-0 -left-96 lg:w-72 lg:left-0">
            <div className="flex gap-24">
                <p className="text-white cursor-pointer ">User-Name</p>
                <Avatar src="Logo2.svg" size='sm' />
            </div>
            <div className='mt-5 flex gap'>
                <Button variant="bordered" className=''>
                    <img src="issue.svg" />
                    Delete user
                </Button>
                <Button isIconOnly className='bg-transparent'>
                    <SearchIcon />
                </Button>


                
            </div>
        </div>
    )
}