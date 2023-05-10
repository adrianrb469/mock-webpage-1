import React from 'react'
import * as styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav>
            <div className={`${styles.section} ${styles.logo}`}>
                <img
                    src="/src/assets/Vector.svg"
                    alt="logo"
                    width={40}
                    height={40}
                />
            </div>
            <div className={`${styles.section} ${styles.links}`}>
                <a href="/a">AB0UT </a>
                <a href="/a">W0RK</a>
            </div>
            <div className={`${styles.section} ${styles.socials}`}>
                <i className="fa-brands fa-instagram" />
                <i className="fa-brands fa-dribbble" />
                <i className="fa-brands fa-linkedin-in" />
            </div>
            <div className={`${styles.section} ${styles.socials}`}>
                <a href="/a">Get in touch</a>
            </div>
        </nav>
    )
}

export default Navbar
