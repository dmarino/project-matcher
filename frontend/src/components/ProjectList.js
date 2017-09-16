import React, {Component} from 'react';

class ProjectList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onProjectClick}>Boom</button>
            </div>
        )
    }

}

export default ProjectList;