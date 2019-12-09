import React from 'react'
import { Link } from "react-router-dom";


import './album.css'

export const Album = ({ id, name, artist, cover }) => {
  return (
    <div className="card" style={{width: "18rem", float: "left" , margin:"1rem"}}>
      <img src={cover} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">by: {artist}</p>
        <Link className="album btn btn-primary" to={`albumes/${id}`} style={{width:"50%"}}>Detalles</Link>
      </div>
    </div>
  )
}
