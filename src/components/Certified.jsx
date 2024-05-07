import bing from '../assets/bing_ads.png';
import google from '../assets/google_analytics_certified.png';
import googlepartner from '../assets/google-partner-lg.png';
import roll from '../assets/Adroll.png';

const Certified = () => {
  return (
    <div className="certified">
      <div className="certifiedsection">
        <div className="w-layout-grid grid-10">
          <img src={bing} width="200" alt="" className="image-24" />
          <img src={google} width="200" alt="" className="image-25" />
          <img src={googlepartner} width="200" alt="" className="image-23" />
          <img
            src={roll}
            width="100"
            sizes="(max-width: 479px) 92vw, 100px"
            alt=""
            className="image-22"
          />
        </div>
      </div>
    </div>
  );
};

export default Certified;
