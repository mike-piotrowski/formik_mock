import React from 'react';
import { render, screen } from '@testing-library/react';
import AppNavbar from './components/navigation/AppNavbar';

test('renders learn react link', () => {
  render(<AppNavbar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
