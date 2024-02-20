"use client";
import CollectionSection from "src/components/CollectionSection/CollectionSection";
import Modal from "../components/Model";
import LandingPage from "src/components/LandingPage/LandingPage";

import { useAuthentication } from "src/lib/hooks/use-authentication";
import { useLocalContent } from "src/lib/hooks/use-local-content";
import { useEffect, useState } from "react";

const Home = () => {
  const { isAuthenticated } = useAuthentication();
  const { country } = useLocalContent();
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    // Fetch cart data from localStorage on component mount
    const savedCart = localStorage.getItem("cart");
    console.log(savedCart);
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);
  useEffect(() => {
    // Save cart data to localStorage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      let updatedItems = [];
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        updatedItems = prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...prevItems, { ...product, quantity: 1 }];
      }
      sessionStorage.setItem("cart", JSON.stringify(updatedItems));
      return updatedItems;
    });
    setShowModal(true);
  };
  const closeModel = () => setShowModal(false);

  if (!isAuthenticated || !country)
    return (
        <LandingPage />
    );

  return (
    <>
      <CollectionSection addToCart={addToCart}/>
      {showModal && <Modal closeModel={closeModel} />}
    </>
  );
};

export default Home;
