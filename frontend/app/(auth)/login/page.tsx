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
import { UseLogin } from "@/hooks/useLogin"
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
})

const Login = () => {
    const { mutateAsync: login, isPending, isError, isSuccess } = UseLogin()

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        await login({ email: data.email, password: data.password })

        router.replace("/dashboard")

    }

    return (
        <Card className="w-full max-w-xl mx-auto bg-zinc-900 text-white border border-zinc-800 shadow-xl fadeUp">
            <CardHeader className="space-y-2 text-center">
                <CardTitle className="text-2xl font-semibold">
                    Sign in to Team Forge
                </CardTitle>

            </CardHeader>

            <CardContent className="px-8 pb-8">
                {isError ? <h4 className="text-red-400 p-8 bg-red text-center">Login failed check email or password</h4> : null}
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
                        <OAuth />
                        <CardFooter>
                            <CardDescription>Don't have an account? <Link href={"/register"}>Register.</Link></CardDescription>
                        </CardFooter>


                        <div className="flex gap-4 pt-4">
                            <Button type="submit" className="flex-1">
                                {isPending ? "Submitting" : "Submit"}
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
