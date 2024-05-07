const footer = () => {
  return (
    <div className="footer">
      <div className="footersection">
        <div className="w-layout-grid grid-4">
          <div></div>
          <div className="w-layout-grid grid-5">
            <a href="#Services" className="footerserviceslink w-inline-block">
              <div className="footerlinks">our services</div>
            </a>
            <a
              id="footerCaseStudiesLink"
              href="#CaseStudies"
              className="footercasestudieslink w-inline-block"
            >
              <div className="footerlinks">case studies</div>
            </a>
            <a href="#Clients" className="footerclientslink w-inline-block">
              <div className="footerlinks">clients</div>
            </a>
            <a
              href="#Testimonials"
              className="footertestimonialslinks w-inline-block"
            >
              <div className="footerlinks">Testimonials </div>
            </a>
            <a href="#Contact" className="footercontactlink w-inline-block">
              <div className="footerlinks">contact</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
