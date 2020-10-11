import React, { Component } from "react";
import "./Footer.css";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import * as actionCreators from './../../Store/ActionCreators/index';

import altImage from './../../Assets/UnkownImages.jpg';

import { connect } from 'react-redux';

class Footer extends Component {
    clickPlayOrPause = () =>{
        this.props.togglePlaying();
    };

    componentDidMount(){
        console.log(this.props.spotifyWebApi);
        this.props.spotifyWebApi.getMyCurrentPlaybackState()
        .then((r) => {
            this.props.togglePlaying(r.is_playing===undefined?false:r.is_playing);
            this.props.setItem(r.item);
        });
    }

    skipNext = () =>{
        this.props.spotifyWebApi.skipToNext();
        this.props.spotifyWebApi.getMyCurrentPlaybackState()
        .then((r) => {
            this.props.togglePlaying(r.is_playing===undefined?false:r.is_playing);
            this.props.setItem(r.item);
        });

    }

    skipPrev = () =>{
        this.props.spotifyWebApi.skipToPrevious();
        this.props.spotifyWebApi.getMyCurrentPlaybackState()
        .then((r) => {
            this.props.togglePlaying(r.is_playing===undefined?false:r.is_playing);
            this.props.setItem(r.item);
        });
    }

  render() {
    return (
    <React.Fragment>
        <div className="footer__left">
            <img src={this.props.currentlyPlaying?this.props.currentlyPlaying.album.images[0]?this.props.currentlyPlaying.album.images[0]:altImage:altImage} alt="album" />
            <div>
                <h4>{this.props.currentlyPlaying?this.props.currentlyPlaying.name:"No Song"}</h4>
                <p>{this.props.currentlyPlaying?this.props.currentlyPlaying.artists.length>0?this.props.currentlyPlaying.artists.map((artist) => artist.name.join(", ")):"Unkown Artist":"No Artist"}</p>
            </div>
        </div>
        <div className="footer__center">
            <ShuffleIcon disabled={(!this.props.currentlyPlaying)} className="footer__green" />
            <SkipPreviousIcon  onClick={this.skipPrev} className="footer__icon" />
            {!this.props.playing?<PlayCircleOutlineIcon onClick={this.clickPlayOrPause} fontSize="large" className="footer__icon"/>:<PauseCircleOutlineIcon onClick={this.clickPlayOrPause} fontSize="large" className="footer__icon"/>}
            <SkipNextIcon disabled={(!this.props.currentlyPlaying)} onClick={this.skipNext} className="footer__icon" />
            <RepeatIcon className="footer__green" />
        </div>
        <div className="footer__right">
            <Grid className="footer__right__container" container spacing={2}>
            <Grid item>
                <PlaylistPlayIcon />
            </Grid>
            <Grid item>
                <VolumeDownIcon />
            </Grid>
            <Grid item xs>
                <Slider aria-labelledby="continuous-slider" />
            </Grid>
            </Grid>
        </div>    
    </React.Fragment>);
  }
}

const mapStateToProps = (state)=>{
    return{
        playing: state.auth.playing,
        currentlyPlaying: state.auth.item,
        spotifyWebApi: state.auth.spotifyWebAPI
    }
}

const mapdispatchToProps = (dispatch) =>{
    return{
        togglePlaying: (state)=>{dispatch(actionCreators.togglePlaying(state))},
        setItem: (item)=>{dispatch(actionCreators.setItem(item))}
    }
}

export default connect(mapStateToProps,mapdispatchToProps)(Footer);
