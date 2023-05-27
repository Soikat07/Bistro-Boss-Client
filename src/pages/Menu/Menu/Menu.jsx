import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuCover from '../../../assets/menu/menu-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter(item => item.category === 'offered');
  const dessert = menu.filter(item => item.category === 'dessert');
  const pizza = menu.filter(item => item.category === 'pizza');
  const salad = menu.filter(item => item.category === 'salad');
  const soup = menu.filter(item => item.category === 'soup');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuCover}
        title={'Our Menu'}
        description={'Would You Like To Try A Dish!'}
      />
      <SectionTitle
        subHeading={"Don't Miss It Out"}
        heading={"ToDay's Offer"}
      />
      {/* todays offer */}
      <MenuCategory items={offered}/>
      {/* dessert */}
      <MenuCategory
        items={dessert}
        img={dessertImg}
        title={'dessert'}
        description={
          'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
      />
      {/* piza */}
      <MenuCategory
        items={pizza}
        img={pizzaImg}
        title={'pizza'}
        description={
          'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
      />
      {/* salad */}
      <MenuCategory
        items={salad}
        img={saladImg}
        title={'salad'}
        description={
          'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
      />
      {/* soup */}
      <MenuCategory
        items={soup}
        img={soupImg}
        title={'soup'}
        description={
          'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
      />
    </div>
  );
};

export default Menu;