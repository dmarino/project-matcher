import React, {Component} from 'react';
import './ProjectUpload.css';

class ProjectUpload extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="card project-holder col-12 col-md-8 col-lg-6">
                    <div className="card-header">Start letting people know about your project!</div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="input-group">
                                <input className="form-control col" type="text"
                                       placeholder="Project name"/>
                                <span className="input-group-addon">
                                    <i className="fa fa-question form-control-feedback"/>
                                </span>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input className="form-control col" type="text"
                                       placeholder="Short summary of your project"/>
                                <span className="input-group-addon">
                                    <i className="fa fa-question form-control-feedback"/>
                                </span>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input className="form-control col" type="email"
                                       placeholder="Contact email"/>
                                <span className="input-group-addon">
                                    <i className="fa fa-question form-control-feedback"/>
                                </span>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input className="form-control col" type="text"
                                       placeholder="Add topic tags"/>
                                <span className="input-group-addon">
                                    <i className="fa fa-question form-control-feedback"/>
                                </span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="longDescriptionTextArea">In depth explanation of the project</label>
                            <textarea className="form-control" id="longDescriptionTextArea"
                                      rows="3"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="aboutUsTextArea">Tell us a little bit about the team</label>
                            <textarea className="form-control" id="aboustUsTextArea"
                                      rows="3"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectImageFileInput">Project image</label>
                            <input type="file" className="form-control-file" id="projectImageFileInput"
                                   aria-describedby="fileHelp" accept="image/png, image/jpeg"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectDemoFileInput">Demo video</label>
                            <input type="file" className="form-control-file" id="projectDemoFileInput"
                                   aria-describedby="fileHelp" accept="video/mp4"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectUpload;