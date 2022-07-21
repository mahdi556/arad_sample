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
              fontWeight: "normal",
              fontStyle: "normal",
            }}
          >
            میزان حقوق درخواستی
          </label>
        </div>
        <div className="d-flex col-12 justify-content-center align-items-center">
          از
          <div className="   input-group input-group-sm mx-2">
            <input
              className={
                resumeContext.data.birthday.year == ""
                  ? "col-8 inputStyle"
                  : "col-8 inputFilled"
              }
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "salary-fa-from",
                  payload: e.target.value,
                })
              }
              type="text"
              value={resumeContext.data.salary.fa.from}
            />
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
            >
              تومان
            </span>
          </div>
          تا
          <div className="   input-group input-group-sm  ms-2">
            <input
              className={
                resumeContext.data.birthday.year == ""
                  ? "col-8 inputStyle"
                  : "col-8 inputFilled"
              }
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "salary-fa-to",
                  payload: e.target.value,
                })
              }
              value={resumeContext.data.salary.fa.to}

            />
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
