import React from 'react';
import {nav} from "./nav"
import Link from 'next/link';
const Sidebar = () => {
   
    console.log("Side")
    return (
        
        <div className='flex flex-col gap-6 p-4'>
            <img src='/favicon.png' className='size-45'/>
          {nav.map((item,idx)=>{
            const Icon = item.icon;
            return(
                <div key={idx}>
                  <Link href={`${item.url}`} className='flex flex-row gap-4'>
                 {Icon && <Icon className='size-5' />}
                 <span>{item.title}</span>
                 </Link>
               
                </div>
            )
          })}
            


        </div>
    );
}

export default Sidebar;
