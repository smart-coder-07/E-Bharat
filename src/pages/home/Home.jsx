import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/herosection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/CartSlice";

const Home = () => {
  const dispach = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  console.log(cartItem);

  const addCart = () => {
    dispach(addToCart("shirt"));
  };
  const deleteCart = () => {
    dispach(deleteFromCart("shirt"));
  };
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
