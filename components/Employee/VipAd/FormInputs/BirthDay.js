import { useContext, useState } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
const BirthDay = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <div className="col-12">
        <label
          className="fs-6 "
          style={{
            marginBottom: "0.5rem",
            // fontWeight:'normal'
          }}
        >
          تاریخ تولد
        </label>
      </div>
      <div className="col-12  d-flex">
        <div className="input-group input-group-sm me-2">
          <input className={
              resumeContext.data.birthday.day == ""
                ? "col-8 inputStyle"
                : "col-8 inputFilled"
            }
            value={resumeContext.data.birthday.day}
            pattern="[0-9]*"
            maxlength="2"
            onChange={(e) => {
              resumeContext.dispatch({
                type: "birthday-d",
                payload: e.target.validity.valid ? e.target.value : '',
              });
            }}
          />
          <span
            className="input-group-text col-4 spanInputGroup"   >
            روز
          </span>
        </div>
        <div className="input-group input-group-sm mx-3 ">
          <input
            className={
              resumeContext.data.birthday.month == ""
                ? "col-8 inputStyle"
                : "col-8 inputFilled"
            }
            value={resumeContext.data.birthday.month}
            pattern="[0-9]*"
            maxlength="2"
            onChange={(e) => {
              resumeContext.dispatch({
                type: "birthday-m",
                payload: e.target.validity.valid ? e.target.value : '',
              });
            }}
          />
          <span
            className="input-group-text spanInputGroup col-4" >
            ماه
          </span>
        </div>
        <div className="input-group input-group-sm ms-2">
          <input
           className={
            resumeContext.data.birthday.year == ""
              ? "col-8 inputStyle"
              : "col-8 inputFilled"
          }
            value={resumeContext.data.birthday.year}
            pattern="[0-9]*"
            onChange={(e) => {
              resumeContext.dispatch({
                type: "birthday-y",
                payload:  e.target.validity.valid ? e.target.value : '',
              });
            }}
            maxlength="4"
          />
          <span
            className="input-group-text col-4 spanInputGroup">
            سال
          </span>
        </div>
      </div>
    </>
  );
};
export default BirthDay;
