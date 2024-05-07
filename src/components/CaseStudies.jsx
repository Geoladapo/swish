import Swiper from './Swiper';

const CaseStudies = () => {
  return (
    <div className="caseStudies">
      <div className="casestudiescontent">
        <div className="h2Black">Case Studies.</div>
        <div className="div-block-16">
          <div className="div-block-2">
            <div className="h4blackleft">Our Happy Clients</div>
            <div className="h3black">Don't Talk About It, Be About It</div>
            <div className="b2-black">
              From Education to Retail to raw lead generation, we have had the
              privilege to work with some of the best clients on the planet.
              This is where we put our money where our mouth is and stop hiding
              behind fancy buzzwords to get straight to the results we
              constantly harp on.
            </div>
          </div>
          <div className="slider">
            <Swiper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
