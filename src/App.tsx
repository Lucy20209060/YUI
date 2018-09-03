import * as React from 'react';
import './App.css';

import { Button } from './components'

export default class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Button>按钮</Button>
      </div>
    );
  }
}
