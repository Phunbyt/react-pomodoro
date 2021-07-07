import React, { useState, useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import Button from './Button'

const SetPomodoro = () => {
    const { updateExe } = useContext(SettingsContext);
    const [newTimer, setNewTimer] = useState({
        work: 0.3,
        short: 0.5,
        long: 1,
        active: 'work',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
          case "work":
            setNewTimer({ ...newTimer, work: +value });
            break;
          case "shortBreak":
            setNewTimer({ ...newTimer, short: +value });
            break;
          case "longBreak":
            setNewTimer({ ...newTimer, long: +value });
            break;

          default:
            break; 
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateExe(newTimer)
    }
    return (
        <div className="form-container">
            <form noValidate>
                <div className="input-wrapper">
                    <input value={newTimer.work} type="text" name="work" className="input" onChange={handleChange}/>
                    <input value={newTimer.short} type="text" name="shortBreak" className="input" onChange={handleChange}/>
                    <input value={newTimer.long} type="text" name="longBreak" className="input" onChange={handleChange}/>
                </div>
                <Button title="Set Timer" _callback={handleSubmit}/>
            </form>
        </div>
    ) 
}

export default SetPomodoro
