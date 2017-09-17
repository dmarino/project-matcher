import React, {Component} from 'react';
import './Toolbar.css';

class Toolbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="col-md-3"></div>
                    <a className="navbar-brand">Project Matcher</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main-navbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <span className="nav-link" onClick={this.props.navigateToProjectList}>Explore</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={this.props.navigateToProjectUpload}>Upload</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3"></div>
                </nav>
            </div>
        )
    }
}

export default Toolbar;