import React from 'react';
import style from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return <div className={style.container}>
    <div className={style.btnc}>
    <button onClick={props.onClose} className={style.btnx}>X</button>
    </div>
    <div className={style.namec}>
      <h4>{props.name}</h4>
    </div>
    <div className={style.info}>
      <div className="tempMin">
        <p>Min</p>
        <p>{props.min}°</p>
      </div>
      <div className="tempMax">
        <p>Max</p>
        <p>{props.max}°</p>
      </div>
    <img src={'https://openweathermap.org/img/wn/' + props.img + '@2x.png'} alt="5"/>
    </div>
  </div>
}
