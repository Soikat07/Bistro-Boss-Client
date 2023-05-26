import SectionTitle from "../../../components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
  return (
    <section className="featured-item my-20 bg-fixed text-white">
      <div className="bg-black bg-opacity-60 py-10">
        <SectionTitle subHeading={'Check It Out'} heading={'Featured Item'} />
        <div className="flex justify-center items-center py-20 px-36 pt-12">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-8">
            <p>Aug 20, 2029</p>
            <p className="uppercase">where can i get some</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-white text-white mt-6 border-b-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;