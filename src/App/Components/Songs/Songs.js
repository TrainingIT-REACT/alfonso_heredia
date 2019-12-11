import React, { Component } from 'react';
import { connect } from 'react-redux';

// Acciones
import { getAlbums } from '../../Actions/albums'
import { getSongs } from '../../Actions/songs'

import Song  from './Song';
import { Link } from "react-router-dom";

import './songs.css'

class Songs extends Component {
  /*constructor(props){
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

  }*/

  componentDidMount() {
    this.props.getSongs(this.props.match.params.id);
    this.props.getAlbums(this.props.match.params.id);
  }

  renderSongs() {
    const { isLoading, error, songs} = this.props.songs;
    const { albums } = this.props.albums;
    const albumName = albums[0]
      ? albums[0].name
      : "El album que buscas no existe :(";
    const albumCover = albums[0] ? albums[0].cover : null;
    if (isLoading) {
      return <p>loading...</p>
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else {
      return (
        <div className="songs-wrapper">
          <h2 className="bg-secondary text-white text-center rounded m-3">Album {albumName}</h2>
          <div className="cover">
            <img src={albumCover} alt="album cover" />
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
                  seconds={song.seconds}
                />
            )}
            <Link className="text-primary" to='/albumes'>Volver</Link>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="page">
        {this.renderSongs()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getAlbums: albumId => dispatch(getAlbums(albumId)),
  getSongs: albumId => dispatch(getSongs(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
