/* src/components/certificates.tsx */
"use client"

import Image from "next/image"
import styles from "./certificates.module.css"

const certificates = [
  {
    title: "Full Stack Software Developer",
    organization: "TekHer Program - Klab",
    date: "2023",
    image: "/placeholder.svg",
    skills: ["Web Development", "JavaScript", "React", "Node.js", "Database Management"],
  },
  {
    title: "Web Development Fundamentals",
    organization: "SheCanCode Program",
    date: "2022",
    image: "/placeholder.svg",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "Database Management",
    organization: "Igire Rwanda Organisation",
    date: "2022",
    image: "/placeholder.svg",
    skills: ["SQL", "MongoDB", "Database Design", "Data Modeling"],
  },
  {
    title: "API Development",
    organization: "Klab Rwanda",
    date: "2023",
    image: "/placeholder.svg",
    skills: ["RESTful APIs", "Node.js", "Express", "Authentication"],
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className={styles.certificates}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Certificates</h2>
          <p>Professional certifications and achievements</p>
        </div>

        <div className={styles.certificatesGrid}>
          {certificates.map((certificate, index) => (
            <div key={certificate.title} className={styles.certificateCard}>
              <div className={styles.cardContent}>
                <div className={styles.cardMedia}>
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <span className={styles.icon}>🏆</span>
                    <h3 className={styles.cardTitle}>{certificate.title}</h3>
                  </div>
                  <div className={styles.cardMeta}>
                    <span className={styles.icon}>📅</span>
                    <span>
                      {certificate.date} | {certificate.organization}
                    </span>
                  </div>
                  <div className={styles.badgeContainer}>
                    {certificate.skills.map((skill) => (
                      <span key={skill} className={styles.badge}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}