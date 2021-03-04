import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders all components', () => {
  const renderApp = shallow(<App />);

  expect(renderApp.find('MainPageHeader').length).toBe(1);
  expect(renderApp.find('MainPageSection').length).toBe(1);
  expect(renderApp.find('MainLandingSection').length).toBe(1);
  expect(renderApp.find('FormSection').length).toBe(1);
  expect(renderApp.find('MainBlogSection').length).toBe(1);
  expect(renderApp.find('MainFooter').length).toBe(1);
});
