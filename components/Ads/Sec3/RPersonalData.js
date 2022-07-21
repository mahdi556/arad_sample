import { useContext, useEffect, useState } from "react";
import RadioButton from "components/Ads/Tools/RadioButton";
import SelectOption from "components/Ads/Tools/SelectOption";
import SalaryNeeded from "components/Ads/Sec3/SalaryNeeded";
import { JobCats } from "components/StaticData/JobCategory";
import { Province } from "components/StaticData/City";
import { Cities } from "components/StaticData/City";
import { SalaryType } from "components/StaticData/SalaryType";
import { corporateTime } from "components/StaticData/SalaryType";
import WorkHours from "components/Ads/Inputs/WorkHours";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
import SectionTitle from "components/Ads/Layouts/SectionTitle";
import SectionTempLayout from "components/Ads/Layouts/SectionTempLayout";
import Benefits from "components/Ads/Inputs/Benefits";
import AdContext from "context/Ad/AdContext";

const RPersonalData = () => {
  const resumeContext = useContext(ResumeContext);
  const { stepClick, setStepClick, step, setStep } = useContext(AdContext);
  const [display, setDisplay] = useState("none");
  let proId = resumeContext.data.province.id;
  const citi = Cities.filter((item, key) => item.provinceId == proId);

  const catHandler = (id, fa) => {
    resumeContext.dispatch({
      type: "jobCategory",
      payload: { id: id, fa: fa },
    });
  };

  const [buttonClass, setButtonClass] = useState({
    1: "Ebutton_clicked",
    2: "Ebutton",
    3: "Ebutton",
  });
  const handlePersonalProgress = (sec, item) => {
    sec !== "" && resumecontext.data.progressBar.c.push(item);
    resumeContext.dispatch({ type: "progressBar-c" });
  };
  const SetButtClass = (i) => {
    buttonClass[1] = "Ebutton";
    buttonClass[2] = "Ebutton";
    buttonClass[3] = "Ebutton";
    setButtonClass({ ...buttonClass, [i]: "Ebutton_clicked " });
  };
  const insuranceHandler = (ins) => {
    resumeContext.dispatch({ type: "insurrance", payload: ins });
  };

  const provinceHandler = (id, fa) => {
    resumeContext.dispatch({
      type: "province",
      payload: { id: id, fa: fa },
    });
  };

  const cityHandler = (id, fa) => {
    resumeContext.dispatch({ type: "city", payload: { id: id, fa: fa } });
  };
  const corHandler = (id, fa) => {
    resumeContext.dispatch({
      type: "corporateTime",
      payload: { id: id, fa: fa },
    });
  };
  const salaryHandler = (id, fa) => {
    resumeContext.dispatch({
      type: "salaryType",
      payload: { id: id, fa: fa },
    });
  };
  useEffect(() => {
    buttonClass[1] = "Ebutton";
    buttonClass[2] = "Ebutton";
    buttonClass[3] = "Ebutton";
    setButtonClass({
      ...buttonClass,
      [resumeContext.data.corporateType]: "Ebutton_clicked ",
    });
  }, []);
  useEffect(() => {
    if (stepClick) {
      if (
        resumeContext.data.title !== "" &&
        resumeContext.data.corporateTime.fa !== "" &&
        resumeContext.data.jobCategory.fa !== "" &&
        resumeContext.data.province.fa !== "" &&
        resumeContext.data.city.fa !== "" &&
        resumeContext.data.salaryType.fa !== "" &&
        resumeContext.data.workHour.fa.from !== ""
      ) {
        setStepClick(false);
        setStep(step + 1);
      }
      setStepClick(false);
    }
  }, [stepClick, step]);
  return (
    <>
      <SectionLayout>
        <SectionTitle title="شرایط شغلی" />
        <div className="d-flex justify-content-between col-12 ">
          <div className="d-flex flex-wrap pe-4 col-12 ">
            <SectionTempLayout
              zindex={15}
              necessary={true}
              field={resumeContext.data.title}
              display={display}
            >
              <div className="d-flex col-12 justify-content-between">
                <div className="col-5 ">
                  <label
                    className="fs-6  "
                    style={{
                      marginBottom: "0.5rem",
                      fontWeight: "normal",
                    }}
                  >
                    عنوان
                  </label>
                  <input
                    className={
                      resumeContext.data.title == ""
                        ? "col-12   ps-2 inputStyle"
                        : "col-12   ps-2 inputFilled"
                    }
                    type="text"
                    value={resumeContext.data.title}
                    onChange={(e) => {
                      resumeContext.dispatch({
                        type: "title",
                        payload: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="col-6">
                  <label
                    style={{
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    همکاری به صورت
                  </label>
                  <div className="d-flex">
                    <div
                      className={buttonClass[1]}
                      onClick={() => {
                        SetButtClass(1);
                        resumeContext.dispatch({
                          type: "corporateType",
                          payload: 1,
                        });
                      }}
                    >
                      فقط حضوری
                    </div>
                    <div
                      className={buttonClass[2]}
                      onClick={() => {
                        SetButtClass(2);
                        resumeContext.dispatch({
                          type: "corporateType",
                          payload: 2,
                        });
                      }}
                    >
                      فقط دورکاری
                    </div>
                    <div
                      className={buttonClass[3]}
                      onClick={() => {
                        SetButtClass(3);
                        resumeContext.dispatch({
                          type: "corporateType",
                          payload: 3,
                        });
                      }}
                    >
                      هردو
                    </div>
                  </div>
                </div>
              </div>
            </SectionTempLayout>

            <SectionTempLayout
              zindex={14}
              necessary={true}
              field={resumeContext.data.corporateTime.fa}
              display={display}
            >
              <SelectOption
                data={corporateTime}
                name="نوع همکاری"
                valueHandler={corHandler}
                predata={resumeContext.data.corporateTime.fa}
              />
            </SectionTempLayout>
            <SectionTempLayout
              zindex={13}
              necessary={true}
              field={resumeContext.data.jobCategory.fa}
              display={display}
            >
              <SelectOption
                data={JobCats}
                name="دسته بندی شغلی"
                valueHandler={catHandler}
                predata={resumeContext.data.jobCategory.fa}
              />
            </SectionTempLayout>
            <SectionTempLayout
              zindex={12}
              necessary={true}
              field={resumeContext.data.city.fa}
              display={display}
            >
              <div className="d-flex col-12 justify-content-between">
                <div className={proId === "" ? "col-12  " : "col-5  "}>
                  <SelectOption
                    style={{
                      maxHeight: "6rem",
                    }}
                    data={Province}
                    name="استان"
                    valueHandler={provinceHandler}
                    predata={resumeContext.data.province.fa}
                  />
                </div>
                {proId !== "" && (
                  <div
                    className="col-5  "
                    style={{
                      maxHeight: "6rem",
                    }}
                  >
                    <SelectOption
                      data={citi}
                      name="شهر"
                      valueHandler={cityHandler}
                      predata={resumeContext.data.city.fa}
                    />
                  </div>
                )}
              </div>
            </SectionTempLayout>

            <SectionTempLayout
              zindex={11}
              necessary={true}
              field={resumeContext.data.salary.fa.from}
              display={display}
            >
              <SalaryNeeded />
            </SectionTempLayout>
            <SectionTempLayout
              zindex={10}
              necessary={true}
              field={resumeContext.data.salaryType.fa}
              display={display}
            >
              <SelectOption
                data={SalaryType}
                name="نحوه پرداخت حقوق"
                valueHandler={salaryHandler}
                predata={resumeContext.data.salaryType.fa}
              />
            </SectionTempLayout>
            <SectionTempLayout
              zindex={9}
              necessary={true}
              field={resumeContext.data.workHour.fa.to}
              display={display}
            >
              <WorkHours />
            </SectionTempLayout>
            <SectionTempLayout
              zindex={8}
              necessary={true}
              field={resumeContext.data.jobCategory.fa}
              display={display}
            >
              <SelectOption
                data={JobCats}
                name="رده سازمان"
                valueHandler={catHandler}
                predata={resumeContext.data.jobCategory.fa}
              />
            </SectionTempLayout>
            <SectionTempLayout
              zindex={7}
              necessary={false}
              field={resumeContext.data.jobCategory.fa}
              display={display}
            >
              <Benefits />
            </SectionTempLayout>
          </div>
        </div>

        <div className="col-12 mb-5">
          <div className="d-flex   pt-4 col-6 justify-content-between">
            <div className=" ">
              <RadioButton
                title={" بیمه"}
                choices={{ 1: "دارد", 2: "ندارد" }}
                valueHandler={insuranceHandler}
                predata={resumeContext.data.insurrance}
              />
            </div>
            <div className=" ">
              <RadioButton
                title={" نیاز به سفر کاری"}
                choices={{ 1: "دارد", 2: "ندارد" }}
                valueHandler={insuranceHandler}
                predata={resumeContext.data.insurrance}
              />
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default RPersonalData;
