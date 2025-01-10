import { createI18n } from "vue-i18n";
const i18nOptions = {
    locale: "en",
    fallbackLocale: "en",
    messages: {
        // ENGLISH
        en: {
            Home: "Home",
            Projects: "Projects",
            About: "About",
            Contact: "Contact",
            FooterCopyText: "© Benjamín Muľár 2025, all rights reserved.",
            Err404: "404 Not found!",
            Back: "back",
            FooterSocialLabel1: "View my",
            FooterSocialLabel2: "profile",
            HeroFullText: "Hi! I'm Benjamín Muľár, frontend web developer and a hobbyist game creator.",
            Hero1: "Hi! I'm",
            MyName: "Benjamín Muľár",
            Hero2: ", frontend web developer ",
            Hero3: "and a hobbyist game creator.",
            ContactMe: "Contact me",
            ProjectsShowcase: "Projects Showcase",
            Detail: "Detail",
            View: "View",
            ShowcaseCTAText: "Check out my other projects",
            ProjectsDescription: "Most of the projects I created in until now, be it webdev, gamedev or others...",
            AllProjects: "All projects",
            AboutMe: "About me",
            About1: `I'm a <span>front-end web developer</span> studying <span>multimedia</span> from Slovakia. I also
                    like creating PC games & <span>websites</span> in my free time, doing <span>calisthenics</span> and
                    listening to <span>BMTH</span> & <span>LP</span>.`,
            About2: `I've started my coding journey with <span>websites</span> and  also had experiences with numerous
                    languages. But other than <span>webdev</span>, <span>Haxe</span> really stood out as I also developed
                    <span>games</span> with it.`,
            About3: `I've also taken an interest in <span>design</span> and <span>music - piano</span>. And if you haven't
                    noticed, I love the <span>sky</span>, <span>clouds</span> and <span>nature</span> overall! :)`,
            About4: `Currently, I'm an <span>university student</span> also working part-time as a <span>front-end developer</span>
                    at <span>EMTest</span>, creating transport web systems with <span>Vue.js</span>`,
            ContactText: `Have any questions about me or my work? Need a beautiful & professional website? Feel free to contact me!`,
            Archive: "Archive",
            AfterProjectsText: "... and many more to come! :)",
            NoProjectsText: "Oh no! Looks like there are no projects in this category yet...",
            Webdev: "Webdev",
            Gamedev: "Gamedev",
            Others: "Others",
            All: "All",
            Study: "Study",
            Work: "Work",
            Jam: "Jam",
            Or: "or",
            BackToProjects: "Back to projects",
            SeeFullWeb: "See the full website",
            ProjectInfo: "Project info",
            UnsupportedGameMobile: "Sorry, seems like this one isn't supported on mobile! :(",
            GameStuckNote: "Note: You may need to refresh the page if the game is stuck/frozen on loading screen for a long time.",
            Controls: "Controls",
            DevNote: "Dev note",
            RentCarServiceShortInfo: "Simple responsive web application for renting cars, with contact form & admin panel. Made for a client, with Express & Vue",
            VerbumWellShortInfo: "Fully responsive web application for posting, made for university semestral work - developed with Express.js",
            TsurugiRespiteShortInfo: "Frontend e-shop website selling japanese swords, originally made for university semestral work - developed with Vue.js",
            Calculator: "Calculator",
            RPS: "Rock Paper Scissors",
            AwesomeNature: "Awesome Nature",
            SnowcastleShortInfo: "2D top-down pixel-art game, where you have to stop the meltdown of your snowcastle in a desert.",
            SnowcastleInfo: `
                <span> This game was made for Ludum Dare 50 JAM in 72hours </span>
                <h3> Topdown 2D pixel-art game about protecting your snowcastle from melting. </h3>
                <br>
                <p> It was always your dream to have a <span>magnificent snow castle</span> in <span>desert</span> and now that it's done, you have to face the problem of it <span>melting down.</span> Protect it by making <span>snow & ice inside caves</span>, where it's cold and fortify your castle so it may stand another day! </p>
                <br>
                <p> You start with full water <span>(refill your water from traders)</span>, and water's used for making ice in caves. Specifically, you have to enter a cave, find a pond and pour your water in it! It'll eventually <span>freeze</span> - at that moment, you can collect <span>ice!</span> If you have ice, go quickly to your <span>snowcastle</span> to restore it a little bit! </p>
                <p> Watch out! <span>Each day, the sun burns more intensely than before!</span> How long can your snowcastle hold out? </p>
            `,
            Movement: "movement",
            Interact: "interact",
            EgareShortInfo: "Simple 2D pixel-art story-driven platformer game - made with HaxeFlixel for highschool graduation project.",
            EgareInfo: `
                <h3> In the tales of old... </h3>
                <p> ...there exists a mythical place called <span>Nimilinien</span> - an enchanted forest cave, where an unknown being called <span>Elidyr</span> lives. Darkness dwells deep within, one that lead to an unfortunate encounter that cost <span>Elidyr</span> his memories. </p>
                <br>
                <p class="g-info-bigger"> Follow <span>Elidyr's</span> story, help him regain his memories & find out what happened. </p>
                <br>
                <p class="g-info-thin"> In case you want to skip the story text, you can do so by pressing ENTER. You can also manually save the game state with pressing, otherwise it automatically saves every 30 seconds. </p>
            `,
            EgareDevNote1: "This was my first own game and it was made for a high school graduation project. I've been working on it for the past 2 months since the start of february 2022.",
            Transform: "transform",
            Skip: "skip",
            SaveGame: "save game",
            MyWebArchive: "My web archive",
            WebV1Text1: "This was my first personal web, that wasn't just for learning, but actually to show my skills and work I did so far.",
            WebV1Text2: "It was made with Jekyll (SSG) and was also my first real try at Bootstrap. It also contained a blog.",
            WebV2Text1: "Current version of my website. Three years passed & I didn't like the old design anymore haha :P",
            WebV2Text2: "The idea was to make a clean design with focus on colorful gradients that change colors with local time. Developed with Vue, Vite and Bootstrap, design made in Figma.",
        },

        // SLOVAK
        sk: {
            Home: "Domov",
            Projects: "Projekty",
            About: "O mne",
            Contact: "Kontakt",
            FooterCopyText: "© Benjamín Muľár 2025, všetky práva vyhradené.",
            Err404: "404 Nenašlo sa!",
            Back: "späť",
            FooterSocialLabel1: "Zobraziť môj",
            FooterSocialLabel2: "profil",
            HeroFullText: "Ahoj! Som Benjamín Muľár, frontend web vývojar a hobby tvorca hier.",
            Hero1: "Ahoj! Som",
            MyName: "Benjamín Muľár",
            Hero2: ", frontend web vývojar ",
            Hero3: "a hobby tvorca hier.",
            ContactMe: "Kontaktujte ma",
            ProjectsShowcase: "Ukážka projektov",
            Detail: "Detail",
            View: "Zobraziť",
            ShowcaseCTAText: "Pozrite si aj moje ďalšie projekty",
            ProjectsDescription: "Väčšina projektov, ktoré som vytvoril doteraz, či už webstránky, hry alebo iné...",
            AllProjects: "Všetky projekty",
            AboutMe: "O mne",
            About1: `Som <span>front-end web vývojár</span> študujúci <span>multimedia</span> zo Slovenska. Rád
                    vytváram PC hry a <span>webstránky</span> v mojom voľnom čase, cvičím <span>kalisteniku</span>,
                    počúvam <span>BMTH</span> a <span>LP</span>.`,
            About2: `Svoju cestu v programovaní som začal s <span>webstránkami</span> a takisto som mal skúsenosti s viacerými
                    jazykmi. Ale okrem <span>vývoja webov</span>, vynikal jazyk <span>Haxe</span>, keďže som aj vyvíjal
                    <span>hry</span> s Haxe.`,
            About3: `Zaujíma ma aj <span>dizajn</span> a <span>hudba - klavír</span>. A ak ste si nevšimli, milujem
                    <span>oblohu</span>, <span>mraky</span> a celkovo <span>prírodu</span>! :)`,
            About4: `Momentálne som <span>študnentom na univerzite</span> a pracujem aj ako part-time <span>front-end vývojar</span>
                    vo firme <span>EMTest</span>, kde vytváram web systémy pre dopravu pomocou <span>Vue.js</span>`,
            ContactText: `Máte akékoľvek otázky o mne alebo mojej práci? Potrebujete krásnu a profesionálnu webstránku? Neváhajte ma kontaktovať!`,
            Archive: "Archív",
            AfterProjectsText: "... a oveľa viac budúcich! :)",
            NoProjectsText: "Och nie! Vyzerá to tak, že v tejto kategórii nie sú zatiaľ žiadne projekty...",
            Webdev: "Weby",
            Gamedev: "Hry",
            Others: "Ostatné",
            All: "Všetko",
            Study: "Štúdium",
            Work: "Práca",
            Jam: "Jam",
            Or: "alebo",
            BackToProjects: "Späť k projektom",
            SeeFullWeb: "Zobraziť webstránku",
            ProjectInfo: "Info o projekte",
            UnsupportedGameMobile: "Prepáčte, táto hra nie je podporovaná na mobile! :(",
            GameStuckNote: "Pozn.: Možno bude potrebné obnovenie stránky ak je hra zaseknutá na načítavaní dosť dlho.",
            Controls: "Ovládanie",
            DevNote: "Dev pozn.",
            RentCarServiceShortInfo: "Jednoduchá responzívna web aplikácia pre požičiavanie aut, s kontaktným formulárom a admin pandelom. Vytvorené pre klienta, s Express & Vue",
            VerbumWellShortInfo: "Plne responzívna web aplikácia pre publikovanie článkov/blogov, vytvorená ako semestrálna práca - vyvíjané s Express.js",
            TsurugiRespiteShortInfo: "Frontend e-shop webstránka predávajúca japonské meče, originálne vytvorená ako semestrálna práca - vyvíjané s Vue.js",
            Calculator: "Kalkulačka",
            RPS: "Kameň Papier Nožnice",
            AwesomeNature: "Úžasná Príroda",
            SnowcastleShortInfo: "2D top-down pixel-art hra, kde je cieľom zastavenie roztopenia snehového hradu v púšti.",
            SnowcastleInfo: `
                <span> Táto hra bola vytvorená pre Ludum Dare 50 JAM za 72hodín </span>
                <h3> Topdown 2D pixel-art hra o ochranení snehového hradu pred roztopením. </h3>
                <br>
                <p> Vždy to bol tvoj seň mať  <span>veľkolepý snehový hrad </span> v <span>púšti</span> a teraz keď to je realtiou, musíš čeliť problému <span>roztopenia hradu</span> Ochráň ho robením <span>snehu a ľadu v jaskyniach</span>, kde je chladno a spevni svoj hrad, nech môže stáť ďalší deň! </p>
                <br>
                <p> Začínaš s plnou vodou <span>(doplň ju pri obchodníkoch)</span>, tá sa používa na výrobu ľadu v jaskyniach. Presnejšie, musíš vojsť do jaskyne, nájsť jazierko do ktorého vyleješ vodu! Po čase sa <span>zamrazí</span> - v tomto momente môžeš získať <span>ľad!</span> Ak už máš ľad, tak choď rýchlo k svojmu <span>snehovému hradu</span> aby si ho trošku obnovil! </p>
                <p> Ale pozor! <span>Každý deň, slnko páli silnejšie ako predtým!</span> Ako dlho dokáže tvoj snehový hrad vydržať? </p>
            `,
            Movement: "pohyb",
            Interact: "interakcia",
            EgareShortInfo: "Jednoduchá 2D pixel-art platformová hra zameraná na príbeh - vytvorené s HaxeFlixel pre záverečný projekt na strednej škole.",
            EgareInfo: `
                <h3> V starých príbehoch...... </h3>
                <p> ...existuje mýtické miesto nazvané <span>Nimilinien</span> - lesnatá začarovaná jaskyňa, kde existuje neznáme stvorenie menom <span>Elidyr</span>. Temnota prebýva hlboko vnútri, ktorá vedie k nešťastnému stretuniu, ktoré stojí <span>Elidyra</span> jeho spomienky. </p>
                <br>
                <p class="g-info-bigger"> Sleduj <span>Elidyrov</span> príbeh, pomôž mu znovu získať jeho spomienky a zisti čo sa stalo. </p>
                <br>
                <p class="g-info-thin"> Ak chceš preskočiť text príbehu, tak stlač klávesu ENTER. Tak isto sa dá manuálne uložiť hra stlačením klávesu U, inak sa hra automaticky ukladá každých 30 sekúnd </p>
            `,
            EgareDevNote1: "Toto bola moja prvá hra, vytvorená pre záverečný projekt na strednej škole. Pracoval som na nej posledné 2 mesiace od začiatku februára 2022.",
            Transform: "transformácia",
            Skip: "preskočiť",
            SaveGame: "uloženie hry",
            MyWebArchive: "Môj web archív",
            WebV1Text1: "Toto bol môj prvý osobný web, ktorý nebol len pre učenie, ale hlavne na vyobrazenie mojich zručnosti a práce čo som doposiaľ robil.",
            WebV1Text2: "Bol vytvorený pomocou Jekyll (SSG) a bol takisto mojim prvým reálnym pokusom s Bootstrap-om. Obsahoval aj blog.",
            WebV2Text1: "Aktuálna verzia mojej webstránky. Prešli 3 roky a nepáčil sa mi už starý dizajn haha :P",
            WebV2Text2: "Nápad bolo vytvoriť 'čistý' dizajn zameraný na farebné gradienty, ktoré menia farbu s lokálnym časom. Vyvíjaný s Vue, Vite a Developed with Vue, Vite a Bootstrap-om. Dizajn robený vo Figme.",
        }
    }
};
const localization = createI18n(i18nOptions);
export { localization }