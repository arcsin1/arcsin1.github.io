import React, { Component } from 'react';
import Cell from './Cell.js';

export default class CellView extends Component {
  render() {
    return (
      <div className="right-menu">
      <div className="container-fluid">
          <ul className="list-group">
            {
              this.props.items.map((item, index) => 
                <Cell {...item} key={index}  show={this.props.show}/>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
};