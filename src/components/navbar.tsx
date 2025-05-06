"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./navbar.module.css"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Resume", path: "/#resume" },
  { name: "Projects", path: "/#projects" },
  { name: "Contact", path: "/#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Apply dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  // Apply direction
  useEffect(() => {
    document.documentElement.setAttribute("dir", dir)
  }, [dir])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Aline NIYONIZERA
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} className={styles.navLink}>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className={styles.controls}>
          <button onClick={() => setIsDark(!isDark)} className={styles.toggleBtn}>
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button onClick={() => setDir(dir === "ltr" ? "rtl" : "ltr")} className={styles.toggleBtn}>
            {dir === "ltr" ? "↔️ RTL" : "↔️ LTR"}
          </button>
        </div>

        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} onClick={() => setIsOpen(false)}>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
