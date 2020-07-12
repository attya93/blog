import React from 'react'
import { NavLink } from 'react-router-dom';
const SignupMobileLink = () => {
    return (
        <ul className="sidenav" id="mobile">
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/signin">Signin</NavLink></li>
        </ul>
    )
}

export default SignupMobileLink