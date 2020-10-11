import * as actionTypes from './../actionTypes';

const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: null,
    discoverWeekly: null,
    spotifyWebAPI: null
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
        case actionTypes.SETDISCOVERWEEKLY:
            return{
                ...state,
                discoverWeekly: action.payload.discoverWeekly
            }
        case actionTypes.SETSPOTIFYWEBAPI:
            return{
                ...state,
                spotifyWebAPI: action.payload.spotifyWebAPI
            }
        case actionTypes.TOGGLEPLAYING:
            return{
                ...state,
                playing: action.payload.setState===false||action.payload.setState===true?action.payload.setState:(!state.playing)
            }
        case actionTypes.SETITEM:
            return{
                ...state,
                item: action.payload.item 
            }
        default:
            return state;
    }
}