  
import { useContext } from "react";
import ResumeContext from "../../../context/employeeContext/CreateResume/ResumeContext";
const VerifyDescription = ({ handleStep }) => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <div className="row pt-4 pb-4 mt-4 sec2">
        <div
          className="col-12 "
          style={{
            display: "flex",
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
            marginLeft: "auto",
            alignItems: "center",
          }}
        >
          توضیحات آگهی
          <div
            className="ms-2 pt-2"
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              handleStep(4, "78%");
            }}
          >
            <img
              src="/assets/images/editForm.png"
              width={20}
              height={20}
              layout="fixed"
            />
          </div>
        </div>
        <div className="d-flex col-12 flex-wrap px-4">
          <div className="d-flex flex-column col-12 justify-content-start align-items-start mb-4">
            <h5 className="col-4 fs-6 fw-light">توضیحات:</h5>
            <h6 className="col-7  fs-6  ">
              {resumeContext.data.description}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyDescription;
