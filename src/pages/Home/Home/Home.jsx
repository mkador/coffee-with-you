import React from "react";
import Banner from "../Banner/Banner";
import CategoryFood from "../Categories/CategoryFood";
import CakeYourDay from "../CakeYourDay/CakeYourDay";
import PopularItems from "../PopularItems/PopularItems";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonials/Testimonial";

const Home = () => {
  return (
    <div>
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
