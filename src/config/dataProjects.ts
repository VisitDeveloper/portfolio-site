import { DataCardProject } from "model/components/projects";

export const dataCardProjectsPersonal: Array<DataCardProject> = [
  {
    id: 10,
    image: "/test_framer.png",
    desc: "A project for test FramerMotion",
    type: "Personal",
    duration: "1 week",
    flag: ["Personal", "Animation", "Framer Motion"],
    link: "https://blog-framer.netlify.app/about",
    descriptionLong:
      "In this project, you'll witness the artful integration of animations that breathe life into your website, demonstrating how motion can seamlessly enhance user experience and engage your audience.",
    title: "Framer Motion",
  },
  {
    id: 20,
    image: "/portfolio.png",
    desc: "First Portfolio Site",
    type: "Personal",
    duration: "3 weeks",
    flag: ["Personal", "Portfolio", "MUI"],
    link: "https://amiralihatamiperson.netlify.app/",
    descriptionLong:
      "In this project, I'm endeavoring to build a personalized portfolio website while simultaneously honing my skills with Material-UI (MUI), creating a digital showcase that reflects both my creativity and proficiency in frontend development.",
    title: "Portfolio Site",
  },
  {
    id: 30,
    image: "/music-app.png",
    desc: "Music Web Application",
    type: "Personal",
    duration: "2 weeks",
    flag: ["Personal", "React", "Typescript"],
    link: "https://music-appp.netlify.app/",
    descriptionLong:
      "In this project, my aim is to hone my skills in TypeScript while crafting a sophisticated web application using React.",
    title: "Music Web Application",
  },
];

export const dataCardProjects: Array<DataCardProject> = [
  {
    id: 0,
    image: "/vline.png",
    desc: "Ve Line Project",
    type: "Project",
    duration: "1 months",
    flag: ["Project", "Class Component", "Landing Page"],
    link: "",
    descriptionLong:
      "This project serves as a landing page for a larger venture and was created roughly four years ago. Currently, it remains inactive.",
    title: "Ve Line Project",
  },
  {
    id: 1,
    image: "/visiteco.png",
    desc: "Visit Eco Project",
    type: "Project",
    duration: "7 months",
    flag: ["Project", "Ticket sales system"],
    link: "",
    descriptionLong:
      "This project was initiated approximately four years ago, just before the onset of the COVID-19 pandemic. Our focus was on facilitating the sale of airplane and train tickets. Unfortunately, as of now, the project is inactive. ",
    title: "Visit Eco Project",
  },
  {
    id: 2,
    image: "/tasprovider.png",
    desc: "Tasprovider Project",
    type: "Project",
    duration: "5 months",
    flag: ["Project", "React", "Business"],
    link: "https://apps.tasprovider.com/",
    descriptionLong: "This project involves creating a form tailored for patients, albeit with a unique twist: it's designed specifically for completing company-related information.",
    title: "Tasprovider Project",
  },
  {
    id: 3,
    image: "/crs-adotel.png",
    desc: "CRS Project",
    type: "Project",
    duration: "1 year",
    flag: ["Project", "Hotel Business", "Angular"],
    link: "https://crs.adotel.net/#/auth/login",
    descriptionLong: "",
    title: "Centeral Reservation System",
  },
  {
    id: 4,
    image: "/adotel-ta.png",
    desc: "TA Panel Project",
    type: "Project",
    duration: "1 year",
    flag: ["Project", "Hotel Reservation system", "React"],
    link: "https://ta.adotel.net/login",
    descriptionLong: "",
    title: "TA Panel Project",
  },
  {
    id: 5,
    image: "/land-bazdidan.png",
    desc: "Landing Bazdidan",
    type: "Project",
    duration: "1 month",
    flag: ["Project", "Landing Page", "Home Business"],
    link: " https://bazdidan.com/",
    descriptionLong: "",
    title: "Landing Bazdidan",
  },
  {
    id: 6,
    image: "/bazdidan.png",
    desc: "Bazdidan Project",
    type: "Project",
    duration: "6 months",
    flag: ["Project", "Home Visit System", "React"],
    link: "https://app.bazdidan.com/login",
    descriptionLong: "",
    title: "Bazdidan Project",
  },
  {
    id: 7,
    image: "/nobino.png",
    desc: "Nobino Project",
    type: "Project",
    duration: "1 year",
    flag: ["Project", "Home Broadcast System", "Next.js 12"],
    link: "https://nobino.ir/",
    descriptionLong: "",
    title: "Nobino Project",
  },
  {
    id: 8,
    image: "/iran-gov.png",
    desc: "Iran GOV Project",
    type: "Project",
    duration: "4 months",
    flag: ["Project", "Goverment", "Next.js 13"],
    link: "https://stage.iran.gov.ir/en/",
    // descriptionLong: "",
    title: "Iran GOV Project",
  }
  
];

export const dataCardProjectsAll: Array<DataCardProject> = [
  ...dataCardProjects,
  ...dataCardProjectsPersonal
];




