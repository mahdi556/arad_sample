import { useContext, useEffect, useState } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import RadioButton from "components/Ads/Tools/RadioButton";
import SelectOption from "components/Ads/Tools/SelectOption";
import SalaryNeeded from "components/Ads/Sec3/SalaryNeeded";
import { JobCats } from "components/StaticData/JobCategory";
import { Province } from "components/StaticData/City";
import { Cities } from "components/StaticData/City";
import BirthDay from "components/Ads/Sec3/BirthDay";
import style from "components/Ads/Sec3/FormStyles/form.module.css";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
import SectionTitle from "components/Ads/Layouts/SectionTitle";
import SectionTempLayout from "components/Ads/Layouts/SectionTempLayout";
import AdContext from "context/Ad/AdContext";
const EPersonalData = () => {
  const [display, setDisplay] = useState("none");
  const resumeContext = useContext(ResumeContext);
  const { stepClick, setStepClick, step, setStep } = useContext(AdContext);
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
  const sexHandler = (sex) => {
    sex == 1
      ? resumeContext.dispatch({
          type: "sex",
          payload: { id: sex, fa: "مرد" },
        })
      : resumeContext.dispatch({
          type: "sex",
          payload: { id: sex, fa: "زن" },
        });
  };
  const marriedHandler = (mar) => {
    resumeContext.dispatch({ type: "married", payload: mar });
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
        resumeContext.data.jobCategory.fa !== "" &&
        resumeContext.data.province.fa !== "" &&
        resumeContext.data.city.fa !== "" &&
        resumeContext.data.birthday.year !== "" &&
        (resumeContext.data.salary.fa.to !== "" ||
          resumeContext.data.salaryAgree)
        //  &&
        // resumeContext.data.description !== ""
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
        <SectionTitle title="اطلاعات شخصی" />
        <div className="d-flex flex-wrap pe-4 col-12 ">
          <SectionTempLayout
            zindex={15}
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
            zindex={14}
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
                      ? "col-12 mb-3 ps-2 inputStyle"
                      : "col-12 mb-3 ps-2 inputFilled"
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
            zindex={13}
            necessary={true}
            field={resumeContext.data.title}
            display={display}
          >
            <div className="d-flex    col-12 align-items-start justify-content-between">
              <div className=" col-6">
                <RadioButton
                  title={"جنسیت"}
                  choices={{ 1: "مرد", 2: "زن" }}
                  valueHandler={sexHandler}
                  predata={resumeContext.data.sex.id}
                />
              </div>
              <div className="col-6">
                <SelectOption
                  data={JobCats}
                  name="وضعیت سربازی"
                  valueHandler={catHandler}
                  predata={resumeContext.data.jobCategory.fa}
                />
              </div>
            </div>
          </SectionTempLayout>
          <SectionTempLayout
            zindex={12}
            necessary={true}
            field={resumeContext.data.birthday.day}
            display={display}
          >
            <div className="d-flex   pt-4 col-12 align-items-start justify-content-between">
              <div className=" col-6">
                <RadioButton
                  title={"وضعیت تاهل"}
                  choices={{ 1: "مجرد", 2: "متاهل" }}
                  valueHandler={marriedHandler}
                  predata={resumeContext.data.married}
                />
              </div>
              <div className="col-6">
                <BirthDay />
              </div>
            </div>
          </SectionTempLayout>
          <SectionTempLayout
            zindex={11}
            necessary={true}
            field={resumeContext.data.city.fa}
            display={display}
          >
            <div className="d-flex col-12 justify-content-between">
              <div className={proId === "" ? "col-12  " : "col-5  "}>
                <SelectOption
                  data={Province}
                  name="استان"
                  valueHandler={provinceHandler}
                  predata={resumeContext.data.province.fa}
                />
              </div>
              {proId !== "" && (
                <div className="col-5  ">
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
            zindex={10}
            necessary={true}
            field={resumeContext.data.salary.fa.to}
            display={display}
          >
            <SalaryNeeded />
          </SectionTempLayout>
        </div>
        <SectionTempLayout zindex={9}>
          <RadioButton
            title={"تقاضای بیمه"}
            choices={{ 1: "دارم", 2: "ندارم" }}
            valueHandler={insuranceHandler}
            predata={resumeContext.data.insurrance}
          />
        </SectionTempLayout>

        {/* <div className="col-12 mb-3 mt-5">
          <label
            className="fs-6  "
            style={{
              marginBottom: "0.5rem",
              fontWeight: "normal",
            }}
          >
            توضیحات آگهی
          </label>
          <textarea
            className={
              resumeContext.data.description == ""
                ? "col-12 mb-3 ps-2 inputStyle"
                : "col-12 mb-3 ps-2 inputFilled"
            }
            type="text"
            value={resumeContext.data.description}
            onChange={(e) => {
              resumeContext.dispatch({
                type: "description",
                payload: e.target.value,
              });
            }}
            style={{
              height: 150,
            }}
          />
         </div> */}
        {resumeContext.data.sex.id == 1 && (
          <div
            className="d-flex align-items-center"
            onClick={() =>
              resumeContext.dispatch({
                type: "military",
                payload: !resumeContext.data.military,
              })
            }
            style={{
              cursor: "pointer",
            }}
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
        )}
      </SectionLayout>
    </>
  );
};

export default EPersonalData;
