import React, { useState } from "react";
import styles from "./HeaderNavBar.module.scss";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

const HeaderNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`${styles["header-nav-bar"]} ${menuOpen ? styles["open"] : ""}`}
    >
      {/* DESKTOP / TABLET NAV */}
      <div className={styles["tablet-nav"]}>
        <div className={styles["desktop-nav-content-container"]}>
          <nav>
            <ul>
              <li>
                <a href="#introsection">Home</a>
              </li>
              <li>
                <a href="#workdatasection">Work Data</a>
              </li>
              <li>
                <a href="#projectlistsection">Projects</a>
              </li>
              <li>
                <a href="#educationlistsection">Education</a>
              </li>
              <li>
                <a href="#experiencelistsection">Experience</a>
              </li>
              <li>
                <a href="#contactlistsection">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className={styles["mobile-nav"]}>
        <button
          className={styles["menu-button"]}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={menuOpen ? closeIcon : menuIcon} alt="menu" />
        </button>

        <nav
          className={`${styles["mobile-menu"]} ${menuOpen ? styles["open"] : ""}`}
        >
          <ul>
            <li>
              <a href="#introsection">Home</a>
            </li>
            <li>
              <a href="#workdatasection">Work Data</a>
            </li>
            <li>
              <a href="#projectlistsection">Projects</a>
            </li>
            <li>
              <a href="#educationlistsection">Education</a>
            </li>
            <li>
              <a href="#experiencelistsection">Experience</a>
            </li>
            <li>
              <a href="#contactlistsection">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNavBar;
