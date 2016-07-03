import types from './types';

export function saveComment(comment){
  return {type: types.SAVE_COMMENT, comment};
};