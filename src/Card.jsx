import { useEffect, useState } from "react";
import { Indicator } from "./Indicator";
import "./Card.css";

export function Card({ step, tutorialData, nextStep, lastStep, setStep }) {
  const currentData = tutorialData[step];

  const [currentStep, setCurrentStep] = useState(step);
  const [previousStep, setPreviousStep] = useState(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (step !== currentStep) {
      setPreviousStep(currentStep);
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
        setCurrentStep(step);
        setPreviousStep(null);
      }, 500);
    }
  }, [step]);

  const handleStepClick = (index) => {
    setStep(index);
  };
  
  const previousData =
    previousStep !== null ? tutorialData[previousStep] : null;

  return (
    <div className="max-w-sm mx-auto pt-0 px-0 pb-5 rounded-2xl shadow-lg overflow-hidden">
      <div
        className="image-card-container"
        style={{ backgroundColor: currentData.bgColor }}
      >
        {animating && previousData && (
          <div className="image-wrapper exiting">{previousData.image}</div>
        )}
        <div className={`image-wrapper ${animating ? "entering" : ""}`}>
          {currentData.image}
        </div>
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
