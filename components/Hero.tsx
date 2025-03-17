"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import obj from "@/assets/obj1.png";
import profilepic from "@/assets/profilepic.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const titles = [
  "Technical Consultant +",
  "Tech Blogger +",
  "Backend Developer +",
  "React Developer +",
  "Software Engineer +",
  "Frontend Engineer +",
  "MERN Stack Developer +",
  "Tech Enthusiast +",
  "Open Source Contributor +",
  "Cloud Practitioner +",
  "JavaScript Developer +",
  "TypeScript Developer +",
  "Next.js Developer +",
  "Node.js Developer +",
  "Problem Solver +",
  "UI/UX Enthusiast +",
  "Performance Optimizer +",
  "Agile Practitioner +",
  "Software Architect +",
  "Code Reviewer +",
  "Web Developer +",
];

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Background animation - Runs once
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []); // Empty dependency array ensures it runs only once

  // Typing animation
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentTitle.length) {
        timer = setTimeout(() => {
          setDisplayedText((prev) =>
            currentTitle.substring(0, prev.length + 1)
          );
        }, 100);
      } else {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev.substring(0, prev.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting]);

  // Motion Templates for consistent background styling
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-white/40% text-5xl md:text-7xl font-black">
          Hi, I am
        </h1>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl flex items-center">
          Shankhya
        </h1>

        {/* Animated Title */}
        <div
          className="text-2xl md:text-3xl font-bold text-purple-400 mt-2"
          style={{ minHeight: "40px" }} // Ensure a fixed height
        >
          {displayedText}
        </div>
        <Image src={profilepic} alt="Profile picture of Shankhya" width={250} />
        <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
          <Image
            src={obj}
            alt="object"
            width={30}
            className="rounded-2xl mx-auto"
          />
          <Image
            src={obj}
            alt="object"
            width={30}
            className="rounded-2xl mx-auto"
          />
          <Image
            src={obj}
            alt="object"
            width={30}
            className="rounded-2xl mx-auto"
          />
          <p className="font-medium"> +80 Projects Delivered</p>
        </div>

        {/* Static Title */}
        {/* <p className="text-xl md:text-2xl mt-4 font-semibold max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text leading-tight text-transparent flex items-center">
          Computer Science and System Engineer
        </p>
        <p className="text-md md:text-sm py-4 font-semibold">
          based in Mumbai with 3+ years of experience in Software/IT Domain
        </p> */}
        <p className="my-6 max-w-xl text-center">
          Based in Mumbai, delivering excellence for 3+ years in Software/IT
        </p>

        <motion.a
          href="/Shankhya_Resume_DEV_2025.pdf"
          download="Shankhya_Resume.pdf"
          style={{
            border,
            boxShadow,
          }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="flex w-fit items-center gap-2 mt-4 rounded-full px-4 py-2"
        >
          Download CV <FiArrowRight />
        </motion.a>
      </div>

      <div className="bg-circle-container">
        <div className="bg-circle"></div>
      </div>
    </motion.section>
  );
};
