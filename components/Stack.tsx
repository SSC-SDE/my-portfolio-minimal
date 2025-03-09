import {
  SiJavascript,
  SiFlask,
  SiRedis,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiDotnet, // C# Alternative
  SiDocker,
  SiGit,
  SiGithub,
  SiAmazon, // AWS Alternative
} from "react-icons/si";
import { FaDatabase, FaPython, FaReact } from "react-icons/fa";
import React from "react";

const stackItems = [
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 2, name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { id: 3, name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { id: 4, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: 5, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: 6, name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { id: 7, name: "Python", icon: FaPython, color: "#3776AB" },
  { id: 8, name: "Flask", icon: SiFlask, color: "#000000" },
  { id: 9, name: "Redis", icon: SiRedis, color: "#DC382D" },
  { id: 10, name: "SQL", icon: FaDatabase, color: "#4479A1" },
  { id: 11, name: "C#", icon: SiDotnet, color: "#512BD4" },
  { id: 12, name: "Docker", icon: SiDocker, color: "#2496ED" },
  { id: 13, name: "Git", icon: SiGit, color: "#F05032" },
  { id: 14, name: "GitHub", icon: SiGithub, color: "#181717" },
  { id: 15, name: "AWS", icon: SiAmazon, color: "#FF9900" },
];

export const Stack = () => {
  return (
    <section className="py-16 glass" id="stack">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl text-gray-200 font-bold mb-4"> My Stack </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center flex-col rounded-xl p-4"
            >
              <div className="mb-4 bg-white/10 p-6 rounded-xl">
                {React.createElement(item.icon, {
                  className: "w-32 h-32",
                  style: { color: item.color },
                })}
              </div>
              <p className="text-gray-400 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
