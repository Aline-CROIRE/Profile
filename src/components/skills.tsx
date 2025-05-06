/* src/components/skills.tsx */
"use client"

import { useEffect, useRef } from "react"
import styles from "./skills.module.css"

const skills = [
  {
    category: "Frontend Development",
    icon: "🌐",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
    ],
  },
  {
    category: "Backend Development",
    icon: "🖥️",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Java", level: 75 },
      { name: "Python", level: 70 },
      { name: ".NET", level: 65 },
    ],
  },
  {
    category: "Database Management",
    icon: "🗄️",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "JSON", level: 85 },
      { name: "Database Design", level: 75 },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 85 },
      { name: "WordPress", level: 75 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
]

export default function Skills() {
  const skillRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target
            const level = progressBar.getAttribute("data-level")
            progressBar.style.width = `${level}%`
          }
        })
      },
      { threshold: 0.1 }
    )

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>My Skills</h2>
          <p>Here are my technical skills and areas of expertise</p>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((category, categoryIndex) => (
            <div key={category.category} className={styles.skillCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <span>{category.icon}</span>
                </div>
                <h3>{category.category}</h3>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        ref={(el) => (skillRefs.current[categoryIndex * 4 + skillIndex] = el)}
                        data-level={skill.level}
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}