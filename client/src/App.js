import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    // ws.on('message', function incoming(data) {
    //   console.log(data);
    // });
    // this.callApi()
    //   .then(res => console.log('res', res))
    //   .catch(err => console.log(err));
    var ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
        console.log('websocket is connected ...')
        ws.send('connected')
    }

    ws.onmessage = event => {
        console.log(event.data);
        alert(event.data);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
