import React from 'react';
 

const AuthLayout = ({children,}
    :{children: React.ReactNode}
) => {

    




    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className='flex items-center justify-center'>{children}</div>
            <div className='hidden md:block'>
                <img src="LoginLogo.gif" className='w-full h-screen'/>
            </div>
    

        </div>
        
    );
}

export default AuthLayout;
