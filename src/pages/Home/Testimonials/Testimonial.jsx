import React, { useEffect, useState } from 'react';
import SectionTitile from '../../../components/SectionTitle/SectionTitile';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
const Testimonial = () => {
  const [reviews, setRevews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => res.json())
      .then((data) => setRevews(data));
  }, []);
  return (
    <div className="p-10">
      <SectionTitile
        subHeading={'What our clients say'}
        heading={'Testimonials'}
      ></SectionTitile>
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <div>
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center p-4 mx-16 my-6">
                  <Rating
                    style={{ maxWidth: 250 }}
                    value={review.rating}
                    readOnly
                  />
                  <p className="text-2xl text-orange-600 mt-4">
                    <FaQuoteLeft />
                  </p>
                  <p className="mt-2">{review.details}</p>
                  <p className="text-2xl text-orange-600 mb-4">
                    <FaQuoteRight />
                  </p>
                  <p className="text-orange-600 font-semibold">
                    -- {review.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
