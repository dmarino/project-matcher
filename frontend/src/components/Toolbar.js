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
                        <div className="navbar-nav mr-auto"></div>
                        <form className="form-inline my-2">
                            <input className="ml-auto" type="text" placeholder="Tag name filter"/>
                            <button className="btn btn-outline-success mr-auto" type="submit">Add</button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </nav>
            </div>
        )
    }
}

export default Toolbar;