import React, {Component} from 'react';
import ProjectList from '../components/ProjectList';
import Api from '../api';

class ProjectListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {projects: []};
    }

    componentDidMount() {
        Api.getProjects().then(fetchedProjects => this.setState({projects: fetchedProjects}));
    }

    render() {
        return React.createElement(ProjectList,
                                   {projects: this.state.projects, onProjectClick: this.props.onProjectClick});
    }
}

export default ProjectListContainer;