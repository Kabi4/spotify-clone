import { bindActionCreators } from 'redux';
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
};

export const setDiscoverWeekly = (discoverWeekly) =>{
    return{
        type: actionTypes.SETDISCOVERWEEKLY,
        payload:{
            discoverWeekly
        }
    }
};

export const setSpotifyWebAPI = (spotifyWebAPI) =>{
    return{
        type: actionTypes.SETSPOTIFYWEBAPI,
        payload:{
            spotifyWebAPI
        }
    }
};

export const togglePlaying = (state) =>{
    return{
        type: actionTypes.TOGGLEPLAYING,
        payload: {
            setState: state===false||state===true?state:null
        }
    }
};

export const setItem = (item) =>{
    return{
        type: actionTypes.SETITEM,
        payload: {
            item
        }
    }
}