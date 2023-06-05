import React from "react";
import { BsCartPlus } from 'react-icons/bs'
import propTypes from 'prop-types';
import formatCurrency from "../../utils/formatCurrency";

import './ProductCard.css'


function ProductCard({ data }) {

  const { title, thumbnail, price } = data;

  return(
    <section className="product-card">
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} //esse replace melhora a qualidade da foto, trocando para "W"
       alt="Product" 
       className="card__image"></img>
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price)}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button type="button" className="button__add-cart">
      < BsCartPlus />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;