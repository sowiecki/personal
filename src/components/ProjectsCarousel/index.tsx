import React from 'react';
import { navigate } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import './styles.css';

// @ts-ignore
import gtfo from '../../images/gtfo.gif';
// @ts-ignore
import covidfaceshields from '../../images/covidfaceshields2.jpg';
// @ts-ignore
import hypercube from '../../images/hypercube.jpg';
// @ts-ignore
import strangerLights from '../../images/stranger.gif';
// @ts-ignore
import nfcUnlock from '../../images/unlock.gif';

// TODO visually indicate which links open external pages
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
    className="projectsSwiper"
  >
    <SwiperSlide onClick={(e) => {
      e.preventDefault();

      navigate('/projects/gtfo');
    }}>
      Gently Tell Folks Out
      <img src={gtfo} />
    </SwiperSlide>
    <SwiperSlide onClick={(e) => {
      e.preventDefault();

      navigate('https://www.linkedin.com/in/seanowiecki/overlay/1587855615727/single-media-viewer/?profileId=ACoAABX_yDMByQOsS1EH63IoqTQW40XtjqpbkYE');
    }}>
      Covid Faceshield Donations
      <img src={covidfaceshields} />
    </SwiperSlide>
    <SwiperSlide onClick={(e) => {
      e.preventDefault();

      navigate('/projects/hypercube');
    }}>
      HyperCube 3D Printer
      <img src={hypercube} />
    </SwiperSlide>
    <SwiperSlide onClick={(e) => {
      e.preventDefault();

      navigate('https://github.com/sowiecki/Stranger-Lights');
    }}>
      Stranger Lights
      <img src={strangerLights} />
    </SwiperSlide>
    <SwiperSlide onClick={(e) => {
      e.preventDefault();

      navigate('https://github.com/sowiecki/deadbolt-nfc');
    }}>
      NFC Unlock
      <img src={nfcUnlock} />
    </SwiperSlide>
  </Swiper>
);

export default ProjectsCarousel;
