import React from 'react'

const ProjectSummary = (props) => {
    const { title, content } = props;
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{title}</span>
                <p>{content}</p>
                <h6>Posted By Mohammed</h6>
                <h6 className="grey-text">3ed july ,2020</h6>
            </div>
        </div>
    )
}

export default ProjectSummary
