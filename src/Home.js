/* eslint-disable no-unused-vars */
import './home.css';
import Product from './Product'
import {products,products2,products3} from './data'
 import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader 


function Home() {

 var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel; 
    


    return (
        <div className="home">
            <div className="home__container">
                
                 <Carousel autoPlay axis="horizontal" infiniteLoop showThumbs={false} showStatus={false} >
                <div className="homr__image">
                    <img className="home__image" src="https://dlcdnwebimgs.asus.com/files/media/15730A8B-D393-4054-BBC7-9118CBE951A7/img/img_front.png" alt="background"/>
                    
                </div>
                <div className="homr__image">
                    <img className="home__image" src="https://rog.asus.com/websites/global/products/cmrwu33buaq3qwed/img/kv-cover.png" alt="background" />
                    
                </div>
                <div className="homr__image">
                    <img className="home__image" src="https://dlcdnimgs.asus.com/websites/global/products/sllsnshqqjg0x9oj/img/kv-cover.png" alt="background" />
                    
                </div>
                <div className="homr__image">
                    <img className="home__image" src="https://rog.asus.com/websites/global/products/lcmsyacpa9neac0c/img/kv/product-kv.png " alt="background" />
                    
                </div>
                
                
            </Carousel> 
                
                <div className="home__row">
                    {
                        products && products.map((product, index) => (
                            <Product key={index} data={product} />
                        ))
                    }
                </div>
                <div className="home__row">
                    {
                        products2 && products2.map((product, index) => (
                            <Product key={index} data={product} />
                        ))
                    }
                </div>
                <div className="home__row">
                    {
                        products3 && products3.map((product, index) => (
                            <Product key={index} data={product} />
                        ))
                    }
                </div>



            </div>
        </div>
    )
}

export default Home
