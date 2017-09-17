import React, {Component} from 'react';
import ProjectListContainer from "../containers/ProjectListContainer";
import ProjectContainer from "../containers/ProjectContainer";
import ProjectUploadContainer from '../containers/ProjectUploadContainer';
import Toolbar from "./Toolbar";
import '../components/App.css';

class App extends Component {
    render() {
        const toolbar = (<Toolbar navigateToProjectList={this.props.navigateToProjectList}
                                  navigateToProjectUpload={this.props.navigateToProjectUpload}
                                  currentComponent={this.props.currentComponent}/>);
        switch (this.props.currentComponent) {
            case 'ProjectList':
                return (
                    <div>
                        {toolbar}
                        <ProjectListContainer onProjectClick={() => this.props.navigateToProject()}/>
                    </div>
                );
            case 'Project':
                return (
                    <div>
                        {toolbar}
                        <ProjectContainer/>
                    </div>
                );
            case 'ProjectUpload':
                return (
                    <div>
                        {toolbar}
                        <ProjectUploadContainer/>
                    </div>
                );
            default:
                return (
                    <div>
                        {toolbar}
                    </div>
                );
        }
    }
}

export default App;