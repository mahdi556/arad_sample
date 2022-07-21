import { useContext } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import style from "components/Ads/Sec3/FormStyles/form.module.css";

const AgeRange = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <div className="d-flex  flex-column col-12 pt-4 justify-content-between">
        <div className="col-12">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
              fontWeight: "normal",
              fontStyle: "normal",
            }}
          >
            محدوده سنی
          </label>
        </div>
        <div className="d-flex col-12 justify-content-center align-items-center">
          از
          <div className="   input-group input-group-sm mx-2">
            <input
              className={
                resumeContext.data.ageRange.fa.from == ""
                ? `col-8 inputStyle ${style.inputStyle}`
                : `col-8 inputFilled ${style.inputFilled}`
            }
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "ageRange-fa-from",
                  payload: e.target.value,
                })
              }
              type="text"
              value={resumeContext.data.ageRange.fa.from}
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
                  resumeContext.data.ageRange.fa.from === ""
                    ? "none"
                    : "solid #11999e 2px",
                borderRight:
                  resumeContext.data.ageRange.fa.from === ""
                    ? "none"
                    : "solid transparent 2px",

                lineHeight: "1.4rem",
              }}
            >
              سال
            </span>
          </div>
          تا
          <div className="   input-group input-group-sm  ms-2">
            <input
              className={
                resumeContext.data.ageRange.fa.to == ""
                ? `col-8 inputStyle ${style.inputStyle}`
                : `col-10 inputFilled ${style.inputFilled}`
            }
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "ageRange-fa-to",
                  payload: e.target.value,
                })
              }
              value={resumeContext.data.ageRange.fa.to}
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
                  resumeContext.data.ageRange.fa.to === ""
                    ? "none"
                    : "solid #11999e 2px",
                borderRight:
                  resumeContext.data.ageRange.fa.to === ""
                    ? "none"
                    : "solid transparent 2px",

                lineHeight: "1.4rem",
              }}
            >
              سال
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default AgeRange;
