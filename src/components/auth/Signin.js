import React, { useState } from 'react'
import { connect } from 'react-redux';
import * as actionType from '../../store/actions/AuthAction';
import { Redirect, useHistory } from 'react-router-dom';



const Signin = (props) => {
    const { onAddUser, authError, auth } = props;
    const redirect = useHistory();

    const [userInfo, setUserInfo] = useState({
        email: null,
        password: null
    });

    const onSubmitHandler = (ev) => {
        ev.preventDefault();
        //console.log(userInfo)
        onAddUser(userInfo);
        redirect.push('/');
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
                <h4 className="grey-text text-darken-3 center">Sign In</h4>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={onInputHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={onInputHandler} autoComplete="true" />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-3 z-depth-0">Login</button>
                    <div className="red-text center">
                        {
                            authError ? <p>{authError}</p> : null
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        auth: state.fBase.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddUser: (userInfo) => dispatch(actionType.signIn(userInfo))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin)
