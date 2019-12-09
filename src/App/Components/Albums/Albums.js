import React, { Component } from 'react';

import {Album} from './Album'

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      loading: false,
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })
    try {
      const response = await fetch('http://localhost:3001/albums');
      const albumsData = await response.json();
      this.setState({ albums: albumsData, loading: false });
    }
    catch (error) {
      console.log(error);
      this.setState({albums:[], loading:[false]});
    }
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
