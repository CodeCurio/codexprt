import React from 'react'
import './Tittle.css'

const Tittle = ({subtittle, tittle}) => {
  return (
    <div className='tittle'>
        <p>{subtittle}</p>
        <h2>{tittle}</h2>
    </div>
  )
}

export default Tittle