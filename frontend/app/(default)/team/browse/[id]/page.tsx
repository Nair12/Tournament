import React from 'react';
import { TrophyIcon, UserIcon, ShieldCheckIcon, IdentificationIcon } from '@heroicons/react/24/outline';
import { UserGroupIcon } from '@heroicons/react/24/solid';
import { ServerUserApi } from '@/app/api/Server/UserApi';
import { headers } from 'next/headers';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/select';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger,DropdownMenu } from '@/components/ui/dropdown-menu';
import TeamDropdown from '../../_components/dropdown';


const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const cookieHeader = (await headers()).get('cookie') || '';
    const team = await ServerUserApi.getTeamDetails(id, cookieHeader);

    console.log(team)

    if (!team) {
        return (
            <div className="flex h-[60vh] items-center justify-center">
                <div className="text-center space-y-4">
                    <div className="text-6xl font-black text-white/5 uppercase italic">404_NOT_FOUND</div>
                    <h1 className="text-xl font-bold text-zinc-400 uppercase tracking-widest italic">Team does not exist</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fadeUp space-y-8 p-6">
            {/* HEADER / IDENTITY SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* LEFT: TEAM EMBLEM & NAME */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 via-white/20 to-zinc-800 rounded-3xl blur opacity-20" />
                        {team.canEdit?(    
                          <div className='relative z-10'>    
                          <TeamDropdown/>
                          </div> 
                        ):null}
                        <div className="relative aspect-square bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden flex items-center justify-center p-2">
                        

                            {team.avatar ? (
                                <img
                                    src={`http://localhost:8080/Uploads/teams/${team.avatar}`}
                                    className="w-full h-full object-cover rounded-2xl transition-all duration-700"
                                    alt="Emblem"
                                />
                            ) : (
                                <TrophyIcon className="size-24 text-zinc-900" />
                            )}
                        </div>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[10px] text-zinc-500 uppercase tracking-[0.4em]">Designation</p>
                        <h1 className="text-5xl font-black uppercase italic tracking-tighter text-white">
                            {String(team.name)}
                        </h1>
                        <p className="text-sm text-zinc-500 font-medium italic">{"No mission statement provided."}</p>
                    </div>
                </div>

                {/* RIGHT: ROSTER / PLAYERS */}
                <div className="lg:col-span-8 space-y-6">
                    {team.canEdit ?
                        <div>
                            <Button type='button' className='bg-zinc-700 border  hover:bg-zinc-300 text-lg '>Open vacancy</Button>


                        </div>
                        : null}


                    <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                        <UserGroupIcon className="size-5 text-zinc-500" />
                        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400">Active_Roster</h2>
                        <div className="h-[1px] flex-1 bg-white/5" />
                        <span className="text-[10px] font-mono text-zinc-600">COUNT: {team.players?.length || 0}/5</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* CAPTAIN CARD */}
                        {team.captain && (
                            <div className="relative bg-white/[0.02] border border-white/10 p-5 rounded-2xl overflow-hidden group hover:border-white/20 transition-all">
                                <div className="absolute top-0 right-0 bg-white text-black px-3 py-1 text-[8px] font-black uppercase italic">OWNER</div>
                                <div className="flex items-center gap-4">
                                    <div className="size-14 rounded-xl bg-zinc-900 border border-white/5 overflow-hidden">
                                        <img src={team.captain?.faceitProfile?.avatar || '/placeholder.png'} className="w-full h-full object-cover" />

                                    </div>

                                    <div>
                                        <h3 className="font-black italic uppercase text-white tracking-tight">{team.captain.faceitProfile?.nickname}</h3>

                                    </div>
                                    <div>
                                        <img src={`/FaceitLevel/${team.captain?.faceitProfile?.skillLevel}.png` || 'FaceitLevel/1.png'} alt='level' className='w-10 h-auto' />
                                    </div>
                                </div>
                            </div>
                        )}


                        {team.players?.filter(p => p.faceitProfile?.nickname != team.captain.faceitProfile?.nickname).map((member: any) => (
                            <div key={member.id} className="flex items-center gap-4 bg-zinc-950/50 border border-white/5 p-4 rounded-2xl hover:bg-white/[0.02] transition-all">
                                <div className="size-12 rounded-lg bg-zinc-900 border border-white/5 overflow-hidden opacity-60">
                                    <img src={member.faceitProfile.avatar || '/placeholder.png'} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-tighter">{member.faceitProfile.nickname}</h4>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="h-1 w-12 bg-zinc-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-zinc-500 w-2/3" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FOOTER SPECS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/5 pt-8">
                {[
                    { label: 'Region', val: 'EU_WEST' },
                    { label: 'ELO_AVG', val: '2450' },
                    // { label: 'Founded', val: new Date(team.createdAt).getFullYear() },
                    { label: 'Status', val: 'Verified', color: 'text-green-500' }
                ].map((stat, i) => (
                    <div key={i} className="bg-zinc-950 p-4 border-l border-zinc-800">
                        <p className="text-[8px] text-zinc-600 uppercase tracking-[0.3em] mb-1">{stat.label}</p>
                        <p className={`text-lg font-black italic uppercase tracking-tighter ${stat.color || 'text-zinc-200'}`}>{stat.val}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
