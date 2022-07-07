import React from 'react';
import Card from './Card.jsx';
import style from './Cards.module.css';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return <div className={style.container}>
    {props.cities.map(el => (
      <Card
        name={el.name}
        min={el.main.temp_min}
        max={el.main.temp_max}
        img={el.weather[0].icon}
        onClose={() => props.onClose(el.name)}
        key={el.id}
      />
    ))}
  </div>
};