import actionTypes from "../actions/actionTypes";
const initState = {
    post:[],
    msg:''

}

const postReducer = (state= initState, action) =>{
    switch (action.type) {
        case actionTypes.GET_POSTS:
            return {
                ...state,
                posts:action.posts || [],
                msg:action.msg || ''
            }
    
        default:
            return state;
    }
}

export default postReducer