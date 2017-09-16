import React, {Component} from 'react';
import './App.css';
import ProjectListContainer from "./ProjectListContainer";
import ProjectContainer from "./ProjectContainer";

class App extends Component {
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

    render() {
        switch (this.state.currentComponent) {
            case 'ProjectList':
                return React.createElement(ProjectListContainer, {onProjectClick: () => this.loadProjectComponent()});
            case 'Project':
                return React.createElement(ProjectContainer,
                                           {onBackButtonClick: () => this.loadProjectListComponent()});
            default:
                return React.createElement(ProjectListContainer, {});
        }
    }
}

export default App;
