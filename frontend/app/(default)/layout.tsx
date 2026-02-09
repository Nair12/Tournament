'use server';

import { cookies, headers } from 'next/headers';
import { ServerUserApi } from '@/app/api/Server/UserApi';
import Sidebar from './_components/Sidebar';
import { UserStoreContext, UserStoreProvider, useUserStore } from '../_providers/UserProvider';
import Header from './_components/Header';

const DefaultLayout = async ({ children }: { children: React.ReactNode }) => {

    
  
    const cookieHeader = (await headers()).get('cookie') || '';
    console.log('COOKIE HEADER:', cookieHeader);
    const user = await ServerUserApi.getUserData(cookieHeader);
    
   

    return (
        <UserStoreProvider initialUser={user}>
        <div className="flex h-screen w-full bg-[#09090b] text-white overflow-hidden">
            <aside className="hidden md:flex w-72 flex-col border-r border-white/[0.05] bg-zinc-950/50 backdrop-blur-xl">
                <Sidebar />
            </aside>
             
         
            <div className="flex-1 flex flex-col min-w-0">
                <Header/>

                <main className="overflow-y-auto p-8 custom-scrollbar from-zinc-900/20 via-black to-black">
                    {children}
                </main>
            </div>
        </div>
        </UserStoreProvider>
    );
};

export default DefaultLayout;
