import React, {Component} from 'react';
import Project from '../components/Project';
import Api from "../api";

class ProjectContainer extends Component {

    constructor(props) {
        super(props);
        this.state = this.resetState();
    }

    updateName(name) {
        this.setState({name: name});
    }

    updateEmail(email) {
        this.setState({email: email});
    }

    updateMessage(message) {
        this.setState({message: message});
    }

    sendMail() {
        this.setState({sending: true});
        Api.sendMail(this.state.name, this.props.currentProject.contact_email, this.state.email, this.state.message)
           .then(() => {
               this.setState(this.resetState());
           });
    }

    resetState() {
        return {
            name: '',
            email: '',
            message: '',
            sending: false
        };
    }

    render() {
        return React.createElement(Project, {
            project: this.props.currentProject,
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            sending: this.state.sending,
            updateName: (name) => this.updateName(name),
            updateEmail: (email) => this.updateEmail(email),
            updateMessage: (message) => this.updateMessage(message),
            sendMail: () => this.sendMail()
        });
    }
}

export default ProjectContainer;