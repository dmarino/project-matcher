import React, {Component} from 'react';
import Project from '../components/Project';
import Api from '../api';

class ProjectContainer extends Component {
    constructor() {
        super();
        this.state = {project: {}};
    }

    componentDidMount() {
        Api.getProject('fakeid').then(fetchedProject => this.setState({project: fetchedProject}));
    }

    render() {
        return React.createElement(Project, {projects: this.state.projects});
    }
}

export default ProjectContainer;