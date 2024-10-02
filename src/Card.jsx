import { useState } from "react";

export function Card({step, tutorialData, nextStep}) {
  const currentData = tutorialData[step];

  return (
    <div className="card">
      <h2>{currentData.title}</h2>
      <p>{currentData.description}</p>
      <button onClick={nextStep} className="btn">
        Següent
      </button>
    </div>
  );
}
