import React, { Component} from 'react';

class UserItems extends Component {

    mapProjects = () => {
        return (
            this.props.projects.map((project, i) => {
                return <ProjectDetails key={i} project={project} />
            })
        )
    }
    
    render () {
        return (
            <div>
                <ul>

                </ul>

            </div>
        )
    }
}

export default UserItems;