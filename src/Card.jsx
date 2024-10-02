import { useState } from "react";
import { Indicator } from "./Indicator";

export function Card({ step, tutorialData, nextStep, lastStep, setStep }) {
  const currentData = tutorialData[step];

  const handleStepClick = (index) => {
    setStep(index);
  };

  return (
    <div className="max-w-sm mx-auto pt-0 px-0 pb-5 rounded-2xl shadow-lg overflow-hidden">
      <div
        className="w-full h-[400px] flex items-center justify-center"
        style={{ backgroundColor: currentData.bgColor }}
      >
        {currentData.image}
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold mb-3 text-start">
          {currentData.title}
        </h2>
        <p className="mb-3 text-start">{currentData.description}</p>
      </div>
      <div className="flex justify-start px-4">
        <Indicator
          tutorialData={tutorialData}
          step={step}
          onStepClick={handleStepClick}
        />
        <div className="flex ml-auto">
          {step > 0 && (
            <button
              onClick={lastStep}
              className="btn py-2 px-4 rounded-full border-2 border-black mr-2"
            >
              ⬅
            </button>
          )}
          {step < tutorialData.length - 1 && (
            <button
              onClick={nextStep}
              className="btn py-2 px-4 rounded-full bg-black text-white"
            >
              ⮕
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
