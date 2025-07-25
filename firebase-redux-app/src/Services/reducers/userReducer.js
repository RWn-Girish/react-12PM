const initalState = {
    user: null,
    errMSG: "",
    isSignUP: false
}

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case "SIGN_UP":
            return {
                ...state,
                isSignUP: true,
                errMSG: ""

            }
        case "SIGN_IN":
            return {
                ...state,
                isSignUP: false,
                errMSG: "",
                user: action.payload
            }
        case "SIGN_OUT":
            return {
                ...state,
                isSignUP: false,
                errMSG: "",
                user: null
            }
        case "ERROR":
            return {
                ...state,
                errMSG: action.payload
            }
    
        default:
            return state;
    }
}

export default userReducer;