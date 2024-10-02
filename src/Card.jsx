import { useState } from "react";

export function Card({ step, tutorialData, nextStep, lastStep }) {
  const currentData = tutorialData[step];

  return (
    <div className="card max-w-sm mx-auto pt-0 px-0 rounded-2xl shadow-lg overflow-hidden">
      <div
        className="w-full h[420px] flex items-center justify-center"
        style={{ backgroundColor: currentData.bgColor }}
      >
        {currentData.image}
      </div>
      <h2>{currentData.title}</h2>
      <p>{currentData.description}</p>
      <button onClick={lastStep} className="btn">
        Anterior
      </button>
      <button onClick={nextStep} className="btn">
        Següent
      </button>
    </div>
  );
}
