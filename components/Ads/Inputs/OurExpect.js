import { useContext, useEffect, useState } from "react";
import SelectOption from "components/Ads/Tools/SelectOption";
import { sex } from "components/StaticData/SalaryType";
import AgeRange from "components/Ads/Inputs/AgeRange";
import style from "components/Ads/FormStyles/form.module.css";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import SectionLayout from "../Layouts/SectionLayout";
import SectionTitle from "../Layouts/SectionTitle";
import SectionTempLayout from "../Layouts/SectionTempLayout";
import AdContext from "context/Ad/AdContext";

const OurExpect = () => {
  const resumeContext = useContext(ResumeContext);
  const { stepClick, setStepClick, step, setStep } = useContext(AdContext);
  const sexHandler = (id, fa) => {
    resumeContext.dispatch({ type: "sex", payload: { id: id, fa: fa } });
  };
  const [display, setDisplay] = useState("none");

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
      <SectionLayout marginTop={false}>
        <SectionTitle title="انتظارات ما از  شما" />
        <div className="d-flex justify-content-between col-12  ">
          <div className=" d-flex flex-wrap pe-4 col-12 ">
            <SectionTempLayout
              zindex={14}
              necessary={true}
              field={resumeContext.data.sex.fa}
              display={display}
            >
              <SelectOption
                data={sex}
                name="جنسیت"
                valueHandler={sexHandler}
                predata={resumeContext.data.sex.fa}
              />
            </SectionTempLayout>

            <SectionTempLayout
              zindex={13}
              necessary={true}
              field={resumeContext.data.ageRange.fa.to}
              display={display}
            >
              <AgeRange />
            </SectionTempLayout>
          </div>
        </div>
        <div
          className="d-flex align-items-center mt-4 "
          onClick={() =>
            resumeContext.dispatch({
              type: "military",
              payload: !resumeContext.data.military,
            })
          }
        >
          <h3 className={`${style.txt3} pe-3 pt-1`}>
            سربازی را به اتمام رسانده یا معاف هستم
          </h3>
          <img
            src={
              resumeContext.data.military
                ? "/assets/images/checked.png"
                : "/assets/images/checkbox_black.svg"
            }
          />
        </div>
      </SectionLayout>
    </>
  );
};

export default OurExpect;
