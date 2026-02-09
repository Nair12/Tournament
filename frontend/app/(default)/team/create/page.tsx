"use client";
import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TrophyIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { useTeamRegister } from '@/hooks/useTeamRegister';
import { useRouter } from 'next/navigation';

const Page = () => {

    const { mutateAsync: registerTeam, isError, error, isPending, isSuccess } = useTeamRegister();

    const router = useRouter();

    const formSchema = z.object({
        name: z.string().min(2, "Name must be at least 2 characters.").max(20),
        description: z.string().max(100, "Too long").optional(),
        avatar: z.any().refine((file) => file instanceof File, "Select a file")
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", description: "" },
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {

        const formData = new FormData();
        formData.append("name", data.name);
        if (data.description) formData.append("description", data.description);


        formData.append("avatar", data.avatar);
        for (let [key, value] of formData.entries()) {
            console.log('FormData entry:', key, value);
        }

        try {
            await registerTeam(formData);
            form.reset();
            router.push('/dashboard');
        }
        catch (e) {
            console.log(e)
        }



    }

    return (
        <div className="flex items-center justify-center min-h-[80vh] p-6 animate-fadeUp">


            <div className="relative group w-full max-w-lg">
                <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 via-white/20 to-zinc-800 rounded-[32px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                <Card className="relative bg-zinc-950/80 backdrop-blur-xl border-white/5 rounded-[30px] shadow-2xl overflow-hidden">
                    {isError && (
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs uppercase tracking-widest px-4 py-2 rounded-xl z-10">
                            {error.message}
                        </div>
                    )}
                    <CardHeader className="text-center pt-10 pb-6">
                        <div className="mx-auto size-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                            <TrophyIcon className="size-8 text-black" />
                        </div>
                        <CardTitle className="text-4xl font-black italic uppercase tracking-tighter text-white">
                            Forge <span className="text-zinc-500">Squad</span>
                        </CardTitle>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] mt-2">Create your legacy</p>
                    </CardHeader>

                    <CardContent className="px-10 pb-10">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold">Team Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="e.g. ALPHA SENTINELS"
                                                    {...field}
                                                    className="h-12 bg-white/[0.03] border-white/5 focus:border-white/20 rounded-xl text-white placeholder:text-zinc-700 italic font-medium"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500 text-[10px] italic" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold">Motto / Description</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="The strongest wins..."
                                                    {...field}
                                                    className="h-12 bg-white/[0.03] border-white/5 focus:border-white/20 rounded-xl text-white placeholder:text-zinc-700"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="avatar"
                                    render={({ field: { value, onChange, ...fieldProps } }) => (
                                        <FormItem>
                                            <FormLabel className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold">Team Emblem</FormLabel>
                                            <FormControl>
                                                <div>
                                                    <Input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => onChange(e.target.files?.[0])}
                                                        className="hidden"
                                                        id="avatar-upload"
                                                        {...fieldProps}
                                                    />
                                                    <label
                                                        htmlFor="avatar-upload"
                                                        className="flex items-center justify-center gap-3 h-14 bg-white/[0.03] border-2 border-dashed border-white/5 hover:border-white/20 rounded-xl cursor-pointer transition-all group/label"
                                                    >
                                                        <PhotoIcon className="size-5 text-zinc-500 group-hover/label:text-white transition-colors" />
                                                        <span className="text-xs text-zinc-500 group-hover/label:text-white uppercase tracking-tighter">
                                                            {form.watch("avatar")?.name || "Upload PNG / JPG"}
                                                        </span>
                                                    </label>
                                                </div>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <div className="flex flex-col sm:flex-row gap-3 pt-6">
                                    <Button
                                        type="submit"
                                        className="h-12 flex-1 bg-white text-black hover:bg-zinc-200 font-black uppercase italic tracking-widest rounded-xl transition-all active:scale-95"
                                    >
                                        Establish Team
                                    </Button>

                                    <Button
                                        type="button"
                                        variant="ghost"
                                        className="h-12 px-6 text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl uppercase text-[10px] tracking-widest"
                                        onClick={() => form.reset()}
                                    >
                                        Reset
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Page;
