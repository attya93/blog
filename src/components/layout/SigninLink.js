import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../../store/actions/AuthAction';

const SigninLink = (props) => {
    const { userLogout, profile } = props
    return (
        <ul className="right hide-on-small-only">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/" onClick={() => userLogout()}>Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">{profile.initial}</NavLink></li>
        </ul>
    )
}

const mapDisptachToProps = dispatch => {
    return {
        userLogout: () => dispatch(action.sigOut())
    }
}

export default connect(null, mapDisptachToProps)(SigninLink)
