import React from 'react';

interface statsProps{
    kdRatio:number,
    winRate:number,
    adr:number,
    avg:number,
    matches:number,

}

const Stats = ({stats}:{stats: statsProps}) => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 mt-12">
                {/* TOP LINE DECOR */}
                <div className="flex items-center gap-4 mb-4 opacity-50">
                    <div className="h-[1px] w-12 bg-zinc-100" />
                    <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-400">Combat_Performance_Metrics</span>
                </div>

                {/* MAIN ROW */}
                <div className="flex flex-col md:flex-row items-stretch bg-zinc-950 border border-zinc-800 divide-y md:divide-y-0 md:divide-x divide-zinc-800">

                    {/* K/D RATIO */}
                    <div className="flex-1 p-8 hover:bg-zinc-900/50 transition-colors">
                        <p className="text-zinc-600 text-[15px] uppercase tracking-[0.3em] mb-3 font-bold">K/D_Ratio</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-black italic tracking-tighter text-zinc-100">{stats.kdRatio}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
                        </div>
                    </div>

                    {/* WIN RATE */}
                    <div className="flex-1 p-8 hover:bg-zinc-900/50 transition-colors">
                        <p className="text-zinc-600 text-[15px] uppercase tracking-[0.3em] mb-3 font-bold">Winrate</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-black italic tracking-tighter text-zinc-100">{stats.winRate}</span>
                            <span className="text-sm font-black text-zinc-600 uppercase italic">%</span>
                        </div>
                    </div>

                    {/* ADR */}
                    <div className="flex-1 p-8 hover:bg-zinc-900/50 transition-colors">
                        <p className="text-zinc-600 text-[15px] uppercase tracking-[0.3em] mb-3 font-bold">Damage_Avg</p>
                        <div className="flex items-baseline">
                            <span className="text-5xl font-black italic tracking-tighter text-zinc-100">{stats.adr}</span>
                        </div>
                    </div>

                    {/* HS % (AVG) */}
                    <div className="flex-1 p-8 hover:bg-zinc-900/50 transition-colors">
                        <p className="text-zinc-600 text-[15px] uppercase tracking-[0.3em] mb-3 font-bold">Accuracy</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-black italic tracking-tighter text-zinc-100">{stats.avg}</span>
                            <span className="text-sm font-black text-zinc-600 uppercase italic">%</span>
                        </div>
                    </div>

                    {/* TOTAL MATCHES */}
                    <div className="flex-1 p-8 hover:bg-zinc-900/50 transition-colors bg-zinc-900/20">
                        <p className="text-zinc-600 text-[15px] uppercase tracking-[0.3em] mb-3 font-black">Matches</p>
                        <div className="flex flex-col">
                            <span className="text-5xl font-black italic tracking-tighter text-white">{stats.matches}</span>

                        </div>
                    </div>

                </div>

                {/* FOOTER DECOR */}
                <div className="flex justify-between items-center mt-4 px-1">
                    <div className="flex gap-4">
                        <div className="w-8 h-[2px] bg-zinc-800" />
                        <div className="w-2 h-[2px] bg-zinc-500" />
                    </div>
                    <p className="text-[9px] text-zinc-700 tracking-[0.2em] font-mono">ENCRYPTED_DATA_STREAM // 0xFA4</p>
                </div>
            </div>
        </div>
    );
}

export default Stats;
