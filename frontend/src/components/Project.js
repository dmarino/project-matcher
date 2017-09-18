import React, {Component} from 'react';
import './Project.css';


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
                    {this.VerifyMedia()}
                    <div className="card-body">
                        <p className="card-text text-secondary">{this.props.project.long_description}</p>
                        <div className="card-subheader text-center"><strong>About Us</strong></div>
                        <label>{this.props.project.about_us}</label>
                    </div>
                    <div className="card-footer">

                        <div className="card-subheader text-center"><strong>Contact Form</strong></div>
                        <br/>
                        <div className="card-subbody">
                            <form action='/contact' name='contactus' id='contactus' method='post'
                                  onSubmit={this.handleSubmit}>
                                  <div className="form-group">
                                    <div className="input-group">
                                        <input className="form-control col"
                                               type="hidden"
                                               name ={this.props.project.contact_email} 
                                        required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <input className="form-control col"
                                               type="text"
                                               placeholder="Your Name"
                                               name ="name"
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
                                               placeholder="Your Email"
                                               name="email"
                                        required/>
                                        <span className="input-group-addon">
                                    <i className="fa fa-envelope form-control-feedback"/>
                                </span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Your Message" name="comment"
                                              rows="3" type="text"/>
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

    VerifyMedia() {
        if (this.props.project.video_url !== '') {
            return <video controls src={this.props.project.video_url} autoPlay="true" muted="muted" height="250"
                          width="450"/>
        }
        else {
            return <img className="card-img-top" src={this.props.project.image_url} alt="Card cap"/>;
        }
    }
}

export default Project;