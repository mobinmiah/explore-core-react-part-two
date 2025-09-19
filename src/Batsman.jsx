import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  
  const handleSingle = () => {
    const newRun = runs + 1;
    setRuns(newRun);
  };

  const handleFour = () => {
    const runFour = runs + 4;
    setRuns(runFour);
  };

  const handleSix = () => {
    const runSix = runs + 6;
    const totalSexes = sixes + 1;
    setSixes(totalSexes);
    setRuns(runSix);
  };
  return (
    <div className="global-div">
      <h3>Batsman</h3>
      <p>Total Sixes : {sixes}</p>
      {runs > 50 && <p>You Earned Half Century</p>}
      <h2>Runs : {runs}</h2>
      <button onClick={handleSingle} className="custom-btn">
        Singles
      </button>
      <button onClick={handleFour} className="custom-btn">
        Four
      </button>
      <button onClick={handleSix} className="custom-btn">
        Six
      </button>
    </div>
  );
}
