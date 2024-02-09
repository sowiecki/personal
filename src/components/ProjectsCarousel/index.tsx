import React from 'react';
import { navigate } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import './styles.css';

// @ts-ignore
import covidfaceshields from '../../images/covidfaceshields2.jpg';
// @ts-ignore
import hypercube from '../../images/hypercube.jpg';

const ProjectsCarousel = () => (
  <Swiper
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    slidesPerView="auto"
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide onClick={(e) => {
      e.preventDefault()

      navigate('/projects/covid');
    }}>
      Covid Faceshield Donations
      <img src={covidfaceshields} />
    </SwiperSlide>
    <SwiperSlide>
      HyperCube 3D Printer
      <img src={hypercube} />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
    </SwiperSlide>
  </Swiper>
);

export default ProjectsCarousel;
