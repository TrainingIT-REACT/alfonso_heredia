import React from 'react'

import './song.css'

export const Song = ({ id, name, album_id, audio, seconds }) => {
  return (
    <div className="song">
      <div className="title">Song name:{name} duration: {seconds}segs</div>
      <audio controls>
        <source src={audio} type="audio/mpeg"></source>
      </audio>
    </div>
  )
}
