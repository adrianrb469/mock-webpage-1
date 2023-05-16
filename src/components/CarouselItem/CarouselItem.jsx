import React from 'react'
import * as styles from './CarouselItem.module.scss'

function CarouselItem({ onNavigate, text, title, srcLink }) {
    const navigate = (direction) => {
        onNavigate && onNavigate(direction) // Call the onNavigate prop with the direction argument
    }

    return (
        <main className={`${styles.carousel}`}>
            <article className={`${styles.picture}`}>
                <img src={srcLink} alt="" />
            </article>
            <article className={`${styles.description}`}>
                <p>{text}</p>
            </article>
            <article className={`${styles.title} effect-title`} id="title">
                <div className={`${styles.thing} effect-title`}>
                    <h1 className="effect-title">
                        SHOW
                        <br /> PROJECT
                        <br />
                        {title}
                    </h1>

                    <h1 className="effect-title">✦</h1>
                </div>
            </article>
            <article className={`${styles.controls}`}>
                <button type="button" onClick={() => navigate('left')}>
                    <img
                        src="src/assets/coolerarrow.svg"
                        alt="right"
                        height="50px"
                        width="50px"
                        className="invert-color invert"
                    />
                </button>
                <button type="button" onClick={() => navigate('right')}>
                    <img
                        src="src/assets/coolerarrow.svg"
                        alt="right"
                        height="50px"
                        width="50px"
                        className="invert-color "
                    />
                </button>
            </article>
        </main>
    )
}

export default CarouselItem
