const logotext = "MaLow";
// Onglet Portfolio
const meta = {
    title: "Laurène C.",
    description: "Développeur Front-end React.js",
};

// Intro
const introdata = {
    title: "Laurène C.",
    animated: {
        // first: "Création & Développement",
        // second: "Applications & Sites Web",
        // third: "Front-end & React.js",
        // four: "Webdesign",

        first: "Développeuse Front-end React.js",
        second:"Applications & Sites Web",
        third: "Webdesign",
        four : "Conception, Développement & Gestion de projets"
      
    },
    description: "Ma mission : développer vos projets web, quelles que soient leurs dimensions, d'une landing page à une application web. J’ai une aspiration certaine pour l'innovation et le partage d'une vision commune autour d'un projet à l'aide de méthodes et outils adaptés.",
    //your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

//Qui suis-je?
const dataabout = {
    title: "MaLow",
    aboutme: "Laurène C, passionnée du web et du design, j'aime affiner et améliorer les idées pour les rendre accessibles à chacun. Agile et curieuse, j'utilise toute une palette de compétences pour réaliser des sites responsives ou des applications métiers, quels que soient leurs supports numériques.",
    aboutme2: "Concrètement, je développe des projets web tenant compte de l'expérience des utilisateurs et mêlant graphisme, ergonomie dans une interface qui leur rendra la vie plus belle ! J'adhère aux échanges constructifs pour partager une vision commune autour d'un projet à l'aide de méthodes et outils créatifs.",
    aboutme3: "Le reste du temps, l'image cuturelle et l'art font partie de ma vie ... le rêve et l'imaginaire aussi! Et quand il faut changer d'air : sauter dans un train, voyager, vibrer ... ou tout simplement méditer et laisser le corps s'exprimer posément ou en mouvement.",
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
        // name:"html",
        image: "",
        // value: 18,
    },
    {
        // name:"css",
        image: "https://ams03pap002files.storage.live.com/y4mhYU1glgza-xm38r5J57VRQR7h5-p_ESyCsrWa9WQsYkXWG38mns-4J6cDodcwndmits4fYrkjolubACo10r6ljiJaYOw_CDwu1dDboBJOKm1vOgfCMiG6Jl5S-kq0dNtrhiBlOs6DQNNSHn1Q3lthgkV0FfWpvryuOrjyZWwmG7-SNwIvNLvKO6UYBp_3b-EOrgAWTHFW5yoPHCyca8paKsWZVZCHCWT2MI0fAK-bUk?encodeFailures=1&width=512&height=512",
        // value: 18,
    },
    {
        // name:"js",
        image: "https://ams03pap002files.storage.live.com/y4m-Q9hPjjMdBSzrEgcXtxA4oCEixotCY_J7Bl7EaMJym3adm30gLKyGSKWC96Xib5tFtsCYC6sCKRriqtc6NPTGNo4h-NqzBYfphRxbjjZbMr7fNhdbsChR9lnEfe5U_HG2hdfdroigpG5T2bROlAQXgAs83LL6bPTSjfvqX2wma5wjdUYRK2rRA3I1JUN63E5YucVUv3Vu4OMU8Va0sIzShuJKAuEDMTWYl_LduqxUnk?encodeFailures=1&width=128&height=128",
        // value: 18,
    },
    {
        // name:"Sass",
        image: "https://ams03pap002files.storage.live.com/y4m5jVK86jAso2JQjd5lLCoB4JXfEqUp-Y6hDggUMeVHrrd9ynbZH_RGgcInGW4iW-SelqB_rYNZMPy-MK8BURVFVNridrKbUWF8t_71DnoqcR29rSW-mxdolZqgOdYsl9LRbbjzIthpUHRFF239gcAWoy_b624w1uy9UX7jHZLDk9i8SvQSalfkKwVu-SPm8pOj0UqoZ-5-Dn-BhMvULz4j_BDiQ98eHvEXGgh-9gAxvs?encodeFailures=1&width=1442&height=1442",
        // value: 18,
    },
    {
        // name:"Bootstrap",
        image: "https://ams03pap002files.storage.live.com/y4mix7TRW5cgvS0LjKvYp2zn9A_Ja4n9KcJisaNnhkv8DAeczZNeoc3sW0Y54Bfu25DHEQhBNhiddz3RkHAfndV5saZoxA1a9bN4GT-sKSxUj-1Gl4Q5cmKAUy2n7EB9PLA1nCBH9k55Xhorxeq1_KPzvO0mDbWf5PLW59X6SlPYhSHfLsa5BuT2jyYF93iPKr09Wi6eM5x7KpgYGhn67QNbib8V-kkd2ZIxe8zWluLrPA?encodeFailures=1&width=512&height=512",
        // value: 18,
    },
    {
        // name:"React.js",
        image: "https://ams03pap002files.storage.live.com/y4mo2P1ewm7jnueOlD63VwP9txIcXe5JIEcrdkLcL2M-gsCexqjJwfc9N-uH2ac04RjPWvA2MB0QTmuuuQf1iQMzYlApwRZkU1xYP0lMFtioGYQI-M22qko11-ze0qjPcc6cV8S8Wz9psrkFZOI8y7lrz8zfI_4BiRU6tKCaiRtHji_kNecNIjJzm_d_Mljauf-y7Gif08imCuTJRXKIBoWSjnzmP7c_kMcxyETUvr7JC8?encodeFailures=1&width=512&height=512",
        // value: 18,
    },
    {
        // name:"Redux",
        image: "https://ams03pap002files.storage.live.com/y4mCdYmKA3y5MGTvtme_g5NVbmAmSEOVHPp_SMu3p-nTKW0QQiahE06000dZfpYz0uwZTA0cbeR6Gg7A-huXzSUAZ7YgO5ajUwZpPrhyDbFLUOGX8MU9-h25jrkQJuNiO9VkvBNXANy1WaGNZS6FnVb-_rqrpaWx-4wAi3iVegI2Ebn8CAskjcz15CqJbRqbJYQnvxaIgzH2Y1kyFBFaxME-TkkM8FO46NzlsDjNy1uTbw?encodeFailures=1&width=800&height=800",
        // value: 18,
    },
    {
        // name:"Figma",
        image: "https://ams03pap002files.storage.live.com/y4mZ1diGj3BcWHpU1sHn-w6zaaUl1AALp4q4BZ43ZqSsC6uKVYn34Zt_HVwOai3A4EOY7fIxyv0_qAlfnabNshHJELVBHDK8SMAzjmDpBeAWbBLUKhzLuLMZtkkjDbHZ67f-q_oLKLDr3zcRVXwZEdsN1YqoLrRiBAJdJk9xvMpfzq5b3hwEuRlO1EILIio51OeBzF9QWJBZ7A2pRh3GVNZJAEyBnuSgPafaLequlyZuBU?encodeFailures=1&width=512&height=512",
        // value: 18,
    },
    {
        // name:"Adobe",
        image: "https://ams03pap002files.storage.live.com/y4mGtIXZlA3b7p1FsCsDqdsgcpo5xK8F6jVFCgpNKDvcJjIWH4ktBt4sl_1eMfb7P_F1WBtGeBM7_Tv23gwIImEjiWGic2o71mRpXaLfFs7P1V57SIAIRjlechfrvOyYfOaK1ovxwaAlwSJQ1rgUfIXQtAwKYhicTL0w_ZKEhYJli24NGaUAmSum66myOYP53hR4aRGN11RcdWjqskq9EAEB23_-Td0VNRd1yl_by6-zpE?encodeFailures=1&width=512&height=512",
        // value: 18,
    },
    {
        // name:"Github",
        image: "https://ams03pap002files.storage.live.com/y4m5QD8FKOAIfRjWuKsaMI85X7zURwtqZwHaH175vZ_bhy2Q7AwTHyaFu9Vebsz9F4LAQwSS_EkP247mi8jkLihZoeNaw0fHH-XQd9OD91qX64vywRYy0h4Tzkr-0m7sS7pLr9doB7fszf6s_85mEPuc4ScbZJ8kET6U-ePV6LEwMOQcc6oBcq0pQ_kqGSOiS5rfBDO_Q-2Zr9cUHhIm358EUmwlgmSHrson3mBwBq61aA?encodeFailures=1&width=512&height=512",
        // value: 18,
    },
    {
        // name:"Notion.io",
        image: "https://ams03pap002files.storage.live.com/y4mxz-yComPAy_PKJY2cCQ1Ij3AzGFlM12NMMjnneraCyUNJy1TlVGSD_evUeB1OKn3lQmV7TyM4x3I-LX9dZERdfShJ5SwPjuIC_XXAOwuiJgcP5T79A10SdL2jwAab4IYyX3w1I06OdLJjveWDWXp_WlVW8rtxJpUcEOwoGPu31hN7rpUw3T6WfmgwcGFN7k2H5JtQ4Ur_3klPegfStI-Z9avECi5cS6nVgW8hInBwrU?encodeFailures=1&width=512&height=512",
        // value: 18,
    },
    {
        // name:"Trello",
        image: "https://ams03pap002files.storage.live.com/y4mM-ISbE69U7F2PueAQpfJcBKKPIh5jtu0kLEVjBi067f5oxB4ZGSbUKwIte-UOGS1QZG5RTDS9NX6gEGnUqe8qewEh59uWGuaKXKVBH_8oWOyKa4zKilaHFOBxPv3CKMOMsaVzT1mzis_IkTHNmco-jRo1JDnjiwJOVyJ40xQ5sQ4SEFJ91amF-ZJRq_LimA4aU6fGD7M44su8_ey9xrN375bMlL3D2tFYLmYgnCQ5DE?encodeFailures=1&width=900&height=700",
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
        description: "Conception Portfolio",
        techno: "Figma",
        link: "https://www.figma.com/file/bcaryKYEJjV3sv0pyqbekC/PORTFOLIO-DEV-FRONT?node-id=0%3A1",
        github: "https://github.com/Laurene45/portfolio-frontend",
    },
    {
        projet: 11,
        img: "https://github.com/Laurene45/LaureneCourde_11_24032022/blob/main/kasa/documentation/kasa.png?raw=true",
        title: "KASA",
        type : "Application",
        description: "Application location d'appartements entre particuliers",
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