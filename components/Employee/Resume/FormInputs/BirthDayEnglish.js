import { useContext, useState } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
const BirthDayEnglish = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <div className="col-12">
        <label
          style={{
            marginBottom: "0.5rem",
            fontSize: "1rem",
          }}
        >
          Date Of Birth
        </label>
      </div>
      <div className="col-12  d-flex">
        <div className="input-group input-group-sm mx-1">
          <span
            className="input-group-text"
            style={{
              backgroundColor: "#11999e",
              height: "100%",
              color: "#fff",
              fontSize: 13,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          >
            Day
          </span>
          <input
            className="form-control inputStyle"
            value={resumeContext.data.Ebirthday.day}
            onChange={(e) => {
              resumeContext.dispatch({
                type: "Ebirthday-d",
                payload: e.target.value,
              });
            }}
          />
        </div>
        <div className="input-group input-group-sm mx-1 ">
          <span
            className="input-group-text"
            style={{
              backgroundColor: "#11999e",
              height: "100%",
              color: "#fff",
              fontSize: 13,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          >
            Month
          </span>
          <input
            className="form-control inputStyle"
            value={resumeContext.data.Ebirthday.month}
            onChange={(e) => {
              resumeContext.dispatch({
                type: "Ebirthday-m",
                payload: e.target.value,
              });
            }}
          />
        </div>
        <div className="input-group input-group-sm mx-1">
          <span
            className="input-group-text"
            style={{
              backgroundColor: "#11999e",
              height: "100%",
              color: "#fff",
              fontSize: 13,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          >
            Year
          </span>
          <input
            className="form-control inputStyle"
            value={resumeContext.data.Ebirthday.year}
            onChange={(e) => {
              resumeContext.dispatch({
                type: "Ebirthday-y",
                payload: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </>
  );
};
export default BirthDayEnglish;