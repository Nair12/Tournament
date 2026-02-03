import { clientAxios } from "../axios"


export const TeamApi = {


    create: async (formData: FormData)=>{
        
        try{
            const res = await clientAxios.post('/Team',formData,{
                headers:{
                    
                }
            })
            return res.data;
        } catch (error) {
            throw error;
        }
           
    }
}