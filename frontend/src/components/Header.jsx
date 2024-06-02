// Header.jsx
"use client";

import React from 'react';
import Link from 'next/link'; // Assuming you are using Next.js Link component
import Button from './ui/button';
import Dice2Icon from "./ui/Dice2Icon";
import Rotate3dIcon from "./ui/Rotate3dIcon";
import MenuIcon from "./ui/MenuIcon"; // Update this path to your Button component

const Header = () => {
    return (
        <header className="bg-white shadow-sm px-4 md:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Link href="#" className="text-2xl font-bold text-blue-500" prefetch={false}>
                    Dream Weaver
                </Link>
                <nav className="hidden md:flex items-center gap-4">
                    <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                        Home
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                        Gallery
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                        Contact
                    </Link>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                {/*<Button variant="outline" className="hidden md:inline-flex" onClick={() => {
                    console.log('1')
                }}>
                    <Dice2Icon className="w-6 h-6 mr-2"/>
                    2D Design
                </Button>
                <Button variant="outline" className="hidden md:inline-flex" onClick={() => {
                    console.log('1')
                }}>
                <Rotate3dIcon className="w-6 h-6 mr-2" onClick={() => {
                    console.log('1')
                }}/>
                    3D Design
                </Button>*/}
                <Button size="lg" className="hidden md:inline-flex">
                    Start Designing
                </Button>
                <Button variant="ghost" size="icon" className="md:hidden" onClick={ ()=>{console.log('1')}}>
                    <MenuIcon className="w-6 h-6"/>
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </div>
        </header>
    );
};

export default Header;
