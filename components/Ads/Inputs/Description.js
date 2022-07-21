import { useContext, useEffect, useState } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
import SectionTitle from "components/Ads/Layouts/SectionTitle";
import AdContext from "context/Ad/AdContext";

const Description = () => {
  const resumeContext = useContext(ResumeContext);
  const { stepClick, setStepClick, step, setStep } = useContext(AdContext);

   useEffect(() => {
    if (stepClick) {
      {
        setStepClick(false);
        setStep(step + 1);
      }
      setStepClick(false);
    }
  }, [stepClick, step]);

  return (
    <>
      <SectionLayout marginTop={false} paddingTop={false}>
        <SectionTitle title="توضیحات" />

        <div className="col-12 mb-2 mt-2">
          <textarea
            className={
              resumeContext.data.title == ""
                ? "col-12 mb-3 ps-2 inputStyle"
                : "col-12 mb-3 ps-2 inputFilled"
            }
            type="text"
            rows={5}
            style={{
              height: 150,
            }}
            value={resumeContext.data.description}
            onChange={(e) => {
              resumeContext.dispatch({
                type: "description",
                payload: e.target.value,
              });
            }}
          />
        </div>
      </SectionLayout>
    </>
  );
};

export default Description;
