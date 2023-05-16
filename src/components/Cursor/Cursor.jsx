import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'

function Cursor({ mousePosition }) {
    const svgRef = useRef(null)
    const svgRef2 = useRef(null)
    useEffect(() => {
        const cursor = svgRef.current
        const eye = svgRef2.current
        const delay = 0.24

        const element = document.elementFromPoint(
            mousePosition.x,
            mousePosition.y
        )

        const currentX = mousePosition.x
        const currentY = mousePosition.y + window.scrollY

        if (element) {
            if (
                !element.tagName ||
                (element.tagName !== 'A' &&
                    element.id !== 'logo' &&
                    !element.classList.contains('effect-title'))
            ) {
                gsap.to(cursor, {
                    duration: delay,
                    x: currentX,
                    y: currentY,
                    r: 8,
                    ease: 'power3',
                    fill: 'black',
                    strokeWidth: '0px',
                })
                gsap.to(eye, {
                    duration: delay,
                    x: currentX - 50,
                    y: currentY - 50,
                    r: 12,
                    ease: 'power3',
                    fill: 'white',
                })
            } else if (element.classList.contains('effect-title')) {
                gsap.to(cursor, {
                    duration: delay,
                    x: currentX,
                    y: currentY,
                    r: 50,
                    fill: 'red',
                    stroke: 'grey',
                    strokeWidth: '3px',
                })
                gsap.to(eye, {
                    duration: delay,
                    x: currentX - 20,
                    y: currentY - 15,
                    r: 12,
                    scale: 1.8,
                    ease: 'power3',
                    fill: 'white',
                })
            } else {
                gsap.to(cursor, {
                    duration: delay,
                    x: currentX,
                    y: currentY,
                    fill: 'black',
                    r: 30,
                    strokeWidth: '0px',
                })
                gsap.to(eye, {
                    duration: delay,
                    x: currentX,
                    y: currentY,
                    ease: 'power3',
                    scale: 0,
                    fill: 'white',
                })
            }
        }
    }, [mousePosition])

    return (
        <svg id="cursor" width="100%" height={document.body.scrollHeight}>
            <circle
                r="8"
                fill="black"
                filter="url(#turbulance)"
                className="cursor-circle"
                ref={svgRef}
                id="thingamajig"
            />

            <path
                ref={svgRef2}
                d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"
                id="eye"
            />
        </svg>
    )
}

export default Cursor
Cursor.propTypes = {
    mousePosition: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }).isRequired,
}
