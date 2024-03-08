import db from "../models"
//get user current
export const getOne=(id)=>new Promise(async (resolve,reject)=>{
    try {
        const response =await db.Province.findOne({
            when:{id},
            raw:true,
            attributes:{exclude:['password']}
        })
        resolve({
            err:response?0:1,
            msg:response?"ok":"failed to get Province",
            response
        })
    } catch (error) {
        reject(error)
    }
})