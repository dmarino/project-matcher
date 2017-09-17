import React, {Component} from 'react';
import './Project.css';

class Project extends Component
 {
    constructor(props) {
        super(props);
    }

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
                    <div className="card-header text-center"> <strong>{this.props.project.name}</strong></div>
                    <img className="card-img-top" src={this.props.project.video_url} alt="Card cap"/>
                    <div className="card-body">
                        <p className="card-text text-secondary">{this.props.project.long_description}</p>
                    </div>
                    <div className="card-footer">
                    <div className="card-subheader text-center"> <strong>Contact Form</strong></div>
                    <label> <strong>{this.props.project.about_us}</strong></label>
                    <br/>
                    <div className="card-subbody">
                        <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <div className="input-group">
                                <input className="form-control col"
                                       type="text"
                                       placeholder="Your Name"
                                />
                                <span className="input-group-addon">
                                    <i className="fa fa-id-card form-control-feedback"/>
                                </span>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input className="form-control col"
                                       type="text"
                                       placeholder="Your Email"
                                />
                                <span className="input-group-addon">
                                    <i className="fa fa-envelope form-control-feedback"/>
                                </span>
                            </div>
                        </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Your Message" name="comment" rows="3" type="text" ></textarea>
                            </div>
                            <div className="form-group text-center">
                                <input className="btn btn-primary btn-lg" type="submit" value="Send Message"/>
                            </div>
                        </form>   
                        </div>   
                    </div>
                </div>
            </div>
            );
        };
    }


export default Project;