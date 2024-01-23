import Product from "../model/product-Schema.js";

export const getProducts=async (req,res)=>{
    try{
      const products=await Product.find();
      return res.status(200).json({
        "message":"success",
        "data":products
      })

    }

    catch(error){
        
        return res.status(500).json({
            "message":"failure",
            "error":error.message
        })

    }

}

export const getProductById=async (req,res)=>{
  try {
    const products = await Product.findOne({ 'id': req.params.id });
    res.status(200).json(products);
}

    catch(error){
        
        return res.status(500).json({
            "message":"failure in backend getProductbyid",
            "error":error.message
        })

    }

}