import { renderComponent , expect } from '../test_helper';
import * as actions from '../../src/actions';

describe('Actions', () => {

  it('can dispatch SAVE_COMMENT', () => {
    let comment = 'Test comment';
    expect(actions.saveComment(comment)).to.eql({type: 'SAVE_COMMENT', comment: 'Test comment'});
  });

});