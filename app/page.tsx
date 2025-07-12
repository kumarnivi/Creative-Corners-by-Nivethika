import Image from "next/image";
import HomeSection from "./Banner/banner";
import AboutSection from "./about/about";
import SkillsSection from "./skills/skills";
import ExperienceSection from "./experience/experience";
import Projects from "./project/project";

export default function Home() {
  return (
    <>
     <HomeSection/>
    <AboutSection/>
    <SkillsSection/>
    <ExperienceSection/>
    
    <Projects />
    </>
  
  );
}
