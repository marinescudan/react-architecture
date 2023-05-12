import React from 'react';
import { Link } from 'react-router-dom';
export interface IFooterProps {}

const Footer = ({}: IFooterProps) => {
  return (
    <footer>
      <div className='column'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
      </div>
    </footer>
  );
};

export default Footer;