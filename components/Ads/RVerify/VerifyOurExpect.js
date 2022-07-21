import { useContext } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import SectionEditTitle from "../Layouts/SectionEditTitle";
import SectionLayout from "../Layouts/SectionLayout";
import BreakLine from "../Tools/BreakLine";
const VerifyOurExpect = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <SectionLayout marginTop={false}>
        <SectionEditTitle title="انتظارات ما از شما" step={3} />

        <div className="d-flex col-12 flex-wrap  mt-4">
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light">جنسیت:</h5>
            <h6 className="col-6  fs-6  ">{resumeContext.data.sex.fa}</h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light ">محدوده سنی :</h5>
            <h6 className="col-6 fs-6  ">
              {" "}
              از {resumeContext.data.ageRange.fa.from} تا{" "}
              {resumeContext.data.ageRange.fa.to}
            </h6>
          </div>
        </div>
        <BreakLine />
      </SectionLayout>
    </>
  );
};

export default VerifyOurExpect;
