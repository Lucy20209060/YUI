import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ButtonPage from './pages/Button';
import IndexPage from './pages/Index';
import InputPage from './pages/Input';

export default class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="layout">
          <Route exact path="/" component={IndexPage as any} />
          <Route path="/button" component={ButtonPage as any} />
          <Route path="/input" component={InputPage as any} />
        </div>
      </Router>
    );
  }
}
