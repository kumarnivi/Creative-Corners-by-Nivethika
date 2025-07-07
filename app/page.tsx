import Image from "next/image";
import HomeSection from "./Banner/banner";
import AboutSection from "./about/about";
import SkillsSection from "./skills/skills";
import ExperienceSection from "./experience/experience";
import Projects from "./project/project";
import ButterflyCarousel from "./components/ButterflyCarousel";

export default function Home() {
  return (
    <>
     <HomeSection/>
    <AboutSection/>
    <SkillsSection/>
    <ExperienceSection/>
    <ButterflyCarousel/>
    <Projects />
    </>
  
  );
}
