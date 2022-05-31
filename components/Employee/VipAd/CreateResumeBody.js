import { useContext, useEffect, useState } from "react";
import ContactForm from "../FormInputs/Contact";
import JobConditionVip from "./FormInputs/JobConditionVip";
import StepButton from "../FormInputs/StepButton";
import ResumeContext from "../../../context/employeeContext/CreateResume/ResumeContext";
import VerifyFirstForm from "./FormInputs/VerifyFirstForm";
import FirstFormVip from "./FormInputs/FirstFormVip";
const CreateResumeBody = ({ handleStep2 }) => {
  const resumeContext = useContext(ResumeContext);
  const [step, setStep] = useState(1);
  const [step2, setStep2] = useState(1);

  useEffect(() => {
    setStep(resumeContext.data.step);
  }, [resumeContext.data.step]);
  const handleStep = (sn) => {
    resumeContext.dispatch({
      type: "stepClick",
      payload: true,
    });
    setStep2(sn);
  };
  useEffect(() => {
    if (resumeContext.data.fieldCheck) {
      resumeContext.dispatch({
        type: "fieldCheck",
        payload: false,
      });
      resumeContext.dispatch({
        type: "stepClick",
        payload: false,
      });
      resumeContext.dispatch({ type: "step", payload: step2 });
      handleStep2(step2)
    }
  }, [resumeContext.data.fieldCheck]);

  return (
    <>
      <div
        className="mx-auto"
        style={{
          width: "100%",
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
            <div
              className="d-flex px-3 pt-2 pb-1  mb-5 align-items-center  "
              style={{ backgroundColor: "#fff", borderRadius: "0.7rem" }}
            >
              <h3
                className=" mx-auto"
                style={{
                  fontFamily:'iranBlack',
                  fontSize: 20,
                  lineHeight: '31px',
                }}
              >
                آگهی ویژه (فارسی)
               </h3>
               
            </div>
            {step == 1 && <FirstFormVip />}
            {step > 1 && <VerifyFirstForm />}
            {step >= 2 && <JobConditionVip step={step} handleStep={handleStep} />}
            {step == 9 && <ContactForm />}
            {step < 9 && <StepButton handleStep={handleStep} step={step} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateResumeBody;
