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

const formSchema = z.object({
  email: z
    .string()
    .includes("@","Enter a valid email")
,
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(300, "Password must be at most 300 characters."),
  
  
})

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast.success("Login sent", {
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
            <OAuth/>
            <CardFooter>
               <CardDescription>Have an account? <Link href={"/login"}>Login.</Link></CardDescription>
            </CardFooter>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                Submit report
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

export default Login
