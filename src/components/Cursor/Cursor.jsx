import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

function Cursor({ mousePosition }) {
    const svgRef = useRef(null)

    useEffect(() => {
        const cursor = svgRef.current
        const delay = 0.4

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
                r: 30,
            })
        } else {
            gsap.to(cursor, {
                duration: delay,
                x: mousePosition.x,
                y: mousePosition.y,
                r: 11,
                ease: 'power3',
            })
        }
    }, [mousePosition])

    return (
        <svg id="cursor" width="100%" height="100%">
            <circle
                r="11"
                fill="black"
                className="cursor-circle"
                ref={svgRef}
            />
        </svg>
    )
}

export default Cursor
