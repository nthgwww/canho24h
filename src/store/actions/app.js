import actionTypes from './actionTypes';
import * as apis from '../../services';

export const getCategories = () => async (dispatch) => { 
    try {
        const response = await apis.apiGetCategories()
        // console.log(response)
        // console.log(response)
        if (response?.data.err === 0){
            dispatch({
                type:actionTypes.GET_CATEGORIES,
                categories:response.data.response
            })
        }
        else{
            dispatch({   
                type:actionTypes.GET_CATEGORIES,
                data:response.data.msg,
                categories: null
            })
        }

    } catch (error) {
        dispatch({
            type:actionTypes.GET_CATEGORIES,
            categories:null
        })
    }
}


export const getPrices = () => async (dispatch) => { 
    try {
        const response = await apis.apiGetPrices()
        // console.log(response)
        // console.log(response)
        if (response?.data.err === 0){
            dispatch({
                type:actionTypes.GET_PRICES,
                prices:response.data.response.sort((a,b)=>{return a.order - b.order})
            })
        }
        else{
            dispatch({   
                type:actionTypes.GET_PRICES,
                data:response.data.msg,
                prices: null
            })
        }

    } catch (error) {
        dispatch({
            type:actionTypes.GET_PRICES,
            prices:null
        })
    }
}

export const getAreas = () => async (dispatch) => { 
    try {
        const response = await apis.apiGetAreas()
        // console.log(response)
        // console.log(response)
        if (response?.data.err === 0){
            dispatch({
                type:actionTypes.GET_AREAS,
                areas:response.data.response.sort((a,b)=>{return a.order - b.order})
            })
        }
        else{
            dispatch({   
                type:actionTypes.GET_AREAS,
                data:response.data.msg,
                areas: null
            })
        }

    } catch (error) {
        dispatch({
            type:actionTypes.GET_AREAS,
            areas:null
        })
    }
}