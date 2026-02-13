import { ResumeResponse, RoleDto } from "@/models/generated.schemas";
import { mockResumes } from "./mockResume";

const ResumeGrid = ({ resumes }: { resumes: ResumeResponse[] }) => {

    
    return (
   
        <div className="w-full">
       
            <div className="grid grid-cols-1 gap-6">
                {mockResumes.map((resume, idx) => (
                    <div
                        key={idx}
                     
                        className="w-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700/60 shadow-[0_10px_35px_rgba(0,0,0,0.7)] relative overflow-hidden"
                    >
                        {/* METAL SHINE */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-120%] hover:translate-x-[120%] transition-transform duration-700" />

                        <div className="relative h-full p-4 flex gap-4">
                            {/* AVATAR */}
                            <div className="w-14 h-14 shrink-0 rounded-full overflow-hidden border border-zinc-600">
                                <img
                                    src={resume.player?.faceitProfile?.avatar || 'https://i.pravatar.cc'}
                                    alt="avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                          
                            <div className="flex flex-col flex-1 min-w-0">
                          
                                <div className="flex items-center">
                                    <div className="truncate">
                                        <div className="text-lg font-black uppercase italic truncate">
                                            {resume.player?.faceitProfile?.nickname || 'Unknown'}
                                        </div>
                                        <div className="text-[15px] flex flex-row gap-2 items-center text-zinc-400 uppercase tracking-widest">
                                            <img className="block shrink-0 w-9 h-auto" src={`FaceitLevel/${resume.player.faceitProfile?.skillLevel}.png`} alt={`skill level`} />
                                            {resume.player?.faceitProfile?.elo || 0} ELO
                                            <img src={`https://flagcdn.com/w20/${resume.player.faceitProfile?.country}.png`} />
                                            <span>{String(resume.type)}</span>
                                        </div>
                                    </div>
                                </div>

                          
                                <p className="mt-2 text-zinc-300 text-xs italic line-clamp-2 mb-4 break-all">
                                    {resume.description || 'No description provided'}
                                </p>

                              
                                <div className="mt-auto flex items-center justify-start">
                                    <div className="flex gap-2 flex-wrap">
                                        {resume.roles?.slice(0, 3).map((role, rIdx: number) => (
                                            <span
                                                key={rIdx}
                                                className="px-2 py-0.5 bg-zinc-100 text-black text-[9px] font-black uppercase w-[50px] h-[20px] text-center"
                                            >
                                                {role.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default ResumeGrid;
