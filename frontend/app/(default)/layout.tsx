import  Sidebar  from './_components/Sidebar'
import React from 'react';


const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen w-full bg-[#09090b] text-white overflow-hidden">
            {/* Сайдбар с фиксированной шириной и Blur-эффектом */}
            <aside className="hidden md:flex w-72 flex-col border-r border-white/[0.05] bg-zinc-950/50 backdrop-blur-xl">
                <Sidebar />
            </aside>
            
            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-16 border-b border-white/[0.05] flex items-center px-8 bg-zinc-950/30 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-zinc-500">
                        <span className="hover:text-white cursor-pointer transition-colors">Main</span>
                        <span>/</span>
                        <span className="text-white italic font-bold">Dashboard</span>
                    </div>
                </header>
                
                <main className="overflow-y-auto p-8 custom-scrollbar from-zinc-900/20 via-black to-black">
                    {children}
                </main>
            </div>
        </div>
    );
}
export default DefaultLayout