'use client'
import { UserGroupIcon, PlusIcon,MagnifyingGlassIcon,DocumentTextIcon } from '@heroicons/react/24/outline';
import { useUserStore } from '@/app/_providers/UserProvider';
import { Link } from 'lucide-react';
import { DocumentIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

const TeamWidget = () => {

    const team = useUserStore((u) => u.user?.team);
    const router = useRouter()

    return (
        <div
            className="
        relative overflow-hidden rounded-3xl
        border border-white/10
        bg-gradient-to-br from-zinc-900 via-zinc-950 to-black
        p-8
        shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-transform
      "
        >
            {/* HEADER */}
            <div className="flex items-center gap-4 mb-6">
                <UserGroupIcon className="w-8 h-8 text-zinc-300" />
                <h1 className="text-2xl font-bold tracking-tight text-white">
                    {team? "Your Team": "Break into the game"}
                </h1>
            </div>

            {/* CONTENT */}
            {team ? (
                
                <div className="flex items-center gap-6" onClick={()=> router.push(`/team/browse/${team.id}`)}>
                    {/* Avatar */}
                    <div className="relative">
                        <img
                            src={`${process.env.NEXT_PUBLIC_API_URL }/Uploads/teams/${team.avatar}`}
                            alt={String(team.name)}
                            className=" w-20 h-20 rounded-xl object-cover border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]
              "
                        />
                        <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col">
                       
                        <h2 className="text-3xl font-semibold text-white">
                            {String(team.name)}
                        </h2>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-6">
                    <p className="text-zinc-300 text-lg">
                        Post your resume, find an open recruitment, or become the captain of a new team.
                    </p>

                    <div className='flex flex-col lg:flex-row gap-4'>
                        <a href='team/search' className="group flex items-center gap-3 self-start rounded-xl bg-zinc-800/70 px-6 py-3 text-lg font-semibold text-white transition hover:bg-zinc-700/80 hover:scale-[1.03]">
                            <MagnifyingGlassIcon  className="w-5 h-5 text-white" />
                           Find Team
                        </a>
                          <a href='team/create' className="group flex items-center gap-3 self-start rounded-xl bg-zinc-800/70 px-6 py-3 text-lg font-semibold text-white transition hover:bg-zinc-700/80 hover:scale-[1.03]">
                            <DocumentIcon className="w-5 h-5 text-white" />
                            Create Request
                        </a>
                        <a href='team/create' className="group flex items-center gap-3 self-start rounded-xl bg-zinc-800/70 px-6 py-3 text-lg font-semibold text-white transition hover:bg-zinc-700/80 hover:scale-[1.03]">
                            <PlusIcon className="w-5 h-5 text-white" />
                            Create Team
                        </a>
                        

                    </div>

                </div>
            )}
        </div>
    );
};

export default TeamWidget;
