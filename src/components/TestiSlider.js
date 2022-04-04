import React, { useRef, useState } from 'react';
// testimonials data
import { testimonials } from '../data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../swiper.css';

// import required modules
import { Autoplay, Pagination } from 'swiper';

const TestiSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return (
            <SwiperSlide key={index}>
              <div className='flex gap-32'>
                <div className='rounded-2xl overflow-hidden'>
                  <img className='' src={authorImg} alt='' />
                </div>
                <div className='flex flex-col max-w-3xl'>
                  <h5 className='font-body text-2xl mb-8'>{authorText}</h5>
                  <div>
                    <p>{authorName}</p>
                    <p>{authorPosition}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestiSlider;