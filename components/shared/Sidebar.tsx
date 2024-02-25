'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { SignedIn } from '@clerk/nextjs';
import { SignedOut } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';

import { navLinks } from '../../constants/index';
import { Button } from '../ui/button';


const Sidebar = () => {
    const pathname = usePathname();

    return ( 
        <aside className='sidebar'>
            <div className='flex size-full flex-col gap-4'>
                <Link href='/' className=''>
                    <Image 
                        src='/assets/images/logo-text.svg'
                        alt='logo'
                        width={100}
                        height={28}
                    />
                </Link>

                <nav className='sidebar-nav'>
                    <SignedIn>
                        <ul className='sidebar-nav_elements'>
                            { navLinks.slice(0, 6).map((link) => {
                                const isActive = link.route === pathname

                                return (
                                    <li 
                                        key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}
                                    >
                                        <Link href={link.route} className='sidebar-link'>
                                            <Image 
                                                src={link.icon}
                                                alt='logo'
                                                width={24}
                                                height={24}
                                                className={`${isActive && 'brightness-200'}`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}

                            </ul>

                            <ul className='sidebar-nav_elements'>

                                { navLinks.slice(6).map((link) => {
                                    const isActive = link.route === pathname

                                    return (
                                        <li 
                                            key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}
                                        >
                                            <Link href={link.route} className='sidebar-link'>
                                                <Image 
                                                    src={link.icon}
                                                    alt='logo'
                                                    width={24}
                                                    height={24}
                                                    className={`${isActive && 'brightness-200'}`}
                                                />
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })}




                                <li className='flex-center cursor-pointer gap-2 p-4'>
                                    <UserButton afterSignOutUrl='/' showName />
                                </li>
                            </ul>
                    </SignedIn>

                    <SignedOut>
                        <Button asChild className='button bg-purple-gradient bg-cover'>
                            <Link href='/sign-in'>
                                Login
                            </Link>
                        </Button>
                    </SignedOut>
                </nav>
            </div>
        </aside>
     );
}
 
export default Sidebar;