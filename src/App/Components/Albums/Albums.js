import React, { Component } from 'react';
import { connect } from 'react-redux';

// Acciones
import { getAlbums } from '../../Actions/albums'

import {Album} from './Album'

class Albums extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      albums: [],
      loading: false,
    }
  }*/

  /*async componentDidMount() {
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
  }*/

  componentDidMount() {
    this.props.getAlbums();
  }

  renderAlbums() {
    const { isLoading, error, albums } = this.props.albums;

    if (isLoading) {
      return <p>loading...</p>
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else {
      return (
        <div>
          <h1>Listado de Albums de la aplicacion</h1>
          {albums.map(
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
  }

  render() {
    return (
      <div className="page">
        {this.renderAlbums()}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  getAlbums: () => dispatch(getAlbums()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
