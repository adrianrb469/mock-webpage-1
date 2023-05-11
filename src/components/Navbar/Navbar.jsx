import React from 'react'
import * as styles from './Navbar.module.scss'

function Navbar() {
    return (
        <nav className={`${styles.nav}`}>
            <div className={`${styles.section} ${styles.logo}`}>
                <img
                    src="/src/assets/Vector.svg"
                    alt="logo"
                    width={40}
                    height={40}
                    id="logo"
                />
            </div>
            <div className={`${styles.section} ${styles.links}`}>
                <a href="/a">ABOUT</a>
                <a href="/a">WORK</a>
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
