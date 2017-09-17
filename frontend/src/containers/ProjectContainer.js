import React, {Component} from 'react';
import Project from '../components/Project';

class ProjectContainer extends Component {
    render() {
        return React.createElement(Project, {project: this.props.currentProject});
    }
}

export default ProjectContainer;