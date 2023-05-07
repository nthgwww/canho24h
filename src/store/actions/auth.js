import actionTypes from './actionTypes';
import { apiRegister } from '../../services/auth';

export const register = (payload) => async (dispatch) => { 
    try {
        const response = await apiRegister(payload)
        console.log(response)
        if (response?.data.err === 0){
            dispatch({
                type:actionTypes.REGISTER_SUCCESS,
                data:response.data.token
            })
        }
        else{
            dispatch({
                type:actionTypes.REGISTER_FAIL,
                data:response.data.msg
            })
        }

    } catch (error) {
        dispatch({
            type:actionTypes.REGISTER_FAIL,
            data:null
        })
    }
}