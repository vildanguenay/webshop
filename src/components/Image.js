import React, { useState, useContext } from 'react';
import PropTypes from "prop-types"

import { Context } from '../context';

function Image({ className, image }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context);

  const heartIcon = () => {
    if(image.isFavorite) {
        return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(image.id)}></i>
    } else if(hovered) {
        return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(image.id)}></i>
    }
}

  const cartIcon = () => {
    const alreadyInCart = cartItems.some(item => item.id === image.id)
    if(alreadyInCart) {
        return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(image.id)}></i>
    } else if(hovered) {
        return <i className="ri-add-circle-line cart" onClick={() => addToCart(image)}></i>
    }
  }


  return (
    <div
      className={`${className} image-container`}
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
    >
      <img src={image.url} className="image-grid" alt="item" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool
  })
}

export default Image;
