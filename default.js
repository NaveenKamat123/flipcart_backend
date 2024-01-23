
import { products } from "./constants/data.js";
import Product from "./model/product-Schema.js";


const DefaultData = async () => {
    try {
        await Product.insertMany(products);
      
    }

    catch (error) {
        
    }

}

export default DefaultData;