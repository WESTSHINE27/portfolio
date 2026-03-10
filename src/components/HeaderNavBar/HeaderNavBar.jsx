import React from 'react'
import styles from "./HeaderNavBar.module.scss";

const HeaderNavBar = () => {
  return (
    <div className={styles['header-nav-bar']}>
        <div className={styles['content']}>
            <nav>
                <ul>
                    <li><a href="#home-section">Home</a></li>
                    <li><a href="#work-data-section">Work Data</a></li>
                    <li><a href="#project-list-section">Projects</a></li>
                    <li><a href="#education-list-section">Education</a></li>
                    <li><a href="#experience-list-section">Experience</a></li>
                    <li><a href="#contact-list-section">Contact</a></li>
                </ul>
                </nav>
        </div>
    </div>
  )
}

export default HeaderNavBar
