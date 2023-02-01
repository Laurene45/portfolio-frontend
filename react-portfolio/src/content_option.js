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
        //first: "Création & Développement",
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
        image: "https://ams03pap002files.storage.live.com/y4mN-znCOpMOMBkf2Uky_fGOznGjhN4kTnho9QIpJsIhGFDBQveCqhAN-Kcik4Z_yS_7Mn8Xt_Q5sU7-Y8_BnrGfKrB43c8SOsH6qyadov_MM3Bh_GwhEKH7okkjWnMgRO2vmjeQ99gWePpRUEZYqydqN6bdp1Lrfbfqxh20f2-wO1ACDZvqAhznso32bUY_D4sYaCHg6GaGbyKDuYHvylQsfiOVpKjADtWycVgJVfUo28?encodeFailures=1&width=512&height=512",
        // value: 18,
    },
    {
        // name:"css",
        image: "https://ams03pap002files.storage.live.com/y4miz8W-gPnO1FCdtx7L18gE6Ct6vRrIlOniHm77h8eC14otpU6C4OH-OzViHvRox3lT1dL-nuqGI1ELRYcHTsxufHAjIA80RzM1zVdShgA7jxAPhHvnXvYHvciXd2i6VTES3ZrEFmw7XQIoHJJQjn_fzvxLPeXRoAA0-2O9l4_1p5owFjbJQAVXXGw3cc7VXNVzaFy21YaLR1O4tcesJXQRMausKT-_ltscNIPKE-ZsfM?encodeFailures=1&width=512&height=512",
        // value: 18,
    },
    {
        // name:"js",
        image: "https://ams03pap002files.storage.live.com/y4mku2kygU56oq2UfBJmyX8skh70FlbXk8WCk2XN4XJCvi2lBZHACX11pl8k_gNmU88RhLXxKToMug47hIbB36lr1vt3BD-SZUOr7zNMoXoMb3XUmbJhtLmh977xONWQMGPF92g9D2QXKSvcPXQSbHSKajm_ThFRe3pnRDNdXyZFYxWv_JJ-MxtQCJmpdTdsfeWfNtI5FzXmTKQH3H6U1RX12Vir47meXRQqPUKdlIUing?encodeFailures=1&width=128&height=128",
        // value: 18,
    },
    {
        // name:"Sass",
        image: "https://ams03pap002files.storage.live.com/y4mkYyHheF-Ys5Y1I8AsZ6hOb1yccq0s2yW_37Wki5ArEp-tI5q5j4Gx7xnLRAhNd_myaOBobekgx_ddxLWsDsZgYShgiRPbSrqxdQYwGY21OQNwJzyVRrUw29XGD6_UtBEOpCln9xJ3fpgEb8loUOKJX1BF0oG6ZaMI52PEeV5_aw1n75moXCA0MwPbuDfvMPOcKhRt9hwNmSyzPmXnbzvm_jJ-yoWbrjXRQOnSXMlBxg?encodeFailures=1&width=1442&height=1442",
        // value: 18,
    },
    {
        // name:"Bootstrap",
        image: "https://ams03pap002files.storage.live.com/y4m1XbTwUwzKecwzuBnGC8lGJDsJdi8iRf3eYKOopUuqtqX87_J5US2vjeJOBB1GJrDAxSjSiKTTR9VvsK2HCvXGqbcXItJv0MT5MecInbF8toj9mk6OAm6bjsEDlPGYGDScW8lJZ-aP_PztuOZnnlwwCATcJeI4HBW9bolUjoi3IFUC_o19rpYVQdpk5LeFrWZ5LXAFE3Ol5BXabtotpM5KxyexHze1MY61cwIyhJBVmg?encodeFailures=1&width=512&height=512",
        // value: 18,
    },
    {
        // name:"React.js",
        image: "https://ams03pap002files.storage.live.com/y4mjNvytvmv7--_lFSaEDxEmp8j_-UDreH-YZxYnZOVS0DMHYRgNXxyy08ySpMry4xu2ABmHZZAtIWimsp_U9m2YOCEnfy9C6AxJRFlTQ1sV995-4mXXZFXa3-4jw0_wsWcbcVRncnFOGQG7NYVJN0biIhn2k664TRvzrjGHUhwFAMpu35Dc7mcI2dcJEDi0GRvb0FEeGmeICr5x-Pid0bOqgznEz9YWZNYZe4x1QbHAVc?encodeFailures=1&width=512&height=512",
        // value: 18,
    },
    {
        // name:"Redux",
        image: "https://ams03pap002files.storage.live.com/y4mLld7WVFbWUpIhGZeoAGg4yoe-8Yt7lP6d7AnuT5EjGFyGySZI18-4SfDzJnO2PcCu61yZFutrY9ifA_1kNxCoKeXGmjwtscNkFnxMcME7aUMm4v9cAnVxINaFmuVVh1xbIqOfB-vgHTka44p5OMkFzHeOXU48ZFQy83Uo41IA3mRBCO2zZyuZOm0yndUKt_cxFGMK7mjqSMno3Q2vx13iFYqpVrq8yjWujlkFOA_3OA?encodeFailures=1&width=800&height=800",
        // value: 18,
    },
    {
        // name:"Figma",
        image: "https://ams03pap002files.storage.live.com/y4m07Tngu5Sl06-Yp2ZdIQJayeUYjrwUI3WBb4hcu0D9BDPpprHFHyG5Lz7ICRH6IwEhj7nYDPLymL-um1MTsT_VA_Jbqkz-3FOoDOMgD-lgJdVrqlZ7ZvPOupbNGA-I8NdWjp_lt83jk_IsMyn7NFT-iJfG7N6pFNDxPN5fk7RV0vh21O1BMbbcxXPwOLM2SRGGVPvFza4DUFs59QiRqZ0jTuWEHCFNXAS6Kcd7aBVNBg?encodeFailures=1&width=512&height=512",
        // value: 18,
    },
    {
        // name:"Adobe",
        image: "https://ams03pap002files.storage.live.com/y4mJcrOuY9u9r8s3u-kGokugkfWxbYafSFyJdA4w5SzyITGBVo7nnBb8_DbWqTjvXrxpJwYhVfEOkJKxiNoXP4KRosRmTyR5ML2xBZu_jRS2JS-9UOYId0_eo89qBtrTVyW9F__Ww5f_zUoJsz18NvxiE7039QEk8hvzOo3V0AgRCaS1TvgiJbiGtOd6ILPc5A-J0Q4YV9ZhvcznlM21lDYoNGU6KorWfbnaF5s_yj8MWA?encodeFailures=1&width=512&height=512",
        // value: 18,
    },
    {
        // name:"Github",
        image: "https://ams03pap002files.storage.live.com/y4m2T67QbFA16ktt0Vqz4C7VbOP2ccuyu-EeBbQXJBy3iGoY6S7lvxTdsgf3WDo9FGzgmwYFCefE3wyvXvQy3ku8hQU4oi3PMVJcVVLuJm963S-04Zm6t45SGX7COBMSZuVKL27mxW_h_9tWyeL7x4kvXvQSGKU_FeHJULGS1svx4xw31Yk3-X87YWxwIh6SKtxklnPf58KykfgSIVHQ0dKa0QBcaVujGBowuCjvxxx4Xc?encodeFailures=1&width=512&height=512",
        // value: 18,
    },
    {
        // name:"Notion.io",
        image: "https://ams03pap002files.storage.live.com/y4mDqw8OHWCD-v7UDVBEQWTwU70taYF3zQJpWX-bBRWz3OvriEvE2VQyLxUej7GthdS1QgYuVNT45rNG549yHb-XYBUF9lbnq6DJRYduV5YjbDfhXGP6hcVOmd3GDZswuY2Ari-qnHB_L_YolTzdEBtcf3c6rxapCpYVdGLNo7Xa8q3y4ffMKkW_c3mRmM1NxuzO8AL5pmNq5Rcpz6BSKnp0zpIck9dyBX275KFvHegOPQ?encodeFailures=1&width=512&height=512",
        // value: 18,
    },
    {
        // name:"Trello",
        image: "https://ams03pap002files.storage.live.com/y4mNbhGNefn4qkk7SL-KXBfM9nnXfWAAzsCIP85V2wmIyW6EZ0-ApF92yXQk7UwhTSH-BGd2ldiJROkdSSdDcFSxB8-ck03jZg6rgO6rKekNsOxnx64xq2U46HrEjM3h6hX4DrHgseccHiTmrRjjRMEOce0gdw5h0LhdzWKyawWREMRL4e7C9Xjba_Yk1bENWyghgxGfVrCuWQLDKKXNz4r_npqUpISAyubZ6euITjOVZk?encodeFailures=1&width=900&height=700",
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
        img: "",
        title: "PORTFOLIO",
        type : "Conception",
        description: "Conception Portfolio",
        techno: "Figma",
        link: "https://www.figma.com/file/bcaryKYEJjV3sv0pyqbekC/PORTFOLIO-DEV-FRONT?node-id=0%3A1&t=CShOF1MRa9iInHRG-0",
        github: "",
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