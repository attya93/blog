import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux';
import * as actionType from '../../store/actions/PostAction';
import { Redirect, useHistory } from 'react-router-dom';

const CreateProject = (props) => {
    const redirect = useHistory();
    const { onCreate, auth } = props;
    const [userInfo, setUserInfo] = useState({
        title: null,
        content: null,
    });

    const onSubmitHandler = useCallback((ev) => {
        ev.preventDefault();
        console.log(userInfo);
        onCreate(userInfo);
        redirect.push('/');

    }, [onCreate, userInfo, redirect])

    const onInputHandler = (ev) => {
        setUserInfo({
            ...userInfo,
            [ev.target.id]: ev.target.value
        })
    }

    if (!auth.uid) {
        return <Redirect to="/signin" />
    }
    return (
        <div className="container">
            <form onSubmit={onSubmitHandler} className="white">
                <h4 className="grey-text text-darken-3 center">Create Post</h4>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" onChange={onInputHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea className="materialize-textarea" name="content" id="content" onChange={onInputHandler} ></textarea>
                </div>
                <div className="input-field">
                    <button className="btn blue lighten-3 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        auth: state.fBase.auth
    }
}
const mapDispatchToState = dispatch => {
    return {
        onCreate: (post) => dispatch(actionType.createPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(CreateProject)
