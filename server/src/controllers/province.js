import * as services from "../services/province"

export const getProvince= async(req,res)=>{
    try {
        const response= await services.getProvinceService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"failed at Province controller: "+error
        })
    }
}