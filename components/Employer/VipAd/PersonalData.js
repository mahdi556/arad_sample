import { useContext, useEffect, useState } from "react";
 import RadioButton from "../../Employee/FormInputs/RadioButton";
import SalaryNeeded from "./SalaryNeeded";
import { JobCats } from "../../StaticData/JobCategory";
import { Province } from "../../StaticData/City";
import { Cities } from "../../StaticData/City";
import { SalaryType } from "../../StaticData/SalaryType";
import { corporateTime } from "../../StaticData/SalaryType";
import WorkHours from "./WorkHours";
import Options from "./Options";
import SelectOption from "../../Employee/Resume/FormInputs/SelectOption";
import FieldError from "../../Common/FieldError";
import ResumeContext from "../../../context/employeeContext/CreateResume/ResumeContext";

const PersonalData = () => {
  const resumeContext = useContext(ResumeContext);
  const [display, setDisplay] = useState("none");

  let proId = resumeContext.data.province.id;
  const citi = Cities.filter((item, key) => item.provinceId == proId);

  const catHandler = (id, fa) => {
    resumeContext.dispatch({
      type: "jobCategory",
      payload: { id: id, fa: fa },
    });
  };
  useEffect(() => {
    if (resumeContext.data.stepClick) {
      if (
        resumeContext.data.title !== "" &&
        resumeContext.data.corporateTime.fa !== "" &&
        resumeContext.data.province.fa !== "" &&
        resumeContext.data.corporateTime.fa !== "" &&
        resumeContext.data.jobCategory.fa !== "" &&
        resumeContext.data.province.fa !== "" &&
        resumeContext.data.city.fa !== "" &&
        (resumeContext.data.salary.fa.to !== "" ||
          resumeContext.data.salaryAgree)
      ) {
        resumeContext.dispatch({ type: "fieldCheck", payload: true });
      } else {
        setDisplay("");
        resumeContext.dispatch({ type: "stepClick", payload: false });
      }
    }
  }, [resumeContext.data.stepClick]);
  const [buttonClass, setButtonClass] = useState({
    1: "Ebutton_clicked",
    2: "Ebutton",
    3: "Ebutton",
  });
  const handlePersonalProgress = (sec, item) => {
    sec !== "" && resumeContext.data.progressBar.c.push(item);
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

  return (
    <>
      <div className="row pt-4 pb-4 mt-4 sec2">
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
            width: "100%",
            paddingRight: "1rem",
          }}
        >
          شرایط شغلی ما
        </div>
        <div className="d-flex justify-content-between col-12 px-5  ">
          <div className="d-flex flex-wrap pe-4 col-12 ">
            <div className="d-flex col-12 justify-content-between">
              <div className="col-5 mb-3">
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
                <FieldError
                  data={resumeContext.data.title}
                  display={display}
                />
              </div>
              <div className="col-5">
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
            <div
              className="col-12"
              style={{
                maxHeight: "6rem",
                zIndex: 16,
              }}
            >
              <SelectOption
                data={corporateTime}
                name="نوع همکاری"
                valueHandler={corHandler}
                predata={resumeContext.data.corporateTime.fa}
              />
            </div>
            <FieldError
              data={resumeContext.data.corporateTime.fa}
              display={display}
            />
            <div
              className="col-12"
              style={{
                maxHeight: "6rem",
                zIndex: 15,
              }}
            >
              <SelectOption
                data={JobCats}
                name="دسته بندی شغلی"
                valueHandler={catHandler}
                predata={resumeContext.data.jobCategory.fa}
              />
            </div>
            <FieldError
              data={resumeContext.data.jobCategory.fa}
              display={display}
            />

            <div className="d-flex col-12 justify-content-between">
              <div
                className={proId === "" ? "col-12  " : "col-5  "}
                style={{
                  maxHeight: "6rem",
                  zIndex: 14,
                }}
              >
                <SelectOption
                  data={Province}
                  name="استان"
                  valueHandler={provinceHandler}
                  predata={resumeContext.data.province.fa}
                />
                <FieldError
                  data={resumeContext.data.province.fa}
                  display={display}
                />
              </div>

              {proId !== "" && (
                <div
                  className="col-5  "
                  style={{
                    maxHeight: "6rem",
                    zIndex: 13,
                  }}
                >
                  <SelectOption
                    data={citi}
                    name="شهر"
                    valueHandler={cityHandler}
                    predata={resumeContext.data.city.fa}
                  />
                  <FieldError
                    data={resumeContext.data.city.fa}
                    display={display}
                  />
                </div>
              )}
            </div>

            <SalaryNeeded />
            <div className="mt-4">

            <FieldError
              data={resumeContext.data.salary.fa.to}
              display={display}
            />
            </div>
            <div
              className="col-12 mt-5"
              style={{
                maxHeight: "6rem",
                zIndex: 7,
              }}
            >
              <SelectOption
                data={SalaryType}
                name="نحوه پرداخت حقوق"
                valueHandler={salaryHandler}
                predata={resumeContext.data.salaryType.fa}
              />
            </div>
            <FieldError
              data={resumeContext.data.salaryType.fa}
              display={display}
            />
            <WorkHours />
            <FieldError
              data={resumeContext.data.workHour.fa.from}
              display={display}
            />
          </div>
        </div>

        <div className="col-12 px-5 mt-3">
          <div className="d-flex   pt-4 col-5 justify-content-between">
            <div className=" ">
              <RadioButton
                title={"تقاضای بیمه"}
                choices={{ 1: "دارد", 2: "ندارد" }}
                valueHandler={insuranceHandler}
                predata={resumeContext.data.insurrance}
              />
            </div>
            <div className=" ">
              <RadioButton
                title={"نیاز به سفر کاری"}
                choices={{ 1: "دارد", 2: "ندارد" }}
                valueHandler={insuranceHandler}
                predata={resumeContext.data.insurrance}
              />
            </div>
          </div>
          {/* <div
            className="col-12 mt-3"
            style={{
              maxHeight: "6rem",
              zIndex: 5,
            }}
          >
            <SelectOption
              data={JobCats}
              name="رده سازمان"
              valueHandler={catHandler}
              predata={resumeContext.data.jobCategory.fa}
            />
          </div> */}
          <Options name="تسهیلات و مزایا" />
        </div>
      </div>
    </>
  );
};

export default PersonalData;
