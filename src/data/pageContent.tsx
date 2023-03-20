import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Navbar, Hero, AboutMe, MySkills, FeaturedPortfolio, Contact, Footer } from "@/interfaces/interfaces";
import {aboutmeImg, chatflowImg, heroImg, pokedexImg, todoitImg} from "../assets/images/index.js";


const navbar: Navbar = {
  logo: "Auffa",
  links: [
    {
      name: "Home",
      url: "#home",
    },
    {
      name: "About",
      url: "#aboutme",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ]
}

const hero: Hero = {
  title: "Front-End React Developer 👋",
  subtitle:
    "Hi, I'm Moh. Auffa Maulana. A passionate Front-end React Developer based in South Borneo, Indonesia.",
  img: heroImg,
  socmed: [
    {
      name: "email",
      url: "mailto:auffalana@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      name: "github",
      url: "https://github.com/IchLanevich",
      icon: <FaGithub />,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/moh-auffa-maulana-7b1b1b1b3/",
      icon: <FaLinkedin />,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/auffa_lana/",
      icon: <FaInstagram />,
    },
  ],
  primaryCta: {
    text: "Let's chat",
    url: "#contact",
  },
  secondaryCta: {
    text: "See my work",
    url: "#projects",
  },
};

const aboutMe: AboutMe = {
  title: "ABOUT ME",
  subtitle: "A Self-Taught Front-End Developer",
  img: aboutmeImg,
  textContents: [
    {
      text: "I'm a self-taught front-end developer whose enjoy creating things that live on the internet. My interest in web development started after i graduate from high school when i was trying html for the first time, it feel like building a house in minecraft or building lego.",
    },
    {
      text: "I am passionate about Web Development and enjoy working on the web. I love to turn my creativity into a real-life app or web. And i love turning design into static website or fully functional websites.",
    },
    {
      text: "I am passionate about creating clean, user-friendly web applications and have a strong attention to detail. ",
    },
    {
      text: "My ability to work collaboratively with others and my dedication to delivering high-quality code make me an asset to any team.",
    },
    {
      text: "I stay up-to-date with the latest trends and best practices in front-end development and always strive to exceed expectations",
    },
    {
      text: "Whether working on simple or complex projects, I am committed to delivering results that meet the needs of all stakeholders.",
    },
  ],
};

const mySkills: MySkills = {
  title: "My skillset includes the following technologies",
  skillsByCategory: [
    {
      category: "Programming Languages",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      category: "CSS Frameworks",
      skills: ["Tailwind CSS", "Headless UI", "Bootstrap"],
    },
    {
      category: "Front-End Frameworks",
      skills: ["React", "Next.js"],
    },
    {
      category: "JS Libraries",
      skills: [
        "Axios",
        "Redux",
        "React Query",
      ],
    },
    {
      category: "Hosting Platforms",
      skills: ["Vercel", "Netlify"],
    },
    {
      category: "Design Tools",
      skills: ["Figma", "Adobe Photoshop"],
    },
    {
      category: "Unit Testing",
      skills: ["Jest", "Storybook"],
    },
    {
      category: "Version Control",
      skills: ["Git", "GitHub"],
    },
    {
      category: "Code Editor",
      skills: ["VS Code"],
    },
    {
      category: "API Testing",
      skills: ["Insomnia"],
    },
  ],
};

const featuredPortfolio: FeaturedPortfolio = {
  title: "Featured Portfolio",
  projects: [
    {
      title: "Pokedex",
      description:
        "Pokedex is a web-based application that allows users to search for and view information about all of the Pokémon.",
      img: pokedexImg,
      tags: ["React", "React Query", "Tailwind"],
      projectType: "Web App",
      projectUrl: 'https://auffa-pokedex.netlify.app',
    },
    {
      title: "Todoit",
      description:
        "Todoit is a simple yet powerful web-based application designed to help users keep track of their daily tasks and goals.",
      img: todoitImg,
      tags: ["React", "React Redux", "Tailwind"],
      projectType: "Web App",
      projectUrl: 'https://auffa-todoit.netlify.app',
    },
    {
      title: "Chat Flow",
      description:
        "ChatFlow landing page is a visually striking and highly functional element of a website. It features a clean and modern design.",
      img: chatflowImg,
      tags: ["React", "Tailwind"],
      projectType: "Landing Page",
      projectUrl: 'https://auffa-chatflow.netlify.app',
    },
  ],
};

const contact: Contact = {
  title: "Contact",
  subtitle: "Let's chat!",
  contactType: "Mail: ",
  mailAddress: "auffalana@gmail.com",
  socmed: [
    {
      name: "email",
      url: "mailto:auffalana@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      name: "github",
      url: "https://github.com/IchLanevich",
      icon: <FaGithub />,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/moh-auffa-maulana-7b1b1b1b3/",
      icon: <FaLinkedin />,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/auffa_lana/",
      icon: <FaInstagram />,
    },
  ],
};

const footer: Footer = {
  links: [
    {
      name: "Resume",
      url: "",
    },
    {
      name: "CV",
      url: "https://ik.imagekit.io/ichlanevich/CV_Moh._Auffa_Maulana_FE.pdf?updatedAt=1679306133138",
    },
    {
      name: "Certificate",
      url: "",
    },
  ],
  socmed: [
    {
      name: "email",
      url: "mailto:auffalana@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      name: "github",
      url: "https://github.com/IchLanevich",
      icon: <FaGithub />,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/moh-auffa-maulana-7b1b1b1b3/",
      icon: <FaLinkedin />,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/auffa_lana/",
      icon: <FaInstagram />,
    },
  ],
};

export {navbar,hero, aboutMe, mySkills, featuredPortfolio, contact, footer};