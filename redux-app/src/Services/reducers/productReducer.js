const intialState = {
    products: [],
    product: null,
    loading: true,
    isCreate: false
}

const productReducer = (state = intialState, action) => {
        switch(action.type){
            case "ADD_PRODUCT":
                return state;
            default:
                return state;
        }
}

export default productReducer;