'use server'
import { createServerAxios } from '@/app/api/axios';
import { ServerUserApi } from '@/app/api/Server/UserApi';
import { headers } from 'next/headers';
import React from 'react';

const ResumesList = async () => {

     
   const cookieHeader = (await headers()).get('cookie') || '';
   const resumes = await ServerUserApi.getResumes(cookieHeader)
   console.log("Resumes:" + resumes)

    return (
        <div>


            
        </div>
    );
}

export default ResumesList;
