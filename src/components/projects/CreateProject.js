import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux';
import * as actionType from '../../store/actions/PostAction';

const CreateProject = (props) => {
    const { onCreate } = props;
    const [userInfo, setUserInfo] = useState({
        title: null,
        content: null,
    });

    const onSubmitHandler = useCallback((ev) => {
        ev.preventDefault();
        console.log(userInfo);
        onCreate(userInfo);

    }, [onCreate, userInfo])

    const onInputHandler = (ev) => {
        setUserInfo({
            ...userInfo,
            [ev.target.id]: ev.target.value
        })
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

const mapDispatchToState = dispatch => {
    return {
        onCreate: (post) => dispatch(actionType.createPost(post))
    }
}

export default connect(null, mapDispatchToState)(CreateProject)
