import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar  mainmenu">
      <div className="navbar-links">SWISH</div>
      <div className="">
        {toggleMenu ? (
          ''
        ) : (
          <RiMenu3Line
            color="#fff"
            size={40}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className="menu"
            style={{
              display: 'block',
              opacity: '1',
            }}
          >
            <div className="menutext">
              <a href="#home" className="link">
                <div className="menulink">SERVICES</div>
              </a>
              <a href="#home" className="link">
                <div className="menulink">CASE STUDIES</div>
              </a>
              <a href="#home" className="link">
                <div className="menulink">CLIENTS</div>
              </a>
              <a href="#home" className="link">
                <div className="menulink">TESTIMONIALS</div>
              </a>
              <a href="#home" className="link">
                <div className="menulink">CONTACT</div>
              </a>

              <div className="link">
                <div className="menulink">
                  <RiCloseLine
                    color="#fff"
                    size={40}
                    onClick={() => setToggleMenu(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
