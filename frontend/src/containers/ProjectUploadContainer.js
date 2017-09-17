import React, {Component} from 'react';
import ProjectUpload from '../components/ProjectUpload';
import Api from '../api';

class ProjectUploadContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {project: {}};
    }

    saveProject(project) {
        Api.saveProject(project);
    }

    render() {
        return React.createElement(ProjectUpload, {saveProject: this.saveProject});
    }
}

export default ProjectUploadContainer;