import React, { Component } from 'react';

export default class View extends Component {
  render() {
    return (
      <li className="list-group-item">
        <span><a href={'#post/' + this.props.number}>{this.props.title}</a></span>
        <span className="label label-default label-pill pull-right">{this.props.created_at.substr(0, 10)}</span>
      </li>
    );
  }
};