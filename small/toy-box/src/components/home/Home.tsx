
import React from 'react';
import {Hero, IHeroProps} from '../shared/Hero';
import './Home.scss';

export interface IHomeProps {}

const Home = ({}: IHomeProps) => {

    const heroProps: IHeroProps = {
        image: {
            src: "https://fastly.picsum.photos/id/96/4752/3168.jpg?hmac=KNXudB1q84CHl2opIFEY4ph12da5JD5GzKzH5SeuRVM",
            alt: "",
        },
        title: "Welcome to the Toy Box",
        subTitle: "The best toys in the world",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        cta: {
            label: "Shop Now",
            link: "/products",
        }
    };

    return (
        <div>
            <Hero
                image={heroProps.image}
                title={heroProps.title}
                subTitle={heroProps.subTitle}
                description={heroProps.description}
                cta={heroProps.cta}
            ></Hero>
            <main>
                <section>
                    <h1 className='centered'>New commers</h1>
                </section>
                <section className='product-list'>
                    <div className='product-card'>
                        <figure>
                            <img src='https://fastly.picsum.photos/id/96/4752/3168.jpg?hmac=KNXudB1q84CHl2opIFEY4ph12da5JD5GzKzH5SeuRVM' alt='Product 1' />
                        </figure>
                        <h3>Product 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum, enim nostrum distinctio odio inventore exercitationem soluta non explicabo consequuntur quo, dolores vero esse, fuga beatae praesentium architecto eligendi assumenda!</p>
                        <p>$1.00</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className='product-card'>
                        <figure>
                            <img src='https://fastly.picsum.photos/id/96/4752/3168.jpg?hmac=KNXudB1q84CHl2opIFEY4ph12da5JD5GzKzH5SeuRVM' alt='Product 1' />
                        </figure>
                        <h3>Product 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum, enim nostrum distinctio odio inventore exercitationem soluta non explicabo consequuntur quo, dolores vero esse, fuga beatae praesentium architecto eligendi assumenda!</p>
                        <p>$2.00</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className='product-card'>
                        <figure>
                            <img src='https://fastly.picsum.photos/id/96/4752/3168.jpg?hmac=KNXudB1q84CHl2opIFEY4ph12da5JD5GzKzH5SeuRVM' alt='Product 1' />
                        </figure>
                        <h3>Product 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum, enim nostrum distinctio odio inventore exercitationem soluta non explicabo consequuntur quo, dolores vero esse, fuga beatae praesentium architecto eligendi assumenda!</p>
                        <p>$3.00</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className='product-card'>
                        <figure>
                            <img src='https://fastly.picsum.photos/id/96/4752/3168.jpg?hmac=KNXudB1q84CHl2opIFEY4ph12da5JD5GzKzH5SeuRVM' alt='Product 1' />
                        </figure>
                        <h3>Product 4</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum, enim nostrum distinctio odio inventore exercitationem soluta non explicabo consequuntur quo, dolores vero esse, fuga beatae praesentium architecto eligendi assumenda!</p>
                        <p>$4.00</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className='product-card'>
                        <figure>
                            <img src='https://fastly.picsum.photos/id/96/4752/3168.jpg?hmac=KNXudB1q84CHl2opIFEY4ph12da5JD5GzKzH5SeuRVM' alt='Product 1' />
                        </figure>
                        <h3>Product 5</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum, enim nostrum distinctio odio inventore exercitationem soluta non explicabo consequuntur quo, dolores vero esse, fuga beatae praesentium architecto eligendi assumenda!</p>
                        <p>$5.00</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className='product-card'>
                        <figure>
                            <img src='https://fastly.picsum.photos/id/96/4752/3168.jpg?hmac=KNXudB1q84CHl2opIFEY4ph12da5JD5GzKzH5SeuRVM' alt='Product 1' />
                        </figure>
                        <h3>Product 6</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum, enim nostrum distinctio odio inventore exercitationem soluta non explicabo consequuntur quo, dolores vero esse, fuga beatae praesentium architecto eligendi assumenda!</p>
                        <p>$6.00</p>
                        <button>Add to Cart</button>
                    </div>
                </section>
            </main>
        </div>
    );
};


export default Home;