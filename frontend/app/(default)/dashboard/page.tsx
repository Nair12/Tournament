import React from 'react';
import Premium from '../_components/Premium';
import TeamWidget from '../_components/TeamWidget';
import TopRankingWidget from '../_components/TopRankingWidget';

const Page = () => {
    return (
        <div className='flex gap-4 flex-col'>
            <Premium />
            {/* <div>
                <h1 className="text-lg md:text-3xl font-black text-white mb-2 tracking-tighter uppercase italic bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                    Last News
                </h1>
              
            </div> */}
              <TeamWidget/>
              <TopRankingWidget/>

        </div>
    );
}

export default Page;
