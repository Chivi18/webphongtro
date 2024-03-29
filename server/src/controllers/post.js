import * as postService from "../services/post";

export const getPost = async (req, res) => {
  try {
      const response = await postService.getPostService()
      return res.status(200).json(response)
  } catch (error) {
      return res.status(500).json({
          err:-1,
          msg:" failed at post controller"+err
      })
  }
  
};

export const getPostLimit = async (req, res) => {
    const {page,priceNumber,areaNumber,...query}=req.query
    try {
        
        const response = await postService.getPostLimitService(page,query,{priceNumber,areaNumber})
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:" failed at post controller"+error
        })
    }
    
  };

  export const getNewPost = async (req, res) => {
    
    try {
        
        const response = await postService.getNewPostService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:" failed at post controller"+error
        })
    }
    
  };
