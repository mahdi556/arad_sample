import { useContext, useEffect, useState } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import FieldError from "../../Common/FieldError";

const Description = () => {
  const resumeContext = useContext(ResumeContext);
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    if (resumeContext.data.stepClick) {
      if (
        resumeContext.data.description !== "" 
       ) {
        resumeContext.dispatch({ type: "fieldCheck", payload: true });
      } else {
        setDisplay("");
        resumeContext.dispatch({ type: "stepClick", payload: false });
      }
    }
  }, [resumeContext.data.stepClick]);

  return (
    <>
      <div className="row pt-4 pb-4 mt-4 sec2">
        <div className="col-12 mb-3 mt-5">
          <label
            className="fs-6  "
            style={{
              marginBottom: "0.5rem",
              fontWeight: "normal",
            }}
          >
            توضیحات آگهی
          </label>
          <textarea
            className={
              resumeContext.data.title == ""
                ? "col-12 mb-3 ps-2 inputStyle"
                : "col-12 mb-3 ps-2 inputFilled"
            }
            type="text"
            value={resumeContext.data.description}
            style={{
              height: 150,
            }}
            onChange={(e) => {
              resumeContext.dispatch({
                type: "description",
                payload: e.target.value,
              });
            }}
          />
          <FieldError data={resumeContext.data.description} display={display} />
        </div>
      </div>
    </>
  );
};

export default Description;
