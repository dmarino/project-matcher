import React, {Component} from 'react';
import ProjectList from '../components/ProjectList';
import Api from '../api';

class ProjectListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {projects: [], filterTags: []};
    }

    componentDidMount() {
        Api.getProjects().then(fetchedProjects => this.setState({projects: fetchedProjects}));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.filterTags.join('') === this.state.filterTags.join('')) {
            return;
        }
        Api.getProjectsByTags(this.state.filterTags)
           .then(fetchedProjects => this.setState({projects: fetchedProjects}));
    }

    render() {
        return React.createElement(ProjectList,
                                   {
                                       projects: this.state.projects,
                                       filterTags: this.state.filterTags,
                                       navigateToProject: this.props.navigateToProject,
                                       removeFilterTag: (e) => this.removeFilterTag(e),
                                       addFilterTag: (e) => this.addFilterTag(e)
                                   });
    }

    addFilterTag(tagName) {
        const updatedArray = [...this.state.filterTags, tagName];
        this.setState({filterTags: updatedArray});
    }

    removeFilterTag(tagName) {
        const updatedArray = this.state.filterTags.filter(tag => tag !== tagName);
        this.setState({filterTags: updatedArray});
    }
}

export default ProjectListContainer;