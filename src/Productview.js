import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Productview.css";
import { useStateValue } from "./StateProvider";
import { useParams } from "react-router-dom";
import "../node_modules/@google/model-viewer/dist/model-viewer";
import { products, products2, products3 } from "./data";

function Productview() {
  let { id } = useParams();
  let [prod, setProd] = useState(undefined);

  useEffect(() => {
    let temp = products.filter((product) => `${product.id}` === id);
    console.log(temp, id);
    if (temp.length >= 1) {
      setProd(temp[0]);
    }
  }, []);
  useEffect(() => {
    let temp = products2.filter((product) => `${product.id}` === id);
    console.log(temp, id);
    if (temp.length >= 1) {
      setProd(temp[0]);
    }
  }, []);
  useEffect(() => {
    let temp = products3.filter((product) => `${product.id}` === id);
    console.log(temp, id);
    if (temp.length >= 1) {
      setProd(temp[0]);
    }
  }, []);

  if (!prod) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="productview__main">
        <div className="productview">
          <div className="productview__info">
            <p>{prod.title}</p>

            <p className="productview__price">
              <small>₹</small>
              <strong>{prod.price}</strong>
            </p>

            <div className="productview__rating">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
          </div>
          <div className="model">
          <model-viewer
            id="reveal"
            loading="eager"
            camera-controls
            auto-rotate
            poster={prod.image}
            src={prod.url}
            ios-src={prod.url}
            alt="3D model"
            ar 
            ar-scale="auto"
          >
            <button slot="ar-button" className="AR__button">
           View AR
            </button>
          </model-viewer>
          </div>
        </div>
        <div className="productview__description">
          <table>
            <tr>
              <td className="bold">Brand:</td>
              <td>{prod.brand}</td>
            </tr>
            <tr>
              <td className="bold">Size:</td>
              <td>{prod.size}</td>
            </tr>
            <tr>
              <td className="bold">Colour:</td>
              <td>{prod.color}</td>
            </tr>
          </table>

          <h3>About this item</h3>
          <ul>
            <li>{prod.desc1}</li>
            <li>
              {prod.desc2}
            </li>
            <li>
              {prod.desc3}
            </li>
            <li>
              {prod.desc4}
            </li>
            
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Productview;
