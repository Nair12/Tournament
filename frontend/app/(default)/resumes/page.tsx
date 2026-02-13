import { ServerUserApi } from '@/app/api/Server/UserApi';
import { RoleDto } from '@/models/generated.schemas';
import { headers } from 'next/headers';
import ResumeGrid from './_components/ResumeGrid';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { languages } from './create/_components/languages';
import { Slider } from '@/components/ui/slider';
import Filter from './_components/Filter';

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
        <div className="w-full flex flex-col-reverse md:flex-row gap-8 items-start">

            {/* Грид: на мобилке w-full ОБЯЗАТЕЛЬНО */}
            <div className="w-full md:w-[70%] flex flex-col gap-6 min-w-0">
                <h2 className="text-zinc-500 font-black italic tracking-widest uppercase text-[10px]">
                    Data_Stream
                </h2>
                <ResumeGrid resumes={resumes} />
            </div>

            {/* Фильтр: на мобилке w-full */}
            <Filter />
        </div>


    )
};

export default ResumesList;
