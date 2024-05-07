const Contact = () => {
  return (
    <div className="contact">
      <div className="contactsection">
        <div className="w-layout-grid grid-3">
          <div className="contactleft">
            <div className="h2white">Stay Connected.</div>
            <div className="h3white">Let’s Get to Know Each Other.</div>
            <div className="b2white">
              Fill out the form and contact us today to setup a preliminary
              discovery call to identify your digital needs.
            </div>
          </div>
          <div className="div-block-11">
            <div className="b1nospace">Send us a message.</div>
            <div className="text-block-5">
              Please fill out all requested fields.
            </div>
            <div className="w-form">
              <form action="">
                <input
                  type="text"
                  className="text-field w-input"
                  maxLength="256"
                  name="name"
                  data-name="Name"
                  placeholder="Full Name"
                  id="Name-3"
                />
                <input
                  type="email"
                  className="text-field w-input"
                  maxLength="256"
                  name="Email"
                  data-name="Email"
                  placeholder="Email"
                  id="Email-5"
                />
                <input
                  type="tel"
                  className="text-field w-input"
                  maxLength="256"
                  name="phone-Number"
                  data-name="Phone Number"
                  placeholder="Phone Number"
                  id="Phone-Number-3"
                />
                <select
                  name="Monthly-Budget"
                  id="Monthly-Budget"
                  data-name="Monthly Budget"
                  className="dropdownbudget w-select"
                >
                  <option value="">Monthly Advertising Budget Range</option>
                  <option value="$500-$10,000">$500-$10,000</option>
                  <option value="$10,000-$25,000">$10,000-$25,000</option>
                  <option value="$25,000-$50,000">$25,000-$50,000</option>
                  <option value="$50,000 and up">$50,000 and up</option>
                </select>
                <input
                  type="text"
                  className="text-field w-input"
                  maxLength="256"
                  name="message"
                  data-name="Message"
                  placeholder="Message"
                  id="Message-3"
                />
                <button
                  type="submit"
                  data-wait="Please wait..."
                  className="submit-button w-button"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
