

export const countReducer = (state, action) => {
    switch(action.type){
        case "INC":
            return state = state + 1
        case "DEC":
            return state = state - 1
    }
}