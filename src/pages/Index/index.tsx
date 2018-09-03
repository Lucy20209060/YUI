import * as React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

export default class IndexPage extends React.Component {
  public render() {
    return (
      <div className="index-page">
        <NavLink to="/button">Button 按钮</NavLink>
      </div>
    );
  }
}
