import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

function Cursor({ mousePosition }) {
    const svgRef = useRef(null)
    const svgRef2 = useRef(null)
    useEffect(() => {
        const cursor = svgRef.current
        const eye = svgRef2.current
        const delay = 0.28

        const element = document.elementFromPoint(
            mousePosition.x,
            mousePosition.y
        )

        if (element.tagName === 'A' || element.id === 'logo') {
            gsap.to(cursor, {
                x: mousePosition.x,
                y: mousePosition.y,
                duration: 0.8,
                ease: 'power3',
                fill: 'black',
                r: 30,
                strokeWidth: '0px',
            })
            gsap.to(eye, {
                duration: delay,
                x: mousePosition.x,
                y: mousePosition.y,
                ease: 'power3',
                scale: 0,
                fill: 'white',
            })
        } else if (element.id === 'title') {
            gsap.to(cursor, {
                x: mousePosition.x,
                y: mousePosition.y,
                duration: 0.8,
                ease: 'power3',
                r: 50,
                fill: 'red',
                mixBlendMode: 'normal',
                stroke: 'grey',
                strokeWidth: '5px',
            })
            gsap.to(eye, {
                duration: delay,
                x: mousePosition.x - 20,
                y: mousePosition.y - 15,
                r: 12,
                scale: 1.8,
                ease: 'power3',
                fill: 'white',
            })
        } else {
            gsap.to(cursor, {
                duration: delay,
                x: mousePosition.x,
                y: mousePosition.y,
                r: 8,
                ease: 'power3',
                fill: 'black',
                strokeWidth: '0px',
            })
            gsap.to(eye, {
                duration: delay,
                x: mousePosition.x - 50,
                y: mousePosition.y - 50,
                r: 12,
                ease: 'power3',
                fill: 'white',
            })
        }
    }, [mousePosition])

    return (
        <svg id="cursor" width="100%" height="100%">
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
