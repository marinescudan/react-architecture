import React from 'react';
import { render } from '@testing-library/react';
import Cart from './Cart';

describe('Cart Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Cart />);
    expect(asFragment()).toMatchSnapshot();
  });
});
