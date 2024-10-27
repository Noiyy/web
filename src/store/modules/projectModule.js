const getAssetUrl = (path) => new URL(`/src/assets/${path}`, import.meta.url).href;

export default {
    namespaced: true,

    state() {
        return {
            projects: [
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
                    name: "Rock Paper Scissors",
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
                    name: "Awesome Nature",
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
                    shortInfo: "2D top-down pixel-art game, where you have to stop the meltdown of your snowcastle in a desert.",
                    info: [
                        `
                            <span> This game was made for Ludum Dare 50 JAM in 72hours </span>
                            <h3> Topdown 2D pixel-art game about protecting your snowcastle from melting. </h3>
                            <br>
                            <p> It was always your dream to have a <span>magnificent snow castle</span> in <span>desert</span> and now that it's done, you have to face the problem of it <span>melting down.</span> Protect it by making <span>snow & ice inside caves</span>, where it's cold and fortify your castle so it may stand another day! </p>
                            <br>
                            <p> You start with full water <span>(refill your water from traders)</span>, and water's used for making ice in caves. Specifically, you have to enter a cave, find a pond and pour your water in it! It'll eventually <span>freeze</span> - at that moment, you can collect <span>ice!</span> If you have ice, go quickly to your <span>snowcastle</span> to restore it a little bit! </p>
                            <p> Watch out! <span>Each day, the sun burns more intensely than before!</span> How long can your snowcastle hold out? </p>
                        `
                    ],
                    techStack: ["Ogmo3", "Pixel-art", "HaxeFlixel", "Haxe", "Aseprite"],
                    devNotes: [

                    ],
                    gameControls: [
                        { info: "movement", keys: ["arrows", "w", "a", "s", "d"], type: "all" },
                        { info: "interact", keys: ["e"], type: "all" },
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
                    ],
                    gameControls: [
                        { info: "movement", keys: ["arrows", "w", "a", "s", "d"], type: "all" },
                        { info: "transform", keys: ["x", "e"], type: "or" },
                        { info: "skip", keys: ["enter"], type: "all" },
                        { info: "save game", keys: ["u"], type: "all" }
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