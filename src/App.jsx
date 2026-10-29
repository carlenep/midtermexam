import React, { useState } from "react";
import "./App.css";

// Display Component Function
function Display({ value }) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      disabled
    />
  );
}

// Button Component Function
function Button({ label, className = "", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
  const [displayText, setDisplayText] = useState("10 Things That Require Zero Talent");

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="header">CARLENE PINEDA - WMD-3A</h1>
        <Display value={displayText} />
        <div className="buttons">
          <Button label="7" onClick={() => setDisplayText("7 - Being Coachable")} />
          <Button label="8" onClick={() => setDisplayText("8 - Doing A Little Extra")} />
          <Button label="9" onClick={() => setDisplayText("9 - Being Prepared")} />

          <Button label="4" onClick={() => setDisplayText("4 - Having A Positive Attitude")} />
          <Button label="5" onClick={() => setDisplayText("5 - Being Passionate")} />
          <Button label="6" onClick={() => setDisplayText("6 - Using Good Body Language")} />

          <Button label="1" onClick={() => setDisplayText("1 - Being On Time")} />
          <Button label="2" onClick={() => setDisplayText("2 - Making An Effort")} />
          <Button label="3" onClick={() => setDisplayText("3 - Being High Energy")} />

          <Button label="NAME" onClick={() => setDisplayText("CARLENE PINEDA")} />
          <Button label="0" onClick={() => setDisplayText("0 - Having A Strong Work Ethic")} />
          <Button label="SUBJ" onClick={() => setDisplayText("C-PCIT9")} />
        </div>
      </div>
    </div>
  );
}