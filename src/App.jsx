import React, { useState, useContext, useEffect } from "react";
import Button from "./components/Button";
import CountdownAnimate from './components/CountdownAnimate'
import SetPomodoro from './components/SetPomodoro'
import { SettingsContext } from "./context/SettingsContext";


function App() {
const {
  pomodoro,
  setCurrentTimer,
  executing,
  settingsBtn,
  pikin,
  startTimer,
  startAnimate,
  pauseTimer,
  updateExe,
} = useContext(SettingsContext);
  
  useEffect(() => updateExe(executing), [executing, startAnimate]);

  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be productive the right way...</small>
      {pomodoro == 0 ? (
        <SetPomodoro />
      ) : (
        <>
          <ul className="labels">
            <li key={1}>
              <Button
                title="Work"
                activeClass={executing.active === "work" ? "active_label": undefined}
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li key={2}>
              <Button
                title="Short break"
                activeClass={executing.active === "short" ? "active_label": undefined}
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li key={3}>
              <Button
                title="Long Break"
                activeClass={executing.active === "long" ? "active_label": undefined}
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <Button title="Settings" _callback={settingsBtn} />
          <div className="time-container">
            <div className="time-wrapper">
              <CountdownAnimate
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {pikin}
              </CountdownAnimate>
            </div>
          </div>
          <div className="button-wrapper">
            <Button
              title="Start"
              className={!startAnimate ? "active": undefined}
              _callback={startTimer}
            />
            <Button
              title="Pause"
              className={startAnimate ? "active" : undefined}
              _callback={pauseTimer}
            />
          </div>
        </>
      )}
      {/* <CountdownAnimate /> */}
    </div>
  );
}

export default App
