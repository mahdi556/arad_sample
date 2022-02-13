import Image from "next/image";
import { useContext } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
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
          <Image
            src="/assets/images/editForm.png"
            width={20}
            height={20}
            layout="fixed"
          />
        </div>
      </div>
      <div className="d-flex col-12">
        <div className="col-6">
          {resumeContext.data.sampleEx.map((item, key) => (
            <>
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
            </>
          ))}
        </div>
      </div>

      <BreakLine />
    </>
  );
};

export default VerifySampleEx;
