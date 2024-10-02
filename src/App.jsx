import { useState } from "react";
import "./App.css";
import { Card } from "./Card";

export default function App() {
  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description:
        "Un mínim de 30 hores a la setmana. Si no en tens prou, haurás de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "#4db5c6",
      image: <img src="./images/time_managment.svg" alt="Time" />,
    },
    {
      title: "Programa projectes propis",
      description:
        "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: "#ebebeb",
      image: <img src="./images/programming.svg" alt="Programing" />,
    },
    {
      title: "Procura descansar",
      description:
        "Descansar bé i desconectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "#ffd549",
      image: <img src="./images/meditation.svg" alt="Meditation" />,
    },
  ];

  const [step, setStep] = useState(0);

  function nextStep() {
    setStep((prev) => prev + 1);
  }

  return (
    <>
      <Card step={step} tutorialData={tutorialData} nextStep={nextStep} />;
    </>
  );
}
