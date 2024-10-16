import React from "react";
import Banner from "../Banner/Banner";
import CategoryFood from "../Categories/CategoryFood";
import CakeYourDay from "../CakeYourDay/CakeYourDay";
import PopularItems from "../PopularItems/PopularItems";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonials/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
      <title>Cake With You | Home </title>
      </Helmet>
      <Banner />
      <CategoryFood />
      <CakeYourDay/>
      <PopularItems/>
      <Featured/>
      <Testimonial/>
    </div>
  );
};

export default Home;
