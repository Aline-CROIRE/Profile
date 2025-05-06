/* src/components/hero.tsx */
"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import styles from "./hero.module.css"
import Typed from "typed.js"

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Full Stack Developer", "Backend Developer", "University Student", "TekHer Program Graduate"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.greeting}>HELLO!</span>
          <h1 className={styles.title}>
            I&apos;m{" "}
            <span className={styles.highlight}>
              Aline <br />
              NIYONIZERA
            </span>
          </h1>
          <div className={styles.typewriter}>
            <span ref={typedRef}></span>
          </div>
          <p className={styles.description}>
            Passionate web developer with experience in front-end and back-end technologies. Certified Full Stack
            Software Developer from the TekHer program at Klab.
          </p>
          <div className={styles.buttons}>
            <a href="#contact" className="btn btn-primary">
              Hire Me
            </a>
            <a href="#" className="btn btn-outline">
              Download CV
            </a>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageGlow}></div>
          <div className={styles.imageWrapper}>
            <Image src="/placeholder.svg" alt="Aline NIYONIZERA" fill />
          </div>
        </div>
      </div>
    </section>
  )
}