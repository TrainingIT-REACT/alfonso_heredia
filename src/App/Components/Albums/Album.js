import React from 'react'
import { Link } from "react-router-dom";


import './album.css'

export const Album = ({ id, name, artist, cover }) => {
  return (
    <Link className="album" to={`albumes/${id}`}>
      <div className="title">{name}</div>
      <div>by: {artist}</div>
      <img src={cover} alt="album cover" />
    </Link>
  )
}
