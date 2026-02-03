"use client"

import React from 'react';
import { nav } from "./nav";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUserStore } from '@/app/_providers/UserProvider';

const  Sidebar = () => {
    const pathname = usePathname();

   
    const userFromStore = useUserStore((u)=>u.user)

   
    return (
        <div className="flex flex-col h-full py-6">   
            <div className="px-8 mb-12">
                <div className="flex items-center gap-3 group cursor-pointer">         
                         <img src='/favicon.png' className=' size-45 object-contain'/>      
                </div>
            </div>

        
            <nav className="flex-1 px-4 space-y-1.5">
                {nav.map((item, idx) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.url;

                    return (
                        <Link 
                            key={idx} 
                            href={`${item.url}`} 
                            className={`
                                group relative flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-500
                                ${isActive 
                                    ? 'bg-white/[0.03] shadow-[inset_0_0_20px_rgba(255,255,255,0.01)] border border-white/10' 
                                    : 'hover:bg-white/[0.02] border border-transparent'}
                            `}
                        >
                            
                            {isActive && (
                                <div className="absolute left-0 w-[2px] h-6 bg-white shadow-[0_0_15px_#fff] rounded-r-full" />
                            )}

                            <div className={`
                                transition-all duration-500
                                ${isActive ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-zinc-600 group-hover:text-zinc-300'}
                            `}>
                                {Icon && <Icon className="size-5" />}
                            </div>

                            <span className={`
                                text-[11px] font-bold uppercase tracking-[0.2em] italic transition-all duration-500
                                ${isActive ? 'text-white' : 'text-zinc-200 group-hover:text-zinc-300'}
                            `}>
                                {item.title}
                            </span>
                        </Link>
                    );
                })}
            </nav>

          
        </div>
    );
}
export default Sidebar
