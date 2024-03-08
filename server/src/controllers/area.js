import * as services from "../services/area"

export const getArea= async(req,res)=>{
    try {
        const response= await services.getAreaService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"failed at area controller: "+error
        })
    }
}