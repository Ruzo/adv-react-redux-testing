import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {
  let component;

  // Do this before each test (it)
  beforeEach(() => {
    component = renderComponent(App);
  });

  // Use 'it' to test a single attribute of a target
  it('shows a comment input box', () => {

    // Use 'expect' to make an 'assertion' about a target
    expect(component.find('.commentBox')).to.exist;
  });

  it('shows a comments list', () => {
    expect(component.find('.commentsList')).to.exist;
  });
});


