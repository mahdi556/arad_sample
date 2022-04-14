import { useContext, useEffect, useState } from "react";
import BirthDay from "./BirthDay";
import SelectOption from "./SelectOption";
import RadioButton from "../../FormInputs/RadioButton";
import SalaryNeeded from "./SalaryNeeded";
import { Province } from "../../../StaticData/City";
import { Cities } from "../../../StaticData/City";
import { JobCats } from "../../../StaticData/JobCategory";
import FieldError from "../../../Common/FieldError";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
const PersonalData = () => {
  const resumeContext = useContext(ResumeContext);
  const [display, setDisplay] = useState("none");
  useEffect(() => {
    if (resumeContext.data.stepClick) {
      if (
        resumeContext.data.title !== "" &&
        resumeContext.data.jobCategory.fa !== "" &&
        resumeContext.data.province.fa !== "" &&
        resumeContext.data.birthday.month !== "" &&
        resumeContext.data.salary.fa.to !== ""
      ) {
        resumeContext.dispatch({ type: "fieldCheck", payload: true });
      } else {
        setDisplay("");
        resumeContext.dispatch({ type: "stepClick", payload: false });
      }
    }
  }, [resumeContext.data.stepClick]);

  let proId = resumeContext.data.province.id;
  const citi = Cities.filter((item, key) => item.provinceId == proId);

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
  const sexHandler = (sex) => {
    sex == 1
      ? normalAdContext.dispatch({
          type: "sex",
          payload: { id: sex, fa: "مرد" },
        })
      : normalAdContext.dispatch({
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
  const catHandler = (id, fa) => {
    resumeContext.dispatch({
      type: "jobCategory",
      payload: { id: id, fa: fa },
    });
  };
  const cityHandler = (id, fa) => {
    resumeContext.dispatch({ type: "city", payload: { id: id, fa: fa } });
  };

  return (
    <>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginBottom: "1rem",
          width: "100%",
          paddingRight: "1rem",
        }}
      >
        اطلاعات شخصی
      </div>
      <div className="d-flex justify-content-between col-12 px-4 ">
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
              <FieldError data={resumeContext.data.title} display={display} />
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
          <div
            className="col-12"
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
          </div>
          <FieldError data={resumeContext.data.province.fa} display={display} />
          {proId !== "" && (
            <div
              className="col-12"
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
            </div>
          )}
          <div className="d-flex  col-12  align-items-end  justify-content-between">
            <div className="col-6 ">
              <BirthDay />
              <FieldError
                data={resumeContext.data.birthday.month}
                display={display}
              />
            </div>
            <div className="col-5  ">
              <div className="d-flex   col-12 justify-content-between">
                <div className=" ">
                  <RadioButton
                    title={"جنسیت"}
                    choices={{ 1: "مرد", 2: "زن" }}
                    valueHandler={sexHandler}
                    predata={resumeContext.data.sex.id}
                  />
                </div>
                <div className=" ">
                  <RadioButton
                    title={"وضعیت تاهل"}
                    choices={{ 1: "مجرد", 2: "متاهل" }}
                    valueHandler={marriedHandler}
                    predata={resumeContext.data.married}
                  />
                </div>
                <div className=" ">
                  <RadioButton
                    title={"تقاضای بیمه"}
                    choices={{ 1: "دارم", 2: "ندارم" }}
                    valueHandler={insuranceHandler}
                    predata={resumeContext.data.insurrance}
                  />
                </div>
              </div>
            </div>
          </div>

          <SalaryNeeded />
          <FieldError
            data={resumeContext.data.salary.fa.to}
            display={display}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalData;
