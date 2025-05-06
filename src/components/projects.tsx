/* src/components/projects.tsx */
"use client"

import { useState } from "react"
import Image from "next/image"
import styles from "./projects.module.css"

const categories = ["All", "Web", "Mobile", "UI/UX", "Other"]

// Updated projects based on GitHub repositories
const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website built with modern web technologies to showcase my skills and projects.",
    image: "/placeholder.svg",
    category: "Web",
    tags: ["Next.js", "CSS", "Framer Motion"],
    liveUrl: "https://alineprofile.vercel.app/",
    githubUrl: "https://github.com/Aline-CROIRE/Aline-CROIRE-Portfolio",
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with payment integration and admin dashboard.",
    image: "/placeholder.svg",
    category: "Web",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A mobile application for managing tasks and tracking productivity.",
    image: "/placeholder.svg",
    category: "Mobile",
    tags: ["React Native", "Firebase", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Banking Dashboard UI",
    description: "A modern UI design for a banking dashboard with data visualization.",
    image: "/placeholder.svg",
    category: "UI/UX",
    tags: ["Figma", "Adobe XD", "Sketch"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Health Tracking App",
    description: "An application for tracking health metrics and fitness goals.",
    image: "/placeholder.svg",
    category: "Mobile",
    tags: ["Flutter", "Firebase", "GraphQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Chatbot",
    description: "A conversational AI chatbot for customer support.",
    image: "/placeholder.svg",
    category: "Other",
    tags: ["Python", "TensorFlow", "NLP"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>My Projects</h2>
          <p>Explore my recent work and projects</p>
        </div>

        <div className={styles.filterButtons}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${
                activeCategory === category ? styles.filterButtonActive : styles.filterButtonInactive
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <div key={project.title} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.projectContent}>
                <div className={styles.badgeContainer}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.badge}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectLinks}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.projectLink} ${styles.secondaryLink}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.projectLink} ${styles.primaryLink}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}