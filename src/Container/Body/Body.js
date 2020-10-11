import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Components/Header/Header';

import './Body.css';

import * as actionCreators from '../../Store/ActionCreators/index';

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Songs from '../../Components/Songs/Songs';

class Body extends Component {
    playPlayList = () =>{
        this.props.spotifyWebApi.play({
            context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
        })
        .then(res=>{
            return this.props.spotifyWebApi.getMyCurrentPlayingTrack()
        })
        .then(res=>{
            this.props.setItem(res.item);
            this.props.togglePlaying(true);
        })
        .catch(err=>{
            alert("Buy Premium")
            console.log(err);
        })
    }

    playSong = (id) =>{
        this.props.spotifyWebApi.play({
            uris: [`spotify:track:${id}`],
        })
        .then(res=>{
            return this.props.spotifyWebApi.getMyCurrentPlayingTrack()
        })
        .then(res =>{
            this.props.setItem(res.item);
            this.props.togglePlaying(true);
        })
        .catch(err=>{
            alert("Buy Premium")
            console.log(err);
        })
    }

    render(){
        return (
            <div className="body" >
                <Header/>
                <div className="body__info">
                    <img src="data:image/jpeg;base64,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" alt="DiscoverWeekly" className="body__info__image" />
                    <div className="body__info__text" >
                        <strong>Playlist</strong>
                        <h4>Discover Weekly</h4>
                        <p>{this.props.discoverWeekly && this.props.discoverWeekly.description}</p>
                    </div>
                </div>
                <div className="body__songs">
                        <div className="body__songs__icon">
                            <PlayCircleFilledIcon onClick={this.playPlayList} className="body__shuffle" />
                            <FavoriteIcon fontSize="large" />
                            <MoreHorizIcon />
                        </div>
                        {this.props.discoverWeekly?this.props.discoverWeekly.tracks.items.map((item) => (
                            <Songs playSong={this.playSong} key={item.track.name} track={item.track} />
                            )):null}
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state)=>{
    return{
        discoverWeekly: state.auth.discoverWeekly,
        spotifyWebApi: state.auth.spotifyWebAPI,
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        setItem: (item)=>{dispatch(actionCreators.setItem(item))},
        togglePlaying: (state)=>(dispatch(actionCreators.togglePlaying(state)))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Body);
