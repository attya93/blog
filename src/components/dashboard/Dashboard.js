import React from 'react'

import { connect } from 'react-redux';

import Notification from './Notifications';
import ProjectList from '../projects/ProjectList';

const Dashboard = (props) => {
    const { posts } = props;
    console.log(posts);
    return (
        <div>
            <div className="container dashboard">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList posts={posts} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.post.post
    }
}

export default connect(mapStateToProps)(Dashboard)
