import React, { Component } from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import "./Player.css";

class Player extends Component {
    render() {
        return (
            <main className="player">
                <div className="player__body">
                    <Sidebar/>
                    <Body spotify={this.props.spotify} />
                </div>
                <div className="player__footer">
                    <Footer/>
                </div>
            </main>
        )
    }
};

export default Player; 