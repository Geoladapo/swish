import Navbar from './Navbar';
import np from '../assets/npmouse.svg';

const Header = () => {
  return (
    <div className="hero">
      <div className="hero_count">
        <Navbar />
        <div className="hero_overlay"></div>
        <div className="h1">
          We create transparent digital strategies that drive results, not
          vanity metrics.
        </div>
        <div className="h3">
          Finding the intersection where agility and integrity meet, while
          keeping your best interest first.
        </div>
        <img src={np} width="44" alt="" className="image"></img>
      </div>
    </div>
  );
};

export default Header;
