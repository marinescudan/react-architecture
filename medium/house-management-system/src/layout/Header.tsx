import React from 'react';

export interface IHeaderProps {}

const Header = ({}: IHeaderProps) => {
  return (
  <header>
    <div className='logo'>
        <img src="logo192.png" alt="logo" />
    </div>
    <div className='cart'>
        <img src="./assets/images/cart.png" alt="cart" />
        <span className='badge'>0</span>
    </div>
  </header>
  );
};

export default Header;