import React, { Component } from 'react';
import { LayoutConfig } from '../constants/Config.js';
import { Link } from 'react-router';

export default class Info extends Component {
 
  render() {
    const title = this.props.title
    return (
     <div className="left-menu">
        <div className="overlay"></div>
          <h1 className="header-author"><a href="/">RADIX</a></h1>
          <h3 className="header-subtitle">我们的口号是 ~~~~~ ^_^ ^_^</h3>
        <nav className="header-menu">
          <ul className="menu">
              <li className={title === 'all'?'active':''}><Link to="all">{LayoutConfig.all}</Link></li>
              <li className={title === 'archive'?'active':''}><Link to="archive">{LayoutConfig.archive}</Link></li>
              <li className={title === 'tags'?'active':''}><Link to="tags">{LayoutConfig.tags}</Link></li>
              <li className={title === 'about'?'active':''}><Link to="about">{LayoutConfig.about}</Link></li>
          </ul>
        </nav>
        <h3 className="info">©2017 radix</h3>
     </div>
    );
  }
};