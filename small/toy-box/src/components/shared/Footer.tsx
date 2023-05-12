import React from 'react';
import { Link } from 'react-router-dom';
export interface IFooterProps {}

const Footer = ({}: IFooterProps) => {
  return (
    <footer>
      <div className='column'>
          <img src="logo192.png" alt="logo" />
      </div>
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
      <div className='column'>
          <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
          </ul>
      </div>
    </footer>
  );
};

export default Footer;