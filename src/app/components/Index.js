import React, { Component } from 'react';
import { Link } from 'react-router';
import NProgress from 'nprogress';
import { LayoutConfig } from '../constants/Config.js';
class Index extends Component {
  render() {
    return (
      <div id="home">
        <div className="avatar">
          <a href="https://github.com/Expendo"></a>
        </div>
        <h1>{LayoutConfig.name}</h1>
        <div className="link">
          <Link to="all">{LayoutConfig.all}</Link>
          <Link to="archive">{LayoutConfig.archive}</Link>
          <Link to="tags">{LayoutConfig.tags}</Link>
          <Link to="about">{LayoutConfig.about}</Link>
        </div>
      </div>
    );
  }
};

export default Index;