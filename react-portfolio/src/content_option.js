const logotext = "MaLoWeb";
// Onglet Portfolio
const meta = {
    title: "Laurène C.",
    description: "Développeur front-end",
};

// Intro
const introdata = {
    title: "Laurène C.",
    job: "Développeur Front-end",
    animated: {
        // first: "Création & Développement",
        // second: "Applications & Sites Web",
        // third: "Front-end & React.js",
        // four: "Webdesign",

        first: "Développeur Front-end",
        second:"React.js",
        third: "Applications & Sites Web",
        four : "WebDesign",
        five : "Conception, Développement & Gestion de projets"
      
    },
    //subtitle: "Front-end : ",
    //resume: " Front-end : Partie du code reçue par votre navigateur web. Ce sont les éléments intéractifs ou non du site web que vous apercevez sur votre écran. Ils sont composés de 3 langages: Html, Css et Javascript.",
    //subtitle2: "Ma Mission: ",
    description: " Ma mission : développer vos projets web, quelles que soient leurs dimensions : d'une landing page, d'un site web à une application web. J’ai une aspiration certaine pour l'innovation et le partage d'une vision commune autour d'un projet à l'aide de méthodes et outils adaptés.",
    //your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
    information: "Venez découvrir mon profil et consulter mes projets.",
};

//Qui suis-je?
const dataabout = {
    title: "MaLoWeb",
    aboutme: "Laurène C. , passionnée du web et du design, j'aime affiner et améliorer les idées pour les rendre accessibles à chacun. Agile et curieuse, j'utilise toute une palette de compétences techniques et créatives pour réaliser des sites responsives ou des applications métiers, quels que soient leurs supports numériques.",
    aboutme2: "Concrètement, je développe des projets web tenant compte de l'expérience des utilisateurs en mêlant graphisme, ergonomie dans une interface qui leur rendra la vie plus belle ! J'adhère aux échanges constructifs pour partager une vision commune autour d'un projet à l'aide de méthodes et outils créatifs.",
    aboutme3: "Le reste du temps, l'image culturelle, l'art, les livres fantastiques et la lithothérapie font partie de ma vie ... la magie, le rêve et l'imaginaire aussi! Et quand il faut changer d'air : sauter dans un train, voyager, vibrer, se libérer ... ou tout simplement méditer et laisser le corps s'exprimer. ",
};  
const worktimeline = [{
        jobtitle: " Formation Développeur d’applications Front-End React.Js",
        where: "Openclassrooms Paris",
        date: "2021/2022",
    },
    {
        jobtitle: "Formation Webdesigner",
        where: "Nextformation Paris",
        date: "2019/2020",
    },
    {
        jobtitle: "BTS Force de vente",
        where: "Lycée Montargis",
        date: "2003/2005",
    },
];

const skills = [{
        name:"HTML5",
        image: "https://github.com/Laurene45/portfolio-frontend/blob/main/react-portfolio/src/assets/images/pictogrammes/html.png?raw=true",
        // value: 18,
    },
    {
        name:"CSS3",
        image: "https://github.com/Laurene45/portfolio-frontend/blob/main/react-portfolio/src/assets/images/pictogrammes/css.png?raw=true",
        // value: 18,
    },
    {
        name:"JAVASCRIPT",
        image: "https://github.com/Laurene45/portfolio-frontend/blob/main/react-portfolio/src/assets/images/pictogrammes/javascript.png?raw=true",
        // value: 18,
    },
    {
        name:"SASS",
        image: "https://github.com/Laurene45/portfolio-frontend/blob/main/react-portfolio/src/assets/images/pictogrammes/sass.png?raw=true",
        // value: 18,
    },
    {
        name:"Bootstrap",
        image: "https://github.com/Laurene45/portfolio-frontend/blob/main/react-portfolio/src/assets/images/pictogrammes/bootstrap.png?raw=true",
        // value: 18,
    },
    {
        name:"REACT.JS",
        image: "https://github.com/Laurene45/portfolio-frontend/blob/main/react-portfolio/src/assets/images/pictogrammes/react.png?raw=true",
        // value: 18,
    },
    {
        name:"REDUX",
        image: "https://github.com/Laurene45/portfolio-frontend/blob/main/react-portfolio/src/assets/images/pictogrammes/redux.png?raw=true",
        // value: 18,
    },
    {
        name:"WORDPRESS",
        image: "https://github.com/Laurene45/portfolio-frontend/blob/main/react-portfolio/src/assets/images/pictogrammes/wordpress.png?raw=true",
        // value: 18,
    },
    {
        name:"STORYBOOK",
        image: "https://github.com/Laurene45/portfolio-frontend/blob/main/react-portfolio/src/assets/images/pictogrammes/storybook.png?raw=true",
        // value: 18,
    },
    {
        name:"NPM",
        image: "https://github.com/Laurene45/portfolio-frontend/blob/main/react-portfolio/src/assets/images/pictogrammes/npm.png?raw=true",
        // value: 18,
    },
    {
        name:"FIGMA",
        image: "https://github.com/Laurene45/portfolio-frontend/blob/main/react-portfolio/src/assets/images/pictogrammes/figma.png?raw=true",
        // value: 18,
    },
    {
        name:"ADOBE",
        image: "https://github.com/Laurene45/portfolio-frontend/blob/main/react-portfolio/src/assets/images/pictogrammes/adobe.png?raw=true",
        // value: 18,
    },
    {
        name:"GITHUB",
        image: "https://github.com/Laurene45/portfolio-frontend/blob/main/react-portfolio/src/assets/images/pictogrammes/github.png?raw=true",
        // value: 18,
    },
    {
        name:"NOTION.IO",
        image: "https://github.com/Laurene45/portfolio-frontend/blob/main/react-portfolio/src/assets/images/pictogrammes/notion.io.png?raw=true",
        // value: 18,
    },
    {
        name:"TRELLO",
        image: "https://github.com/Laurene45/portfolio-frontend/blob/main/react-portfolio/src/assets/images/pictogrammes/trello.jpg?raw=true",
        // value: 18,
    },
];

