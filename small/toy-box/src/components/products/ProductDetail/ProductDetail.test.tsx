import React from 'react';
import { render } from '@testing-library/react';
import ProductDetail from './ProductDetail';

describe('ProductDetail Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<ProductDetail />);
    expect(asFragment()).toMatchSnapshot();
  });
});
