"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
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
import Link from "next/link"
import OAuth from "../_components/OAuth"
import { PhotoIcon } from "@heroicons/react/24/solid"
import { useRegister } from "@/hooks/useRegister"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  email: z
    .string()
    .includes("@", "Enter a valid email")
  ,
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(300, "Password must be at most 300 characters."),

  avatar: z.any().optional(),




})

const Register = () => {

  const {mutateAsync:register,isPending,isError,error,isSuccess} = useRegister(); 
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      avatar: null,
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    if (data.avatar) formData.append("avatar", data.avatar);
    await register(formData);

    if(isSuccess){
        router.push('/login');
        
    }
    form.reset();

    toast.success("Registration sent", {
      description: data.email,
    })
  }

  return (
    <Card className="w-full max-w-xl mx-auto bg-zinc-900 text-white border border-zinc-800 shadow-xl fadeUp">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-2xl font-semibold">
          Sign up to Team Forge
        </CardTitle>

      </CardHeader>

      <CardContent className="px-8 pb-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-200">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-zinc-800 border-zinc-700 focus-visible:ring-zinc-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-200">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      className="bg-zinc-800 border-zinc-700 focus-visible:ring-zinc-500 resize-none"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="avatar"
              render={({ field:{onChange,value, ...fieldProps} }) => (
                <FormItem>
                  
                  <FormControl>
                    <FormItem>
                      <FormLabel className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold">Avatar</FormLabel>
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
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <OAuth />
            <CardFooter>
              <CardDescription>Have an account? <Link href={"/login"}>Login.</Link></CardDescription>
            </CardFooter>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                Sign Up
              </Button>

              <Button
                type="button"
                variant="outline"
                className="flex-1 border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
            </div>

          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default Register
