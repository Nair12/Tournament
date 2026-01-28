import React from 'react';
import { teams } from './teams';
const LeaderBoard = () => {
  
    return (
        <section className='flex flex-col items-center w-full'>
            <div className='mb-16 text-center px-4'>
                <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent tracking-tighter uppercase italic">
                    Leaderboard
                </h2>


                <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed tracking-[0.15em] uppercase font-light opacity-80">
                    Advance your team on the leaderboard by
                    <span className="text-white mx-1">attracting the attention</span>
                    of star players and sponsors
                </p>
                <div className="mt-6 w-12 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto" />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
                    {/* ЛЕВАЯ КОЛОНКА: СПИСОК КОМАНД */}
                    <div className='flex flex-col gap-3'>
                        {teams.map((team, index) => (
                            <div
                                key={team.id}
                                className="group flex items-center justify-between p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all duration-300 hover:translate-x-2"
                            >
                                <div className='flex items-center gap-4'>
                                    {/* Номер места */}
                                    <span className={`text-xl font-black italic w-8 ${index === 0 ? "text-yellow-500" :
                                            index === 1 ? "text-gray-400" :
                                                index === 2 ? "text-orange-600" : "text-zinc-700"
                                        }`}>
                                        {index + 1}
                                    </span>

                                    {/* Аватар команды */}
                                    <img
                                        className='w-12 h-12 rounded-lg object-cover border border-white/10'
                                        src={`/${team.avatar}`}
                                        alt={team.name}
                                    />

                                    {/* Название */}
                                    <h3 className="text-white font-bold tracking-wider uppercase italic group-hover:text-indigo-400 transition-colors">
                                        {team.name}
                                    </h3>
                                </div>

                                {/* Статистика справа */}
                                <div className='text-right'>
                                    <p className='text-xs text-zinc-500 uppercase font-bold tracking-widest'>Score</p>
                                    <p className='text-lg font-mono text-white'>{team.score}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ПРАВАЯ КОЛОНКА: ЛОГОТИП */}
                    <div className='sticky top-24 flex flex-col items-center justify-center p-8 bg-zinc-900/30 rounded-3xl border border-white/5 backdrop-blur-sm'>
                        <div className='relative'>
                            {/* Декоративное свечение за логотипом */}
                            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full" />

                            <img
                                className='relative w-full max-w-sm drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-pulse'
                                src="/LeaderBoard/Leaderboardlogo.png"
                                alt="Leaderboard Main Logo"
                            />
                        </div>

                        <div className='mt-8 text-center'>
                            <h4 className='text-white font-black uppercase italic text-2xl tracking-tighter'>Season 2026</h4>
                            <p className='text-zinc-500 text-sm tracking-widest uppercase mt-2'>The battle for dominance continues</p>
                        </div>
                    </div>
                </div>



            </div>

        </section>


    );
}

export default LeaderBoard;
