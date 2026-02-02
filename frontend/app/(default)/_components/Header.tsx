'use client'
import { useUserStore } from '@/app/_providers/UserProvider';
import React from 'react';
import DropDown from './DropDown';

const Header = () => {
    
    const user = useUserStore((s)=>s.user?.faceitProfile)

    return (
        <header className="h-16 border-b border-white/[0.05] flex items-center px-8 bg-zinc-950/30 backdrop-blur-md">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-zinc-500">
                <span className="hover:text-white cursor-pointer transition-colors">Main</span>
                <span>/</span>
                <span className="text-white italic font-bold">Dashboard</span>
            </div>
            <div className='ml-auto'>
               <DropDown/>

            </div>
        </header>
    );
}

export default Header;
