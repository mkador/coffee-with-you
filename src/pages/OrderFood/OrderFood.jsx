import React, { useState } from 'react';
import Cover from '../Shared/cover';
import orderFoodImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTabs from './OrderTabs/OrderTabs';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const OrderFood = () => {
    const categories = ['salad','pizza','desserts','soup','drink']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex,setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const offered = menu.filter(item=>item.category ==="offered")
    const desserts = menu.filter(item=>item.category ==="dessert")
    const salad = menu.filter(item=>item.category ==="salad")
    const drinks = menu.filter(item=>item.category ==="drinks")
    const soup = menu.filter(item=>item.category ==="soup")
    const pizza = menu.filter(item=>item.category ==="pizza")
    return (
        <div>
            <Helmet>
      <title>Cake With You | Order Food </title>
      </Helmet>
            <Cover img={orderFoodImg} title={"Order Food"}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salads</Tab>
        <Tab>Pizzas</Tab>
        <Tab>Desserts</Tab>
        <Tab>Soups</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel>
      <OrderTabs items={salad}></OrderTabs>
      </TabPanel>
      <TabPanel>
      <OrderTabs items={pizza}></OrderTabs>
      </TabPanel>
      <TabPanel>
      <OrderTabs items={desserts}></OrderTabs>
      </TabPanel>
      <TabPanel>
      <OrderTabs items={soup}></OrderTabs>
      </TabPanel>
      <TabPanel>
      <OrderTabs items={drinks}></OrderTabs>
      </TabPanel>
      
    </Tabs>
        </div>
    );
};

export default OrderFood;