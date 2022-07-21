import { useContext, useEffect, useState } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import FieldError from "../../Common/FieldError";

const Description = () => {
  const [display, setDisplay] = useState("none");

  const resumeContext = useContext(ResumeContext);
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
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
            width: "100%",
            paddingRight: "1rem",
          }}
        >
          توضیحات آگهی
        </div>

        <div className="col-12 mb-2 mt-2">
          {/* <label
            className="fs-6  "
            style={{
              marginBottom: "0.5rem",
              fontWeight: "normal",
            }}
          >
            
          </label> */}
          <textarea
            className={
              resumeContext.data.title == ""
                ? "col-12 mb-3 ps-2 inputStyle"
                : "col-12 mb-3 ps-2 inputFilled"
            }
            type="text"
            rows={5}
            style={{
              height:150
            }}
            value={resumeContext.data.description}
            onChange={(e) => {
              resumeContext.dispatch({
                type: "description",
                payload: e.target.value,
              });
            }}
          />
           <FieldError
              data={resumeContext.data.description}
              display={display}
            />
        </div>
      </div>
    </>
  );
};

export default Description;
