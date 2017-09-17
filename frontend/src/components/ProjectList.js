import React, {Component} from 'react';
import './ProjectList.css';

const TAG_TYPES = ['tag badge badge-danger', 'tag badge badge-info', 'tag badge badge-success'];

class ProjectList extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    {this.generateFilterSection()}
                    {this.generateProjectList()}
                </div>
            </div>
        )
    }

    generateFilterSection() {
        return (
            <div className="row justify-content-center filter-section">
                <div className="col-12 col-md-8 col-lg-6 text-center no-padding">
                    <div className="input-group">
                        <input className="form-control col" type="text" placeholder="Filter projects by tag name."
                               onKeyPress={(e) => this.processSearchInput(e)}/>
                        <span className="input-group-addon">
                            <i className="fa fa-search form-control-feedback"/>
                        </span>
                    </div>
                    {this.generateFilterTags()}
                </div>
            </div>
        )
    }

    processSearchInput(e) {
        const keyCode = e.keyCode || e.which;
        if (keyCode !== 13) {
            return;
        }
        const tagName = e.currentTarget.value;
        this.props.addFilterTag(tagName);
        e.currentTarget.value = '';
    }

    generateFilterTags() {
        const tagsElementArray = [];
        const tags = this.props.filterTags;

        if (this.props.filterTags.length === 0) {
            return;
        }

        for (let i = 0; i < TAG_TYPES.length && i < tags.length; i++) {
            tagsElementArray.push(
                <span className={TAG_TYPES[i]} onClick={() => this.props.removeFilterTag(tags[i])} key={i}>
                    <span className="fa fa-close icon-margin"/>
                    {tags[i]}
                </span>
            )
        }
        return (
            <span className="text-secondary">
                Filtering results by: {tagsElementArray}
            </span>
        );
    }

    generateProjectList() {
        return this.props.projects.map(project => {
            return (
                <div className="row justify-content-center" key={project.id}>
                    <div className="card project-holder col-12 col-md-8 col-lg-6">
                        <div className="card-header">{project.name}</div>
                        <img className="card-img-top" src={project.image_url} alt="Card cap"/>
                        <div className="card-body">
                            <p className="card-text text-secondary">{project.short_description}</p>
                            <div className="row justify-content-end">
                                <button className="btn btn-primary"
                                        onClick={() => this.props.navigateToProject(project)}>
                                    Find out more
                                </button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="text-center">
                                {this.generateProjectTags(project.tags)}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    generateProjectTags(tags) {
        const tagsElementArray = [];
        for (let i = 0; i < TAG_TYPES.length && i < tags.length; i++) {
            tagsElementArray.push(
                <span className={TAG_TYPES[i]} key={i}>{tags[i]}</span>
            )
        }
        return tagsElementArray;
    }
}

export default ProjectList;