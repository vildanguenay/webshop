import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context';

function Header() {
  const { cartItems } = useContext(Context);
  const cartClassName =
    cartItems.length > 0 ? 'ri-shopping-cart-fill' : 'ri-shopping-cart-line';

  return (
    <header>
      <Link to="/webshop" className="headerText">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/webshop/cart" className="cartIcon">
        <i className={`${cartClassName} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

export default Header;
