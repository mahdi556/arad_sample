import { useContext, useEffect } from "react";
import { numberToWords } from "@persian-tools/persian-tools";
import style from "components/Ads/Sec3/FormStyles/form.module.css";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";

const SalaryNeeded = () => {
  const resumeContext = useContext(ResumeContext);
  useEffect(() => {}, [
    resumeContext.data.salary.fa.from,
    resumeContext.data.salary.fa.to,
  ]);
  return (
    <>
      <div className="d-flex flex-column col-12 mb-3   justify-content-between">
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
        <div className=" d-flex col-12 justify-content-between align-items-start">
          <div className="d-flex col-9 justify-content-start align-items-start">
            <h6
              className="pt-2"
              style={{
                fontSize: 14,
              }}
            >
              از
            </h6>
            <div className="d-flex col-6  flex-column ms-2">
              <div className="input-group input-group-sm ">
                <input
                  disabled={resumeContext.data.salaryAgree ? "disabled" : ""}
                  className={
                    resumeContext.data.salary.fa.from == ""
                      ? ` col-8  ${style.inputStyle}`
                      : ` col-8 ps-3 ${style.inputFilled}`
                  }
                  style={{
                    width: "60%",
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
                    color: "#000",
                    fontSize: 13,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    border:
                      resumeContext.data.salary.fa.from === ""
                        ? "none"
                        : "solid #11999e 2px",
                    borderRight:
                      resumeContext.data.salary.fa.from === ""
                        ? "none"
                        : "solid transparent 2px",

                    lineHeight: "1.4rem",
                  }}
                >
                  تومان
                </span>
              </div>
              <div className={` mt-1  ${style.numberToWords}`}>
                {numberToWords(resumeContext.data.salary.fa.from)} تومان
              </div>
            </div>
            <h6
              className="pt-2  "
              style={{
                fontSize: 14,
              }}
            >
              تا
            </h6>
            <div className="d-flex col-6  flex-column ms-2">
              <div className="   input-group input-group-sm   ms-2">
                <input
                  disabled={resumeContext.data.salaryAgree ? "disabled" : ""}
                  className={
                    resumeContext.data.salary.fa.to == ""
                      ? ` col-8 ps-2 ${style.inputStyle}`
                      : ` col-8 ps-3 ${style.inputFilled}`
                  }
                  style={{
                    width: "60%",
                  }}
                  onChange={(e) => {
                    resumeContext.dispatch({
                      type: "salary-fa-to",
                      payload: e.target.validity.valid ? e.target.value : "",
                    });
                  }}
                  value={resumeContext.data.salary.fa.to}
                  pattern="[0-9]*"
                  type="tel"
                />
                <span
                  className="input-group-text"
                  style={{
                    backgroundColor: "#EBEBEB",
                    // height: "100%",
                    color: "#000",
                    fontSize: 13,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,

                    border:
                      resumeContext.data.salary.fa.to === ""
                        ? "none"
                        : "solid #11999e 2px",
                    borderRight:
                      resumeContext.data.salary.fa.to === ""
                        ? "none"
                        : "solid transparent 2px",
                    lineHeight: "1.4rem",
                  }}
                >
                  تومان
                </span>
              </div>
              <div className={` mt-1 ${style.numberToWords}`}>
                {numberToWords(resumeContext.data.salary.fa.to)} تومان
              </div>
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
