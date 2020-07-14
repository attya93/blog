import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
    const { title, content, AfName, AlName, createdAt } = props.post;
    const { auth } = props;
    if (!auth.uid) {
        return <Redirect to="/signin" />
    }
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{title}</span>
                    <p>{content}.</p>
                </div>
                <div className="card-action grey lighten-3 grey-text">
                    <div>Posted By {AfName} {AlName}</div>
                    <div>{createdAt ? moment(createdAt.toDate()).calendar() : null}</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts //to get single post ->data.posts
    const post = posts ? posts[id] : [{ title: "No Data Found" }];
    return {
        post,
        auth: state.fBase.auth
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect(['posts'])
)(ProjectDetails)
