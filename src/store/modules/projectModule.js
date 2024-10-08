export default {
    namespaced: true,

    state() {
        return {
            projects: [
                {
                    showcase: true,
                    name: "Rent Car Service",
                    id: "rentCarService",
                    thumbnail: require("../../assets/img/projects/RentCarService-main.png"),
                    images: [
                        require("../../assets/img/projects/RentCarService-1.png"),
                        require("../../assets/img/projects/RentCarService-2.png"),
                        require("../../assets/img/projects/RentCarService-3.png"),
                        require("../../assets/img/projects/RentCarService-4.png"),
                        require("../../assets/img/projects/RentCarService-5.png"),
                        require("../../assets/img/projects/RentCarService-6.png"),
                        require("../../assets/img/projects/RentCarService-7.png"),
                    ],
                    tags: ["work"],
                    category: "web",
                    dateFrom: "08. 2024",
                    dateFromTimestamp: 1722470400,
                    dateToTimestamp: 1727740800,
                    dateTo: "10. 2024",
                    link: "https://rentcarservice.eu/",
                    shortInfo: "Simple responsive web application for renting cars, with contact form & admin panel. Made for a client. Made with Express & Vue",
                    info: [
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu ipsum vestibulum, finibus nulla sit amet, 
                        elementum mi. Proin congue molestie nunc eget pretium.`,
                        `Nullam eu dictum diam, eu tristique leo. Aenean laoreet nisi tortor, nec finibus justo dignissim ut. Proin congue molestie nunc eget pretium.`
                    ],
                    techStack: ["MySQL", "Vue.js", "Express.js", "Bootstrap", "Webpack"]
                },
                {
                    showcase: true,
                    name: "VerbumWell",
                    id: "verbumWell",
                    thumbnail: require("../../assets/img/projects/VW-main.png"),
                    images: [
                        require("../../assets/img/projects/VW-1.png"),
                        require("../../assets/img/projects/VW-2.png"),
                        require("../../assets/img/projects/VW-3.png"),
                        require("../../assets/img/projects/VW-4.png"),
                        require("../../assets/img/projects/VW-5.png"),
                        require("../../assets/img/projects/VW-6.png"),
                        require("../../assets/img/projects/VW-7.png"),
                        require("../../assets/img/projects/VW-8.png"),
                        require("../../assets/img/projects/VW-9.png"),
                        require("../../assets/img/projects/VW-10.png"),
                    ],
                    tags: [],
                    category: "web",
                    dateFrom: "05. 2024",
                    dateFromTimestamp: 1714521600,
                    dateToTimestamp: 1717200000,
                    dateTo: "06. 2024",
                    link: "https://verbum-well.up.railway.app/",
                    shortInfo: "Fully responsive web application for posting, made for university semestral work - developed with Express.js",
                    info: [
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu ipsum vestibulum, finibus nulla sit amet, 
                        elementum mi. Proin congue molestie nunc eget pretium.`,
                        `Nullam eu dictum diam, eu tristique leo. Aenean laoreet nisi tortor, nec finibus justo dignissim ut. Proin congue molestie nunc eget pretium.`
                    ],
                    techStack: ["MySQL", "Express.js", "EJS", "Bootstrap"]
                },
                {
                    name: "Tsurugi Respite",
                    id: "tsurugiRespite",
                    thumbnail: require("../../assets/img/projects/TR-main.png"),
                    images: [
                        require("../../assets/img/projects/TR-1.png"),
                        require("../../assets/img/projects/TR-2.png"),
                        require("../../assets/img/projects/TR-3.png"),
                        require("../../assets/img/projects/TR-4.png"),
                        require("../../assets/img/projects/TR-5.png"),
                        require("../../assets/img/projects/TR-6.png"),
                        require("../../assets/img/projects/TR-7.png"),
                        require("../../assets/img/projects/TR-8.png"),
                    ],
                    tags: [],
                    category: "web",
                    dateFrom: "12. 2023",
                    dateFromTimestamp: 1701388800,
                    dateToTimestamp: 1701388800,
                    dateTo: "12. 2023",
                    link: "https://noiyy.github.io/tsurugi-respite/",
                    shortInfo: "E-shop website selling japanese swords, originally made for university semestral work - developed with Vue.js",
                    info: [
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu ipsum vestibulum, finibus nulla sit amet, 
                        elementum mi. Proin congue molestie nunc eget pretium.`,
                        `Nullam eu dictum diam, eu tristique leo. Aenean laoreet nisi tortor, nec finibus justo dignissim ut. Proin congue molestie nunc eget pretium.`
                    ],
                    techStack: ["Vue.js"]
                },
                {
                    name: "Calculator",
                    id: "calculator",
                    thumbnail: require("../../assets/img/projects/Calculator-main.png"),
                    tags: ["study"],
                    category: "web",
                    dateFrom: "09. 2022",
                    dateFromTimestamp: 1661990400,
                    dateToTimestamp: 1661990400,
                    dateTo: "09. 2022",
                    link: "https://noiyy.github.io/odin-calculator/",
                    shortInfo: "",
                    info: ""
                },
                {
                    name: "Rock Paper Scissors",
                    id: "rockPaperScissors",
                    thumbnail: require("../../assets/img/projects/RockPaperScissors-main.png"),
                    tags: ["study"],
                    category: "web",
                    dateFrom: "08. 2022",
                    dateFromTimestamp: 1659312000,
                    dateToTimestamp: 1659312000,
                    dateTo: "08. 2022",
                    link: "https://noiyy.github.io/odin-rock-paper-scissors/",
                    shortInfo: "",
                    info: ""
                },
                {
                    name: "Etch a Sketch",
                    id: "etchASketch",
                    thumbnail: require("../../assets/img/projects/Etch-a-Sketch-main.png"),
                    tags: ["study"],
                    category: "web",
                    dateFrom: "08. 2022",
                    dateFromTimestamp: 1659312000,
                    dateToTimestamp: 1659312000,
                    dateTo: "08. 2022",
                    link: "https://noiyy.github.io/odin-etch-a-sketch/",
                    shortInfo: "",
                    info: ""
                },
                {
                    name: "Awesome Nature",
                    id: "awesomeNature",
                    thumbnail: require("../../assets/img/projects/AwesomeNature-main.png"),
                    tags: ["study"],
                    category: "web",
                    dateFrom: "07. 2022",
                    dateFromTimestamp: 1656633600,
                    dateToTimestamp: 1656633600,
                    dateTo: "07. 2022",
                    link: "https://noiyy.github.io/odin-landing-page/",
                    shortInfo: "",
                    info: ""
                },
                {
                    name: "MajoPizza",
                    id: "majoPizza",
                    thumbnail: require("../../assets/img/projects/MajoPizza-main.png"),
                    tags: [],
                    category: "web",
                    dateFrom: "06. 2022",
                    dateFromTimestamp: 1654041600,
                    dateToTimestamp: 1654041600,
                    dateTo: "06. 2022",
                    link: "https://noiyy.github.io/majoPizza/",
                    shortInfo: "",
                    info: ""
                },
                {
                    name: "Snowcastle Meltdown",
                    id: "snowcastleMeltdown",
                    thumbnail: require("../../assets/img/projects/SnowcastleMeltdown-main.png"),
                    images: [
                        require("../../assets/img/projects/SnowcastleMeltdown-1.png"),
                        require("../../assets/img/projects/SnowcastleMeltdown-2.png"),
                        require("../../assets/img/projects/SnowcastleMeltdown-3.png"),
                    ],
                    tags: ["jam"],
                    category: "game",
                    dateFrom: "04. 2022",
                    dateFromTimestamp: 1648771200,
                    dateToTimestamp: 1648771200,
                    dateTo: "04. 2022",
                    link: "https://noiyy.itch.io/snowcastle-meltdown",
                    otherLinks: ["https://noiyy.itch.io/snowcastle-meltdown", "https://ldjam.com/events/ludum-dare/50/snowcastle-meltdown"],
                    downloadName: "SnowcastleMeltdown - Windows",
                    shortInfo: "2D top-down pixel-art game, where you have to stop the meltdown of your snowcastle in a desert.",
                    info: [
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu ipsum vestibulum, finibus nulla sit amet, 
                        elementum mi. Proin congue molestie nunc eget pretium.`,
                        `Nullam eu dictum diam, eu tristique leo. Aenean laoreet nisi tortor, nec finibus justo dignissim ut. Proin congue molestie nunc eget pretium.`
                    ],
                    techStack: ["Ogmo3", "Pixel-art", "HaxeFlixel", "Haxe", "Aseprite"],
                    devNotes: [

                    ]
                },
                {
                    showcase: true,
                    name: "Égaré",
                    id: "egare",
                    thumbnail: require("../../assets/img/projects/Egare-main.png"),
                    images: [
                        require("../../assets/img/projects/Egare-1.png"),
                        require("../../assets/img/projects/Egare-2.png"),
                        require("../../assets/img/projects/Egare-3.png"),
                        require("../../assets/img/projects/Egare-4.png"),
                        require("../../assets/img/projects/Egare-5.png"),
                    ],
                    tags: [],
                    category: "game",
                    dateFrom: "03. 2022",
                    dateFromTimestamp: 1646092800,
                    dateToTimestamp: 1648771200,
                    dateTo: "04. 2022",
                    link: "https://noiyy.itch.io/egare",
                    otherLinks: ["https://noiyy.itch.io/egare"],
                    downloadName: "Egare - Windows.zip",
                    shortInfo: "Simple 2D pixel-art story-driven platformer game - made with HaxeFlixel for highschool graduation project.",
                    info: [
                        `
                            <h3> In the tales of old... </h3>
                            <p> ...there exists a mythical place called <span>Nimilinien</span> - an enchanted forest cave, where an unknown being called <span>Elidyr</span> lives. Darkness dwells deep within, one that lead to an unfortunate encounter that cost <span>Elidyr</span> his memories. </p>
                            <br>
                            <p class="g-info-bigger"> Follow <span>Elidyr's</span> story, help him regain his memories & find out what happened. </p>
                            <br>
                            <p class="g-info-thin"> In case you want to skip the story text, you can do so by pressing ENTER. You can also manually save the game state with pressing, otherwise it automatically saves every 30 seconds. </p>
                        `,
                    ],
                    techStack: ["Ogmo3", "Pixel-art", "HaxeFlixel", "Haxe", "Aseprite"],
                    devNotes: [
                        { date: "22/04/2022", text: "This was my first own game and it was made for a high school graduation project. I've been working on it for the past 2 months since the start of february 2022." }
                    ]
                },
            ]
        }
    },

    getters: {
        getProjects(state) {
            return state.projects;
        },

        getShowcaseProjects(state) {
            const projects = state.projects.filter(proj => proj.showcase);
            return projects.map(proj => ({
                name: proj.name,
                date: proj.dateTo,
                shortInfo: proj.shortInfo,
                id: proj.id,
                img: proj.thumbnail,
                link: proj.link
            }));
        },
    },

    actions: {

    },

    mutations: {

    }
}