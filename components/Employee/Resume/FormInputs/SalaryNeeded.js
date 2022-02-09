import { useContext } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";

const SalaryNeeded = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <div className="d-flex flex-column col-12 pt-4 justify-content-between">
        <div className="col-12">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
              fontWeight:'normal',
              fontStyle:'normal'
             }}
          >
            میزان حقوق درخواستی
          </label>
        </div>
        <div className="d-flex col-12 justify-content-center align-items-center">
          از
          <div className="   input-group input-group-sm mx-2">
            <input className="form-control inputStyle2" />
            <span
              className="input-group-text"
              style={{
                backgroundColor: "#EBEBEB",
                height: "100%",
                color: "#000",
                fontSize: 13,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                border: "none",
                lineHeight: "1.5rem",
              }}
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "salary-fa-from",
                  payload: e.target.value,
                })
              }
              type="text"
            >
              تومان
            </span>
          </div>
          تا
          <div className="   input-group input-group-sm  ms-2">
            <input className="form-control inputStyle2  " />
            <span
              className="input-group-text"
              style={{
                backgroundColor: "#EBEBEB",
                height: "100%",
                color: "#000",
                fontSize: 13,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                border: "none",
                lineHeight: "1.5rem",
              }}
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "salary-fa-to",
                  payload: e.target.value,
                })
              }
            >
              تومان
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default SalaryNeeded;
