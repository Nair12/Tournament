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
  FormDescription,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
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
import { RocketLaunchIcon, GlobeAltIcon, IdentificationIcon } from '@heroicons/react/24/outline'

const formSchema = z.object({
  bio: z.string().min(10, "Bio is too short").max(500),
  type: z.enum(["CASUAL", "PROFESSIONAL"]),
  language: z.string().min(1, "Please select language"),
  roles: z.array(z.string()).min(1, "Select at least one role"),
})

const CS2_ROLES = ["AWP", "Entry", "IGL", "Support", "Lurker"]

const RegisterResumePage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bio: "",
      type: "CASUAL",
      language: "",
      roles: [],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Dossier Data:", values)
  }

  const toggleRole = (role: string) => {
    const currentRoles = form.getValues("roles")
    const newRoles = currentRoles.includes(role)
      ? currentRoles.filter((r) => r !== role)
      : [...currentRoles, role]
    form.setValue("roles", newRoles, { shouldValidate: true })
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 animate-fadeUp">
      <div className="w-full max-w-2xl bg-zinc-950 border border-zinc-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Декор фона */}
        <div className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none">
          <RocketLaunchIcon className="size-64 text-white" />
        </div>

        <div className="mb-10">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-zinc-100">
            Dossier <span className="text-zinc-700">Deployment</span>
          </h1>
          <p className="text-[10px] text-zinc-500 uppercase tracking-[0.4em] mt-2 font-mono">Status: Awaiting_Input...</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            
            {/* PROTOCOL TYPE */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Experience_Level</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-2 gap-4">
                      {["CASUAL", "PROFESSIONAL"].map((t) => (
                        <Button
                          key={t}
                          type="button"
                          variant={field.value === t ? "default" : "outline"}
                          className={`h-14 font-black italic tracking-widest uppercase rounded-xl transition-all ${
                            field.value === t ? 'bg-zinc-100 text-black' : 'bg-zinc-900/20 border-zinc-800 text-zinc-600'
                          }`}
                          onClick={() => field.onChange(t)}
                        >
                          {t}
                        </Button>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* BIO */}
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Subject_Biography</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Input your tactical background..." 
                      className="bg-zinc-900/30 border-zinc-800 min-h-[120px] rounded-xl focus-visible:ring-zinc-700 italic" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription className="text-[9px] uppercase font-mono">Max 500 characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* LANGUAGE */}
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Comms_Language</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-zinc-900/30 border-zinc-800 h-12 rounded-xl focus:ring-zinc-700">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-zinc-950 border-zinc-800">
                        <SelectItem value="RU">Russian (RU)</SelectItem>
                        <SelectItem value="EN">English (EN)</SelectItem>
                        <SelectItem value="UA">Ukrainian (UA)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* ROLES */}
              <FormField
                control={form.control}
                name="roles"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Combat_Specialization</FormLabel>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {CS2_ROLES.map((role) => (
                        <Badge
                          key={role}
                          variant="outline"
                          className={`cursor-pointer px-3 py-1 uppercase text-[9px] font-black transition-all ${
                            field.value.includes(role) 
                            ? 'bg-zinc-100 text-black border-white' 
                            : 'bg-transparent text-zinc-600 border-zinc-800 hover:border-zinc-500'
                          }`}
                          onClick={() => toggleRole(role)}
                        >
                          {role}
                        </Badge>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator className="bg-zinc-900" />

            <Button 
              type="submit" 
              className="w-full h-16 bg-zinc-100 text-black hover:bg-white font-black uppercase italic tracking-[0.4em] text-xs transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              Initialize_Contract
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default RegisterResumePage
