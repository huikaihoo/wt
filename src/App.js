import React, { Component } from 'react';
//import Button from 'antd/lib/button';
import { Button } from 'antd';
import logo from './logo.svg';
import './less/App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            你好 <span className="jp">もしもし</span> <i class="material-icons">lock_outline</i>
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button type="primary" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
