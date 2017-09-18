const URL = 'http://localhost:8000';
const IMG_ENDPOINT = '/files/img';
const VID_ENDPOINT = '/files/vid';
const PROJECT_ENDPOINT = '/projects';

class Api {
    static getProjects() {
        return fetch(URL + PROJECT_ENDPOINT, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json());
    }

    static getProjectsByTags(tags) {
        const query = '?tags=' + tags.join('&tags=');
        return fetch(URL + PROJECT_ENDPOINT + query, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json());
    }

    static saveImage(data) {
        return this.saveFile(data, URL + IMG_ENDPOINT);
    }

    static saveVideo(data) {
        return this.saveFile(data, URL + VID_ENDPOINT);
    }

    static saveFile(formData, path) {
        if (!formData) {
            return Promise.resolve('');
        }
        const data = new FormData();
        data.append('file', formData);
        return fetch(path, {method: 'POST', body: data})
            .then(res => res.json())
            .then(res => res.file.filename);
    }

    static saveProject(project) {
        return fetch(URL + PROJECT_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then(res => res.json());
    }
}

export default Api;