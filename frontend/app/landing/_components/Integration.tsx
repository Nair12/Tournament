import React from 'react';

const Integration = () => {
    return (
        <section className=' flex flex-col items-center mb-24 text-center gap-4'>
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent tracking-tighter uppercase italic">
                Faceit and Steam Integration
            </h2>


            <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed tracking-[0.15em] uppercase font-light opacity-80">
                Tight integration with Faceit and Steam allows you to receive the most up-to-date data
            </p>

            <div className='flex flex-col md:flex-row gap-6 items-between'>
                <img src="Faceit.png" className='w-60 h-60' />
                <img src="Steam.png" className='w-60 h-60' />



            </div>


        </section>


    );
}

export default Integration;
