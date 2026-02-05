
import { useUserStore } from '@/app/_providers/UserProvider';
import { DropdownMenuItem, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';

import React from 'react';

const DropDown = () => {
    const user = useUserStore((u) => u.user?.faceitProfile)
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <div className="flex items-center gap-2 p-2 hover:bg-zinc-900 rounded-lg transition-colors">
                    <div className="w-13 h-auto rounded-full bg-zinc-800" >
                    <img src={user?.avatar} className='rounded-full' />
                    </div>

                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-65 bg-zinc-950 border-white/[0.05] text-white">
                <DropdownMenuLabel>{user?.nickname}</DropdownMenuLabel>
    
                <DropdownMenuSeparator className="bg-white/[0.05]" />

                <DropdownMenuItem className="cursor-pointer focus:bg-zinc-900 focus:text-white" onClick={ ()=>window.location.href='/profile'}>
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer focus:bg-zinc-900 focus:text-white">
                    Settings
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-white/[0.05]" />

                <DropdownMenuItem className="text-red-500 cursor-pointer focus:bg-red-950 focus:text-red-400">
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default DropDown;
