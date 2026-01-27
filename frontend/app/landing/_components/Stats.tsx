import React from 'react';
import { players } from './players';

const Stats = () => {
    const displayPlayers = [...players, ...players];

    return (
        <section className='flex flex-col items-center py-20  overflow-hidden'> 
            {/* Текстовый блок */}
            <div className='mb-16 text-center px-4 max-w-4xl'>
                <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent tracking-tighter uppercase italic">
                    Deep profile analysis
                </h2>
                <p className="mx-auto text-gray-400 text-sm md:text-base leading-relaxed tracking-[0.15em] uppercase font-light opacity-80">
                    Get access to detailed analytics for each player: favorite roles, win rates on specific maps, average K/D, and activity hours.
                   <br/> <span className='text-white mx-1'>Scouting has never been so accurate.</span>
                </p>
                <div className="mt-6 w-12 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto" />
            </div>

         
            <div className="relative w-full overflow-hidden flex items-center">
                
            
                <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

                <div className="flex animate-marquee  py-10">
                    {displayPlayers.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-64 mx-4 group relative p-[1px] rounded-2xl bg-gradient-to-b from-gray-500 to-transparent"
                        >
                            
                            <div className="bg-zinc-900 rounded-2xl p-6 flex flex-col items-center border border-white/5 shadow-2xl">
                                {/* Аватар, имя, статы */}
                                <div className="relative mb-4">
                                    <img src={`/${item.avatar}`} alt={item.name} className="w-20 h-20 rounded-full object-cover border-2 border-zinc-800" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-4 italic tracking-wider">{item.name}</h3>
                            
                                <div className="grid grid-cols-3 gap-4 w-full border-t border-white/10 pt-4 text-center">
                                    <div><p className="text-[10px] text-gray-500 uppercase">K/D</p><p className="text-white">{item.kd}</p></div>
                                    <div className="border-x border-white/10"><p className="text-[10px] text-gray-500 uppercase">Win%</p><p className="text-white">{item.winRate}</p></div>
                                    <div><p className="text-[10px] text-gray-500 uppercase">Elo</p><p className="text-indigo-400">{item.elo}</p></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Stats;
