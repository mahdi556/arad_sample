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
import VerifyExperience from "./VerifyExperience";
import BreakLine from "./BreakLine";
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

        {step >= 4 && (
          <>
            <BreakLine />
            <div className="col-12">
              <DegreeDoc />
            </div>

            <div className="mt-5">
              <SoftExpert name={"مهارت نرم افزاری"} />
            </div>
            <div className="mt-5 ">
              <SoftExpert name={"زبان"} />
            </div>
            <BreakLine />
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
    </>
  );
};

export default JobConditionVip;
