import { HLTV } from 'hltv';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
      try {
            const news = await HLTV.getNews();
            return NextResponse.json(news.slice(0, 10));
        } catch (error) {
            return NextResponse.json({ error: 'Failed to fetch HLTV' }, { status: 500 });
        }
        
    
} 