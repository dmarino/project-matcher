import React, {Component} from 'react';
import './ProjectList.css';
import Toolbar from "./Toolbar";

const TAG_TYPES = ['tag badge badge-danger', 'tag badge badge-info', 'tag badge badge-success'];

class ProjectList extends Component {

    generateProjectTags(tags) {
        const tagsElementArray = [];
        for (let i = 0; i < TAG_TYPES.length && i < tags.length; i++) {
            tagsElementArray.push(
                <span className={TAG_TYPES[i]} key={i}>{tags[i]}</span>
            )
        }
        return tagsElementArray;
    }

    generateProjectList() {
        return this.props.projects.map(project => {
            return (
                <div className="card project-holder col-xs-12" key={project.id}>
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
            );
        });
    }

    render() {
        return (
            <div>
                <Toolbar/>
                {this.generateProjectList()}
            </div>
        )
    }

}

export default ProjectList;