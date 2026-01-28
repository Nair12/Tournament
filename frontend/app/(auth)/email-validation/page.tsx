"use client"


import React, { useState } from 'react';

import { toast } from 'sonner';

import Link from "next/link"
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';





const EmailValidation = () => {

    const [value, setValue] = useState("")


    function onSubmit(code: string) {
        toast.success("Login sent", {
            description: code
        })
    }


    return (
        <div className="bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-10 flex flex-col items-center gap-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-md w-full fadeUp">
            {/* Заголовок с агрессивным стилем */}
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                    Verify Email
                </h2>
                <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em]">
                    Security Check Required
                </p>
            </div>

            <InputOTP
                maxLength={6}
                value={value}
                onComplete={onSubmit}
                onChange={setValue}
                // Включаем встроенную анимацию появления курсора
                containerClassName="group flex items-center justify-center"
            >
                <InputOTPGroup className="gap-3">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                        <InputOTPSlot
                            key={index}
                            index={index}
                            className="size-12 md:size-14 text-xl font-mono font-bold border-white/10 bg-black/40 text-white rounded-xl transition-all duration-300 ring-offset-zinc-900 focus-within:ring-2 focus-within:ring-white/30 focus-within:border-white/50 group-hover:border-white/20"
                        />
                    ))}
                </InputOTPGroup>
            </InputOTP>

            {/* Футер карточки с таймером или подсказкой */}
            <div className="flex flex-col items-center gap-4 w-full">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <button
                    onClick={() => {/* логика ресенда */ }}
                    className="text-[11px] text-zinc-400 uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
                >
                    Didn't receive code? <span className="text-zinc-200 underline underline-offset-4">Resend</span>
                </button>
            </div>
        </div>

    );
}




export default EmailValidation;
