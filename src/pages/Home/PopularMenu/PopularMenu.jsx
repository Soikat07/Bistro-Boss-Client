import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";


const PopularMenu = () => {
  
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
    .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(data => data.category === 'popular');
        setMenu(popularItems);
    })
  }, [])
  
  return (
    <section className="mb-12">
      <SectionTitle heading={'From our menu'} subHeading={'Check It Out'} />
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map(items => (
          <MenuCard items={items} key={items._id} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-black mt-6 border-b-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;