import { useContext } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";

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
              fontFamily:'roboto'
            }}
          >
            Amount of salary requested
          </label>
        </div>
        <div className="d-flex col-12 justify-content-center align-items-center"
        style={{
          fontFamily:'roboto'
        }}
        >
          From
          <div className="   input-group input-group-sm mx-2" dir="rtl">
          
            <span
              className="input-group-text order-1"
              style={{
                backgroundColor: "#EBEBEB",
                height: "100%",
                color: "#000",
                fontSize: 13,
                fontFamily:'roboto',
                border: "none",
                lineHeight:'1.5rem'
              }}
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "salary-fa-from",
                  payload: e.target.value,
                })
              }
              type="text"
            >
              Tooman
            </span>
            <input className="form-control inputStyle2 order-2" />
          </div>
          to
          <div className="   input-group input-group-sm  me-2" dir="rtl">
          
            <span
              className="input-group-text order-1"
              style={{
                backgroundColor: "#EBEBEB",
                height: "100%",
                color: "#000",
                fontSize: 13,
                fontFamily:'roboto',
                border: "none",
                lineHeight:'1.5rem'
              }}
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "salary-fa-to",
                  payload: e.target.value,
                })
              }
            >
              Tooman
            </span>
            <input className="form-control inputStyle2 order-2 " />
          </div>
        </div>
       </div>
    </>
  );
};
export default SalaryNeededEn;
