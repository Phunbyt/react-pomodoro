import React, {useState, createContext} from 'react'

export const SettingsContext = createContext()
const SettingsContextProvider = ({ children }) => {
    
    const [pomodoro, setPomodoro] = useState(0);
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)

    const setCurrentTimer = (active_state) => {
      updateExe({
        ...executing,
        active: active_state,
      });
        setTimerTime(executing);
    };

    const startTimer = () => {
        setStartAnimate(true) 
    }
    const pauseTimer = () => {
        setStartAnimate(false)
    }
    const stopTimer = () => {
        setStartAnimate(false)
    }

    const updateExe = (updatedSettings) => {
        setExecuting(updatedSettings);
        setTimerTime(updatedSettings);
        
    }
    
    const settingsBtn = () => {
        setExecuting({});
        setTimerTime(0);
    }

    const setTimerTime = (evaluate) => {
switch (evaluate.active) {
    case 'work':
        setPomodoro(evaluate.work);
        break;
    case 'short':
        setPomodoro(evaluate.short);
        break;
    case 'long':
        setPomodoro(evaluate.long);
        break;

    default:
        setPomodoro(0);
        break;
}
    }
const pikin = ({ remainingTime }) => {
  const mins = Math.floor(remainingTime / 60);
  const secs = remainingTime % 60;
  return `${mins} : ${secs}`;
};
    const state = {
      stopTimer,
      updateExe,
      pomodoro,
      executing,
      startAnimate,
      startTimer,
      pauseTimer,
      settingsBtn,
      setCurrentTimer,
      updateExe,
      pikin,
    };
    

    return (
      <SettingsContext.Provider value={state}>
        {children}
      </SettingsContext.Provider>
    );
}

export default SettingsContextProvider
