import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';

const Header = (props) => {
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon className="header__left__icon"/>
                <input className="header__left__input" value="" placeholder="Search for album or artist" />
            </div>
            <div className="header__right">
                <Avatar className="header__right__avatar" src={props.user?props.user.images?props.user.images[0]?props.user.images[0].url:"":"":""}>{props.user?props.user.display_name[0]:""}</Avatar>
                <p className="header__right__name">{props.user?props.user.display_name:""}</p>
            </div>
        </div>
    )
};

const mapStateToProps = (state)=>{
    return{
        user: state.auth.user
    }
}

export default connect(mapStateToProps,null)(Header);
