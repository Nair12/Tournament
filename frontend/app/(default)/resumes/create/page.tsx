'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { RocketLaunchIcon, CpuChipIcon, BoltIcon } from '@heroicons/react/24/outline'
import { languages } from './_components/languages'
import { ROLES } from './_components/roles'
import { useRoles } from '@/hooks/useRoles'
import { ResumeRegisterRequest, ResumeRegisterRequestType } from '@/models/generated.schemas'
import { useResumeRegister } from '@/hooks/useResumeRegister'

const formSchema = z.object({
  bio: z.string().min(10, "Bio is too short").max(500),
  type: z.enum(["Casual", "Professional"]),
  language: z.string().min(1, "Please select language"),
  roles: z.array(z.string()).min(1, "Select at least one role"),
})



const RegisterResumePage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bio: "",
      type: "Casual",
      language: "",
      roles: [],
    },
  })

  const {mutateAsync:submitResume,isPending,isSuccess} = useResumeRegister()

  async function onSubmit(values: z.infer<typeof formSchema>) {
     
      const payload = {
          description:values.bio,
          language:values.language,
          type: values.type as any, // Should be refactor later (dont forget!!!)
          roles: values.roles,

      }
      console.log("Submit started with: " + payload)
      await submitResume(payload)
      form.reset()
  }

  const toggleRole = (roleId: string) => {
    const currentRoles = form.getValues("roles")
    const newRoles = currentRoles.includes(roleId)
      ? currentRoles.filter((r) => r !== roleId)
      : [...currentRoles, roleId]
    form.setValue("roles", newRoles, { shouldValidate: true })
  }
  const {data:roles,isLoading,isError} = useRoles()
  
   
  if(isLoading) return <div>Loading</div>
  
  

  


  return (
    <div className="min-h-screen flex items-center justify-center p-6 py-20">
      {/* Увеличил max-w до 4xl (было 2xl) и добавил массивные отступы p-20 */}
      <div className="w-full max-w-4xl bg-zinc-950 border border-white/5 rounded-[3rem] p-10 md:p-20 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative overflow-hidden">

        {/* Декор фона - увеличен */}
        <div className="absolute -top-20 -right-20 opacity-[0.03] pointer-events-none">
          <RocketLaunchIcon className="size-96 text-white" />
        </div>

        <div className="mb-16 relative z-10 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CpuChipIcon className="size-5 text-zinc-700" />
              <span className="text-[10px] text-zinc-600 uppercase tracking-[0.7em] font-mono">System_Dossier_Initialization_v4.0</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-white leading-none">
              FORGE <span className="text-zinc-800">UNIT</span>
            </h1>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-[10px] text-zinc-700 uppercase font-mono">Node: Central_Core</p>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16 relative z-10">

            {/* 1. BIO - Стал намного шире */}
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center mb-6">
                    <FormLabel className="text-[11px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Subject_Background_Summary</FormLabel>
                    <span className="text-[9px] font-mono text-zinc-800 tracking-widest uppercase">Input_Required</span>
                  </div>
                  <FormControl>
                    <Textarea
                      placeholder="Specify tactical experience, rank history and goals..."
                      className="bg-zinc-900/20 border-white/5 min-h-[220px] rounded-[2rem] focus-visible:ring-zinc-700 italic text-white placeholder:text-zinc-900 p-8 text-base leading-relaxed transition-all hover:bg-zinc-900/40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs italic text-red-900" />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* 2. TYPE */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[11px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-6 block">Protocol_Type</FormLabel>
                    <FormControl>
                      <div className="flex p-1.5 bg-zinc-900/50 border border-white/5 rounded-2xl w-full">
                        {["Casual", "Professional"].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => field.onChange(t)}
                            className={`flex-1 py-4 rounded-xl text-[10px] font-black uppercase italic transition-all duration-300 ${field.value === t
                                ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.1)] scale-[1.02]'
                                : 'text-zinc-700 hover:text-zinc-500'
                              }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* 3. LANGUAGE */}
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
            </div>

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

            <div className="pt-10">
              <div className="flex items-center gap-4 mb-12 opacity-20">
                <Separator className="bg-white flex-1" />
                <BoltIcon className="size-4 text-white" />
                <Separator className="bg-white flex-1" />
              </div>

              <Button
                type="submit"
                className="w-full h-24 bg-white text-black hover:bg-zinc-200 font-black uppercase italic tracking-[0.8em] text-sm transition-all active:scale-[0.98] rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] group"
              >
                Deploy_Resume
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default RegisterResumePage
