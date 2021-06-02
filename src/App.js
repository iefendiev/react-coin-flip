import React, { useState } from 'react';
import './App.css';
import Coin from './components/Coin';

function App() {
  let [side, setSide] = useState('tura');
  // let [flipping, setFlipping] = useState(false);
  let [totalClick, setTotalClick] = useState(0);
  let [yaziCount, setYaziCount] = useState(0);
  let [turaCount, setTuraCount] = useState(0);

  const coinToss = () => {
    let chance = Math.random();

    if (chance < 0.5) {
      setSide('tura');
    } else {
      setSide('yazi');
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTotalClick(totalClick + 1);
    coinToss();
    if (side === 'yazi') {
      setYaziCount(yaziCount + 1);
    } else {
      setTuraCount(turaCount + 1);
    }
  };

  return (
    <div className="App">
      <h1>Yazı mı Tura mı?</h1>
      <Coin
        side={side}
        totalClick={totalClick}
        yaziCount={yaziCount}
        turaCount={turaCount}
        onClick={handleClick}
      ></Coin>
    </div>
  );
}

export default App;
