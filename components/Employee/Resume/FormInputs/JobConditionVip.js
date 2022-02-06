import { useContext, useState } from "react";
import StepButton from "../../FormInputs/StepButton";
import JoBExperience from "./JobExperience";
import PersonalData from "./PersonalData";
import DegreeDoc from "./DegreeDoc";
import VerifyData from "./VerifyData";
import SoftExpert from "./SoftExpert";
import SampleEx from "./SampleEx";
import CharTest from "./CharTest";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
const JobConditionVip = (props) => {
  const resumeContext=useContext(ResumeContext)
  const [p_height, setP_height] = useState("10%");

  const handleStep = (sn, ph) => {
    setStep(sn);
    setP_height(ph);
    handleStep2(sn, ph);
  };

  const handleStep2 = props.handleStep;

  const [step, setStep] = useState(props.step);

  const [cat, setCat] = useState({ id: null, name: null });
//  console.log(resumeContext.data)
  return (
    <div className="row pt-4 pb-4 mt-4 sec2 ">
      {step < 3 && <PersonalData />}

      {step < 3 && <StepButton handleStep={handleStep} step={3} ph={"53%"} />}

      {step >= 3 && (
        <>
          <VerifyData handleStep={handleStep} />
          <div className="  col-8 my-3 mx-auto ">
            <img
              className="img-fluid"
              src="../../../../assets/images/line.png"
              width="100%"
            />
          </div>
          <JoBExperience />
        </>
      )}

      {step == 3 && <StepButton handleStep={handleStep} step={4} ph={"75%"} />}
      {step >= 4 && (
        <>
          <div className="  col-8 my-3 mx-auto ">
            <img
              className="img-fluid"
              src="../../../../assets/images/line.png"
              width="100%"
            />
          </div>
          <div className="col-12">
            <DegreeDoc />
          </div>

          <div className="mt-5">
            <SoftExpert name={"مهارت نرم افزاری"} />
          </div>
          <div className="mt-5 ">
            <SoftExpert name={"زبان"} />
          </div>
          <div className="  col-8 my-3 mx-auto ">
            <img
              className="img-fluid"
              src="../../../../assets/images/line.png"
              width="100%"
            />
          </div>
          <SampleEx />
          <CharTest />
          <div className="d-flex  justify-content-between">
            <div className="col-12">
              <label
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                توضیحات آگهی
              </label>
              <textarea
                className="col-12 mb-3 "
                style={{
                  backgroundColor: "#EBEBEB",
                  borderStyle: "none",
                  borderRadius: 5,
                  height: "10rem",
                }}
                type="text"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default JobConditionVip;
