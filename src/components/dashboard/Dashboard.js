import React from 'react'

import { connect } from 'react-redux';

import Notification from './Notifications';
import ProjectList from '../projects/ProjectList';

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const Dashboard = (props) => {
    const { posts, auth, notification } = props;
    if (!auth.uid) {
        return <Redirect to="/signin" />
    }
    return (
        <div>
            <div className="container dashboard">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList posts={posts} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification notify={notification} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.firestore.ordered.posts,
        auth: state.fBase.auth,
        notification: state.firestore.ordered.notifications
    }
}

export default compose(// compine two or more higher order components
    firestoreConnect(() => [
        { collection: "posts", orderBy: ["createdAt", "desc"] },
        { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
    ]),
    connect(mapStateToProps)
)(Dashboard)
