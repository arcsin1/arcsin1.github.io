import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createHashHistory } from 'history';
import { CONFIG } from '../constants/Config.js';
import NProgress from 'nprogress';

import Index from '../components/Index.js';
import App from '../containers/App.js';
import '../../css/bootstrap.less';
import '../../css/reset.less';
import '../../css/fonts.less';
import '../../css/index.less';
import '../../css/nprogress.less';

//以下代码可以解决以上问题，不依赖jq
setTimeout(function(){
  //利用iframe的onload事件刷新页面
  document.title = CONFIG.title;
  var iframe = document.createElement('iframe');
  iframe.style.visibility = 'hidden';
  iframe.style.width = '1px';
  iframe.style.height = '1px';
  iframe.onload = function () {
    setTimeout(function () {
      document.body.removeChild(iframe);
    }, 0);
  };
  document.body.appendChild(iframe);
},0);


var All = (location, cb) => {
  document.title = CONFIG.titleLoad;
  NProgress.start();
  require.ensure([], require => {
    cb(null, require('../containers/All.js').default);
  }, 'all');
};

var Archive = (location, cb) => {
  document.title = CONFIG.titleLoad;
  NProgress.start();
  require.ensure([], require => {
    cb(null, require('../containers/Archive.js').default);
  }, 'archive');
};

var Tags = (location, cb) => {
  document.title = CONFIG.titleLoad;
  NProgress.start();
  require.ensure([], require => {
    cb(null, require('../containers/Tags.js').default);
  }, 'tags');
};

var Post = (location, cb) => {
  document.title = CONFIG.titleLoad;
  NProgress.start();
  require.ensure([], require => {
    cb(null, require('../containers/Post.js').default);
  }, 'post');
};

var About = (location, cb) => {
  document.title = CONFIG.titleLoad;
  NProgress.start();
  require.ensure([], require => {
    cb(null, require('../containers/About.js').default);
  }, 'About');
};

const routes = (
  <Route path="/" component={App} history={createHashHistory()}>
    <IndexRoute component={Index} />
    <Route path="all" getComponent={All} />
    <Route path="archive" getComponent={Archive} />
    <Route path="tags" getComponent={Tags} />
    <Route path="about" getComponent={About} />
    <Route path="post/:id" getComponent={Post} />
  </Route>
);

export default class Root extends Component {
  render() {
    return <Router routes={routes} />
  }
};