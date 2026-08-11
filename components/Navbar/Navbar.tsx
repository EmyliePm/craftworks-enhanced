import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.brand}>
        <Image
          src="/branding/logo.png"
          alt=""
          width={70}
          height={70}
          className={styles.logo}
          priority
        />

        <div className={styles.brandText}>
          <span className={styles.brandName}>CRAFTWORKZ</span>

          <span className={styles.tagline}>PROPERTY • CRAFT • CARE</span>
        </div>
      </a>

      <nav className={styles.nav}>
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#coverage">Coverage</a>
        <a href="#about">About</a>
      </nav>

      <a href="#contact" className={styles.projectButton}>
        Start a project
      </a>
    </header>
  );
}
