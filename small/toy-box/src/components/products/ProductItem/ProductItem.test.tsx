import React from 'react';
import { render } from '@testing-library/react';
import ProductItem from './ProductItem';

describe('ProductItem Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<ProductItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
