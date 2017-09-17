import React, {Component} from 'react';
import App from '../components/App';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {currentComponent: 'ProjectList'}
    }

    loadProjectListComponent() {
        this.setState({currentComponent: 'ProjectList'});
    }

    loadProjectComponent() {
        this.setState({currentComponent: 'Project'});
    }

    loadProjectUploadComponent() {
        this.setState({currentComponent: 'ProjectUpload'});
    }

    render() {
        return React.createElement(App, {
            currentComponent: this.state.currentComponent,
            navigateToProjectList: () => this.loadProjectListComponent(),
            navigateToProject: () => this.loadProjectComponent(),
            navigateToProjectUpload: () => this.loadProjectUploadComponent()
        });
    }
}

export default AppContainer;
