import React, {Component} from 'react';
import './ProjectUpload.css';
import Tags from "./Tags";
import InputUtils from "../utils/InputUtils";

class ProjectUpload extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="card project-holder col-12 col-md-8 col-lg-6">
                    <div className="card-header">Start letting people know about your project!</div>
                    <div className="card-body">
                        <form encType="multipart/form-data" ref={(input) => this.form = input} noValidate>
                            <div className="form-group">
                                <div className="input-group">
                                    <input className="form-control col"
                                           type="text"
                                           placeholder="Project name"
                                           value={this.props.name}
                                           onChange={(e) => InputUtils.getTextValueAndExecute(e,
                                               this.props.onNameKeyPress)}
                                           maxLength="30"
                                           required/>
                                    <span className="input-group-addon">
                                        <i className="fa fa-id-card form-control-feedback"/>
                                    </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input className="form-control col"
                                           type="text"
                                           placeholder="Short summary of your project"
                                           value={this.props.short_description}
                                           onChange={
                                               (e) => InputUtils.getTextValueAndExecute(e,
                                                   this.props.onShortDescriptionKeyPress)
                                           }
                                           maxLength="100"
                                           required/>
                                    <span className="input-group-addon">
                                    <i className="fa fa-comment form-control-feedback"/>
                                </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input className="form-control col"
                                           type="email"
                                           placeholder="Contact email"
                                           value={this.props.contact_email}
                                           onChange={
                                               (e) => InputUtils.getTextValueAndExecute(e,
                                                   this.props.onUpdateContactEmail)
                                           }
                                           maxLength="50"
                                           required/>
                                    <span className="input-group-addon">
                                    <i className="fa fa-envelope form-control-feedback"/>
                                </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input className="form-control col"
                                           type="text"
                                           placeholder="Add topic tags"
                                           onKeyPress={
                                               (e) => InputUtils.onEnterPress(e, (val) => this.props.onTagAdded(val))
                                           }/>
                                    <span className="input-group-addon">
                                        <i className="fa fa-tags form-control-feedback"/>
                                    </span>
                                </div>
                                <div className="text-center">
                                    <Tags tags={this.props.tags} removeTag={this.props.onTagRemoved} type="removable"
                                          message=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="longDescriptionTextArea">In depth explanation of the project</label>
                                <textarea className="form-control"
                                          id="longDescriptionTextArea"
                                          value={this.props.long_description}
                                          rows="3"
                                          onChange={
                                              (e) => InputUtils.getTextValueAndExecute(e,
                                                  this.props.onLongDescriptionKeyPress)
                                          }
                                          required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="aboutUsTextArea">Tell us about the team</label>
                                <textarea className="form-control"
                                          id="aboustUsTextArea"
                                          value={this.props.about_us}
                                          rows="3"
                                          onChange={
                                              (e) => InputUtils.getTextValueAndExecute(e, this.props.onAboutUsKeyPress)
                                          }
                                          required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectImageFileInput">Project image</label>
                                <input type="file" className="form-control-file" id="projectImageFileInput"
                                       aria-describedby="fileHelp" accept="image/png"
                                       ref={(input) => this.imageInput = input}
                                       onChange={(e) => InputUtils.getFilesAndExecute(e,
                                           this.props.onUpdateImageUrl)}
                                       required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectDemoFileInput">Demo video</label>
                                <input type="file" className="form-control-file" id="projectDemoFileInput"
                                       aria-describedby="fileHelp" accept="video/mp4"
                                       ref={(input) => this.videoInput = input}
                                       onChange={(e) => InputUtils.getFilesAndExecute(e,
                                           this.props.onUpdateVideoUrl)}/>
                            </div>
                            <div className="row justify-content-end">
                                <button type="button" className="btn btn-primary" onClick={() => this.checkForm()}>
                                    Submit
                                </button>
                            </div>
                            {this.generateSavingMessage()}
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    checkForm() {
        const valid = this.form.checkValidity();
        if (valid) {
            this.props.saveProject().then(() => {
                this.videoInput.value = '';
                this.imageInput.value = '';
            });
        } else {
            this.form.classList.add("was-validated");
        }
    }

    generateSavingMessage() {
        if (!this.props.saving) {
            return;
        }
        return (
            <div className="row justify-content-center">
                    <span className="text-warning">
                        <span className="fa fa-circle-o-notch fa-spin icon-gap"/>
                        Saving project
                    </span>
            </div>
        )
    }
}

export default ProjectUpload;