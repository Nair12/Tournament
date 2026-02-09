import React from 'react';



interface NewsItem{
    link: string
    title: string 
    date: Date

}

interface newsProps {
    news: NewsItem[]

}

const LastNews = ({news}:newsProps) => {
    if (!news || news.length === 0) return null;

   
    const marqueeData = [...news, ...news];

    return (
        <div className="relative w-full bg-zinc-950/50 backdrop-blur-sm border-y border-white/5 overflow-hidden group">
    
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

         
            <div className="flex animate-marquee py-3 cursor-pointer">
                {marqueeData.map((item, idx) => (
                    <a
                        key={`${item.link}-${idx}`}
                        href={`https://www.hltv.org${item.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 px-8 border-r border-white/5 whitespace-nowrap group/item"
                    >
                    
                        <span className="text-[10px] font-mono text-zinc-600 group-hover/item:text-orange-500 transition-colors">
                            {new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>

                      
                        <span className="text-xs font-black uppercase italic tracking-widest text-zinc-300 group-hover/item:text-white transition-colors">
                            {item.title}
                        </span>

                        <span className="size-1 bg-zinc-800 rounded-full group-hover/item:bg-orange-500 transition-all group-hover/item:scale-125" />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default LastNews;
