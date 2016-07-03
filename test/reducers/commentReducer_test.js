import { renderComponent , expect } from '../test_helper';
import commentReducer from '../../src/reducers/commentReducer';

describe('Comment Reducer', () => {

  it('can handle an unknown type', () => {
    let action = {type: undefined, comment: 'Test'};
    expect(commentReducer([], action)).to.eql([]);
  });

  it('can handle the SAVE_COMMENT type', () => {
    let action = {type: 'SAVE_COMMENT', comment: 'Test comment'};
    expect(commentReducer([], action)).to.eql(['Test comment']);
  });

});