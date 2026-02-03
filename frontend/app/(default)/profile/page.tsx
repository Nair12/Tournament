import { ServerUserApi } from '@/api/Server/UserApi';
import React from 'react';

const Page = () => {

    const stats = ServerUserApi.getUserStats()
    
    return (
        <div>
            

        </div>
    );
}

export default Page;
