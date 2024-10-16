import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../hooks/useMenu";
import SectionTitile from "../../../components/SectionTitle/SectionTitile";
import MenuCategories from "../MenuCategories";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Cake With You | Menu </title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <SectionTitile
        subHeading={"Don not miss"}
        heading={"Todays Offer"}
      ></SectionTitile>
      {/* offered menu items */}
      <MenuCategories items={offered} title="offered"></MenuCategories>
      {/* salad menu items */}
      <MenuCategories
        img={saladImg}
        items={salad}
        title="salad"
      ></MenuCategories>
      {/* drinks menu items */}
      <MenuCategories items={drinks} title="drinks"></MenuCategories>
      {/* soup menu items */}
      <MenuCategories img={soupImg} items={soup} title="soup"></MenuCategories>
      {/* pizza menu items */}
      <MenuCategories
        img={pizzaImg}
        items={pizza}
        title="pizza"
      ></MenuCategories>
      <MenuCategories
        img={dessertImg}
        items={desserts}
        title="desserts"
      ></MenuCategories>
    </div>
  );
};

export default Menu;
