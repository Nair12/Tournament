import { ChevronRightIcon, SparklesIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Premium = () => {
    return (
        <div className="space-y-8">
          
            <div className="relative group overflow-hidden rounded-3xl p-[1px] bg-gradient-to-r from-zinc-700 via-white/50 to-zinc-700 shadow-xl transition-all duration-500 hover:scale-[1.01]">
                
                <div className="relative bg-zinc-950 rounded-[23px] px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">

                  
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                    <div className="flex items-center gap-6 z-10">
                    
                        <div className="flex items-center justify-center size-14 rounded-2xl bg-white shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            <SparklesIcon className="size-8 text-black" />
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">
                                More <span className='text-zinc-500'>scouting </span> power. More team <span className='text-zinc-500'>opportunities</span>.
                            </h3>
                            <p className="text-zinc-400 text-xs uppercase tracking-widest leading-relaxed">
                              Upgrade to TeamForge Premium and take team discovery to the next level.
                            </p>
                        </div>
                    </div>

                  
                    <button className="relative z-10 px-8 py-3 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-zinc-200 transition-colors flex items-center gap-2 group/btn">
                        Upgrade Now
                        <ChevronRightIcon className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                  

                   
                </div>
            </div>
            </div>
            );
}

 export default Premium;
