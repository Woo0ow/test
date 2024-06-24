import React, { useState } from 'react'
import './index.css'

export default function App() {
  const items = [];
  for (let i = 0; i < 12; i++) {
    items.push((<div key={i} className='item'>{i}</div>))
  }
  return (
    <div className="container">
      {items}
    </div>
  )
}
