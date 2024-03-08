import * as services from "../services/price"

export const getPrice= async(req,res)=>{
    try {
        const response= await services.getPriceService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"failed at category controller: "+error
        })
    }
}