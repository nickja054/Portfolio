// Mock react-router-dom to avoid module resolution issues in Jest environment
jest.mock('react-router-dom', () => {
  const React = require('react');
  return {
    BrowserRouter: ({ children }) => React.createElement(React.Fragment, null, children),
    Routes: ({ children }) => React.createElement(React.Fragment, null, children),
    Route: ({ element }) => element,
    Navigate: () => null,
  };
});

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app root without crashing', () => {
  render(<App />);
  // basic smoke check: expect the document body to exist
  const root = document.querySelector('body');
  expect(root).toBeTruthy();
});
