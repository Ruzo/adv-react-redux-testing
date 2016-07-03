import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has a textarea', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('Entering a comment', () => {

    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows the text while typing', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('clears the textarea after a submit', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });

});