import React, {Component} from 'react';
import './ProjectList.css';
import Tags from "./Tags";
import InputUtils from "../utils/InputUtils";

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
                               onKeyPress={(e) => InputUtils.onEnterPress(e, (val) => this.props.addFilterTag(val))}/>
                        <span className="input-group-addon">
                            <i className="fa fa-search form-control-feedback"/>
                        </span>
                    </div>
                    <span>
                        <Tags tags={this.props.filterTags} removeTag={this.props.removeFilterTag} type="removable" message="Filtering results by:"/>
                    </span>
                </div>
            </div>
        )
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
                                <Tags tags={project.tags} type="regular" message=""/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }
}

export default ProjectList;