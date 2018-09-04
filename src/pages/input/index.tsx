import * as React from 'react';
import './index.css';
import { Input } from '../../components'

interface InterfaceState {
  inputDefaultValue: string,
  inputValue: string
}

export default class InputPage extends React.Component {

  public state: InterfaceState;
  constructor(props:any) {
    super(props);
    this.state = {
      inputDefaultValue: '默认值123',
      inputValue: 'value123'
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  public render() {
    const {inputDefaultValue, inputValue} = this.state;
    return (
      <div className="input-page">
        <Input 
          defaultValue={inputDefaultValue} 
          value={inputValue} 
          onChange={this.onInputChange} 
        />
      </div>
    );
  }

  public onInputChange(value:any):void {
    this.setState({ inputValue: value })
  }
}
