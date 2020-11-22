import React from 'react';
import './home.css';
import Product from './Product'


function Home() {


    const products = [{
        id: 121,
        title: "12",
        image: "https://images.hdqwalls.com/download/triangles-colorful-background-nz-1920x1080.jpg",
        price: 123.1,
        rating: 1
    }, {
        id: 212,
        title: "12",
        image: "https://images.hdqwalls.com/download/triangles-colorful-background-nz-1920x1080.jpg",
        price: 123.1,
        rating: 1
    }]


    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images.hdqwalls.com/download/triangles-colorful-background-nz-1920x1080.jpg" alt="background" />

                <div className="home__row">
                    <Product id="1" title="Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Space Grey" image="https://rukminim1.flixcart.com/image/416/416/k7xnukw0/computer/z/q/y/apple-na-laptop-original-imafq2efkbb4bwc8.jpeg?q=70" price={224900.00} rating={4} />
                    <Product title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (White)" image="https://images-na.ssl-images-amazon.com/images/I/71L%2B9BicFNL._SL1100_.jpg" price={5999.00} rating={2} />

                </div>
                <div className="home__row">
                    <Product id="2" title="Apple iPhone 11 Pro Max (Space Grey, 64 GB)" price={114999.00} image="https://rukminim1.flixcart.com/image/352/352/k2jbyq80pkrrdj/mobile-refurbished/z/a/f/iphone-11-pro-max-256-u-mwhm2hn-a-apple-0-original-imafkg2ftc5cze5n.jpeg?q=70" rating={5} />
                    <Product id="3" title="Samsung Galaxy Tab A7 (10.4 inch,  Wi-Fi-only)" price={16999.00} image="https://images-na.ssl-images-amazon.com/images/I/71g9138yHKL._SL1500_.jpg" rating={3} />
                    <Product id="4" title="Apple Watch Series 3 (GPS, 38mm) - Silver Aluminium Case with White Sport Band" image="https://images-na.ssl-images-amazon.com/images/I/71fmZDBPqPL._SL1500_.jpg" price={20000.00} rating={4} />

                </div>
                <div className="home__row">
                    <Product id="5" title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)" price={153900.00} image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg" rating={4} />

                </div>



                <div className="home__row">
                    {
                        products && products.map((product, index) => (
                            <Product key={index} id={product.id} title={product.title} price={product.price} image={product.image} rating={product.rating} />
                        ))
                    }
                </div>
                



            </div>
        </div>
    )
}

export default Home
