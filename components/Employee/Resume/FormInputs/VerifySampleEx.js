  
import { useContext } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import BreakLine from "./BreakLine";
const VerifySampleEx = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <div
        className="col-12 px-4"
        style={{
          display: "flex",
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginBottom: "1rem",
          marginLeft: "auto",
          alignItems: "center",
        }}
      >
        نمونه کار
        <div
          className="ms-2 pt-2"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            resumeContext.dispatch({ type: "step", payload: 7 });
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
      {resumeContext.data.sampleEx.length == 0 ? (
        <div className="text-center">
          نمونه کار ثبت نشده است
           
        </div>
      ) : (
      resumeContext.data.sampleEx.map((item, key) => (
        <>
          <div className="d-flex col-12">
            <div className="col-6 mb-3">
              <div className="  px-4">
                <div className="d-flex   justify-content-start align-items-center me-5 mb-3 ">
                  <h5 className=" me-2 fs-6 fw-light">عنوان :</h5>
                  <h6 className=" ">{item.title}</h6>
                </div>
                <div className="d-flex  justify-content-start align-items-center mb-3  ">
                  <h5 className=" me-2  fs-6 fw-light">توضیحات:</h5>
                  <h6 className=" ">{item.faDiscription}</h6>
                </div>
              </div>
            </div>
            <div className="col-6 mb-3" dir="ltr">
              <div className="  px-4">
                <div className="d-flex   justify-content-start align-items-center   mb-3 ">
                  <h5 className=" ms-2 fs-6 fw-light">Title :</h5>
                  <h6 className=" ">{item.Entitle}</h6>
                </div>
                <div className="d-flex   justify-content-start align-items-center   mb-3 ">
                  <h5 className=" ms-2 fs-6 fw-light">Link :</h5>
                  <h6 className=" ">{item.link}</h6>
                </div>
                <div className="d-flex  justify-content-start align-items-center mb-3  ">
                  <h5 className=" ms-2  fs-6 fw-light">Description:</h5>
                  <h6 className=" ">{item.enDiscription}</h6>
                </div>
              </div>
            </div>
          </div>
        </>
      )))}

      <BreakLine />
    </>
  );
};

export default VerifySampleEx;
