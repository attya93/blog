import React from 'react'
import { NavLink } from 'react-router-dom';
const SignupLink = () => {
    return (
        <div>
            <ul className="right hide-on-small-only">
                <li><NavLink to="/signup">Signup</NavLink></li>
                <li><NavLink to="/signin">Signin</NavLink></li>
            </ul>
        </div>
    )
}

export default SignupLink
