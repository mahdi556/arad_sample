import { useContext } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";

const SalaryNeededEn = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <div className="d-flex flex-column col-12 pt-4 justify-content-between ">
        <div className="col-12">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
              fontFamily: "roboto",
            }}
          >
            Amount of salary requested
          </label>
        </div>
        <div
          className="d-flex col-12 justify-content-center align-items-center"
          style={{
            fontFamily: "roboto",
          }}
        >
          From
          <div className="   input-group input-group-sm mx-2" dir="rtl">
           
            <input
              className={
                resumeContext.data.birthday.year == ""
                  ? "col-7 inputStyle"
                  : "col-7 inputFilled"
              }
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "salary-en-from",
                  payload: e.target.value,
                })
              }
              value={resumeContext.data.salary.en.from}
              type="text"
            />
             <span
              className="input-group-text order-1 col-5"
              style={{
                backgroundColor: "#EBEBEB",
                height: "100%",
                color: "#000",
                fontSize: 13,
                fontFamily: "roboto",
                border: "none",
                lineHeight: "1.5rem",
              }}
            >
              Tooman
            </span>
          </div>
          to
          <div className="   input-group input-group-sm  me-2" dir="rtl">
            
            <input
              className={
                resumeContext.data.birthday.year == ""
                  ? "col-7 inputStyle"
                  : "col-7 inputFilled"
              }
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "salary-en-to",
                  payload: e.target.value,
                })
              }
              value={resumeContext.data.salary.en.to}
            />
            <span
              className="input-group-text col-5 order-1"
              style={{
                backgroundColor: "#EBEBEB",
                height: "100%",
                color: "#000",
                fontSize: 13,
                fontFamily: "roboto",
                border: "none",
                lineHeight: "1.5rem",
              }}
             
            >
              Tooman
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default SalaryNeededEn;
