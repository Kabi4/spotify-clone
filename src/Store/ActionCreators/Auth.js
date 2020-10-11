import * as actionTypes from './../actionTypes';

export const resetUserAndToken = ()=>{
    return{
        type: actionTypes.RESETUSETANDTOKEN
    }
};

export const setuser = (user)=>{
    return{
        type: actionTypes.SETUSER,
        payload:{
            user
        }
    }
};

const settingToken = (token)=>{
    return{
        type: actionTypes.SETTOKEN,
        payload:{
            token
        }
    }
}

export const setToken = (token,expiresIn)=>{
    return dispatch=>{
        dispatch(settingToken(token));
        setTimeout(()=>{
            dispatch(resetUserAndToken());
        },expiresIn*1000)
    }
}


export const setplaylist = (playlist) =>{
    return{
        type: actionTypes.SETPLAYLIST,
        payload: {
            playlist
        }
    }
}