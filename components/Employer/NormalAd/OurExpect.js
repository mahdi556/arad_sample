import { useContext, useEffect, useState } from "react";
import SelectOption from "../../Employee/Resume/FormInputs/SelectOption";
import { sex } from "../../StaticData/SalaryType";
import AgeRange from "./AgeRange";
import style from "../../Employee/VipAd/FormInputs/FormStyles/form.module.css";
import ResumeContext from "../../../context/employeeContext/CreateResume/ResumeContext";

const OurExpect = () => {
  const resumeContext = useContext(ResumeContext);
  const sexHandler = (id, fa) => {
    resumeContext.dispatch({ type: "sex", payload: { id: id, fa: fa } });
  };

  useEffect(() => {}, []);

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
          انتظار ما از شما
        </div>
        <div className="d-flex justify-content-between col-12 px-5  ">
          <div className=" d-flex flex-wrap pe-4 col-12 ">
            <div
              className="col-12"
              style={{
                maxHeight: "6rem",
                zIndex: 7,
              }}
            >
              <SelectOption
                data={sex}
                name="جنسیت"
                valueHandler={sexHandler}
                predata={resumeContext.data.sex.fa}
              />
            </div>
            <div className="col-12">
              <AgeRange />
            </div>
          </div>
        </div>
        <div
          className="d-flex align-items-center mt-4 px-5"
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
      </div>
    </>
  );
};

export default OurExpect;
