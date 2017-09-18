import React, {Component} from 'react';
import ProjectUpload from '../components/ProjectUpload';
import Api from '../api';


class ProjectUploadContainer extends Component {
    constructor(props) {
        super(props);
        this.state = this.originalState();
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

    updateVideoUrl(videos) {
        const video = videos[0];
        this.setState({video: video});
    }

    updateImageUrl(images) {
        const image = images[0];
        this.setState({image: image});
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

    saveProject() {
        this.setState({saving: true});
        const imageUrlPromise = Api.saveImage(this.state.image);
        const videoUrlPromise = Api.saveVideo(this.state.video);

        return Promise.all([imageUrlPromise, videoUrlPromise]).then((responseArray) => {
            return Api.saveProject({
                name: this.state.name,
                short_description: this.state.short_description,
                long_description: this.state.long_description,
                about_us: this.state.about_us,
                image_url: responseArray[0],
                video_url: responseArray[1],
                contact_email: this.state.contact_email,
                tags: this.state.tags,
            }).then(response => this.setState(this.originalState()));
        });
    }

    originalState() {
        return {
            saving: false,
            name: "",
            short_description: "",
            long_description: "",
            about_us: "",
            video: "",
            image: "",
            contact_email: "",
            tags: []
        };
    }

    render() {
        return React.createElement(ProjectUpload, {
            saving: this.state.saving,
            name: this.state.name,
            short_description: this.state.short_description,
            long_description: this.state.long_description,
            about_us: this.state.about_us,
            video: this.state.video,
            image: this.state.image,
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
            onTagRemoved: (tag) => this.removeTag(tag),
            saveProject: () => this.saveProject()
        });
    }
}

export default ProjectUploadContainer;