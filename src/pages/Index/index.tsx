import * as React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

const menu = [
  {name:'Button 按钮', path:'/button'},
  {name:'Input 输入框', path:'/input'},
]

export default class IndexPage extends React.Component {
  // public componentDidMount() {
  //   const someValue: any = "this is a string";

  //   const strLength: number = (someValue as string).length;
  //   console.log(strLength)
  // }
  public render() {
    return (
      <div className="index-page">
        {
          menu.map((item, index) => {
            return (
              <span key={index}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </span>
            )
          })
        }
      </div>
    );
  }
}
