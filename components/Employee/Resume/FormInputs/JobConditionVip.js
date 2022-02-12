import { useContext, useState } from "react";
 import JoBExperience from "./JobExperience";
import PersonalData from "./PersonalData";
import DegreeDoc from "./DegreeDoc";
import VerifyData from "./VerifyData";
 import SampleEx from "./SampleEx";
import CharTest from "./CharTest";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
import VerifyExperience from "./VerifyExperience";
import BreakLine from "./BreakLine";
import VerifyDegree from "./VerifyDegree";
import LangExpert from "./LangExpert";
import VerifyLangExpert from "./VerifyLangExpert";
import VerifySoftExpert from "./VerifySoftExpert";
import SoftExpert from "./SoftExpert";
const JobConditionVip = ({ step, handleStep }) => {
  const resumeContext = useContext(ResumeContext);

  const [cat, setCat] = useState({ id: null, name: null });
  return (
    <>
      <div className="row  pt-4 pb-4 mt-4 sec2 ">
        {step == 2 && <PersonalData />}

        {step >= 3 && <VerifyData />}
        <BreakLine />
        {step == 3 && <JoBExperience />}

        {step > 3 && resumeContext.data.experiences.length > 0 && (
          <VerifyExperience />
        )}

        {step == 4 && (
          <div className="col-12">
            <DegreeDoc />
          </div>
        )}
        {step > 4 && <VerifyDegree />}
        {step == 5 && (
          <div className="mt-5">
            <LangExpert />
          </div>
        )}
        {step > 5 && <VerifyLangExpert />}
        {step == 6 && (
          <div className="mt-5">
            <SoftExpert />
          </div>
        )}
        {step > 6 && <VerifySoftExpert />}
        {step == 7 && <SampleEx />}
        {step == 8 && <CharTest />}
        {step == 9 && (
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
        )}
      </div>
    </>
  );
};

export default JobConditionVip;
