"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import Project from "./project";
import SectionHeading from "./section-heading";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.slice(0, 5).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        {/* <a
          className="underline"
          target="_blank"
          href="https://portfolio-ibrokhim.netlify.app/"
        >
          See my other projects through this link
        </a> */}
        <Link className="hover:underline transition" href="/projects">
          See my other projects through this link
        </Link>
      </div>
    </section>
  );
}
