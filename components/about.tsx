"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a computer Science graduate who pursued his passion as a {" "}
        <span className="font-medium">web developer.</span> My core stack is 
        React, node js , mongo db, express . I started my coding journey a 4 year ago{" "}
        <span className="font-medium"> and now I'm working full time to develop user friendly and fully functional websites and application .</span>.{" "}
        <span className=""> The most joyfull moments for are those when I fullfill the project requirement of my clients.</span> 
        hit me up with your weird artistic project ideas or app proposals.       </p>

  
    </motion.section>
  );
}
