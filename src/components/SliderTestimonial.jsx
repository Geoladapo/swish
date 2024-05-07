import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SliderTestimonial() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mask w-slider-mask">
            <div className="testimonialstext">
              The Swish team is data driven, quick to respond and knowledgeable
              in their field. I appreciate their attention to detail and ability
              to bring my priority initiatives to life.
            </div>
            <div className="div-block-5"></div>
            <div className="h4name">Lindsey Neidig</div>
            <div className="namesubtext">VP of Marketing, Rouxbe</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mask w-slider-mask">
            <div className="testimonialstext">
              The Swish team is data driven, quick to respond and knowledgeable
              in their field. I appreciate their attention to detail and ability
              to bring my priority initiatives to life.
            </div>
            <div className="div-block-5"></div>
            <div className="h4name">Lindsey Neidig</div>
            <div className="namesubtext">VP of Marketing, Rouxbe</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mask w-slider-mask">
            <div className="testimonialstext">
              The Swish team is data driven, quick to respond and knowledgeable
              in their field. I appreciate their attention to detail and ability
              to bring my priority initiatives to life.
            </div>
            <div className="div-block-5"></div>
            <div className="h4name">Lindsey Neidig</div>
            <div className="namesubtext">VP of Marketing, Rouxbe</div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}

{
  /* <div class="mask w-slider-mask"><div class="slide w-slide" style="transform: translateX(0px); opacity: 1; transition: transform 500ms ease 0s;">
            <div class="testimonialstext">The Swish team is data driven, quick to respond and knowledgeable in their field. I appreciate their attention to detail and ability to bring my priority initiatives to life.</div>
            <div class="div-block-5"></div><img src="https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" class="image-3">
            <div class="h4name">Lindsey Neidig</div>
            <div class="namesubtext">VP of Marketing, Rouxbe</div>
          </div><div class="slide-2 w-slide" style="transform: translateX(0px); opacity: 1; transition: transform 500ms ease 0s;">
            <div class="testimonialstext">The Swish team is extremely knowledgeable of the ever-changing search and social landscape. They’ve been instrumental in helping Planet Fitness establish and maintain our digital presence. Their services have greatly increased our visibility online and given us the ability to reach an additional segment of consumers.</div>
            <div class="div-block-5"></div><img src="https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" class="image-3">
            <div class="h4name">Anthony Roberts, Jr.</div>
            <div class="namesubtext">Marketing Manager, Planet Fitness</div>
          </div><div class="w-slide" style="transform: translateX(-3600px); opacity: 1; transition: transform 500ms ease 0s;">
            <div class="testimonialstext">Swish helped us grow our revenue from $0 to $100k+/month in less than a year. It's refreshing to work with a team that genuinely cares about our success.</div>
            <div class="div-block-5"></div><img src="https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg" alt="" class="image-3">
            <div class="h4name">Luke Davis</div>
            <div class="namesubtext">Director of Ecommerce and Marketing, Pele Soccer</div>
          </div></div> */
}
