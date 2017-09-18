import React, {Component} from 'react';
import './Project.css';
import InputUtils from "../utils/InputUtils";


class Project extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    {this.createProjectView()}
                </div>
            </div>
        )
    }

    createProjectView() {
        return (
            <div className="row justify-content-center" key={this.props.project.id}>
                <div className="card project-holder col-12 col-md-8 col-lg-6">
                    <div className="card-header text-center"><strong>{this.props.project.name}</strong></div>
                    {this.verifyMedia()}
                    <div className="card-body">
                        <div className="text-center"><strong>Description</strong></div>
                        <p className="card-text text-secondary">{this.props.project.long_description}</p>
                        <div className="text-center"><strong>About Us</strong></div>
                        <label className="text-secondary">{this.props.project.about_us}</label>
                    </div>
                    <div className="card-footer">
                        <div className="text-center"><strong>Contact Form</strong></div>
                        <form ref={(input) => this.form = input} noValidate>
                            <div className="form-group">
                                <div className="input-group">
                                    <input className="form-control col"
                                           type="hidden"
                                           name={this.props.project.contact_email}
                                           required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input className="form-control col"
                                           type="text"
                                           placeholder="Your Name"
                                           name="name"
                                           onChange={(e) => InputUtils.getTextValueAndExecute(e,
                                               this.props.updateName)}
                                           required/>
                                    <span className="input-group-addon">

                                    <i className="fa fa-id-card form-control-feedback"/>
                                </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input className="form-control col"
                                           type="email"
                                           placeholder="Your Email"
                                           name="email"
                                           onChange={(e) => InputUtils.getTextValueAndExecute(e,
                                               this.props.updateEmail)}
                                           required/>
                                    <span className="input-group-addon">
                                    <i className="fa fa-envelope form-control-feedback"/>
                                </span>
                                </div>
                            </div>
                            <div className="form-group">
                                    <textarea className="form-control" placeholder="Your Message" name="comment"
                                              rows="3" type="text" onChange={(e) => InputUtils.getTextValueAndExecute(e,
                                        this.props.updateMessage)} required/>
                            </div>
                            <div className="row justify-content-end">
                                <button type="button" className="btn btn-primary" onClick={() => this.checkForm()}>
                                    Send
                                </button>
                            </div>
                            {this.generateSendingMessage()}
                        </form>
                    </div>
                </div>
            </div>
        );
    };

    verifyMedia() {
        if (this.props.project.video_url !== '') {
            return <video controls src={this.props.project.video_url} autoPlay="true" muted="muted" height="250"
                          width="450"/>
        }
        else {
            return <img className="card-img-top" src={this.props.project.image_url} alt="Card cap"/>;
        }
    }

    checkForm() {
        const valid = this.form.checkValidity();
        if (valid) {
            this.props.sendMail();
        } else {
            this.form.classList.add("was-validated");
        }
    }

    generateSendingMessage() {
        if (!this.props.sending) {
            return;
        }
        return (
            <div className="row justify-content-center">
                    <span className="text-warning">
                        <span className="fa fa-circle-o-notch fa-spin icon-gap"/>
                        Sending mail
                    </span>
            </div>
        )
    }
}

export default Project;