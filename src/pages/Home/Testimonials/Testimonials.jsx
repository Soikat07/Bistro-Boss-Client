import SectionTitle from "../../../components/sectionTitle";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { ImQuotesLeft } from 'react-icons/im';


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [])
  
  return (
    <section className="px-10">
      <SectionTitle
        subHeading={'What Our Clients Say'}
        heading={'Testimonials'}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map(review => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center text-center my-6 mx-24 px-16 py-5">
              <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
              />
              <ImQuotesLeft className="text-6xl mt-2"/>
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-400 uppercase">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;