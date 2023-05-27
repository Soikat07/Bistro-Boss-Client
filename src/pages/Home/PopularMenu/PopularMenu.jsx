import { Link } from "react-router-dom";
import SectionTitle from "../../../components/sectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCard from "../../Shared/MenuCard/MenuCard";


const PopularMenu = () => {

  const [menu] = useMenu();
  const popularMenu = menu.filter(items => items.category === 'popular');
  
  
  return (
    <section className="mb-12 px-40">
      <SectionTitle heading={'From our menu'} subHeading={'Check It Out'} />
      <div className="grid md:grid-cols-2 gap-10">
        {popularMenu.map(item => (
          <MenuCard item={item} key={item._id} />
        ))}
      </div>
      <div className="text-center">
        <Link to='/menu'>
          <button className="btn btn-outline border-0 border-b-black mt-6 border-b-4">
            View Full Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;