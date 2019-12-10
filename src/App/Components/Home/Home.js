import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSongs } from '../../Actions/songs'
import { Song } from '../Songs/Song'

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

  render() {
    return (
      <div className="page">
        <h1 className="text-center">Reactify</h1>
        <h2 className="text-center">Canciones mas escuchadas</h2>
        {this.renderCustomSongs()}
      </div>
    );
  }

  componentDidMount() {
    this.props.getSongs();
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getSongs: () => dispatch(getSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
