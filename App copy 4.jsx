import React, { useState } from 'react'


export default function App() {
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)
  const [dragStartX, setDragStartX] = useState(0)
  const [dragStartY, setDragStartY] = useState(0)
  function handleDragStart(e) {
    setDragStartX(e.clientX)
    setDragStartY(e.clientY)
  }
  function handleDrag(e) {
    if (e.clientX === 0 && e.clientY === 0) return; // Prevent updates when drag ends
    const diffX = e.clientX - dragStartX
    const diffY = e.clientY - dragStartY
    setLeft(prevLeft => prevLeft + diffX)
    setTop(prevTop => prevTop + diffY)
    setDragStartX(e.clientX)
    setDragStartY(e.clientY)
  }
  return (
   <div style={{
    paddingLeft:'200px'
   }}>
    <div style={
      {
        position: 'relative'
      }
    }>
      <div draggable onDragStart={handleDragStart} onDrag={handleDrag} style={
        {
          width: '200px',
          height: '200px',
          backgroundColor: 'pink',
          position: 'absolute',
          left: left + 'px',
          top: top + 'px'
        }
      }>

      </div>
    </div>
   </div> 
  )
}
