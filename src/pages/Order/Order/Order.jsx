import Cover from "../../Shared/Cover/Cover";
import orderBanner from '../../../assets/order/banner.jpg'
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const soup = menu.filter(item => item.category === 'soup');
  const dessert = menu.filter(item => item.category === 'dessert');
  const pizza = menu.filter(item => item.category === 'pizza');
  const salad = menu.filter(item => item.category === 'salad');
  const drinks = menu.filter(item => item.category === 'drinks');

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover
        img={orderBanner}
        title="Order Food"
        description="Would You Like to Try A Dish?"
      />
      <Tabs className='my-10' defaultIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList className='uppercase text-center my-6'>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel><OrderTab items={salad}/></TabPanel>
        <TabPanel><OrderTab items={pizza}/></TabPanel>
        <TabPanel><OrderTab items={soup}/></TabPanel>
        <TabPanel><OrderTab items={dessert}/></TabPanel>
        <TabPanel><OrderTab items={drinks}/></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;