const services = [{
        title: "Développement Front-end",
        description: "Conception et réalisation au cœur du fonctionnement de votre application / site web.",
    },
    {
        title: "UI & UX Design",
        description: "Un produit réussi est celui, au visuel agréable, qui correspond le mieux aux besoins et ressentis des utilisateurs.",
    },
    {
        title: "Gestion de projet - Méthode Agile",
        description: "Les changements doivent être considérés comme des opportunités plutôt que des obstacles. De nouvelles idées pour apporter des fonctionnalités. Le partage reste la clé.",
    },
    {
        title: "Refonte de site Web",
        description: "Un goût de renouveau ! Une nouvelle technologie de développement web pour optimiser votre application / site web.",
    },
];

const dataportfolio = [{
    // en colonne
        projet: 2,
        img: "https://github.com/Laurene45/LaureneCourde_2_24032021/blob/main/Documentation/Reservia.png?raw=true",
        title: "RESERVIA",
        type : "Site web",
        description: "Réservation de location",
        techno: "Html / Css",
        link: "https://laurene45.github.io/LaureneCourde_2_24032021/",
        github: "https://github.com/Laurene45/LaureneCourde_2_24032021",
    },
    {
        projet: 3,
        img: "https://github.com/Laurene45/LaureneCourde_3_19042021/blob/main/documentation/Ohmyfood.png?raw=true",
        title: "OHMYFOOD",
        type : "Site web",
        description: "Commande de repas en ligne",
        techno: "Html / Sass - Animation Css",
        link: "https://laurene45.github.io/LaureneCourde_3_19042021/",
        github: "https://github.com/Laurene45/LaureneCourde_3_19042021",
    },
    {
        projet: 4,
        img: "https://github.com/Laurene45/LaureneCourde_4_17052021/blob/master/documentation/Modal_GameOn.png?raw=true",
        title: "GAMEON",
        type : "Landing page",
        description: "Formulaire d'inscription au marathon des jeux vidéos",
        techno: "Html / Css / Js",
        link: "https://laurene45.github.io/LaureneCourde_4_17052021/",
        githun: "https://github.com/Laurene45/LaureneCourde_4_17052021",
    },
    //p5 : Test
    {
        projet: 6,
        img: "https://github.com/Laurene45/LaureneCourde_6_05072021/blob/main/documentation/Fisheye-Photographers.png?raw=true",
        title: "FISHEYES",
        type : "Site web",
        description: "Plateforme de photographes",
        techno: "Html / Css / Js - Accessibilité",
        link: "https://laurene45.github.io/LaureneCourde_6_05072021/",
        github: "https://github.com/Laurene45/LaureneCourde_6_05072021",
    },
    {
        projet: 7,
        img: "https://github.com/Laurene45/LaureneCourde_7_13092021/blob/algo_1/documentation/Les-petits-plats.png?raw=true",
        title: "LES PETITS PLATS",
        type : "Site web",
        description: "Algorithme de recherches sur des recettes de cuisine",
        techno: "Html / Css / Js",
        link: "https://laurene45.github.io/LaureneCourde_7_13092021/",
        github: "https://github.com/Laurene45/LaureneCourde_7_13092021",
    },
    //p8 : Test
    {
        projet: 9,
        img: "https://github.com/Laurene45/Billed-app-FR-Front/blob/main/documentation/billed.png?raw=true",
        title: "BILLED",
        type : "Saas RH",
        description: "Tests unitaires, intégration, plan E2E",
        techno: "Html / Css / Js - Jest",
        link: "https://github.com/Laurene45/Billed-app-FR-Front/blob/main/documentation/billed.png?raw=true",
        github: "https://github.com/Laurene45/Billed-app-FR-Front",
        other: "Api back-end - accès image uniquement",
    },
    {
        projet: 10,
        img: "https://github.com/Laurene45/LaureneCourde_10_22122021/blob/main/documentation/Appli-soutien-scolaire-DESKTOP-%E2%80%93-Figma%20(2).png?raw=true",
        title: "LEARN@HOME",
        type : "Conception",
        description: "Application de soutien scolaire",
        techno: "Figma - User stories - Diagramme d'usage",
        link: "https://www.figma.com/file/z2SDsWS4E079MoM7LdmAaM/Appli-soutien-scolaire-DESKTOP?node-id=0%3A1",
        github: "https://github.com/Laurene45/LaureneCourde_10_22122021",
    },
    {
        projet: 15,
        img: "https://github.com/Laurene45/portfolio-frontend/blob/main/maquette_figma/PORTFOLIO-DEV-FRONT-%E2%80%93-Figma.png?raw=true",
        title: "PORTFOLIO",
        type : "Conception",
        description: "Portfolio",
        techno: "Figma",
        link: "https://www.figma.com/file/bcaryKYEJjV3sv0pyqbekC/PORTFOLIO-DEV-FRONT?node-id=0%3A1",
        github: "https://github.com/Laurene45/portfolio-frontend",
    },
    {
        projet: 11,
        img: "https://github.com/Laurene45/LaureneCourde_11_24032022/blob/main/kasa/documentation/kasa.png?raw=true",
        title: "KASA",
        type : "Application",
        description: "Location d'appartements entre particuliers",
        techno: "React.js - React Router",
        link: "https://laurene-courde-11-24032022.vercel.app/",
        github: "https://github.com/Laurene45/LaureneCourde_11_24032022",
    },
    {
        projet: 12,
        img: "https://github.com/Laurene45/LaureneCourde_12_19052022-/blob/main/sportsee/documentation/sportsee.png?raw=true",
        title: "SPORTSEE",
        type : "Application",
        description: "Tableau de bord analytique de coaching sportif",
        techno: "React.js - Recharts - Docker",
        link: "https://sportsee-lovat.vercel.app/",
        github: "https://github.com/Laurene45/LaureneCourde_12_19052022-",
        other: "Api Docker",
    },
    {
        projet: 13,
        img: "https://github.com/Laurene45/LaureneCourde_13_29062022/blob/main/bankapi/documentation/bankapi.png?raw=true",
        title: "ARGENT BANK",
        type : "Application",
        description: "Compte bancaire utilisateur",
        techno: "React.js - Redux",
        link: "https://argent-bank-omega.vercel.app/",
        github: "https://github.com/Laurene45/LaureneCourde_13_29062022",
        other: "Api back-end - accès pages accueil & connexion uniquement",
    },
    {
        projet: 14,
        img: "https://github.com/Laurene45/LaureneCourde_14_31082022/blob/main/wealth_health/Documentation/hrnet.png?raw=true",
        title: "HRNET",
        type : "Refonte projet web",
        description: "Librairie Jquery transférée vers React",
        techno: "React.js - Redux - Modal",
        link: "https://hrnet-cyan.vercel.app/",
        github: "https://github.com/Laurene45/LaureneCourde_14_31082022",
    },
];

const contactConfig = {
    YOUR_EMAIL: "laurene.courde@gmail.com",
    YOUR_FONE: "06 12 66 56 58",
    description: "Vous pouvez également me contacter via ce formulaire.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_rl93mq3",
    YOUR_TEMPLATE_ID: "template_rkatazh",
    YOUR_USER_ID: "o1cfnGT3RhvOQhv7c",
};

const socialprofils = {
    github: "https://github.com/Laurene45",
    linkedin: "https://www.linkedin.com/in/laurene-courde-0b094989/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};