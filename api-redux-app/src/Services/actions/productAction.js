import axios from 'axios';

export const addProduct = () => {
    return {
        type: "ADD_PRODUCT",
    }
}

export const getAllProducts = (data) => {
    return {
        type: "GET_ALL_PRODUCT",
        payload: data
    }
}

export const deleteProduct = (id) => {
    return {
        type: "DELETE_PRODUCT",
        payload: id
    }
}

export const getSingleProduct = (id) => {
    return {
        type: "GET_SINGLE_PRODUCT",
        payload: id
    }
}

export const updateProduct = (data) => {
    return {
        type: "UPDATE_PRODUCT",
        payload: data
    }
}

export const loading = () => {
    return {
        type: "LOADING",
    }
}

export const errorMessage = (err) => {
    return {
        type: "ERROR",
        payload: err
    }
}



// Async Action

export const getAllProductsAsync = () => {
    return async (dispatch) => {
        dispatch(loading());
       try {
        let res = await axios.get("http://localhost:3000/products")
        // console.log(res.data);
        dispatch(getAllProducts(res.data))
       } catch (error) {
            console.log(error)
            dispatch(errorMessage(error.message))
       }
    }   
}

export const AddProductsAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            await axios.post("http://localhost:3000/products", data)
            dispatch(addProduct())
        } catch (error) {
            console.log(error)
            dispatch(errorMessage(error.message))
        }
        
    }   
}