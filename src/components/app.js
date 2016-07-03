import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentsList from './CommentsList';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React Comment App</div>
        <CommentBox />
        <CommentsList />
      </div>
    );
  }
}
