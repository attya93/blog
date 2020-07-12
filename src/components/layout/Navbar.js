import React from 'react'
import { Link } from 'react-router-dom';
import SigninLink from './SigninLink';
import SignupLink from './SignupLink';
import SigninMobileLink from './SigninMobileLink';
import SignupMobileLink from './SigninMobileLink';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Blog Medoo</Link>

                <SigninLink />
                <SignupLink />
                <SigninMobileLink />
                <SignupMobileLink />
            </div>

        </nav>
    )
}

export default Navbar
