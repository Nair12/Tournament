import React from 'react';

interface Segment {
    mapName: string;
    imgRegular: string;
    winRate: number;
    kdRatio: number;
    matches: number;
    adr: number;
}

const Segments = ({ segments }: { segments: Segment[] }) => {
    if (!segments || segments.length === 0) return null;

    return (
        <div className="max-w-7xl mx-auto px-4 mt-16 mb-24 font-mono">
           
            <div className="flex items-center gap-4 mb-8 opacity-60">
                <div className="h-[2px] w-12 bg-zinc-100" />
                <span className="text-[11px] uppercase tracking-[0.6em] text-zinc-100 font-bold">Tactical_Sectors</span>
            </div>

          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1  border border-zinc-800">
                {segments.map((map, index) => (
                    <div 
                        key={index} 
                        className="group relative h-48 bg-zinc-950 overflow-hidden p-6 flex flex-col justify-between hover:bg-zinc-900 transition-all duration-300"
                    >
                        {/* ФОН КАРТЫ */}
                        <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                            <img 
                                src={map.imgRegular} 
                                alt={map.mapName} 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                        </div>

                        {/* ВЕРХНЯЯ ЧАСТЬ: НАЗВАНИЕ */}
                        <div className="relative z-10">
                            <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1 font-bold">Sector</p>
                            <h3 className="text-3xl font-black italic text-zinc-100 uppercase tracking-tighter group-hover:text-white transition-colors">
                                {map.mapName}
                            </h3>
                        </div>

                        {/* НИЖНЯЯ ЧАСТЬ: СТАТИСТИКА */}
                        <div className="relative z-10 flex justify-between items-end">
                            <div className="space-y-4">
                                <div className="flex flex-col">
                                    <span className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest mb-1">Combat_ADR</span>
                                    <span className="text-xl font-black italic text-zinc-100 leading-none">{map.adr}</span>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex flex-col">
                                        <span className="text-zinc-600 text-[8px] uppercase font-bold">Matches</span>
                                        <span className="text-sm font-black text-zinc-300 italic">{map.matches}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-zinc-600 text-[8px] uppercase font-bold">Win_%</span>
                                        <span className="text-sm font-black text-zinc-300 italic">{map.winRate}%</span>
                                    </div>
                                </div>
                            </div>

                            {/* КРУПНЫЙ KD СПРАВА */}
                            <div className="flex flex-col items-end border-l border-zinc-800 pl-6">
                                <span className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest mb-1">Rating_KD</span>
                                <span className="text-5xl font-black italic text-zinc-100 leading-none tracking-tighter">
                                    {map.kdRatio}
                                </span>
                            </div>
                        </div>

                        {/* ДЕКОРАТИВНЫЙ УГОЛОК */}
                        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-zinc-800 group-hover:border-zinc-500 transition-colors" />
                    </div>
                ))}
            </div>

            {/* ТЕХНИЧЕСКИЙ ФУТЕР */}
            <div className="mt-4 flex justify-between items-center opacity-30">
                <p className="text-[9px] uppercase tracking-[0.4em]">Map_Telemetry_Active</p>
                <div className="h-[1px] flex-1 mx-4 bg-zinc-800" />
                <p className="text-[9px] font-mono italic underline decoration-zinc-700">SYS_AUTH_0x44</p>
            </div>
        </div>
    );
}

export default Segments;
