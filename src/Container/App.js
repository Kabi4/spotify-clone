import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login';
import { getTokenFromResponse } from './Spotify/Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player/Player';
import { connect } from 'react-redux';
import * as actionCreators from './../Store/ActionCreators/index';

const spotifyWebApi = new SpotifyWebApi();

class App extends Component {

  componentDidMount(){
      this.props.setSpotifyWEBAPI(spotifyWebApi);
      const access = getTokenFromResponse();
      window.location.hash = "";
      let token = access.access_token;
      let timeout = parseInt(access.expires_in,10);
      if(token){
        this.props.settoken(token,timeout);
        spotifyWebApi.setAccessToken(token);
        spotifyWebApi.getMe()
        .then(user=>{
          this.props.setuser(user);
        });
        spotifyWebApi.getPlaylist()
        .then(playlist=>{
          this.props.setplaylist(playlist);
        });
        spotifyWebApi.getPlaylist("37i9dQZEVXcJZyENOWUFo7")
        .then(res=>{
          this.props.setWeeklyPlaylist(res);
        });
      };
  }
  render() {
    return (
      <div className="App">
        {this.props.token?<Player/>:<Login/>}
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    user: state.auth.user,
    token: state.auth.token
  }
};

const mapDispatchToProps = (dispatch)=>{
  return{
    setuser: (user)=>{dispatch(actionCreators.setuser(user))},
    settoken: (token,expiresIn)=>{dispatch(actionCreators.setToken(token,expiresIn))},
    setplaylist: (playlist)=>{dispatch(actionCreators.setplaylist(playlist))},
    setWeeklyPlaylist: (discover_weeklu)=>{dispatch(actionCreators.setDiscoverWeekly(discover_weeklu))},
    setSpotifyWEBAPI: (spotifyWEBAPI)=>{dispatch(actionCreators.setSpotifyWebAPI(spotifyWEBAPI))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
