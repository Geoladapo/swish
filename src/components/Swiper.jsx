// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../index.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a
            href="case-study-fancy-sprinkles.html"
            className="fancysprinklescase w-inline-block"
          >
            <div className="casecardspace">
              <div className="coname">Fancy Sprinkles</div>
              <div className="b2slide">
                The Fancy Sprinkles product was second-to-none in their space
                for branding and quality of product, making the marriage between
                themselves and a second-to-none go-to-market digital strategy a
                perfect pair.
              </div>
              <div className="h4button">read study</div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
