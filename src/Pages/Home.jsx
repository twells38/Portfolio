
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
export const Home = () => {
    return <div className="min-h-screen bg-background   text-foreground overflow-x-hidden dark:bg-black">
        {/* render theme toggle  change dark to light mode*/}
            < ThemeToggle />
        {/**background effect by creating star background component*/}
            < StarBackground/>
        {/**navbar navigate different part of portfolio*/}
            <NavBar/>
        {/**main content */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
       <ContactSection/>
        {/**footer */}
        <Footer/>

    </div>
}