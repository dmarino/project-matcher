class Api {
    static getProjects() {
        return Promise.resolve([{}, {}, {}]);
    }
    static getProject(id) {
        return Promise.resolve({});
    }
}

export default Api;