import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import invoicesImg from "@/public/invoices.png";
import pressaImg from "@/public/pressa.png";
import theJobPortalImg from "@/public/job.png";
import mapImg from "@/public/map.png";


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
    title: "Finished software engineering course",
    location: "Tashkent, UZ",
    description:
      "I graduated after 12 months of studying. Afterwards found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Tashkent, UZ",
    description:
      "I worked for 4 months as front-end developer intern. During internship program I was able to enhace my knoweledge of React and Javascript, as well as I get acquainted with Typesctipt.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Invoices",
    description:
      "I worked as a full-stack developer on this web-app. This web-app aimed to manage invoices",
    tags: ["React", "Redux", "SCCS", "Express", "PostgreSQL"],
    imageUrl: invoicesImg,
  },
  {
    title: "Pressa",
    description:
      "Site for publishing ads and events. It has features like filtering, searching",
    tags: ["React", "Redux", "SCCS", "MongoDB"],
    imageUrl: pressaImg,
  },
  {
    title: "TheJobPortal",
    description:
      "Job board web application. I have participated in this project as a frontend developer.",
    tags: ["React", "Redux", "SCSS", "Swiper.js"],
    imageUrl: theJobPortalImg,
  },
  {
    title: "Map",
    description:
      "Map application for finding the best route. I have participated in this project as a frontend developer and developed the registration and login part.",
    tags: ["React", "Typescript", "Redux", "SCSS"],
    imageUrl: mapImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
  "Node.js",
] as const;