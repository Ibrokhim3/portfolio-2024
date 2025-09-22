import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import brightImg from "@/public/bright.png";
import ltfsImg from "@/public/ltfs.png";
import SMLimg from "@/public/sml.png";
import residenceImg from "@/public/residence.png";
import ziyolilarImg from "@/public/ziyolilar.png";
import safiaImg from "@/public/safia.png";
import jgsImg from "@/public/jgs.png";
import mebelHouseImg from "@/public/mebelhouse.png";
import fenixProImg from "@/public/fenix.png";
import mapImg from "@/public/map.png";
import scootImg from "@/public/scoot.png";
import coffeeImg from "@/public/coffee.png";
import placeholderImg from "@/public/placeholder.jpg";

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
  {
    title: "Front-End Developer",
    location: "Tashkent, UZ",
    description:
      "In my current role, I have gained extensive experience in building real-world applications, enhancing my expertise in technologies like Next.js, React, and JavaScript. I have also acquired new skills, including working with Ant Design (antd), Tailwind CSS, Next.js Internationalization (next-intl), NextAuth, and implementing Feature-Sliced Design (FSD) architecture.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Ziyolilar",
    description:
      "A localized job platform connecting students with part-time, internship, and entry-level opportunities from businesses in their community.",
    tags: [
      "NextJs",
      "Shadcn",
      "Typescript",
      "NextIntl",
      "Tanstack Query",
      "Zustand",
      "NextAuth",
    ],
    imageUrl: ziyolilarImg,
    link: "https://ziyolilar.com",
  },
  {
    title: "Bright Gallery",
    description:
      "Developed an e-commerce platform for selling art, featuring secure online payment integration and a user-friendly interface.",
    tags: [
      "NextJs",
      "Tailwind",
      "NextIntl",
      "NextAuth",
      "Typescript",
      "SwiperJS",
    ],
    imageUrl: brightImg,
    link: "https://brightgalleryuz.com",
  },
  {
    title: "LTFS",
    description:
      "Developed a commercial website featuring smooth, light animations to enhance user engagement.",
    tags: ["NextJs", "Tailwind", "NextIntl", "Typescript"],
    imageUrl: ltfsImg,
    link: "https://ltfsuz.com",
  },
  {
    title: "SML",
    description: "Developed a commercial website showcasing packaging products",
    tags: ["NextJs", "Tailwind", "Typescript"],
    imageUrl: SMLimg,
    link: "https://sml.uz",
  },
  {
    title: "Residence",
    description:
      "A website that offers the opportunity to view residences through a 360-degree perspective typically incorporates advanced imaging technology",
    tags: ["HTML", "SCSS", "JS", "Gulp", "GSAP", "Photo-sphere-viewer"],
    imageUrl: residenceImg,
    link: "https://ritz-residence.vercel.app",
  },
  {
    title: "Safia Bakery ERP",
    description:
      "ERP System with IIKO/Mindbox integration for coffee and refreshments distribution",
    tags: ["React", "Antd", "Typescript", "Redux Toolkit", "Rtk-query"],
    imageUrl: safiaImg,
    link: "",
  },
  {
    title: "JGS mini app and CRM",
    description: "Order Management CRM with Telegram mini app integration",
    tags: ["React", "Vite", "Typescript", "Tailwind"],
    imageUrl: jgsImg,
    link: "",
  },
  {
    title: "Mebel House ERP",
    description: "Retail ERP for inventory, sales, and customer management",
    tags: ["React", "Vite", "Typescript"],
    imageUrl: mebelHouseImg,
    link: "",
  },
  {
    title: "Elisof Manufactory",
    description:
      "Manufacturing ERP with supply chain and multi-department workflows",
    tags: ["React", "Vite", "Typescript"],
    imageUrl: placeholderImg,
    link: "",
  },
  {
    title: "SmartLife",
    description: "Multi-User Dashboard for Service Installation Payments",
    tags: ["React", "Vite", "Typescript"],
    imageUrl: placeholderImg,
    link: "",
  },
  {
    title: "Fenix Pro ERP",
    description: "Admin dashboard for grocery store management",
    tags: ["React", "NextJS", "Typescript", "Tailwind"],
    imageUrl: fenixProImg,
    link: "",
  },
  {
    title: "Map",
    description: "Route optimization engine with interactive mapping interface",
    tags: ["React", "Vite", "Typescript", "SCSS", "Axios"],
    imageUrl: mapImg,
    link: "https://hoca-map.netlify.app",
  },
  {
    title: "Scoot",
    description: "Scoot sharing landing",
    tags: ["HTML", "SCSS"],
    imageUrl: scootImg,
    link: "https://scoot-ibrokhim.netlify.app",
  },
  {
    title: "Coffee",
    description: "Coffee landing",
    tags: ["HTML", "SCSS"],
    imageUrl: coffeeImg,
    link: "https://coffee-ibrokhim.netlify.app",
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
  "Redux Toolkit",
  "Rtk-query",
  "Zustand",
  "Tanstack Query",
  "Shadcn",
  "Antd",
  "NextIntl",
  "NextAuth",
  "Framer Motion",
] as const;
