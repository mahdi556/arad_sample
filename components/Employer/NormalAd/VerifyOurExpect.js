  
import { useContext } from "react";
import ResumeContext from "../../../context/employeeContext/CreateResume/ResumeContext";
 const VerifyOurExpect = ({ handleStep }) => {
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
          انتظار ما از شما
          <div
            className="ms-2 pt-2"
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              handleStep(3, "75%");
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
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light">جنسیت:</h5>
            <h6 className="col-6  fs-6  ">
              {resumeContext.data.sex.fa }
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light ">محدوده سنی :</h5>
            <h6 className="col-6 fs-6  ">
              {" "}
              از {resumeContext.data.ageRange.fa.from} تا{" "}
              {resumeContext.data.ageRange.fa.to}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOurExpect;
