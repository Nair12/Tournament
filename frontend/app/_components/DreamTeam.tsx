import React from 'react';

const DreamTeam = () => {
    return (
        <section className='flex flex-col items-center'>

            <div className='text-center flex items-center flex-col gap-4'>
                <h2 className="text-5xl md:text-6xl font-bold  bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                    Create your Dream Team
                </h2>
                <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed tracking-[0.15em] uppercase font-light opacity-80">
                   Build a team. Achieve results. And remember  — <br/><span className='text-white mx-1'>the strongest wins.</span>
                </p>
            </div>

            <div>
                <img src="dreamTeam.png" className='w-300 h-auto'/>
            </div>



        </section>
    );
}

export default DreamTeam;
