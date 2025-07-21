const intialState = {
    products: [],
    product: null,
    isLoading: false,
    isCreate: false,
    isUpdate: false,
    errMSG: ""
}

const productReducer = (state = intialState, action) => {
        switch(action.type){
            case "LOADING": 
                return {
                    ...state,
                    isLoading: true,
                }
            case "ERROR": 
                return {
                    ...state,
                    isLoading: false,
                    errMSG: action.payload,
                }
            case "ADD_PRODUCT":
                return {
                    ...state,
                    isCreate: true
                };

            case "GET_ALL_PRODUCT":
                return {
                    ...state,
                    products: action.payload,
                    isLoading: false,
                    isCreate: false,
                    isUpdate: false,
                    errMSG: ""
                }
            
            // case "DELETE_PRODUCT":
            //     let getdata = JSON.parse(localStorage.getItem("Products"))
            //     let updateData = getdata.filter(pro => pro.id != action.payload)
            //     localStorage.setItem("Products", JSON.stringify(updateData));
            //     return {
            //         ...state,
            //         products: updateData
            //     }

            case "GET_SINGLE_PRODUCT":
                return {
                    ...state,
                    product: action.payload
                }
            
            case "UPDATE_PRODUCT":
                return {
                    ...state,
                    product: null,
                    isUpdate: true
                }
            default:
                return state;
        }
}

export default productReducer;