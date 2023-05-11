import React from 'react';
import { render } from '@testing-library/react';
import Products from './Products';

describe('Products Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Products />);
    expect(asFragment()).toMatchSnapshot();
  });
});
