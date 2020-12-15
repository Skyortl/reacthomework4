import './App.css';
import RegisterForm from './RegisterForm/RegisterForm';
import RegisterCard from './RegisterCard/RegisterCard';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cards, setCards] = useState([]);
  const addCard = (card) => {
    setCards([...cards, card])
  }
  return (
    <div>
      <RegisterForm addCard={addCard}/>
      {cards.map((card,index) => <RegisterCard number={index + 1} card={card}/>)}
    </div>
  );
}

export default App;
