import { useContext, useEffect, useState } from "react";
import ContactForm from "../FormInputs/Contact";
import JobConditionVip from "./FormInputs/JobConditionVip";
import StepButton from "../FormInputs/StepButton";
import ResumeContext from "../../../context/employeeContext/CreateResume/ResumeContext";
import VerifyFirstForm from "./FormInputs/VerifyFirstForm";
import FirstFormVip from "./FormInputs/FirstFormVip";
const CreateResumeBody = () => {
  const resumeContext = useContext(ResumeContext);
  const [step, setStep] = useState(1);
  useEffect(() => {
    setStep(resumeContext.data.step);
  }, [resumeContext.data.step]);
  const handleStep = (sn) => {
    setStep(sn);
    resumeContext.dispatch({ type: "step", payload: sn });
  };
  return (
    <>
      <div
        className="mx-auto"
        style={{
          width: "100%",
          // backgroundColor: "#f2f5f6",
          paddingTop: "2rem",
          paddingBottom: 400,
        }}
      >
        
          
          
          <div className="d-flex justify-content-between  ">
            <div
              style={{
                width: "100%",
              }}
            >
              {step == 1 && <FirstFormVip />}
              {step > 1 && <VerifyFirstForm />}
              {step >= 2 && <JobConditionVip step={step} />}
              {step == 10 && <ContactForm />}

              <StepButton handleStep={handleStep} step={step} />
            </div>
          
        </div>
      </div>
    </>
  );
};

export default CreateResumeBody;
