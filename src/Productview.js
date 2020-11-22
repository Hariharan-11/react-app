import React from 'react'
import { Link } from 'react-router-dom';
import  './Productview.css'
import ModelViewer from 'react-model-viewer';
import { useStateValue } from './StateProvider';

function Productview({id, image, title, price, rating}) {

    
    const modelPath = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf';

    return (
        <div>
        <div className="productview__main">
          <div className="productview">
        
        <div className="productview__info">
        
        <p>Apple iPhone 11 Pro Max (Space Grey, 64 GB)</p>
        
        <p className="productview__price">
            <small>₹</small>
            <strong>114999.00</strong>
        </p>
        
        <div className="productview__rating">
        {Array(5).fill().map((_, i) =>(
            <p>⭐</p>  
        ))}
          
          </div>
        </div>
        <img src="https://rukminim1.flixcart.com/image/352/352/k2jbyq80pkrrdj/mobile-refurbished/z/a/f/iphone-11-pro-max-256-u-mwhm2hn-a-apple-0-original-imafkg2ftc5cze5n.jpeg?q=70" alt="product"/>
    
    </div>
    <div className="productview__description">
                
                <table>
                <tr>
                <td className="bold">Brand:</td>
                <td>Apple</td>
                </tr>
                <tr>
                <td className="bold">Screen Size:</td>
                <td>6.5 Inches</td>
                </tr>
                <tr>
                <td className="bold">Operating System:</td>
                <td>IOS</td>
                </tr>
                <tr>
                <td className="bold">Colour:</td>
                <td>Space Grey</td>
                </tr>
                </table>

            <h3>About this item</h3>
            <ul>
                <li>6.5-inch (16.5 cm) Super Retina XDR OLED display</li>
                <li>Water and dust resistant (4 meters for up to 30 minutes, IP68)</li>
                <li>Triple-camera system with 12MP Ultra Wide, Wide, and Telephoto cameras; Night mode, Portrait mode, and 4K video up to 60fps</li>
                <li>12MP TrueDepth front camera with Portrait Mode, 4K video, and Slo-Mo</li>
                <li>A13 Bionic chip with third-generation Neural Engine</li>
           
           </ul>
    </div>
    </div>

    <div className="productview__model">
        
    </div> 
    {/* <ModelViewer type="gtlf" src={modelPath} />  */}
    </div>
    )
}

export default Productview
