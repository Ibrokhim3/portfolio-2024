import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import brightImg from "@/public/bright.png";
import ltfsImg from "@/public/ltfs.png";
import SMLimg from "@/public/sml.png";
import residenceImg from "@/public/residence.png";
import ziyolilarImg from "@/public/ziyolilar.png";

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
  },
  {
    title: "LTFS",
    description:
      "Developed a commercial website featuring smooth, light animations to enhance user engagement.",
    tags: ["NextJs", "Tailwind", "NextIntl", "Typescript"],
    imageUrl: ltfsImg,
  },
  {
    title: "SML",
    description: "Developed a commercial website showcasing packaging products",
    tags: ["NextJs", "Tailwind", "Typescript"],
    imageUrl: SMLimg,
  },
  {
    title: "Residence",
    description:
      "A website that offers the opportunity to view residences through a 360-degree perspective typically incorporates advanced imaging technology",
    tags: ["HTML", "SCSS", "JS", "Gulp", "GSAP", "Photo-sphere-viewer"],
    imageUrl: residenceImg,
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
