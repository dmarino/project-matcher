//Como siempre el codigo es supremamente facil de leer y de navegar
//El unico proble que tuve fue que dure 10 minutos sabiendo como se buscaba por tag
//Esa parte de la interfaz es un poco confusa para el usuario por el icono que parece un boton al lado
//Podrian ponerle un pequeño parrafo introductorio para saber cual es el proposito de la pagina


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
                        <ProjectListContainer navigateToProject={(project) => this.props.navigateToProject(project)}/>
                    </div>
                );
            case 'Project':
                return (
                    <div>
                        {toolbar}
                        <ProjectContainer currentProject={this.props.currentProject}/>
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