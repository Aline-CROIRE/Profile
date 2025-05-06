/* src/components/experience.tsx */
"use client"

import styles from "./experience.module.css"

const experiences = [
  {
    type: "education",
    title: "Full Stack Software Developer",
    organization: "TekHer Program - Klab",
    period: "2023",
    description:
      "Completed intensive training in full stack development, focusing on modern web technologies, database management, and software engineering principles.",
  },
  {
    type: "work",
    title: "Software Developer Intern",
    organization: "SheCanCode Program",
    period: "2022 - 2023",
    description:
      "Participated in projects focused on database management and API development. Collaborated with a team to build web applications.",
  },
  {
    type: "education",
    title: "Web Development Bootcamp",
    organization: "Igire Rwanda Organisation",
    period: "2021 - 2022",
    description:
      "Intensive training in modern web development technologies including HTML, CSS, JavaScript, and React.",
  },
  {
    type: "work",
    title: "Junior Developer",
    organization: "Tech Company",
    period: "2023 - Present",
    description:
      "Working on frontend and backend development for web applications. Implementing features and fixing bugs.",
  },
]

export default function Experience() {
  return (
    <section id="resume" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Experience & Education</h2>
          <p>My academic and professional journey</p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}>
                {exp.type === "education" ? "🎓" : "💼"}
              </div>
              
              <div className={styles.timelineContent}>
                <span className={styles.timelinePeriod}>{exp.period}</span>
                <h3 className={styles.timelineTitle}>{exp.title}</h3>
                <p className={styles.timelineOrg}>{exp.organization}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}