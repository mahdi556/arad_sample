import AdContext from "context/Ad/AdContext";
import { useContext } from "react";

const StepButton = () => {
  const { step, setStep, stepClick, setStepClick } = useContext(AdContext);
  return (
    <div
      className="d-flex mt-5 justify-content-center"
      onClick={() => {
        // setStep(step + 1);
        setStepClick(true);
      }}
    >
      <div
        className="py-2 text-white"
        style={{
          width: "35%",
          fontSize: "1.5rem",
          backgroundColor: "#E92B59",
          textAlign: "center",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        بعدی
      </div>
    </div>
  );
};
export default StepButton;
