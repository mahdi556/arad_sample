import { useContext, useState } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
const BirthDayEnglish = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <div className="col-12">
        <label className="fs-6  "
          style={{
            marginBottom: "0.5rem",
            fontFamily:'roboto'

            
          }}
        >
          Date Of Birth
        </label>
      </div>
      <div className="col-12  d-flex">
        <div className="input-group input-group-sm ms-2">
          <span
            className="input-group-text"
            style={{
              backgroundColor: "#11999e",
              height: "100%",
              color: "#fff",
              fontSize: 13,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              fontFamily:'roboto'
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
        <div className="input-group input-group-sm mx-3 ">
          <span
            className="input-group-text"
            style={{
              backgroundColor: "#11999e",
              height: "100%",
              color: "#fff",
              fontSize: 13,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              fontFamily:'roboto'
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
        <div className="input-group input-group-sm me-2">
          <span
            className="input-group-text"
            style={{
              backgroundColor: "#11999e",
              height: "100%",
              color: "#fff",
              fontSize: 12,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              fontFamily:'roboto'
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
