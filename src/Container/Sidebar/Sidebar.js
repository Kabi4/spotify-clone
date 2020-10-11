import React, { Component } from "react";
import "./Sidebar.css";
import Logo from "./../../Components/Logo/Logo";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import Sidebaroptions from "../../Components/SidebarOptions/Sidebaroptions";
import { connect } from "react-redux";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Logo classNaam="sidebar__logo" />
        <Sidebaroptions Icon={HomeIcon} title="Home" />
        <Sidebaroptions Icon={SearchIcon} title="Search" />
        <Sidebaroptions Icon={LibraryMusicIcon} title="Your Library" />
        <br />
        <strong className="sidebar__playlist">Playlist</strong>
        <hr />
        {this.props.playlist.length>0?this.props.playlist.map(ele=>{
            return <Sidebaroptions key={ele.name} title={ele.name} />
        }):<Sidebaroptions style="disable" key="noplaylist" title="No PlayList to show!" />}
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
    return{
        playlist: state.auth.playlist
    }
}

export default connect(mapStateToProps,null)(Sidebar);
