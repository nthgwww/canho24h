import actionTypes from "../actions/actionTypes";

const initState = {
    isLoggedIn: false,
    token:null,
    msg:''

}

const authReducer = (state=initState, action) => {
    switch(action.type){
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn:true,
                token:action.data
            }

            case actionTypes.REGISTER_FAIL:
                return {
                    ...state,
                    isLoggedIn:false,
                    msg: action.data,
                    token:null
                }
    

        default:
            return state;
    }
}

export default authReducer;