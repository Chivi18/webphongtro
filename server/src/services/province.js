import db from "../models"
export const getProvinceService=()=>new Promise(async (resolve,reject)=>{
    try {
        const response =await db.Province.findAll({
            raw:true,
            attributes:['code','value']
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