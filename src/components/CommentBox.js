import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'

class CommentBox extends Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      boxContent: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      boxContent: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.saveComment(this.state.boxContent);
    this.setState({
      boxContent: ''
    });
  }

  render() {
    return (
      <form className="commentBox" onSubmit={this.handleSubmit}>
        <h2>Add a comment</h2>
        <textarea
          value={this.state.boxContent}
          onChange={this.handleChange}
        />
        <div>
          <button action='submit'>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);