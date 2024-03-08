import * as services from "../services/category"

export const getcategories= async(req,res)=>{
    try {
        const response= await services.getcategoriesService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:"failed at category controller: "+error
        })
    }
}