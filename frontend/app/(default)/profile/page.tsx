'use server';
import { ServerUserApi } from '@/app/api/Server/UserApi';
import Hero from './_components/Hero';
import { headers } from 'next/headers';
import Stats from './_components/Stats';
import Segments from './_components/Segments';

export default async function FuturisticProfile() {
   const cookieHeader = (await headers()).get('cookie') || '';
   const stats = await ServerUserApi.getUserStats(cookieHeader);

   console.log(stats)

   if (!stats) return null;

   return (
      <div className="min-h-screen  text-zinc-100 font-mono selection:bg-zinc-100 selection:text-black">
         <Hero />
         <Stats stats={stats}/>
         <Segments segments={stats.segmentStats}/>


      </div>
      )
}




