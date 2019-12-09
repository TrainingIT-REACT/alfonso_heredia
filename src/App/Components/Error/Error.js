import React from "react";

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  static getDerivedStateFromError() {
    return {
      error: true
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  onClick = () => {
    this.props.onReset();
    this.setState({ error: false });
  }

  render() {
    if (this.state.error === true) {
      return (
        <div>
          <h1>{this.props.message}</h1>
          <button onClick={this.onClick}>Reintentar</button>
        </div>
      );
    }

    // Si no hay errores, mostramos los nodos descendientes
    return this.props.children;
  }
}

export default Error;
