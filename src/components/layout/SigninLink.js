import React from 'react'
import { NavLink } from 'react-router-dom';


const SigninLink = () => {
    return (
        <ul className="right hide-on-small-only">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">MM</NavLink></li>
        </ul>
    )
}



export default SigninLink
