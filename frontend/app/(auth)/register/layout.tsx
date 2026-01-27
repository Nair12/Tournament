import React from 'react';

const AuthLayout = ({children,}
    :{children: React.ReactNode}
) => {
    return (
        <div className='grid grid-col-1 md:grid-col-2'>
            <div>{children}</div>
            <div>
                <img/>
            </div>
    

        </div>
        
    );
}

export default AuthLayout;
