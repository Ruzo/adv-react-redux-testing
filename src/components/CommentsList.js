import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

const CommentsList = (props) => {

  const list = props.comments.map((comment) => <li key = {comment}>{comment}</li>);

  return (
    <ul className="commentsList">{list}</ul>
  );
};

function mapStateToProps(state){
  return {comments: state.comments};
};

export default connect(mapStateToProps)(CommentsList);