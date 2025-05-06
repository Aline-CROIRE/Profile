/* src/components/github-repos.tsx */
"use client"

import styles from "./github-repos.module.css"

// Featured projects based on GitHub profile
const featuredProjects = [
  {
    name: "E-commerce Website",
    description: "A full-stack e-commerce platform with user authentication, product catalog, and payment integration.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 0,
    forks: 0,
    url: "#",
  },
  {
    name: "Portfolio Website",
    description: "A responsive personal portfolio website built with modern web technologies.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 0,
    forks: 0,
    url: "#",
  },
  {
    name: "Task Management App",
    description: "A web application for managing tasks and tracking productivity with user authentication.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 0,
    forks: 0,
    url: "#",
  },
  {
    name: "University Management System",
    description: "A backend system for managing university students, courses, and grades.",
    language: "Java",
    languageColor: "#b07219",
    stars: 0,
    forks: 0,
    url: "#",
  },
  {
    name: "Weather Dashboard",
    description: "A web application that displays weather information using external API integration.",
    language: "HTML",
    languageColor: "#e34c26",
    stars: 0,
    forks: 0,
    url: "#",
  },
  {
    name: "Blog Platform",
    description: "A content management system for creating and managing blog posts.",
    language: "PHP",
    languageColor: "#4F5D95",
    stars: 0,
    forks: 0,
    url: "#",
  },
]

export default function GitHubProjects() {
  return (
    <section id="github-projects" className={styles.githubProjects}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Featured Projects</h2>
          <p>Showcasing my work in backend development and web technologies</p>
        </div>

        <div className={styles.projectsGrid}>
          {featuredProjects.map((project, index) => (
            <div key={project.name} className={styles.projectCard}>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.titleContainer}>
                    <span className={styles.icon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"></path>
                        <path d="M16 3h1a2 2 0 0 1 2 2v5c0 1.1.9 2 2 2a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"></path>
                      </svg>
                    </span>
                    <h3 className={styles.title}>{project.name}</h3>
                  </div>
                  <div className={styles.stats}>
                    <div className={styles.stat}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <span>{project.stars}</span>
                    </div>
                    <div className={styles.stat}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 7 L17 17 M17 7 L7 17"></path>
                      </svg>
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>

                <p className={styles.description}>{project.description}</p>

                <div className={styles.language}>
                  <span 
                    className={styles.languageDot} 
                    style={{ backgroundColor: project.languageColor }}
                  ></span>
                  <span>{project.language}</span>
                </div>
              </div>
              <div className={styles.cardFooter}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.viewButton}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>

        <a 
          href="https://github.com/Aline-CROIRE" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.viewAllButton}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          View GitHub Profile
        </a>
      </div>
    </section>
  )
}