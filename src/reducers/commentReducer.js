import types from '../actions/types';

export default function(state = [], action){
  switch (action.type) {
    case types.SAVE_COMMENT:
      return [...state, action.comment]

    default:
      return state;
  }
};