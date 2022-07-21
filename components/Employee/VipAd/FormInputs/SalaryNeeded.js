import { useContext, useState } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import style from "./FormStyles/form.module.css";
import { numberToWords } from "@persian-tools/persian-tools";

const SalaryNeeded = () => {
  const [disabled, setDisabled] = useState("");
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <div className="d-flex flex-column col-12 pt-4  ">
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
        <div className="d-flex col-12 justify-content-start align-items-center">
          از
          <div className="   input-group input-group-sm ms-2 position-relative ">
            <input
              disabled={resumeContext.data.salaryAgree ? "disabled" : ""}
              className={
                resumeContext.data.salary.fa.from == ""
                  ? ` col-8  ${style.inputStyle}`
                  : ` col-8 ps-3 ${style.inputFilled}`
              }
              style={{
                width: 250,
              }}
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "salary-fa-from",
                  payload: e.target.validity.valid ? e.target.value : "",
                })
              }
              type="tel"
              pattern="[0-9]*"
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
                borderRightWidth: "none",
                border:
                  resumeContext.data.salary.fa.from === ""
                    ? "none"
                    : "solid #11999e 2px",
                lineHeight: "1.5rem",
              }}
            >
              تومان
            </span>
            <div className={` mt-1 ${style.numberToWords}`}>
              {numberToWords(resumeContext.data.salary.fa.from)} تومان
            </div>
          </div>
          <h5>تا</h5>
          <div className="   input-group input-group-sm position-relative  ms-2">
            <input
              disabled={resumeContext.data.salaryAgree ? "disabled" : ""}
              className={
                resumeContext.data.salary.fa.to == ""
                  ? ` col-8 ps-2 ${style.inputStyle}`
                  : ` col-8 ps-3 ${style.inputFilled}`
              }
              style={{
                width: 250,
              }}
              onChange={(e) => {
                resumeContext.dispatch({
                  type: "salary-fa-to",
                  payload: e.target.validity.valid ? e.target.value : "",
                });
              }}
              value={resumeContext.data.salary.fa.to}
              pattern="[0-9]*"
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
                borderRightWidth: "none",
                border:
                  resumeContext.data.salary.fa.to === ""
                    ? "none"
                    : "solid #11999e 2px",
                lineHeight: "1.5rem",
              }}
            >
              تومان
            </span>
            <div className={` mt-1 ${style.numberToWords}`}>
              {numberToWords(resumeContext.data.salary.fa.to)} تومان
            </div>
          </div>
          <div
            className={` d-flex align-items-center ${style.sec1}`}
            style={{
              backgroundColor: resumeContext.data.salaryAgree
                ? " rgba(17, 153, 158, 0.3)"
                : " #fff",
            }}
            onClick={() => {
              resumeContext.dispatch({
                type: "salaryAgree",
                payload: !resumeContext.data.salaryAgree,
              });
              resumeContext.dispatch({
                type: "salary-fa-from",
                payload: "",
              });
              resumeContext.dispatch({
                type: "salary-fa-to",
                payload: "",
              });
            }}
          >
            <h4 className={` ${style.txt4} mt-1`}>توافقی</h4>
            <img className="ms-2" src="/assets/images/salary.svg" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SalaryNeeded;
