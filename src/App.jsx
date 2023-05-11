import React, { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel/Carousel'
import Cursor from './components/Cursor/Cursor'

function App() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (event) => {
        const x = event.clientX
        const y = event.clientY
        setMousePosition({ x, y })
    }

    return (
        <div className="content" onMouseMove={handleMouseMove}>
            <Cursor mousePosition={mousePosition} />
            <Navbar />
            <Carousel />
        </div>
    )
}

export default App
