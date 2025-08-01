import React from "react";
import "./Product.css";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useNavigate } from "react-router-dom";

function Product({ image, title, price,id }) {
  const navigate = useNavigate();
    const handleRoute = ()=>{
        navigate(`/productdetails/${id}`)
    }

  return (
    <div className="card">
      <img src={image} alt="" width={270} height={230} />
      <h4>{title}</h4>
      <p>${price}</p>
      <p>{id}</p>
      <div>
        <button className="detailbtn" onClick={handleRoute}>Product Details</button>
        <button className="cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;