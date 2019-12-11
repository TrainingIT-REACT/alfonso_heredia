import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSongs } from '../../Actions/songs';
import { getAlbums } from '../../Actions/albums';

import Song from '../Songs/Song';
import { Album } from '../Albums/Album';

class Home extends Component {

  renderCustomSongs() {
    const {songs, isLoading, error } = this.props.songs;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>;
    }
    else {
      return (
        <div className="songs-wrapper">
          <div className="songs">
                {songs.slice(0, 5).map(
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
          </div>
        </div>
      )
    }
  };

  renderCustomAlbums() {
    const { albums, isLoading, error } = this.props.albums;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>;
    }
    else {
      return (
        <div>
          {albums.slice(0, 3).map(
            (album) =>
              <Album
                key={album.id}
                id={album.id}
                name={album.name}
                artist={album.artist}
                cover={album.cover}
              />
          )}
        </div>
      )
    }
  };

  render() {
    return (
      <div className="page">
        <h1 className="text-center">Reactify</h1>
        <h2 className="bg-secondary text-white text-center rounded m-3">Canciones mas escuchadas</h2>
        {this.renderCustomSongs()}
        <div className="clearfix" />
        <h2 className="bg-secondary text-white text-center rounded m-3">Albumes mas descargados</h2>
        {this.renderCustomAlbums()}
      </div>
    );
  }

  componentDidMount() {
    this.props.getSongs();
    this.props.getAlbums();
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbums()),
  getSongs: () => dispatch(getSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
