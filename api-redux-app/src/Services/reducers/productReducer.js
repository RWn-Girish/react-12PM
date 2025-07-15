const intialState = {
    products: [],
    product: null,
    isLoading: false,
    isCreate: false,
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
                    errMSG: ""
                }
            
            case "DELETE_PRODUCT":
                let getdata = JSON.parse(localStorage.getItem("Products"))
                let updateData = getdata.filter(pro => pro.id != action.payload)
                localStorage.setItem("Products", JSON.stringify(updateData));
                return {
                    ...state,
                    products: updateData
                }

            case "GET_SINGLE_PRODUCT":
                let alldata = JSON.parse(localStorage.getItem("Products"))
                let singleRec = alldata.find(pro => pro.id == action.payload)
                return {
                    ...state,
                    product: singleRec
                }
            
            case "UPDATE_PRODUCT":
                let allData = JSON.parse(localStorage.getItem("Products"))
                let updatedData = allData.map(pro => {
                    if(pro.id == action.payload.id){
                        return action.payload
                    }else{
                        return pro
                    }
                })
                localStorage.setItem("Products", JSON.stringify(updatedData));
                return {
                    ...state,
                    product: null,
                    products: updatedData
                }
            default:
                return state;
        }
}

export default productReducer;