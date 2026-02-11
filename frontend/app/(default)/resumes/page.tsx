import { ServerUserApi } from '@/app/api/Server/UserApi';
import { RoleDto } from '@/models/generated.schemas';
import { headers } from 'next/headers';
import ResumeGrid from './_components/ResumeGrid';

const ResumesList = async () => {
    const cookieHeader = (await headers()).get('cookie') || '';
    const resumes = await ServerUserApi.getResumes(cookieHeader);

    if (!resumes || resumes.length === 0) {
        return (
            <div className="text-zinc-500 italic text-left p-10 uppercase tracking-[0.3em]">
                No_Data_Detected
            </div>
        );
    }

    console.log(resumes)

    return (

        <div className="w-full flex flex-row gap-8 items-start">

            {/* ЛЕВАЯ КОЛОНКА (Резюме) - Теперь она БОЛЬШЕ */}
            <div className="w-[70%] flex flex-col gap-6 min-w-0">
                <h2 className="text-zinc-500 font-black italic tracking-widest uppercase text-[10px]">
                    Data_Stream
                </h2>
                <div className="w-full">
                    <ResumeGrid resumes={resumes} />
                </div>
            </div>

            {/* ПРАВАЯ КОЛОНКА (Фильтры) - Теперь она МЕНЬШЕ + Sticky */}
            <aside className="w-[30%] sticky top-0 self-start min-w-0">
                <div className="bg-[#111] border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl">
                    <h1 className="text-5xl font-black italic text-white uppercase tracking-tighter mb-8 leading-none">
                        Filters
                    </h1>
                    <div className="h-[400px] bg-black/40 border border-white/5 rounded-2xl shadow-inner">
                        {/* Контент фильтров */}
                    </div>

                    <button className="w-full mt-6 py-4 bg-white text-black font-black uppercase italic text-xs tracking-widest hover:bg-zinc-200 transition-all">
                        Update
                    </button>
                </div>
            </aside>

        </div>



    )
};

export default ResumesList;
