/* src/app/page.tsx */
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/exprience"
import Certificates from "@/components/certificates"
import Projects from "@/components/projects"
import GitHubProjects from "@/components/github-repos"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certificates />
        <Projects />
        <GitHubProjects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}