'use client';
import { useUserStore } from '@/app/_providers/UserProvider';
import { Link, TrophyIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function FuturisticProfile() {


    const player = useUserStore((state) => state.user);
    const router = useRouter()

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

                             
                            </div>
                        </div>

                        {/* DECORATIVE CORNER */}
                        <div className="absolute top-0 right-0 p-2 opacity-20">
                            <div className="w-10 h-10 border-t-2 border-r-2 border-zinc-100" />
                        </div>
                    </div>

                    <aside className="lg:col-span-4 self-start">
                        <div className="bg-zinc-950 border border-zinc-800 p-4 space-y-6">
                            {/* Header */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-zinc-500 text-[9px] uppercase tracking-widest">
                                        Team
                                    </p>
                                    <h2 className="text-lg font-bold uppercase">
                                        {String(player.team?.name) ?? 'No Team'}
                                    </h2>
                                </div>
                                <span className="text-[9px] bg-zinc-800 px-2 py-0.5 uppercase">
                                    ID {player.team?.id?.toString().slice(0, 4) || '000'}
                                </span>
                            </div>

                            {/* Logo */}
                            <div className="flex justify-center">
                                <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden">
                                    {player.team?.avatar ? (
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_API_URL}/Uploads/teams/${player.team.avatar}`}
                                            alt="Team"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-zinc-600 text-xs">
                                            NO LOGO
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Meta */}
                            <div className="grid grid-cols-2 gap-2 text-[10px]">
                                <div className="bg-zinc-900/50 p-2 border border-zinc-800/50">
                                    <p className="text-zinc-500 uppercase">Members</p>
                                    <p className="font-bold">{player?.team?.players?.length}</p>
                                </div>
                                <div className="bg-zinc-900/50 p-2 border border-zinc-800/50 text-right">
                                    <p className="text-zinc-500 uppercase">Status</p>
                                    <p className="text-green-500 font-bold">Online</p>
                                </div>
                            </div>

                            {/* Action */}
                            <button onClick={()=> router.push(`team/browse/${player.team.id}`)} className="w-full bg-zinc-800 hover:bg-zinc-600 text-zinc-100 py-2 text-[9px] uppercase tracking-widest transition">
                                View Team
                            </button>
                        </div>
                    </aside>
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
