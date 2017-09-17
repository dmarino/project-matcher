import React, {Component} from 'react';
import './ProjectList.css';
import Toolbar from "./Toolbar";

const TAG_TYPES = ['tag badge badge-danger', 'tag badge badge-info', 'tag badge badge-success'];

class ProjectList extends Component {
    render() {
        return (
            <div>
                <Toolbar onSearchKeyPress={this.props.addFilterTag}/>
                <div className="container">
                    {this.generateFilterCard()}
                    {this.generateProjectList()}
                </div>
            </div>
        )
    }

    generateFilterCard() {
        if (this.props.filterTags.length === 0) {
            return;
        }
        return (
            <div className="row justify-content-center">
                <div className="col12 col-md-8 col-lg-6 text-center">
                    <span className="text-secondary">Filtering results by: {this.generateFilterTags()}</span>
                </div>
            </div>
        )
    }

    generateFilterTags() {
        const tagsElementArray = [];
        const tags = this.props.filterTags;
        for (let i = 0; i < TAG_TYPES.length && i < tags.length; i++) {
            tagsElementArray.push(
                <span className={TAG_TYPES[i]} onClick={(e) => this.removeFilterTag(e)} key={i}>{tags[i]}</span>
            )
        }
        return tagsElementArray;
    }

    removeFilterTag(e) {
        const tagName = e.currentTarget.innerHTML;
        this.props.removeFilterTag(tagName);
    }
    generateProjectList() {
        return this.props.projects.map(project => {
            return (
                <div className="row justify-content-center" key={project.id}>
                    <div className="card project-holder col-12 col-md-8 col-lg-6">
                        <img className="card-img-top" src={project.image_url} alt="Card cap"/>
                        <div className="card-body">
                            <h4 className="card-title">{project.name}</h4>
                            <p className="card-text text-secondary">{project.text_description}</p>
                            <hr/>
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