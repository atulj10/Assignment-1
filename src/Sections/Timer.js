import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [min, setMin] = useState(10);
  const [sec, setSec] = useState(0);
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setSec((prevSec) => (prevSec === 0 ? 59 : prevSec - 1));

        if (min < 0) {
          setActive(false)
        }

        if (sec === 0) {
          setSec(59);
          setMin((prevMin) => prevMin - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [active, min, sec]);

  return (
    <div className='timer-container'>
      <span className='timer' style={{color:`${!active && "red"}`}}>{min < 10 ? '0' + min : min}:{sec < 10 ? '0' + sec : sec}</span>
      <span style={{opacity:`${active? 0 : 1}`,color:"red"}}><h1>You can Still register!😜</h1></span>
      <h2 className='time-text'>Hurry the Clock is ticking<div className='clock'>⏳</div></h2>
    </div>
  );
};

export default Timer;
