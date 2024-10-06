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
                        
                    ],
                    tags: ["work"],
                    category: "web",
                    dateFrom: "08. 2024",
                    dateFromTimestamp: 1722470400,
                    dateToTimestamp: 1727740800,
                    dateTo: "10. 2024",
                    link: "https://rentcarservice.eu/",
                    shortInfo: "Simple responsive web application for renting cars, with contact form & admin panel. Made for a client. Made with Express & Vue",
                    info: "todo",
                },
                {
                    showcase: true,
                    name: "VerbumWell",
                    id: "verbumWell",
                    thumbnail: require("../../assets/img/projects/VW-main.png"),
                    images: [

                    ],
                    tags: [],
                    category: "web",
                    dateFrom: "05. 2024",
                    dateFromTimestamp: 1714521600,
                    dateToTimestamp: 1717200000,
                    dateTo: "06. 2024",
                    link: "https://verbum-well.up.railway.app/",
                    shortInfo: "Fully responsive web application for posting, made for university semestral work - developed with Express.js",
                    info: "todo"
                },
                {
                    name: "Tsurugi Respite",
                    id: "tsurugiRespite",
                    thumbnail: require("../../assets/img/projects/TR-main.png"),
                    images: [

                    ],
                    tags: [],
                    category: "web",
                    dateFrom: "12. 2023",
                    dateFromTimestamp: 1701388800,
                    dateToTimestamp: 1701388800,
                    dateTo: "12. 2023",
                    link: "https://noiyy.github.io/tsurugi-respite/",
                    shortInfo: "E-shop website selling japanese swords, originally made for university semestral work - developed with Vue.js",
                    info: "todo"
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

                    ],
                    tags: ["jam"],
                    category: "game",
                    dateFrom: "04. 2022",
                    dateFromTimestamp: 1648771200,
                    dateToTimestamp: 1648771200,
                    dateTo: "04. 2022",
                    link: "https://noiyy.itch.io/snowcastle-meltdown",
                    shortInfo: "2D top-down pixel-art game, where you have to stop the meltdown of your snowcastle in a desert.",
                    info: "todo"
                },
                {
                    showcase: true,
                    name: "Égaré",
                    id: "egare",
                    thumbnail: require("../../assets/img/projects/Egare-main.png"),
                    images: [

                    ],
                    tags: [],
                    category: "game",
                    dateFrom: "03. 2022",
                    dateFromTimestamp: 1646092800,
                    dateToTimestamp: 1648771200,
                    dateTo: "04. 2022",
                    link: "https://noiyy.itch.io/egare",
                    shortInfo: "Simple 2D pixel-art story-driven platformer game - made with HaxeFlixel for highschool graduation project.",
                    info: "todo"
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