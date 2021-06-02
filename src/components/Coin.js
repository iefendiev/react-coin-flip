import React from 'react';
import './Coin.css';
import tura from '../assets/tura.png';
import yazi from '../assets/yazi.png';

const Coin = ({ onClick, side, yaziCount, turaCount, totalClick }) => {
  return (
    <div className="coin">
      {side === 'tura' ? (
        <img src={tura} alt="tura-lira" />
      ) : (
        <img src={yazi} alt="yazi-lira" />
      )}
      <button onClick={onClick} className="button">
        At!
      </button>
      <div className="results">
        <h3>{totalClick} Toplam atıştan</h3>
        <h5>{yaziCount} Yazı</h5>
        <h5>{turaCount} Tura</h5>
      </div>
    </div>
  );
};

export default Coin;
