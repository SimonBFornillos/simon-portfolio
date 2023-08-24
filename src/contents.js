import SimonImg from "./Assets/SimonFornillos2-removebg-preview.png"
import DejaBrew from "./Assets/ProjectsAssets/Deja-Brew.png"
import Playground from "./Assets/ProjectsAssets/Playground.png"
import Simon from "./Assets/ProjectsAssets/Sim-on.png"
import SSP from "./Assets/ProjectsAssets/SSPHolding.png"
import SimonPort from "./Assets/ProjectsAssets/SimonPortfolio.png"

const logotext = "Simon";
const meta = {
    title: "Simon",
    description: "I'm Simon Fredrick B. Fornillos, a front-end reactjs Developer.",
};

const introdata = {
    title: "My name is Simon",
    animated: {
        first: "I am a Front-end Developer",
        second: "I am a ReactJs Developer",
        third: "I am a Web Developer",
        fourth: "I am a Gamer",
    },
    description: "I'm an aspiring front-end ReactJs Developer, developing and focusing on the design of the webpage.",
    your_img_url: SimonImg,
};

const dataabout = {
    title: "Who am I?",
    aboutme: "I am Simon Fredrick B. Fornillos and I am an aspiring web developer, focusing mainly on ReactJS to create websites. I graduated from the bootcamp called KodeGo and after the bootcamp I've been practicing more coding to be able to hone my skills more.",
};
const schooltimeline = [{
        jobtitle: "Technical Vocational Livelihood Track",
        where: "iACADEMY",
        date: "August 2018 - May 2020",
    },
    {
        jobtitle: "Full-stack Web Development",
        where: "KodeGo",
        date: "March 2023 - May 2023",
    },
];

const skills = [{
        name: "HTML",
    },
    
    {
        name: "CSS",
    },
    
    {
        name: "Bootstrap",
    },
    
    {
        name: "Git",
    },

    {
        name: "ReactJS",
    },

    {
        name: "Javascript",
    },
    
];

const dataportfolio = [{
        portfoliotitle: "Deja-brew",
        img: DejaBrew,
        description: "A website for ordering coffee and desserts.",
        source: "https://github.com/khalexiiii/Deja-Brew",
        live: "https://khalexiiii.github.io/Deja-Brew/",
    },
    {
        portfoliotitle: "Playground",
        img: Playground,
        description: "A Collaborative showcase of me and my friends. More like a portfolio. (In progress)",
        source: "https://github.com/andrewizo/playground1",
        live: "",
    },
    {
        portfoliotitle: "Sim-on",
        img: Simon,
        description: "My first ever Website, more so showcase on what I could do.",
        source: "https://github.com/SimonBFornillos/SimonBFornillos",
        live: "https://simonbfornillos.github.io/SimonBFornillos/",
    },
    {
        portfoliotitle: "SSP Holdings",
        img: SSP,
        description: "A website for stocks and holdings, it's also has an inventory system.",
        source: "https://github.com/tritonmax26/FinalProjectCapstone",
        live: "https://capstone-project-e6eo.onrender.com",
    },
    {
        portfoliotitle: "My portfolio",
        img: SimonPort,
        description: "",
        source: "https://github.com/SimonBFornillos/simon-portfolio",
        live: "",
    },
];

const contactConfig = {
    YOUR_EMAIL: "simonbfornillos@gmail.com",
    description: "Looking forward to hearing from you!",
    // create an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "SERVICE_ID",
    YOUR_TEMPLATE_ID: "TEMPLATE_ID",
    YOUR_USER_ID: "USER_ID (PUBLIC_KEY)",
};

const socialprofiles = {
    github: "https://github.com/SimonBFornillos",
    sourceedin: "https://www.sourceedin.com/in/simon-fornillos-536036278/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    schooltimeline,
    skills,
    introdata,
    contactConfig,
    socialprofiles,
    logotext,
};