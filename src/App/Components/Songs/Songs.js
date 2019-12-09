import React, { Component } from 'react';
import { Song } from './Song'
import { Link } from "react-router-dom";

class Songs extends Component {
  state = {
    songs: [],
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('http://localhost:3001/songs?album_id=' + this.props.match.params.id)
      .then(songs => songs.json())
      .then(songs => this.setState({ songs, loading: false }))
  }

  render() {
    const { songs, loading } = this.state;
    return (
      <div className="page">
        {loading
          ? "loading..."
          :
          <div>
            <h1>Canciones del album</h1>
            <Link to='/albumes'>Volver</Link>
            {songs.map(
              (song, i) =>
                <Song
                  key={song.id}
                  id={song.id}
                  name={song.name}
                  album_id={song.album_id}
                  audio={song.audio}
                  seconds= {song.seconds}
                />
            )}
          </div>
        }
      </div>
    );
  }
}

export default Songs;
