import React, {Component} from 'react';
import './ProjectList.css';

const TAG_TYPES = ['tag badge badge-danger', 'tag badge badge-info', 'tag badge badge-success'];

class ProjectList extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    {this.generateFilterCard()}
                    {this.generateProjectList()}
                </div>
            </div>
        )
    }

    generateFilterCard() {
        return (
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 text-center">
                    <div>
                        <input className="col" type="text" placeholder="Tag name filter"
                               onKeyPress={(e) => this.processSearchInput(e)}/>
                        {this.generateFilterTags()}
                    </div>
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
                <span className={TAG_TYPES[i]} onClick={(e) => this.removeFilterTag(e)} key={i}>{tags[i]}</span>
            )
        }
        return (
            <span className="text-secondary">
                Filtering results by: {tagsElementArray}
            </span>
        );
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