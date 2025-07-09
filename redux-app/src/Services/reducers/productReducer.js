const intialState = {
    products: JSON.parse(localStorage.getItem("Products")) || [],
    product: null,
    loading: true,
    isCreate: false
}

const productReducer = (state = intialState, action) => {
        switch(action.type){
            case "ADD_PRODUCT":
                let data = JSON.parse(localStorage.getItem("Products")) || []
                data.push(action.payload);
                localStorage.setItem("Products", JSON.stringify(data));
                return {
                    ...state,
                    products: [...state.products, action.payload]
                };

            case "GET_ALL_PRODUCT":
                let getAlldata = JSON.parse(localStorage.getItem("Products")) || []
                return {
                    ...state,
                    products: getAlldata
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