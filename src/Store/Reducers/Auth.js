import * as actionTypes from './../actionTypes';

const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: null
};

export const authreducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.SETUSER:
            return{
                ...state,
                user: action.payload.user
            };
        case actionTypes.SETTOKEN:
            return{
                ...state,
                token: action.payload.token
            }
        case actionTypes.RESETUSETANDTOKEN:
            return{
                ...state,
                user: null,
                playlist: [],
                playing: false,
                item: null,
                token: null
            }
        case actionTypes.SETPLAYLIST:
            return{
                ...state,
                playlist: action.payload.playlist
            }
        default:
            return state;
    }
}