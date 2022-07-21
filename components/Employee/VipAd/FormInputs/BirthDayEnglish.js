import { useContext, useState } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
const BirthDayEnglish = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <div className="col-12">
        <label
          className="fs-6  "
          style={{
            marginBottom: "0.5rem",
            fontFamily: "roboto",
          }}
        >
          Date Of Birth
        </label>
      </div>
      <div className="col-12  d-flex">
        <div className="input-group input-group-sm ms-2" dir="rtl">
          <input
            className={
              resumeContext.data.Ebirthday.day == ""
                ? "col-8 inputStyle"
                : "col-8 inputFilled"
            }
            value={resumeContext.data.Ebirthday.day}
            onChange={(e) => {
              resumeContext.dispatch({
                type: "Ebirthday-d",
                payload: e.target.value,
              });
            }}
          />
          <span className="input-group-text col-4 spanInputGroup">Day</span>
        </div>
        <div className="input-group input-group-sm mx-3 " dir="rtl">
          <input
            className={
              resumeContext.data.Ebirthday.month == ""
                ? "col-7 inputStyle"
                : "col-7 inputFilled"
            }
            value={resumeContext.data.Ebirthday.month}
            onChange={(e) => {
              resumeContext.dispatch({
                type: "Ebirthday-m",
                payload: e.target.value,
              });
            }}
          />
          <span className="input-group-text col-5 spanInputGroup">Month</span>
        </div>
        <div className="input-group input-group-sm me-2" dir="rtl">
          <input
            className={
              resumeContext.data.Ebirthday.year == ""
                ? "col-8 inputStyle"
                : "col-8 inputFilled"
            }
            value={resumeContext.data.Ebirthday.year}
            onChange={(e) => {
              resumeContext.dispatch({
                type: "Ebirthday-y",
                payload: e.target.value,
              });
            }}
          />
          <span className="input-group-text col-4 spanInputGroup">Year</span>
        </div>
      </div>
    </>
  );
};
export default BirthDayEnglish;
