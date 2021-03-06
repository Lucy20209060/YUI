import * as React from 'react';
import './index.css';
import { Input } from '../../components'
const { TextArea } = Input;

interface InterfaceState {
  inputDefaultValue: string,
  inputValue: string,
}

export default class InputPage extends React.Component {

  public state: InterfaceState;
  constructor(props:any) {
    super(props);
    this.state = {
      inputDefaultValue: '',
      inputValue: '12345'
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  public render() {
    const {inputDefaultValue, inputValue} = this.state;
    return (
      <div className="input-page">
        <Input type="password" defaultValue={inputDefaultValue} value={inputValue} onChange={this.onInputChange} /> 
        <hr/>
        <Input placeholder="请输入账号" size="medium" defaultValue={inputDefaultValue} value={inputValue} />
        <hr/>
        <Input size="small" defaultValue={inputDefaultValue} value={inputValue} onPressEnter={this.onPressEnter} />
        <hr/>
        <Input disabled size="mini" defaultValue={inputDefaultValue} value={inputValue} />
        <hr/>
        <Input.TextArea 
          placeholder="请输入评论" 
          value={inputValue} 
          defaultValue={inputDefaultValue} 
          onChange={this.onInputChange}
        />
        <hr/>
        <TextArea autosize={{ minRows: 2, maxRows: 6 }} />
      </div>
    );
  }

  public onInputChange(value:any):void {
    this.setState({ inputValue: value })
  }

  public onPressEnter(value:any):void{
    console.log(value)
  }
}
