import React from 'react'
import { Link } from 'react-router-dom';

const ProjectSummary = (props) => {
    const { title, content, id } = props;
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"><Link to={`/posts/${id}`}>{title}</Link></span>
                <p>{content}</p>
                <h6>Posted By Mohammed</h6>
                <h6 className="grey-text">3ed july ,2020</h6>
            </div>
        </div>
    )
}

export default ProjectSummary
