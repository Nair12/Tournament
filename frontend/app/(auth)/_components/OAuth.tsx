import Link from 'next/link';
import React from 'react';

const OAuth = () => {
    return (
           <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto mt-6">
                          
                            <Link
                                href={`${process.env.NEXT_PUBLIC_API_URL}/auth/faceit`}
                                className="flex-1 group relative flex items-center justify-center gap-3 p-4 rounded-2xl bg-zinc-900 border border-white/5 hover:border-orange-500/50 transition-all duration-300 shadow-2xl overflow-hidden"
                            >
                                
                                <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <img src="/Faceit.png" alt="Faceit" className="w-6 h-6 object-contain z-10" />
                                <span className="text-white font-bold uppercase tracking-tighter italic z-10">
                                    Faceit
                                </span>
                            </Link>

        
                            <Link
                                href={`${process.env.NEXT_PUBLIC_API_URL}/auth/steam`}
                                className="flex-1 group relative flex items-center justify-center gap-3 p-4 rounded-2xl bg-zinc-900 border border-white/5 hover:border-blue-500/50 transition-all duration-300 shadow-2xl overflow-hidden"
                            >
                               
                                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <img src="/Steam.png" alt="Steam" className="w-6 h-6 object-contain z-10" />
                                <span className="text-white font-bold uppercase tracking-tighter italic z-10">
                                    Steam
                                </span>
                            </Link>
                        </div>
    );
}

export default OAuth;
