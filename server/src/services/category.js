import db from "../models"
export const getcategoriesService=()=>new Promise(async (resolve,reject)=>{
    try {
        const response =await db.Category.findAll({
            raw:true,
            
        })
        resolve({
            err:response?0:1,
            msg:response?"ok":"failed to get categories",
            response
        })
    } catch (error) {
        reject(error)
    }
})