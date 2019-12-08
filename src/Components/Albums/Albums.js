import React, { Component } from 'react';

import {Album} from './Album'

class Albums extends Component {
  state = {
    albums: [],
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true })
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let id = params.get('id');
    let url = 'http://localhost:3001/albums';
    if (id) {
      url = url + '?id=' + id;
    }
    fetch(url)
      .then(albums => albums.json())
      .then(albums => this.setState({ albums, loading: false }))
  }

  render() {
    const { albums, loading } = this.state;
    return (
      <div className="page">
        {loading
          ? "loading..."
          :
        <div>
          <h1>Listado de Albums de la aplicacion</h1>
          {albums.map(
            (album, i) =>
              <Album
                key={album.id}
                id = {album.id}
                name={album.name}
                artist={album.artist}
                cover={album.cover}
              />
          )}
        </div>
        }
      </div>
    );
  }
}

export default Albums;
