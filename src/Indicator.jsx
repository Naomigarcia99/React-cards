import styled from "styled-components";

export const Dot = styled.div`
  height: 8px;
  width: ${({ $active }) => ($active ? "25px" : "8px")};
  background-color: ${({ $active }) => ($active ? "#000" : "#ccc")};
  border-radius: ${({ $active }) => ($active ? "40%" : "50%")};
  margin: 0 4px;
  cursor: pointer;
  transition: width 0.2s ease;
`;

export function Indicator({ tutorialData, step, onStepClick }) {
  const stepsArray = [...Array(tutorialData.length)];

  return (
    <div className="flex justify-start my-5">
      {stepsArray.map((_, index) => (
        <Dot
          key={index}
          $active={index === step}
          onClick={() => onStepClick(index)}
        />
      ))}
    </div>
  );
}
