import React, { Component } from 'react';
import Modal from '../Modal/Modal';

import './song.css'

/* First approach
export const Song = ({ id, name, album_id, audio, seconds }) => {
  return (
    <div className="song">
      <div className="title">Song name:{name} duration: {seconds}segs</div>
      <audio controls>
        <source src={audio} type="audio/mpeg"></source>
      </audio>
    </div>
  )
}*/

class Song extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  onClose = () => {
    this.setState(state => ({
      openModal: false
    }));
  }

  showModal = () => {
    this.setState(state => ({
      openModal: true
    }));
  }

  render() {
    return (
    <div className="song">
      <div className="title">Song name:{this.props.name} duration: {this.props.seconds}segs</div>
      <Modal open={this.state.openModal} onClose={this.onClose}>
        <div className="title">{this.props.name}</div>
        <audio controls>
          <source src={this.props.audio} type="audio/mpeg"></source>
        </audio>
      </Modal>
      <button className="btn btn-primary" onClick={this.showModal}>Escuchar</button>
    </div>
    )
  }
}

export default Song;
