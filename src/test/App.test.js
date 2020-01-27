import React from 'react';
import { render } from '@testing-library/react';
import App from '../main/App';

test('renders get cookin', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/get cookin'!/i);
  expect(linkElement).toBeInTheDocument();
});
