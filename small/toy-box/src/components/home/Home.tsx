
import React from 'react';
import Hero from '../shared/Hero';
import './Home.scss';

export interface IHomeProps {}

const Home = ({}: IHomeProps) => {
    return (
        <div>
            <header>
                <div>
                    <img src="" alt="logo" />
                </div>
                <div>
                    <input type="text" placeholder="search" />
                </div>
                <div>
                    <img src="" alt="cart" />
                    <span>0</span>
                </div>
            </header>
            <div>
                <img src="" alt="hero" />
                <h1>Toy Box</h1>
                <h2>Where all your toy dreams come true</h2>
            </div>
            <div>
                <div>
                    <h3>Product 1</h3>
                    <p>$1.00</p>
                    <button>Add to Cart</button>
                </div>
                <div>
                    <h3>Product 2</h3>
                    <p>$2.00</p>
                    <button>Add to Cart</button>
                </div>
                <div>
                    <h3>Product 3</h3>
                    <p>$3.00</p>
                    <button>Add to Cart</button>
                </div>
                <div>
                    <h3>Product 4</h3>
                    <p>$4.00</p>
                    <button>Add to Cart</button>
                </div>
                <div>
                    <h3>Product 5</h3>
                    <p>$5.00</p>
                    <button>Add to Cart</button>
                </div>
                <div>
                    <h3>Product 6</h3>
                    <p>$6.00</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            <footer>
                <div>
                    <img src="" alt="logo" />
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Cart</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};


export default Home;