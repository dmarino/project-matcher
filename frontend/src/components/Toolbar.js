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
                        <div className="form-inline">
                            <input className="mx-auto my-2" type="text" placeholder="Tag name filter"
                                   onKeyPress={(e) => this.processSearchInput(e)}/>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </nav>
            </div>
        )
    }

    processSearchInput(e) {
        const keyCode = e.keyCode || e.which;
        if (keyCode !== 13) {
            return;
        }
        const tagName = e.currentTarget.value;
        this.props.onSearchKeyPress(tagName);
        e.currentTarget.value = '';
    }
}

export default Toolbar;