import React, { useContext, useState } from 'react';
import { Context } from '../context';

import CartItem from '../components/CartItem';

function Cart() {
  const [buttonText, setButtonText] = useState('Place Order');
  const { cartItems, emptyCart } = useContext(Context);

  const cartItemElements = cartItems?.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const total = cartItems?.map((item, index) => item.price);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const newTotal = parseFloat(total?.reduce(reducer, 0));
  const final = newTotal.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  function placeOrder() {
    setButtonText('Ordering...');
    setTimeout(() => {
      console.log('Order placed!');
      setButtonText('Place Order');
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItems && cartItemElements}
      <p className="total-cost">Total: {final}</p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      ) : (
        <p>You have no items in your cart!</p>
      )}
    </main>
  );
}

export default Cart;
