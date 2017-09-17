import React, {Component} from 'react';
import App from '../components/App';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {currentComponent: 'ProjectList', currentProject: {}};
    }

    loadProjectListComponent() {
        this.setState({currentComponent: 'ProjectList', currentProject: {}});
    }

    loadProjectComponent(project) {
        this.setState({currentComponent: 'Project', currentProject: project});
    }

    loadProjectUploadComponent() {
        this.setState({currentComponent: 'ProjectUpload', currentProject: {}});
    }

    render() {
        return React.createElement(App, {
            currentComponent: this.state.currentComponent,
            currentProject: this.state.currentProject,
            navigateToProjectList: () => this.loadProjectListComponent(),
            navigateToProject: (project) => this.loadProjectComponent(project),
            navigateToProjectUpload: () => this.loadProjectUploadComponent()
        });
    }
}

export default AppContainer;
