import { useState } from "react";
import ContactForm from "./FormInputs/Contact";
import FirstForm from "./FormInputs/FirstForm";
import JobConditionVip from "./FormInputs/JobConditionVip";
import StepButton from "./FormInputs/StepButton";
import VerticalProgress from "./FormInputs/VerticalProgress";
const CreateEmployerAdVip = () => {
  const [step, setStep] = useState(1);
  const [p_height, setP_height] = useState("10%");
  const handleStep = (sn, ph) => {
    setStep(sn);
    setP_height(ph);
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#E5E5E5",
          // marginTop:'6rem',
          paddingTop: "9rem",
          paddingBottom: 400,
        }}
      >
        <div
          style={{
            width: "62%",
            marginRight: "13%",
            marginLeft: "25%",
          }}
        >
          <div className="d-flex justify-content-between  ">
            <div
              style={{
                width: "15%",
              }}
            >
              <VerticalProgress step={step} p_height={p_height} />
            </div>
            <div
              style={{
                width: "83%",
              }}
            >
              <FirstForm />
              {step < 2 && (
                <StepButton handleStep={handleStep} step={2} ph={"30%"} />
              )}

              {step >= 2 && (
                <JobConditionVip step={step} handleStep={handleStep} />
              )}
              {step == 4 && (
                <StepButton handleStep={handleStep} step={5} ph={"98%"} />
              )}

              {step > 4 && <ContactForm />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEmployerAdVip;
