import axios from "axios";
import config from "../config";

const productLists = () => async (dispatch) => {
   try {
    dispatch ({type: "PRODUCTS_REQUEST"});
    const {data} = await axios.get(`${config.apiUrl}/api/products`).then(console.log(`${config.apiUrl}`));
    dispatch ({type: "PRODUCTS_SUCESS", payload: data});

   }
   catch(error) {
    dispatch ({type: "PRODUCTS_FAIL", payload: error.message});

   }
}

const productDetails = (productId) => async (dispatch) => {
    try {
        dispatch ({type: "FETCH_PRODUCTDETAIL",  payload: productId});
        const { data } = await axios.get(`${config.apiUrl}/api/products/` + productId);
        dispatch ({type: "FETCH_PRODUCTDETAIL_SUCESS", payload: data});

    } catch (error) {
        dispatch ({type: "FETCH_PRODUCTDETAIL_FAIL", payload: error.message});

    }
}

export  {productLists, productDetails}