import * as React from 'react';
import './index.css';
import { Input } from '../../components'

export default class InputPage extends React.Component {
  public render() {
    return (
      <div className="input-page">
        <Input defaultValue='1111' value='2222' onChange={this.onInputChange} />
      </div>
    );
  }

  public onInputChange() {
    console.log(11)
  }
}
