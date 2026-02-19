'use client'
import { languages } from '@/app/(default)/resumes/create/_components/languages';
import { Badge } from '@/components/ui/badge';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useRoles } from '@/hooks/useRoles';
import { zodResolver } from '@hookform/resolvers/zod';
import { handleBuildComplete } from 'next/dist/build/adapter/build-complete';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';


const formSchema = z.object({
    desc: z.string().min(10, "Bio is too short").max(500),
    type: z.enum(["Casual", "Professional"]),
    language: z.string().min(1, "Please select language"),
    roles: z.array(z.string()).min(1, "Select at least one role"),
})




const Page = () => {
    const {data:roles} = useRoles()

    const [selectedRoles,setRoles] = useState<string[]>([])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            desc: "",
            type: "Casual",
            language: "",
            roles: [],
        },
    })
    const onSubmit = async () => {
    



    }

    const toggleRole = (id:string)=>{
        const currentRoles = form.getValues("roles")
           currentRoles.find((i)=> i == id) ? currentRoles.filter((i)=> i !== id)
           : currentRoles.push(id)
    }




    return (
      
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='desc'
                        render={({ field }) => (
                            <FormItem>
                                <div>
                                    <span>Input_required</span>


                                </div>
                                <FormControl>
                                    <Textarea
                                    placeholder='describe your vacancy and requirements'
                                    {...field}
                                    />                         
                                </FormControl>
                                    <FormMessage className='text-sxs italic text-red-900'/>
                            </FormItem>

                        )}
                    />
                     <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[11px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-6 block">Communication_Link</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-zinc-900/30 border-white/5 h-16 rounded-2xl focus:ring-zinc-700 text-white font-bold uppercase italic text-[11px] tracking-[0.2em] px-6">
                          <SelectValue placeholder="Access_Language" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-zinc-950 border-white/10 text-white gap-4" defaultValue={'en'}>
                        {languages.map((item, idx) => {
                          return (

                            <SelectItem value={item.code} id={String(idx)}>

                              {item.name}


                            </SelectItem>

                          )
                        })}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            

            {/* 4. ROLES */}
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[11px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-8 block">Combat_Specialization_Array</FormLabel>
                  <div className="flex flex-wrap gap-4">
                    {roles ? roles.map((role) => (
                      <Badge
                        key={role.id}
                        variant="outline"
                        className={`cursor-pointer px-8 py-3.5 uppercase text-[11px] font-black transition-all rounded-2xl border-white/5 ${field.value.includes(role.id)
                            ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                            : 'bg-transparent text-zinc-700 hover:border-white/20 hover:text-zinc-400'
                          }`}
                        onClick={() => toggleRole(role.id)}
                      >
                        {role.name}
                      </Badge>
                    )): null}
                  </div>
                </FormItem>
              )}
            />
                         
                </form>

            </Form>


       
    );
}

export default Page;
