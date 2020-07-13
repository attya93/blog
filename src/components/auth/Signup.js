import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const Signup = (props) => {
    const [userInfo, setUserInfo, auth] = useState({
        email: null,
        password: null,
        fName: null,
        lName: null
    });

    const onSubmitHandler = (ev) => {
        ev.preventDefault();
        console.log(userInfo)
    }

    const onInputHandler = (ev) => {
        setUserInfo({
            ...userInfo,
            [ev.target.id]: ev.target.value
        })
    }
    if (auth.uid) {
        return <Redirect to="/" />
    }
    return (
        <div className="container">
            <form onSubmit={onSubmitHandler} className="white">
                <h4 className="grey-text text-darken-3 center">Sign Up</h4>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={onInputHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={onInputHandler} autoComplete="true" />
                </div>
                <div className="input-field">
                    <label htmlFor="fName">First Name</label>
                    <input type="text" name="fName" id="fName" onChange={onInputHandler} autoComplete="true" />
                </div>
                <div className="input-field">
                    <label htmlFor="lName">Last Name</label>
                    <input type="text" name="lName" id="lName" onChange={onInputHandler} autoComplete="true" />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-3 z-depth-0">Login</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.fBase.auth
    }
}
export default connect(mapStateToProps)(Signup)
