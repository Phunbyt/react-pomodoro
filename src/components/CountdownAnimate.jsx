import React, { useContext } from "react";
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingsContext } from '../context/SettingsContext';
const CountdownAnimate = ({key=1, timer=25, animate=true, children }) => {
    const { stopTimer } = useContext(SettingsContext);
    return (
      <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={[
          ["#004777", 0.33],
          ["#F7B801", 0.33],
          ["#A30000", 0.33],
        ]}
        strokeWidth={6}
        trailColor="#151932"
        onComplete={() => {
          stopTimer();
        }}
      >
        {children}
      </CountdownCircleTimer>
    );
}

export default CountdownAnimate
