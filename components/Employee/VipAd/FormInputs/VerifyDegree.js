  
import { useContext } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import BreakLine from "./BreakLine";
const VerifyDegree = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <div
        className="col-12"
        style={{
          display: "flex",
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginBottom: "1rem",
          marginLeft: "auto",
          alignItems: "center",
        }}
      >
        مدرک تحصیلی
        <div
          className="ms-2 pt-2"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            resumeContext.dispatch({ type: "step", payload: 4 });
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
      {resumeContext.data.degree.length == 0 ? (
        <div className="text-center">
          مدرک ثبت نشده است
          <BreakLine />
        </div>
      ) : (
        resumeContext.data.degree.map((item, key) => (
          <>
            <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
              <h5 className="col-6 fs-6 fw-light">آخرین مدرک تحصیلی:</h5>
              <h6 className="col-6">{item.title}</h6>
            </div>

            <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
              <h5 className="col-6 fs-6 fw-light">رشته تحصیلی:</h5>
              <h6 className="col-6">{item.degree}</h6>
            </div>

            <div className="d-flex col-6 justify-content-start align-items-center mb-4">
              <h5 className="col-6 fs-6 fw-light">سال فارغ التحصیلی:</h5>
              <h6 className="col-6">
                {item.date.y}/{item.date.m}/{item.date.d}
              </h6>
            </div>

            <BreakLine />
          </>
        ))
      )}
    </>
  );
};

export default VerifyDegree;
