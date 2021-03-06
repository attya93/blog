import React from 'react'
import ProjectSummary from './ProjectSummary';

const ProjectList = (props) => {
    const { posts } = props;
    return (
        <div className="section project-list">
            {
                posts ? posts.map(post => {
                    return <ProjectSummary
                        key={post.id}
                        AfName={post.AfName}
                        AlName={post.AlName}
                        id={post.id}
                        title={post.title}
                        content={post.content}
                        createdAt={post.createdAt} />
                }) : <p className="center">Loading..</p>
            }
        </div>
    )
}

export default ProjectList
