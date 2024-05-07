import UClogo from '../assets/UClogo.svg';
import ucfeal from '../assets/ucfeal.png';
import plant from '../assets/planet_fitness.png';
import roll from '../assets/logo-rollins-college-nav.png';
import lim from '../assets/lim.png';
import kean from '../assets/kean.png';
import quirk from '../assets/quikrete.png';
import forks from '../assets/forks-over-knives-logo.png';
import pele from '../assets/pele-logo-svg.png';
import number from '../assets/dark.png';
import couture from '../assets/couture_med_spa_reskin_logo.svg';
import tree from '../assets/tree.svg';

const Clients = () => {
  return (
    <div className="clients">
      <div className="h4blackmid">Who we work with</div>
      <div className="h2blackmid">
        Some of the largest brands in the world trust us with their digital
        lives.
      </div>
      <div>
        <div className="w-layout-grid grid">
          <img
            src={UClogo}
            alt="UCF"
            id="w-node-2392e6eca95e-e4b72561"
            className="image-13"
          />
          <img
            src={ucfeal}
            alt="UCF"
            sizes="(max-width: 479px) 100vw, 190px"
            id="w-node-2d643327022f-e4b72561"
            className="image-9"
          />
          <img
            src={plant}
            alt="Forks Over Knives"
            id="w-node-606bd7cf6ab7-e4b72561"
            className="image-7"
          />
          <img
            src={roll}
            id="w-node-bfd69b080d0e-e4b72561"
            alt=""
            className="image-8"
          />
          <img
            src={lim}
            alt="LIM College"
            sizes="(max-width: 479px) 100vw, 180px"
            id="w-node-5595dded6667-e4b72561"
            className="image-10"
          />
          <img src={kean} alt="Rouxbe" className="image-11" />
          <img
            src={quirk}
            alt="Kean"
            id="w-node-1af8d40408d8-e4b72561"
            className="image-12"
          />
          <img
            src={pele}
            alt="Pele Soccer"
            id="w-node-1794e435b5f6-e4b72561"
            className="image-14"
          />
          <img
            src={number}
            alt="Real Thread"
            sizes="(max-width: 479px) 100vw, 150px"
            id="w-node-090181c1a92c-e4b72561"
            className="image-15"
          />
          <img
            src={forks}
            alt="Rollins"
            id="w-node-e3e9373b9c94-e4b72561"
            className="image-16"
          />
          <img
            src={couture}
            alt="Tijuana Flats"
            id="w-node-23bd9c3fcec8-e4b72561"
            className="image-17"
          />
          <img
            src={tree}
            id="w-node-1ea9fd15b758-e4b72561"
            alt=""
            className="image-19"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
