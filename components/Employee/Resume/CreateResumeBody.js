import { useContext, useState } from "react";
import ContactForm from "../FormInputs/Contact";
import FirstFormVip from "../FormInputs/FirstFormVip";
import JobConditionVip from './FormInputs/JobConditionVip'
 import StepButton from "../FormInputs/StepButton";
import ResumeContext from '../../../context/employeeContext/CreateResume/ResumeContext'
 const CreateResumeBody = () => {
   const resumeContext = useContext(ResumeContext)
  const [step, setStep] = useState(1);
   const handleStep = (sn,ph) => {
    setStep(sn);
    resumeContext.dispatch({ type: "step", payload: sn });
  };
  return (
    <>
       <div  className="mx-auto"
        style={{
          width: "45%",
          backgroundColor: "#E5E5E5",
          // marginTop:'6rem',
          paddingTop: "2rem",
          paddingBottom: 400,
        }}
      >
        <div
          style={{
            width: "100%",
           }}
        >
          <div
            className="d-flex px-3 py-2  mb-5 align-items-center "
            style={{ backgroundColor: "#D8EFEF", borderRadius: "1.5rem" }}
          >
            <h3
              className="mx-auto"
              style={{
                fontSize: "1rem",
                // fontWeight: "bold",
                lineHeight: "1.4rem",
                
              }}
            >
              با تکمیل رزومه 15 هزار تومان اعتبار هدیه بگیرید.{" "}
            </h3>
          </div>
          <div className="d-flex justify-content-between  ">
          
            <div
              style={{
                width: "100%",
              }}
            >
              <FirstFormVip />
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

export default CreateResumeBody;
