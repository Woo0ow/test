import React, { useEffect, useRef, useState } from 'react'
import './index.scss'

export default function App() {
  const [mouseDown, setMouseDown] = useState(false);
  const [leftWidth, setLeftWidth] = useState(0)
  const [dragStartX, setDragStartX] = useState(0)
  const leftContainerRef = useRef(null)
  useEffect(() => {
    setLeftWidth(leftContainerRef.current.offsetWidth + .5)
  }, [])
  function handleMouseDown(e) {
    setDragStartX(e.clientX)
    setMouseDown(true)
    e.preventDefault()
  }
  function handleMouseMove(e) {
    if (e.clientX === 0 || !mouseDown) return; // Prevent updates when drag ends
    if(leftWidth<=leftContainerRef.current.style.minWidth.replace('px','')) return;
    console.dir(leftContainerRef.current)
    console.log(leftWidth)
    const diffX = e.clientX - dragStartX
    setLeftWidth(leftWidth + diffX)
    setDragStartX(e.clientX)

  }
  function handleMouseUp(e) {
    setMouseDown(false)
  }
  useEffect(() => {
    leftContainerRef.current.style.width = leftWidth + 'px'
  }, [leftWidth])
  return (
    <>
      <div className='grid'>
        <div className="nav">
        </div>
        <div className="container" onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>

          <div className="left" ref={leftContainerRef}>
            left
          </div>
          <div className="resizeline" style={
            {
              left: leftWidth + 'px'
            }
          } onMouseDown={handleMouseDown}  >

          </div>
          <div className="right">
            right
          </div>
        </div>
      </div>

    </>
  )
}
