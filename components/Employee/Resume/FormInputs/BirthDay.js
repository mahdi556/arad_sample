import { useContext, useState } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
const BirthDay = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <div className="col-12">
        <label className="fs-6 "
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
          <input className="form-control inputStyle" 
           value={resumeContext.data.birthday.day}
           onChange={(e) => {
            resumeContext.dispatch({
               type: "birthday-d",
               payload: e.target.value,
             });
           }}
          />
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
            روز
          </span>
        </div>
        <div className="input-group input-group-sm mx-3 ">
          <input className="form-control inputStyle"
          value={resumeContext.data.birthday.month}
          onChange={(e) => {
            resumeContext.dispatch({
              type: "birthday-m",
              payload: e.target.value,
            });
          }}
          />
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
            ماه
          </span>
        </div>
        <div className="input-group input-group-sm ms-2">
          <input className="form-control inputStyle" 
          
          value={resumeContext.data.birthday.year}
          onChange={(e) => {
            resumeContext.dispatch({
              type: "birthday-y",
              payload: e.target.value,
            });
          }}
          />
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
            سال
          </span>
        </div>
      </div>

    </>
  );
};
export default BirthDay;
