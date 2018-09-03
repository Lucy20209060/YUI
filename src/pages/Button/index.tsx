import * as React from 'react';
import './index.css';
import { Button } from '../../components'

export default class ButtonPage extends React.Component {
  public render() {
    return (
      <div className="button-page">
        <p className="title">按钮</p>
        <Button disabled>朴素按钮</Button>
        <Button size="medium">朴素按钮</Button>
        <Button size="small">朴素按钮</Button>
        <Button size="mini">朴素按钮</Button>
        <hr/>
        <Button disabled type="primary" >主要按钮</Button>
        <Button type="primary" size="medium">主要按钮</Button>
        <Button type="primary" size="small">主要按钮</Button>
        <Button type="primary" size="mini">主要按钮</Button>
        <hr/>
        <Button disabled type="success">成功按钮</Button>
        <Button type="success" size="medium">成功按钮</Button>
        <Button type="success" size="small">成功按钮</Button>
        <Button type="success" size="mini">成功按钮</Button>
        <hr/>
        <Button disabled type="warning">警告按钮</Button>
        <Button type="warning" size="medium">警告按钮</Button>
        <Button type="warning" size="small">警告按钮</Button>
        <Button type="warning" size="mini">警告按钮</Button>
        <hr/>
        <Button disabled type="danger">危险按钮</Button>
        <Button type="danger" size="medium">危险按钮</Button>
        <Button type="danger" size="small">危险按钮</Button>
        <Button type="danger" size="mini">危险按钮</Button>
        <hr/>
        <Button disabled type="info">信息按钮</Button>
        <Button type="info" size="medium">信息按钮</Button>
        <Button type="info" size="small">信息按钮</Button>
        <Button type="info" size="mini" onClick={this.buttonClick}>点击事件</Button>
        <hr/>
        <Button disabled type="text">文本按钮</Button>
        <Button type="text" size="medium">文本按钮</Button>
        <Button type="text" size="small">文本按钮</Button>
        <Button type="text" size="mini">文本按钮</Button>
      </div>
    );
  }
  public buttonClick = () => {
    console.log(1)
  }
}
