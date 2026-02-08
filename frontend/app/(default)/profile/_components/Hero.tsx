'use client';
import { useUserStore } from '@/app/_providers/UserProvider';
import { TrophyIcon } from 'lucide-react';

export default function FuturisticProfile() {


    const player = useUserStore((state) => state.user);

    if (!player) {
        return (
            <div className="min-h-screen  flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-zinc-800 border-t-zinc-400 rounded-full animate-spin" />
            </div>
        );
    }


    return (
        <div className=" text-zinc-100 p-4 md:p-10 font-mono tracking-tight ">
          
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-zinc-900/30 blur-[120px] rounded-full -z-10" />

            <div className="max-w-6xl mx-auto space-y-6">

            
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

             
                    <div className="lg:col-span-8 bg-zinc-950 border border-zinc-800/50 relative overflow-hidden group">
                       
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_4px] pointer-events-none" />

                        <div className="p-8 flex flex-col md:flex-row items-center gap-10 relative z-10">
                        
                            <div className="relative">
                                <div className="w-40 h-40 bg-zinc-900 clip-path-polygon border-2 border-zinc-700 p-1 group-hover:border-zinc-400 transition-colors duration-500">
                                    <img
                                        src={player.faceitProfile?.avatar || '/api/placeholder/160/160'}
                                        alt="Avatar"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-zinc-100 text-black px-4 py-0.5 text-[10px] font-black uppercase tracking-[0.2em]">
                                    Validated
                                </div>
                            </div>


                            <div className="flex-1 space-y-4">
                                <div>
                                    <p className="text-zinc-500 text-[10px] uppercase tracking-[0.4em] mb-1">Subject_Name</p>
                                    <h1 className="text-5xl md:text-7xl font-black uppercase italic leading-none truncate">
                                        {player.faceitProfile?.nickname || 'Unknown'}
                                    </h1>
                                </div>
                                <div className="flex flex-wrap items-center gap-8 py-4 border-y border-zinc-800/50">
                                 
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12  flex items-center justify-center overflow-hidden">


                                            <span className="text-2xl font-black text-white relative z-10 italic">
                                                <img src={`FaceitLevel/${player.faceitProfile?.skillLevel}.png`} alt='level' />
                                            </span>
                                        </div>
                                    </div>

                                    {/* ELO BOX */}
                                    <div className="flex flex-col">
                                        <p className="text-zinc-600 text-[9px] uppercase tracking-widest mb-1">Elo</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-black tracking-tighter text-zinc-100">
                                                {player.faceitProfile?.elo}
                                            </span>

                                        </div>
                                    </div>

                                    {/* COUNTRY BOX */}
                                    <div className="flex flex-col border-l border-zinc-800 pl-8">
                                        <p className="text-zinc-600 text-[9px] uppercase tracking-widest mb-1">Region_Origin</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-bold uppercase italic">
                                                <img src={`https://flagcdn.com/w20/${player.faceitProfile?.country}.png`} />
                                            </span>
                                            <span className="w-2 h-2 bg-zinc-700 rounded-full" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-zinc-800/50 border border-zinc-700 px-3 py-1 text-[11px] uppercase">
                                        Rank: Elite
                                    </span>

                                </div>
                            </div>
                        </div>

                        {/* DECORATIVE CORNER */}
                        <div className="absolute top-0 right-0 p-2 opacity-20">
                            <div className="w-10 h-10 border-t-2 border-r-2 border-zinc-100" />
                        </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <div className="relative bg-zinc-950 border border-zinc-800 p-6 overflow-hidden group">
                         
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                     
                            <div className="relative z-10 flex justify-between items-start mb-8">
                                <div>
                                    <p className="text-zinc-500 text-[9px] uppercase tracking-[0.3em]">Affiliation_Unit</p>
                                    <h2 className="text-2xl font-black italic uppercase tracking-tighter mt-1">
                                        {String(player.team?.name) ?? "No_Squad_Detected"}
                                    </h2>
                                </div>
                                <div className="px-2 py-1 bg-zinc-100 text-black text-[9px] font-black uppercase italic">
                                    ID: {player.team?.id?.toString().slice(0, 5) ?? "000"}
                                </div>
                            </div>

                            <div className="relative flex justify-center py-6">
                                <div className="relative group">
                                    <div
                                        className="  w-28 h-28 rounded-full bg-zinc-900 border border-white/1 overflow-hidden transition-shadow group-hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] "
                                    >
                                        {player.team?.avatar ? (
                                            <img
                                                src={`http://localhost:8080/Uploads/teams/${player.team.avatar}`}
                                                alt="Team Emblem"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center w-full h-full">
                                                <TrophyIcon className="w-10 h-10 text-zinc-600" />
                                            </div>
                                        )}
                                    </div>

                                 
                                    <div className="absolute inset-0 rounded-full ring-1 ring-white/5 pointer-events-none" />
                                </div>
                            </div>


                            <div className="relative z-10 mt-8 space-y-3">
                                <div className="flex justify-between items-center text-[10px] border-b border-zinc-800 pb-2">
                                    <span className="text-zinc-500 uppercase tracking-widest">System_Status</span>
                                    <span className="text-green-500 font-bold tracking-tighter">● SYNCHRONIZED</span>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-zinc-900/50 p-2 border border-zinc-800/50">
                                        <p className="text-zinc-600 text-[8px] uppercase">Established</p>
                                        {/* <p className="text-xs font-bold italic">{player.team?.createdAt ? new Date(player.team.createdAt).getFullYear() : '2024'}</p> */}
                                    </div>
                                    <div className="bg-zinc-900/50 p-2 border border-zinc-800/50 text-right">
                                        <p className="text-zinc-600 text-[8px] uppercase">Members</p>
                                        <p className="text-xs font-bold italic">05/05</p>
                                    </div>
                                </div>

                                <button className="w-full bg-zinc-100 hover:bg-white text-black py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:tracking-[0.4em] active:scale-95">
                                    View_Squad_Data
                                </button>
                            </div>

                            {/* Декоративный штрих-код или серийник снизу */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
                                <p className="text-[8px] tracking-[1em] whitespace-nowrap">01101011 01100101 01111001</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* BOTTOM SECTION: SPECS */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Data Module 1 */}
                    <div className="bg-zinc-950 border-l-4 border-zinc-100 p-6 space-y-2 hover:bg-zinc-900 transition-colors">
                        <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Network_Email</p>
                        <p className="text-sm font-bold truncate">{String(player.email)}</p>
                    </div>

                    {/* Data Module 2 */}


                    {/* Data Module 3 (Team Box) */}
                    {/* <div className="bg-zinc-950 border-l-4 border-zinc-800 p-6 space-y-2">
            <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Tactical_Group</p>
            <p className="text-sm font-bold uppercase">{player.team?.tag || 'Lone Wolf'}</p>
          </div> */}

                    {/* Data Module 4 (Sync status) */}
                    <div className="bg-zinc-950 border-l-4 border-zinc-100 p-6 space-y-2 flex flex-col justify-center overflow-hidden relative">
                        <div className="text-[40px] font-black absolute -right-4 -bottom-4 opacity-5 italic text-zinc-100">
                            STATS
                        </div>
                        <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Last_Upload</p>
                        <p className="text-sm font-bold tracking-tighter">
                            {new Date(player.updatedAt).toLocaleTimeString()}
                        </p>
                    </div>
                </div>

                {/* FOOTER DECOR */}
                <div className="flex justify-between items-center pt-10 opacity-20">
                    <div className="h-[1px] flex-1 bg-zinc-800" />
                    <div className="px-4 text-[10px] tracking-[1em] uppercase">Security_Protocol_Active</div>
                    <div className="h-[1px] flex-1 bg-zinc-800" />
                </div>
            </div>

            <style jsx>{`
        .clip-path-polygon {
          clip-path: polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%);
        }
      `}</style>
        </div>
    );
}
