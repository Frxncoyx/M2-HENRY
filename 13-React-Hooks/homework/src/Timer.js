import React from 'react';
import './Timer.css';

const Timer = () => {
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const [type, setType] = React.useState('Contador');
  const myRef = React.useRef(null);

  function toggle() {
    setIsRunning(!isRunning);
  }

  function reset() {
    setTime(0);
    setIsRunning(false);
  }

  function setTypeTimer() {
    type === 'Contador' ? setType('Cuenta regresiva') : setType('Contador');
  }
  function addSecond() {
    let value = myRef.current.value;
    setTime(value);
  }
  React.useEffect(() => {
    let interval = null;
    if (isRunning && type === 'Contador') {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
    if (isRunning && type === 'Cuenta regresiva') {
      interval = setInterval(() => {
        setTime(prev => prev - 1);
      }
        , 1000);
    }
    if (!isRunning && time !== 0 && type === 'Contador') {
      clearInterval(interval);
    }
    if (time === 0 && type === 'Cuenta regresiva') {
      reset();
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time, type]);

  return (
    <div className="app">
      <div className="time">
        {time} seg
      </div>
      <div className="row">
        <button onClick={toggle} className="button-primary">
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button className="button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={setTypeTimer}>
        {type}
      </button>
      {
        type === 'Cuenta regresiva' &&
        <input ref={myRef} type="number" placeholder='Ingrese el tiempo' autoComplete='off' onChange={addSecond} />

      }
    </div>
  );
};

export default Timer;