import React, { useState } from "react";
import styles from "./Header.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          QuizzIt!
        </a>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl("close.png")
                : getImageUrl("menu.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <Link to="/signup">Sign Up</Link> 
            </li>
            <li>
              <Link to="/rank">Rank</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </nav>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome To QuizzIt</h1>
          <p className={styles.description}>
            What's your plan Today?
          </p>
          <div className={styles.buttonContainer}>
            <Link to="/createquiz" className={styles.contactBtn}>Create Quiz</Link> 
            <div className={styles.space} />
            <Link to="/joinquiz" className={styles.contactBtn}>Join Quiz</Link>
            <div className={styles.space} />
            <Link to="/takequiz" className={styles.contactBtn}>Take Quiz</Link>
          </div>
        </div>
        <img
          src={getImageUrl("personthinking.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    </header>
  );
};

export default Header;
