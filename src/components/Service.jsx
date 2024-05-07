import icon1 from '../assets/icon1.svg';
import chart_icon from '../assets/chart_icon.svg';
import socialMedia from '../assets/socialMedia.svg';
import search from '../assets/search.svg';

const Service = () => {
  return (
    <div className="services">
      <div className="services_content">
        <div className="h2">
          With 15+ years of experience in digital marketing and analysis, there
          isn’t much we haven’t seen.
        </div>
        <div className="div-block-6">
          <div className="iconcontainer1">
            <img src={icon1} alt="Magnify Glass" width="34" className="icon" />
            <div className="dot"></div>
            <div className="icontext">lead generation</div>
          </div>
          <div className="iconcontainer2">
            <img
              src={chart_icon}
              alt="Magnify Glass"
              width="34"
              className="icon"
            />
            <div className="dot"></div>
            <div className="icontext">Analytics</div>
          </div>
          <div className="iconcontainer3">
            <img
              src={socialMedia}
              alt="Magnify Glass"
              width="34"
              className="icon"
            />
            <div className="dot"></div>
            <div className="icontext">Paid social marketing</div>
          </div>
          <div className="iconcontainer4">
            <img src={search} alt="Magnify Glass" width="34" className="icon" />
            <div className="dot"></div>
            <div className="icontext">search engine marketing</div>
          </div>
          <div className="whitelineicons"></div>
        </div>
        <div className="text-block-3">Spend Smarter, Not Harder</div>
        <div className="w-layout-grid grid-2">
          <div className="b2">
            If you keep throwing money at your digital issues, you’re doing it
            wrong. We use tested methods across multi-channel strategies to
            improve KPIs.
          </div>
          <div className="b2">
            ROAS? Leads? Revenue? You name it; we aim to drive results backed by
            data analysis and insights.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
