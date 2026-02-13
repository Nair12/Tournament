"use client"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import React, { useState } from 'react';
import { languages } from '../create/_components/languages';
import { Slider } from '@/components/ui/slider';
import RolesSelect from './RolesSelect';
import { useRoles } from '@/hooks/useRoles';


const Filter = () => {

    const levels = [1, 2,3, 4, 5, 6, 7, 8, 9, 10]
    const [levelRange, setLevelRange] = useState([1, 10])
    const [type,setType]= useState<string>("Professional")
    const [language,setLanguage] = useState<string>("en")
    const [selectedRoles,setRoles] = useState<string[]>([])

    const {data:roles,isLoading,isError} = useRoles()


    const handleUpdateFilter = ()=>{
        console.log(levelRange)
        console.log(type)
        console.log(language)

    }

    

    return (
        <aside className="w-full md:w-[30%] sticky top-0 self-start min-w-0">
            <div className="bg-[#111] border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl">
                <h1 className="text-5xl font-black italic text-white uppercase tracking-tighter mb-8 leading-none">
                    Filters
                </h1>
                <div className="h-[400px] bg-black/40 border border-white/5 rounded-2xl shadow-inner flex flex-col gap-6">
                    <Select value={type} onValueChange={(val)=>setType(val)}>
                        <SelectTrigger className='w-[180px]'>
                            <SelectValue placeholder="Select Type.." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Resume type</SelectLabel>
                                <SelectItem value='Casual'>Casual</SelectItem>
                                <SelectItem value='Professional'>Professional</SelectItem>
                            </SelectGroup>
                        </SelectContent>

                    </Select>

                    <Select value={language} onValueChange={(val)=>setLanguage(val)}>

                        <SelectTrigger className="">
                            <SelectValue placeholder="Language"/>
                        </SelectTrigger>
                        <SelectContent  className="bg-zinc-950 border-white/10 text-white gap-4" defaultValue={'en'}>
                            {languages.map((item, idx) => {
                                return (

                                    <SelectItem value={item.code} id={String(idx)}>
                                        {item.name}
                                    </SelectItem>

                                )
                            })}
                        </SelectContent>
                    </Select>
                    <h3 className='text-1xl text-center font-black italic text-white uppercase tracking-tighter mb-8 leading-none'>Faceit lvl</h3>

                    <Slider
                        value={levelRange}
                        onValueChange={setLevelRange}
                        min={1}
                        max={10}
                        step={1}
                    />

                    {/* Ряд с метками */}
                    <div className="relative w-full px-2">
                        <div className="flex justify-between w-full">
                            {levels.map((level) => (
                                <div key={level} className="flex flex-col items-center">
                                   
                                    <div className="h-1 w-px bg-slate-300 mb-1" />
                                    <span className="text-[10px] text-muted-foreground ">
                                        {level}
                                    </span>
                                </div>

                            ))}
                        </div>
                    </div>

                        <h3 className='text-1xl text-center font-black italic text-white uppercase tracking-tighter mb-8 leading-none'>Roles</h3>

              {roles?
              <RolesSelect roles={roles?roles:[]} value={selectedRoles} onChange={setRoles}/>:null
              } 



                </div>

                <button onClick={handleUpdateFilter} className="w-full mt-6 py-4 bg-white text-black font-black uppercase italic text-xs tracking-widest hover:bg-zinc-200 transition-all">
                    Update
                </button>
            </div>
        </aside >
    );
}

export default Filter;
