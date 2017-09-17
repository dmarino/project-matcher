const MOCK_RESPONSES = [
    {
        name: "Fun",
        id: 1,
        short_description: "Fun game, fun time",
        long_description: "",
        about_us: "Indie devs, no HQ.",
        video_url: "",
        image_url: "http://via.placeholder.com/350x150",
        contact_email: "indiedev@gmail.com",
        tags: ["software", "videogames", "adventure"]
    },
    {
        name: "Tallest Skyscraper",
        id: 2,
        short_description: "Building a huge skyscraper",
        long_description: "",
        about_us: "Montreal based construction team. 3rd year students.",
        video_url: "vidurl",
        image_url: "http://via.placeholder.com/350x150",
        contact_email: "normal@yahoo.com",
        tags: ["construction", "structures"]
    },
    {
        name: "Yet Another Marketplace",
        id: 3,
        short_description: "proyect description. this may be really long",
        long_description: "",
        about_us: "We are a fun, worldwide team!",
        video_url: "vidurl",
        image_url: "http://via.placeholder.com/350x150",
        contact_email: "verylongemailusername@gmail.com",
        tags: ["software", "marketplace"]
    }
];

class Api {
    static getProjects() {
        return Promise.resolve(MOCK_RESPONSES);
    }

    static getProjectsByTags(tags) {
        return Promise.resolve(MOCK_RESPONSES);
    }

    static getProject(id) {
        return Promise.resolve(MOCK_RESPONSES[2]);
    }

    static saveProject() {
        return Promise.resolve(true);
    }
}

export default Api;