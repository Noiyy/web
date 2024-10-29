const getAssetUrl = (path) => new URL(`/src/assets/${path}`, import.meta.url).href;
import { localization } from "../../localization";

const setupProjects = (state) => {
    const activeLocale = localStorage.getItem("locale");
    const $t = localization.global.messages[activeLocale];

    state.projects = [
        {
            showcase: true,
            name: "Rent Car Service",
            id: "rentCarService",
            thumbnail: getAssetUrl("img/projects/RentCarService-main.webp"),
            images: [
                getAssetUrl("img/projects/RentCarService-1.webp"),
                getAssetUrl("img/projects/RentCarService-2.webp"),
                getAssetUrl("img/projects/RentCarService-3.webp"),
                getAssetUrl("img/projects/RentCarService-4.png"),
                getAssetUrl("img/projects/RentCarService-5.png"),
                getAssetUrl("img/projects/RentCarService-6.png"),
                getAssetUrl("img/projects/RentCarService-7.webp"),
            ],
            tags: ["work"],
            category: "web",
            dateFrom: "08. 2024",
            dateFromTimestamp: 1722470400,
            dateToTimestamp: 1727740800,
            dateTo: "10. 2024",
            link: "https://rentcarservice.eu/",
            shortInfo: $t.RentCarServiceShortInfo,
            info: [
                `Mlem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu ipsum vestibulum, finibus nulla sit amet, 
                elementum mi. Proin congue molestie nunc eget pretium.`,
                `Nullam eu dictum diam, eu tristique leo. Aenean laoreet nisi tortor, nec finibus justo dignissim ut. Proin congue molestie nunc eget pretium.`
            ],
            techStack: ["MySQL", "Vue.js", "Express.js", "Bootstrap", "Webpack"]
        },
        {
            showcase: true,
            name: "VerbumWell",
            id: "verbumWell",
            thumbnail: getAssetUrl("img/projects/VW-main.webp"),
            images: [
                getAssetUrl("img/projects/VW-1.webp"),
                getAssetUrl("img/projects/VW-2.png"),
                getAssetUrl("img/projects/VW-3.png"),
                getAssetUrl("img/projects/VW-4.png"),
                getAssetUrl("img/projects/VW-5.webp"),
                getAssetUrl("img/projects/VW-6.png"),
                getAssetUrl("img/projects/VW-7.webp"),
                getAssetUrl("img/projects/VW-8.png"),
                getAssetUrl("img/projects/VW-9.webp"),
                getAssetUrl("img/projects/VW-10.png"),
            ],
            tags: [],
            category: "web",
            dateFrom: "05. 2024",
            dateFromTimestamp: 1714521600,
            dateToTimestamp: 1717200000,
            dateTo: "06. 2024",
            link: "https://verbum-well.up.railway.app/",
            shortInfo: $t.VerbumWellShortInfo,
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
            thumbnail:getAssetUrl("img/projects/TR-main.webp"),
            images: [
                getAssetUrl("img/projects/TR-1.png"),
                getAssetUrl("img/projects/TR-2.webp"),
                getAssetUrl("img/projects/TR-3.webp"),
                getAssetUrl("img/projects/TR-4.webp"),
                getAssetUrl("img/projects/TR-5.png"),
                getAssetUrl("img/projects/TR-6.png"),
                getAssetUrl("img/projects/TR-7.png"),
                getAssetUrl("img/projects/TR-8.png"),
            ],
            tags: [],
            category: "web",
            dateFrom: "12. 2023",
            dateFromTimestamp: 1701388800,
            dateToTimestamp: 1701388800,
            dateTo: "12. 2023",
            link: "https://noiyy.github.io/tsurugi-respite/",
            shortInfo: $t.TsurugiRespiteShortInfo,
            info: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu ipsum vestibulum, finibus nulla sit amet, 
                elementum mi. Proin congue molestie nunc eget pretium.`,
                `Nullam eu dictum diam, eu tristique leo. Aenean laoreet nisi tortor, nec finibus justo dignissim ut. Proin congue molestie nunc eget pretium.`
            ],
            techStack: ["Vue.js"]
        },
        {
            name: $t.Calculator,
            id: "calculator",
            thumbnail: getAssetUrl("img/projects/Calculator-main.png"),
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
            name: $t.RPS,
            id: "rockPaperScissors",
            thumbnail: getAssetUrl("img/projects/RockPaperScissors-main.png"),
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
            thumbnail: getAssetUrl("img/projects/Etch-a-Sketch-main.png"),
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
            name: $t.AwesomeNature,
            id: "awesomeNature",
            thumbnail: getAssetUrl("img/projects/AwesomeNature-main.webp"),
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
            thumbnail: getAssetUrl("img/projects/MajoPizza-main.webp"),
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
            thumbnail: getAssetUrl("img/projects/SnowcastleMeltdown-main.png"),
            images: [
                getAssetUrl("img/projects/SnowcastleMeltdown-1.png"),
                getAssetUrl("img/projects/SnowcastleMeltdown-2.png"),
                getAssetUrl("img/projects/SnowcastleMeltdown-3.png"),
            ],
            tags: ["jam"],
            category: "game",
            dateFrom: "04. 2022",
            dateFromTimestamp: 1648771200,
            dateToTimestamp: 1648771200,
            dateTo: "04. 2022",
            link: "https://noiyy.itch.io/snowcastle-meltdown",
            otherLinks: ["https://noiyy.itch.io/snowcastle-meltdown", "https://ldjam.com/events/ludum-dare/50/snowcastle-meltdown"],
            downloadName: "SnowcastleMeltdown - Windows.zip",
            shortInfo: $t.SnowcastleShortInfo,
            info: [ $t.SnowcastleInfo ],
            techStack: ["Ogmo3", "Pixel-art", "HaxeFlixel", "Haxe", "Aseprite"],
            devNotes: [

            ],
            gameControls: [
                { info: $t.movement, keys: ["arrows", "w", "a", "s", "d"], type: "all" },
                { info: $t.interact, keys: ["e"], type: "all" },
            ]
        },
        {
            showcase: true,
            name: "Égaré",
            id: "egare",
            thumbnail:getAssetUrl("img/projects/Egare-main.png"),
            images: [
               getAssetUrl("img/projects/Egare-1.png"),
               getAssetUrl("img/projects/Egare-2.webp"),
               getAssetUrl("img/projects/Egare-3.webp"),
               getAssetUrl("img/projects/Egare-4.webp"),
               getAssetUrl("img/projects/Egare-5.webp"),
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
            shortInfo: $t.EgareShortInfo,
            info: [ $t.EgareInfo ],
            techStack: ["Ogmo3", "Pixel-art", "HaxeFlixel", "Haxe", "Aseprite"],
            devNotes: [
                { date: "22/04/2022", text: $t.EgareDevNote1 }
            ],
            gameControls: [
                { info: $t.Movement, keys: ["arrows", "w", "a", "s", "d"], type: "all" },
                { info: $t.Transform, keys: ["x", "e"], type: "or" },
                { info: $t.Skip, keys: ["enter"], type: "all" },
                { info: $t.SaveGame, keys: ["u"], type: "all" }
            ]
        },
    ];
};

export default {
    namespaced: true,

    state() {
        return {
            projects: []
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
        updateProjects({commit}) {
            commit("updateProjects")
        },
    },

    mutations: {
        updateProjects(state) {
            setupProjects(state);
        },
    }
}