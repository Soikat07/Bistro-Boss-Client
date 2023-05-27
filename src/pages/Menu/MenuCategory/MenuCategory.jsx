import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuCard from "../../Shared/MenuCard/MenuCard";


const MenuCategory = ({items, img, title, description}) => {
  return (
    <section className="mb-12 px-32">
      {title && (
        <Cover img={img} title={title} description={description}></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-10 mt-14">
        {items.map(item => (
          <MenuCard item={item} key={item._id} />
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-black mt-6 border-b-2">
            Order Your Favorite Food
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MenuCategory;