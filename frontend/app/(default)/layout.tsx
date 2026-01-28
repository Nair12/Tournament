import  Sidebar  from './_components/Sidebar'
import React from 'react';


const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen grid cols-1 md:grid-cols-[15%_1fr] text-white ">
              
          
            <aside className='hidden md:block border-2  bg-zinc-900 w-64 h-screen'>
                <Sidebar/>
            </aside>
            
              <div>
                <header className='bg-red-600'>header</header>
                {children}
            </div>

        </div>
    );
}

export default DefaultLayout;