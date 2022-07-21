  
import { useContext } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import BreakLine from "./BreakLine";
const VerifyExperience = () => {
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
        سابقه کاری
        <div
          className="ms-2 pt-2"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            resumeContext.dispatch({ type: "step", payload: 3 });
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
      {resumeContext.data.experiences.length == 0 ? (
        <div className="text-center">
                 سابقه کاری ثبت نشده است
                 <BreakLine />
        </div>
      ) : (
      resumeContext.data.experiences.map((item, key) => (
        <>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
            <h5 className="col-6 fw-light fs-6">عنوان شغلی:</h5>
            <h6 className="col-6">{item.title}</h6>
          </div>
         
          <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
            <h5 className="col-6 fw-light fs-6">نام سازمان:</h5>
            <h6 className="col-6">{item.name}</h6>
          </div>
         
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fw-light fs-6">دلیل ترک:</h5>
            <h6 className="col-6">{item.reason}</h6>
          </div>
          
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fw-light fs-6">تاریخ شروع همکاری:</h5>
            <h6 className="col-6">
              {item.start.y}/{item.start.m}
            </h6>
          </div>
         
          <div className="d-flex col-6 flex-wrap justify-content-start align-items-center mb-4">
            <h5 className="col-6 fw-light fs-6">تاریخ پایان همکاری:</h5>
            <h6 className="col-6">
              {item.finish.y}/{item.finish.m}
            </h6>
            {item.active && <h6 className="mt-4">مشغول به کار هستم</h6>}
          </div>
          
          <BreakLine />
        </>
      ))
      )}
      
    </>
  );
};

export default VerifyExperience;
