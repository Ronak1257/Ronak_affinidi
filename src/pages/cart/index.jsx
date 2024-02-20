"use client";
import React, { useEffect, useState } from 'react'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { useRouter } from 'next/router';

const Cart = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
    calculateTotalPrice();
  }, [cartItems]);
  const removeItemFromCart = (item) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    calculateTotalPrice();
  };
  const updateQuantity = (item, newQuantity) => {
    if (newQuantity <= 0) {
      removeItemFromCart(item);
      return;
    }

    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: newQuantity };
      }
      return cartItem;
    });
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    calculateTotalPrice();
  };
  const calculateTotalPrice = () => {
    setTotalPrice(
      cartItems.reduce((accumulator, currentItem) => {
        return accumulator+currentItem.price * currentItem.quantity;
      }, 0)
    );
  };
  const handleCheckout = () => {
    router.push('/checkout');
  };
  return (
    <div className="container mx-auto mt-10 mb-20">
      <h2 className="text-2xl text-center font-bold mb-5">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2">Picture</th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-4 py-2">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-20 object-fill rounded-lg" />
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">${item.price}</td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item, e.target.value)}
                    className="w-16 text-center border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-4 py-2">${item.price * item.quantity}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => removeItemFromCart(item)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <MdOutlineRemoveShoppingCart className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-50 dark:bg-gray-700">
            <tr className="text-right">
              <td colSpan={5} className="px-4 py-2">Total:</td>
              <td className="px-4 py-2 font-bold">${totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
      {cartItems.length>0 && <>
          <div className='p-4 flex items-center'>
            <button onClick={handleCheckout} className="text-center bg-blue-500 w-36 hover:bg-blue-700 text-white font-bold py-2 px-2 mx-2 rounded">Checkout</button>
            <button href={"/"} className="w-36 text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded">Go Back</button>
          </div>
      </>}
    </div>
  )
}

export default Cart