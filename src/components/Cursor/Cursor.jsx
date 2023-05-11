import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

function Cursor({ mousePosition }) {
    const svgRef = useRef(null)

    useEffect(() => {
        const cursor = svgRef.current
        const rect = svgRef.current.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2

        const delay = 0.3 // set the delay time in seconds

        // update the position of the cursor with GSAP
        gsap.to(cursor, {
            duration: delay,
            x: mousePosition.x,
            y: mousePosition.y,
            ease: 'power4.out',
        })
    }, [mousePosition])

    return (
        <svg id="cursor" width="100%" height="100%">
            <circle
                r="10"
                fill="black"
                className="cursor-circle"
                ref={svgRef}
            />
        </svg>
    )
}

export default Cursor
