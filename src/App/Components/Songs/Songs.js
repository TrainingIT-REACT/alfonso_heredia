import React, { Component } from 'react';
import { Song } from './Song'
import { Link } from "react-router-dom";

import './songs.css'

class Songs extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      loading: false,
      album: {}
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })
    try {
      const responseSongs = await fetch('http://localhost:3001/songs?album_id=' + this.props.match.params.id);
      const songsData = await responseSongs.json();
      this.setState({ songs: songsData});

      const responseAlbum = await fetch('http://localhost:3001/albums?id=' + this.props.match.params.id);
      const albumData = await responseAlbum.json();
      this.setState({ album: albumData[0]});
    }
    catch (error) {
      console.log(error);
      this.setState({ songs: [], loading: [false] });
    }
    finally {
      this.setState({ loading: false })
    }

  }

  render() {
    const { songs, album, loading } = this.state;
    return (
      <div className="page">
        {loading
          ? "loading..."
          :
          <div className="songs-wrapper">
            <h1>Album {album.name}</h1>
            <div className="cover">
              <img src={album.cover} alt="album cover" />
            </div>
            <div className="songs">
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
            <Link to='/albumes'>Volver</Link>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Songs;
