import React from 'react';
import { render } from 'enzyme';

// Componente
import App from '../App';

describe(App, () => {
  it('renders correctly', () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("Render", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = render(<App />);
    });

    it('should add the HTML elements', () => {
      expect(wrapper.is('div')).toBeTruthy();
      expect(wrapper.find('h1').length).toBe(1);
      expect(wrapper.find('h2').length).toBe(2);
    });
  });
})
