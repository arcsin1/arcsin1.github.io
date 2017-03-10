import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../actions/index.js';
import Article from '../components/Article.js';
import Nav from '../components/Nav.js';

import '../../css/zenburn.less';
import '../../css/article.less';
 
class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIssuesIfNeeded('created', 10000));
  }

  render() {
    if (this.props.isFetching) {
      return null;
    }

    let view = [];
    this.props.items.map((item, index) => {
      if (parseInt(item.number) === parseInt(this.props.params.id)) {
        view.push(
          <Article {...item}  key={index} />
        );
      }
    });

    return (
      <div className="list">
       <Nav />
        <div className="tag-list">
         {view}
        </div>
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

export default connect(mapStateToProps)(Post);