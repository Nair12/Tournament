import React from 'react';
import Image from "next/image";
import Hero from './_components/hero';
import Features from './_components/features';
import Stats from './_components/Stats';
import LeaderBoard from './_components/LeaderBoard';
import DreamTeam from './_components/DreamTeam';
import Integration from './_components/Integration';

const Landing = () => {
    return (
        <div>
            <Hero/>
            <Features/>
            <Stats/>
             <Integration />
            <LeaderBoard/>
            <DreamTeam/>
        </div>
    );
}

export default Landing;
