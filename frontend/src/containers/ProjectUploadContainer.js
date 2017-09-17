import React, {Component} from 'react';
import ProjectUpload from '../components/ProjectUpload';
import Api from '../api';

class ProjectUploadContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            short_description: "",
            long_description: "",
            about_us: "",
            video_url: "",
            image_url: "",
            contact_email: "",
            tags: []
        };
    }

    updateName(name) {
        this.setState({name: name});
    }

    updateShortDescription(shortDescription) {
        this.setState({short_description: shortDescription});
    }

    updateLongDescription(longDescription) {
        this.setState({long_description: longDescription});
    }

    updateAboutUs(aboutUs) {
        this.setState({about_us: aboutUs});
    }

    updateVideoUrl(videoUrl) {
        this.setState({video_url: videoUrl});
    }

    updateImageUrl(imageUrl) {
        this.setState({image_url: imageUrl});
    }

    updateContactEmail(contactEmail) {
        this.setState({contact_email: contactEmail});
    }

    addTag(tag) {
        const updatedTags = [...this.state.tags, tag];
        this.setState({tags: updatedTags});
    }

    removeTag(tag) {
        const updatedTags = this.state.tags.filter(existingTag => existingTag !== tag);
        this.setState({tags: updatedTags});
    }

    saveProject(project) {
        Api.saveProject(project);
    }

    render() {
        return React.createElement(ProjectUpload, {
            saveProject: this.saveProject,
            name: this.state.name,
            short_description: this.state.short_description,
            long_description: this.state.long_description,
            about_us: this.state.about_us,
            video_url: this.state.video_url,
            image_url: this.state.image_url,
            contact_email: this.state.contact_email,
            tags: this.state.tags,
            onNameKeyPress: (name) => this.updateName(name),
            onShortDescriptionKeyPress: (shortDescription) => this.updateShortDescription(shortDescription),
            onLongDescriptionKeyPress: (longDescription) => this.updateLongDescription(longDescription),
            onAboutUsKeyPress: (aboutUs) => this.updateAboutUs(aboutUs),
            onUpdateVideoUrl: (videoUrl) => this.updateVideoUrl(videoUrl),
            onUpdateImageUrl: (imageUrl) => this.updateImageUrl(imageUrl),
            onUpdateContactEmail: (contactEmail) => this.updateContactEmail(contactEmail),
            onTagAdded: (tag) => this.addTag(tag),
            onTagRemoved: (tag) => this.removeTag(tag)
        });
    }
}

export default ProjectUploadContainer;