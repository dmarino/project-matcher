import React, {Component} from 'react';
import './Toolbar.css';
const actionNameToComponent = {
    "Explore": "ProjectList",
    "Create": "ProjectUpload"
};
class Toolbar extends Component {
    render() {
        return (
            <div className="container toolbar">
                <div className="row justify-content-center">
                    <a className="toolbar-header">Project Match</a>
                </div>
                <div className="row justify-content-center">
                    <a className="toolbar-action" role="button" onClick={this.props.navigateToProjectList}>
                        {this.generateNavAction("Explore")}
                    </a>
                    <a className="toolbar-action" onClick={this.props.navigateToProjectUpload}>
                        {this.generateNavAction("Create")}
                    </a>
                </div>
                <hr/>
            </div>
        )
    }

    generateNavAction(actionName) {
        const basicTag = (
            <div>
                <span className="fa fa-wpexplorer" aria-hidden="true"></span>
                <span className="toolbar-action-name">{actionName}</span>
            </div>
        );
        console.log(this.props.currentComponent);
        console.log(actionNameToComponent[actionName]);
        if (this.props.currentComponent !== actionNameToComponent[actionName]) {
            return basicTag;
        }
        return (
            <div>
                <span className="highlight-container">
                    <span className="highlight">
                        {basicTag}
                    </span>
                </span>
            </div>
        )
    }
}

export default Toolbar;