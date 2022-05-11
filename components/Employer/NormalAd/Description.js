import { useContext } from "react";
import ResumeContext from "../../../context/employeeContext/CreateResume/ResumeContext";
 
const Description = () => {
  const resumeContext = useContext(ResumeContext);
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
        </div>
      </div>
    </>
  );
};

export default Description;
