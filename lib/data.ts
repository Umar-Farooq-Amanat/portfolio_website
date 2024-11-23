import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gameurl from "@/public/gameurl.png";
import mortgageurl from "@/public/mortgageurl.png";
import cryptourl from "@/public/cryptourl.png";
import nohesiurl from "@/public/nohesi1.png";
import dashboardurl from "@/public/dashboard.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Development",
    location: "Gujranwala,Punjab",
    description:
      "I learned front-end development in a bootcamp. Afterwards, I spent two years building interactive, user-friendly websites and web applications. I successfully completed several projects and consistently met my clients' satisfaction.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 ",
    //LuGraduationCap
  },
  {
    title: "Back-End Developer",
    location: "Gujranwala,Punjab",
    description:
      "Worked on several backend projects, developing secure, robust, and scalable backends for web applications. Implemented efficient database management and seamless integration with front-end systems. Consistently received appreciation from clients for the quality, reliability, and performance of my work.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 ",
  },
  {
    title: "Graduation",
    location: "University Of The Punjab",
    description:
      "I graduated with high honors, where I learned  fundamentals of computer science and sharpened  my expertise in the technologies that I am passionate about.During my academic journey, I not only mastered the core principles of programming but also explored advanced concepts in web development. My coursework equipped me with a solid foundation in algorithms, data structures, and software engineering practices, which I seamlessly apply to my projects today.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Games Application",
    description:"Gaming application showcases a variety of games and related content, offering the latest news, reviews, and guides, all in one place for gaming enthusiasts.",
    tags: ["ReactJs", "Chakra-UI", "Framer-motion", 'react-icons'],
    imageUrl: gameurl,
    link:'https://games-application.netlify.app/'
  },
  {
    title: "crypto application",
    description:
      "Crypto application is your go-to app for real-time cryptocurrency data. Monitor prices, track trends, and explore detailed insights on a wide range of coins effortlessly.",
    tags: ['Html' , 'Css' , 'Js'],
    imageUrl: cryptourl,
    link:'https://crypto-coin-application.netlify.app/'
  },
  {
    title: "mortgage application",
    description:
      "Mortgage application simplifies the mortgage process by allowing users to compare rates, calculate payments, and access expert advice, making informed home financing decisions easy.",
    tags: ["React", "Chakra-UI", "chart.js", "Framer-motion"],
    imageUrl: mortgageurl,
     link:'https://mortgage-app.netlify.app/'
  },
  {
    title: "NoHesi application",
    description:
      "Nohesi application simplifies the mortgage process by allowing users to compare rates, calculate payments, and access expert advice, making informed home financing decisions easy.",
    tags: ["React", "Chakra-UI", "chart.js", "Framer-motion"],
    imageUrl: nohesiurl,
     link:'https://www.nohesi.gg/'
  },
  {
    title: "dashboard application",
    description:
      "Nohesi application simplifies the mortgage process by allowing users to compare rates, calculate payments, and access expert advice, making informed home financing decisions easy.",
    tags: ["React", "Chakra-UI", "chart.js", "Framer-motion"],
    imageUrl: dashboardurl,
     link:'https://www.sanaracing.co.uk/'
  }
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Chakra-UI",
  "Material-UI",
  "MongoDB",
  "Redux Toolkit",
  "Express",
  "Framer Motion",
] as const;
