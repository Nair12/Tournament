'use client'

import React from 'react';
import { StarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/solid';

const PremiumPage = () => {
    return (
        <div className="min-h-screen bg-background text-zinc-400 p-6 md:p-20 font-sans">
            {/* HEADER */}
            <div className="max-w-4xl mx-auto mb-16">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
                    TeamForge <span className="text-zinc-700">Premium</span>
                </h1>
                <p className="text-zinc-500 max-w-xl text-sm uppercase tracking-widest font-medium">
                   Become more visible in the transfer market and assemble your ideal squad faster.
                </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* MONTHLY PLAN */}
                <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl flex flex-col justify-between hover:border-zinc-700 transition-colors">
                    <div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white uppercase italic mb-1">Monthly</h3>
                            <p className="text-xs text-zinc-600 uppercase tracking-widest">Flexible access</p>
                        </div>
                        
                        <div className="flex items-baseline gap-2 mb-10 p-4 bg-white/[0.02] rounded-xl">
                            <span className="text-5xl font-black text-white tracking-tighter">$5</span>
                            <span className="text-sm text-zinc-600 uppercase">/ per month</span>
                        </div>

                        <ul className="space-y-4 mb-10">
                            <li className="flex gap-3 text-sm text-zinc-300 leading-tight">
                                <ArrowTrendingUpIcon className="size-5 text-zinc-100 shrink-0" />
                                <span>Get a <span className="text-white font-bold">higher spot</span> on the resume list if you are looking for a team with TeamForge Premium.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-zinc-300 leading-tight">
                                <StarIcon className="size-5 text-zinc-100 shrink-0" />
                                <span>Boost your <span className="text-white font-bold">team vacancy upwards</span> if you are scouting for new players.</span>
                            </li>
                        </ul>
                    </div>

                    <button className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold uppercase text-xs tracking-widest rounded-xl transition-all">
                        Select Monthly
                    </button>
                </div>

                {/* ANNUAL PLAN */}
                <div className="relative bg-zinc-950 border-2 border-white p-8 rounded-2xl flex flex-col justify-between shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                    {/* Badge */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black px-4 py-1 uppercase rounded-full">
                        Best Value
                    </div>

                    <div>
                        <div className="mb-8 flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-white uppercase italic mb-1">Annual</h3>
                                <p className="text-xs text-zinc-600 uppercase tracking-widest">Full Control</p>
                            </div>
                            <span className="bg-white/10 text-white text-[10px] px-2 py-1 rounded font-bold">-16%</span>
                        </div>
                        
                        <div className="flex items-baseline gap-2 mb-10 p-4  rounded-xl ">
                            <span className="text-5xl font-black text-white tracking-tighter">$50</span>
                            <span className="text-sm text-zinc-600 uppercase">/ per year</span>
                        </div>

                        <ul className="space-y-4 mb-10">
                            <li className="flex gap-3 text-sm text-zinc-100 leading-tight">
                                <ArrowTrendingUpIcon className="size-5 text-white shrink-0" />
                                <span>Get a <span className="text-white font-bold underline decoration-zinc-500">higher spot</span> on the resume list if you are looking for a team with TeamForge Premium.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-zinc-100 leading-tight">
                                <StarIcon className="size-5 text-white shrink-0" />
                                <span>Boost your <span className="text-white font-bold underline decoration-zinc-500">team vacancy upwards</span> if you are scouting for new players.</span>
                            </li>
                        </ul>
                    </div>

                    <button className="w-full py-4 bg-white text-black hover:bg-zinc-200 font-black uppercase text-xs tracking-widest rounded-xl transition-all shadow-lg">
                        Pay Yearly
                    </button>
                </div>

            </div>

            {/* FOOTER NOTE */}
            <p className="max-w-4xl mx-auto mt-12 text-center text-[10px] text-zinc-700 uppercase tracking-[0.2em]">
                Secure payment via Stripe. Access activated instantly.
            </p>
        </div>
    );
};

export default PremiumPage;
