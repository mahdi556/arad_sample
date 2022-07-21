import { useContext, useState } from "react";
import JoBExperience from "./JobExperience";
import PersonalData from "./PersonalData";
import DegreeDoc from "./DegreeDoc";
import VerifyData from "./VerifyData";
import SampleEx from "./SampleEx";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
import VerifyExperience from "./VerifyExperience";
import BreakLine from "./BreakLine";
import VerifyDegree from "./VerifyDegree";
import LangExpert from "./LangExpert";
import VerifyLangExpert from "./VerifyLangExpert";
import VerifySoftExpert from "./VerifySoftExpert";
import SoftExpert from "./SoftExpert";
import VerifySampleEx from "./VerifySampleEx";
import VerifyDescription from "./VerifyDescription";
import Description from "./Description";
const JobConditionVip = ({ step, handleStep }) => {
  const resumeContext = useContext(ResumeContext);

  return (
    <>
      <div className="row  pt-4 pb-4 mt-4 sec2 ">
        {step == 2 && <PersonalData />}

        {step >= 3 && <VerifyData />}
        <BreakLine />
        {step == 3 && <JoBExperience handleStep={handleStep} />}

        {step > 3 && <VerifyExperience />}

        {step == 4 && (
          <div className="col-12">
            <DegreeDoc  handleStep={handleStep} />
          </div>
        )}
        {step > 4 && <VerifyDegree />}
        {step == 5 && (
          <div className="mt-5">
            <LangExpert handleStep={handleStep} />
          </div>
        )}
        {step > 5 && <VerifyLangExpert />}
        {step == 6 && (
          <div className="mt-5">
            <SoftExpert handleStep={handleStep} />
          </div>
        )}
        {step > 6 && <VerifySoftExpert />}
        {step == 7 && <SampleEx  handleStep={handleStep}/>}
        {step > 7 && <VerifySampleEx />}
        {step == 8 && <Description />}
        {step > 8 && <VerifyDescription />}
      </div>
    </>
  );
};

export default JobConditionVip;
