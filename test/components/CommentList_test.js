import { renderComponent , expect } from '../test_helper';
import CommentsList from '../../src/components/CommentsList';

describe('CommentsList', () => {
  let component;

  beforeEach(() => {
    let props = {comments: ['First comment.', 'Second comment.']};
    component = renderComponent(CommentsList, null, props);
  });

  it('displays each comment as an <li>', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('lists all comments with the right texts', () => {
    expect(component).to.contain('First comment.');
    expect(component).to.contain('Second comment.');
  });
});