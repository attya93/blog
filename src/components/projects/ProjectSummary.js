import React from 'react'
import { Link } from 'react-router-dom';

import moment from 'moment';

const ProjectSummary = (props) => {
    const { title, content, id, AfName, AlName, createdAt } = props;
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"><Link to={`/posts/${id}`}>{title}</Link></span>
                <p>{content}</p>
                <h6>Posted By {AfName} {AlName}</h6>
                <h6 className="grey-text">{createdAt ? moment(createdAt.toDate()).calendar() : null}</h6>
            </div>
        </div>
    )
}

export default ProjectSummary
