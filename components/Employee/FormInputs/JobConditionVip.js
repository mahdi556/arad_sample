import { useState } from "react";
import StepButton from "./StepButton";
import JoBExperience from "./JobExperience";
import DegreeDoc from "./DegreeDoc";
import SampleEx from "./SampleEx";
import Description from "../../Employer/VipAd/Description";
import VerifyData from "./VerifyData";
import VerifyDegree from "../VipAd/VerifyDegree";
import PersonalData from "./PersonalData";
import VerifyExperience from "../VipAd/VerifyExperience";
import SoftExpert from "../VipAd/SoftExpert";
import LangExpert from "../VipAd/LangExpert";
import VerifySoftExpert from "../VipAd/VerifySoftExpert";
import VerifyLangExpert from "../VipAd/VerifyLangExpert";
const JobConditionVip = (props) => {
  const [p_height, setP_height] = useState("10%");

  const handleStep = (sn, ph) => {
    setStep(sn);
    setP_height(ph);
    handleStep2(sn, ph);
  };

  const handleStep2 = props.handleStep;

  const [step, setStep] = useState(props.step);

 
  return (
    <div className="row pt-4 pb-4 mt-4 sec2 ">
      {step == 2 && (
        <>
          <PersonalData />
          <StepButton handleStep={handleStep} step={2} ph={"53%"} />
        </>
      )}

      {step > 2 && (
        <>
          <VerifyData handleStep={handleStep} />
          <div className="  col-8 my-3 mx-auto ">
            <img
              className="img-fluid"
              src="../../../../assets/images/line.png"
              width="100%"
            />
          </div>
        </>
      )}

      {step == 3 && (
        <>
          <JoBExperience />
          <StepButton handleStep={handleStep} step={3} ph={"75%"} />
        </>
      )}
      {step > 3 && (
        <>
          <VerifyExperience handleStep={handleStep} />
          <div className="  col-8 my-3 mx-auto ">
            <img
              className="img-fluid"
              src="../../../../assets/images/line.png"
              width="100%"
            />
          </div>
        </>
      )}

      {step == 4 && (
        <>
          <DegreeDoc />
          <StepButton handleStep={handleStep} step={4} ph={"75%"} />
        </>
      )}
      {step > 4 && (
        <>
          <VerifyDegree handleStep={handleStep} />
          <div className="  col-8 my-3 mx-auto ">
            <img
              className="img-fluid"
              src="../../../../assets/images/line.png"
              width="100%"
            />
          </div>
        </>
      )}
      {step == 5 && (
        <>
          <SoftExpert />
          <StepButton handleStep={handleStep} step={4} ph={"75%"} />
        </>
      )}
      {step > 4 && (
        <>
          <VerifyDegree handleStep={handleStep} />
          <div className="  col-8 my-3 mx-auto ">
            <img
              className="img-fluid"
              src="../../../../assets/images/line.png"
              width="100%"
            />
          </div>
        </>
      )}
      {step == 5 && (
        <>
          <SoftExpert />
          <StepButton handleStep={handleStep} step={5} ph={"75%"} />
        </>
      )}
      {step > 5 && (
        <>
          <VerifySoftExpert handleStep={handleStep} />
          <div className="  col-8 my-3 mx-auto ">
            <img
              className="img-fluid"
              src="../../../../assets/images/line.png"
              width="100%"
            />
          </div>
        </>
      )}
      {step == 5 && (
        <>
          <LangExpert />
          <StepButton handleStep={handleStep} step={5} ph={"75%"} />
        </>
      )}
      {step > 5 && (
        <>
          <VerifyLangExpert handleStep={handleStep} />
          <div className="  col-8 my-3 mx-auto ">
            <img
              className="img-fluid"
              src="../../../../assets/images/line.png"
              width="100%"
            />
          </div>
        </>
      )}

      {step >= 4 && (
        <>
          <div className="  col-8 my-3 mx-auto ">
            <img
              className="img-fluid"
              src="../../../../assets/images/line.png"
              width="100%"
            />
          </div>
          <SampleEx />
          {/* <CharTest /> */}
          <Description />
        </>
      )}
    </div>
  );
};

export default JobConditionVip;
