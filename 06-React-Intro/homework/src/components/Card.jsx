import React from 'react';

export default function Card(props) {
  // acá va tu código
  return <div>
    <div className="btnx">
    <button onClick={props.onClose}>X</button>
    </div>
    <div>
      <h4>{props.name}</h4>
    </div>
    <div className="info">
      <div className="tempMin">
        <p>Min</p>
        <p>{props.min}°</p>
      </div>
      <div className="tempMax">
        <p>Max</p>
        <p>{props.max}°</p>
      </div>
    </div>
    <img src={'https://openweathermap.org/img/wn/' + props.img + '@2x.png'} alt="5"/>
  </div>
}