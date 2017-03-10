import React, { Component } from 'react';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import { CONFIG } from '../constants/Config.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.addDuoshuoComment = this.addDuoshuoComment.bind(this);
  }

  componentDidMount() {

    // 添加多说评论框
    this.addDuoshuoComment();

    document.title = CONFIG.title;

    if (!this.props.isFetching) {
      NProgress.done();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isFetching) {
      document.title = CONFIG.title;
      NProgress.done();
    }
  }

  addDuoshuoComment() {
    window.duoshuoQuery = { short_name: CONFIG.duoshuo };
    (function() {
      var ds = document.createElement('script');
      ds.type = 'text/javascript';
      ds.async = true;
      ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
      ds.charset = 'UTF-8';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
    })();
  }

  render() {
    return (
      <div className="wrap">
          {this.props.children}
      </div>
    );
  }
};

function mapStateToProps(state) {
  const {
    isFetching,
    items
  } = state || {
    isFetching: true,
    items: []
  };

  return {
    isFetching,
    items
  }
}

export default connect(mapStateToProps)(App);