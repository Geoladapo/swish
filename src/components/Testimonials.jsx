import SliderTestimonial from './SliderTestimonial';
import quote from '../assets/qoute.png';

const Testimonials = () => {
  return (
    <div id="Testimonials" className="testimonials">
      <img src={quote} alt="" className="image-2" />
      <div className="testimonialscontent">
        <SliderTestimonial />
      </div>
    </div>
  );
};

export default Testimonials;
