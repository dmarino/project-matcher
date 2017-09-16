import React, {Component} from 'react';
import ProjectList from '../components/ProjectList';
import Api from '../api';

class ProjectListContainer extends Component {
    constructor() {
        super();
        this.state = {projects: []};
    }

    componentDidMount() {
        Api.getProjects().then(fetchedProjects => this.setState({projects: fetchedProjects}));
    }

    render() {
        return React.createElement(ProjectList, {projects: this.state.projects});
    }
}

export default ProjectListContainer;