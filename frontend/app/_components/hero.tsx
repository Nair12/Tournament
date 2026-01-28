import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {

   

    return (
        <div>
            <section className="relative w-screen max-w-full h-[90vh] flex z-10 items-center justify-center overflow-hidden">

                <div className="text-center m-12 rounded-xl z-10 relative">
                 
                    <h1 className="text-6xl md:text-7xl font-black text-white mb-2 tracking-tighter uppercase italic bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                        Team Forge
                    </h1>

            
                    <p className="text-white text-sm md:text-lg uppercase tracking-[0.3em] font-light mb-8">
                        Build your squad <span className="text-white mx-2">•</span> Conquer the arena
                    </p>

                    <div className='flex flex-wrap gap-6 justify-center m-4'>
                      
                       

                        <Link href="/login" className="group relative px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest rounded-full overflow-hidden border border-white/10 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                         <span className="relative z-10">Get Started</span>
                        </Link>

                       
                        <button className="px-8 py-4 bg-zinc-900 text-gray-300 text-sm font-bold uppercase tracking-widest rounded-full border border-zinc-800 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg">
                            Find Team
                        </button>
                    </div>
                </div>

                <Image
                    src="/Hero.gif"
                    alt="Background"
                    fill
                    unoptimized
                    priority
                    className="object-cover -z-10 blur-sm"
                />


            </section>
        </div>
    );
}

export default Hero;
