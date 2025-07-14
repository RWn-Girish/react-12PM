export const addProduct = (data) => {
    return {
        type: "ADD_PRODUCT",
        payload: data
    }
}

export const getAllProducts = () => {
    return {
        type: "GET_ALL_PRODUCT",
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



// Async Action

export const getAllProductsAsync = () => {
    return (dispatch) => {
        dispatch(loading());

        setTimeout(()=> {
            dispatch(getAllProducts())
        }, 5000);
    }   
}