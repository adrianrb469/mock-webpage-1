import React, { useState } from 'react'
import CarouselItem from '../CarouselItem/CarouselItem'
import * as styles from './Carousel.module.scss'

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0)

    function handleNavigate(direction) {
        if (direction === 'left') {
            setActiveIndex(
                activeIndex === 0 ? items.length - 1 : activeIndex - 1
            )
        } else if (direction === 'right') {
            setActiveIndex(
                activeIndex === items.length - 1 ? 0 : activeIndex + 1
            )
        }
    }

    const items = [
        {
            index: 0,
            status: activeIndex === 0 ? 'active' : 'inactive',
            text: 'A selection of various concept designs that I have created for various projects.',
            title: 'CONCEPT DESIGNS',
            srcLink:
                'https://uploads-ssl.webflow.com/60c73b61baea9c518130ee68/62375338d69258c01fe12876_00_concepts-hero.jpg ',
        },
        {
            index: 1,
            status: activeIndex === 1 ? 'active' : 'inactive',
            text: 'A vintage website for an old school barber shop. ',
            title: 'BARBER SHOP',
            srcLink:
                'https://uploads-ssl.webflow.com/60c73b61baea9c518130ee68/6219f1ba82b12ab80cf15e2a_spbp-hero.jpg',
        },
    ]
    return (
        <div className={`${styles.carousel}`}>
            {items.map((item) => {
                const classNames = [styles.item]
                if (item.status === 'active') {
                    classNames.push(styles.active)
                } else {
                    classNames.push(styles.inactive)
                }
                return (
                    <div className={classNames.join(' ')}>
                        <CarouselItem
                            key={item.index}
                            data-index={item.index}
                            onNavigate={handleNavigate}
                            text={item.text}
                            srcLink={item.srcLink}
                            title={item.title}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Carousel
