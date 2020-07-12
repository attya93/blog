import React from 'react'
import { NavLink } from 'react-router-dom';


const SigninMobileLink = () => {

    return (
        <ul className="sidenav" id="mobile" >
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">MM</NavLink></li>
        </ul>
    )
}

export default SigninMobileLink
