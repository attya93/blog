import React from 'react'
import { Link } from 'react-router-dom';
import SigninLink from './SigninLink';
import SignupLink from './SignupLink';

import { connect } from 'react-redux';


const Navbar = (props) => {
    const { auth, profile } = props;

    const links = auth.uid ? <SigninLink profile={profile} /> : <SignupLink />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Blog Medoo</Link>
                {links}
            </div>

        </nav>
    )
}
/**
 * 
 * inside the fBase object :
 * 1- auth : isEmpty  = means no login for this web site
 */

const mapStateToProps = state => {
    return {
        auth: state.fBase.auth,
        profile: state.fBase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
