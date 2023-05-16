import React from 'react'
import * as styles from './Carousel.module.scss'

function Carousel() {
    return (
        <main className={`${styles.carousel}`}>
            <article className={`${styles.picture}`}>
                <img
                    src="https://uploads-ssl.webflow.com/60c73b61baea9c518130ee68/62375338d69258c01fe12876_00_concepts-hero.jpg"
                    alt=""
                />
            </article>
            <article className={`${styles.description}`}>
                <p>
                    <b>A</b> selection of concept designs I&apos;ve made over
                    the years.
                </p>
            </article>
            <article className={`${styles.title} effect-title`} id="title">
                <div className={`${styles.thing} effect-title`}>
                    <h1 className="effect-title">
                        SHOW
                        <br /> PROJECT
                        <br />
                        CONCEPT <br />
                        DESIGNS
                    </h1>

                    <h1 className="effect-title">✦</h1>
                </div>
            </article>
            <article className={`${styles.controls}`}>
                <button type="button">
                    <i className="fas fa-chevron-left" />
                </button>
                <button type="button">
                    <i className="fas fa-chevron-right" />
                </button>
            </article>
        </main>
    )
}

export default Carousel
