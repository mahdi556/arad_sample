import Image from "next/image";
import { useContext } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
import BreakLine from "./BreakLine";
const VerifySoftExpert = () => {
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
        مهارت نرم افزاری
        <div
          className="ms-2 pt-2"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            resumeContext.dispatch({ type: "step", payload: 6 });
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
      {resumeContext.data.softExpert.length == 0 ? (
        <div className="text-center">
          مهارت نرم افزاری ثبت نشده است
          <BreakLine />
        </div>
      ) : (
        <>
          <div className="d-flex col-12">
            <div className="col-6">
              {resumeContext.data.softExpert.map((item, key) => (
                <>
                  <div className="d-flex px-4">
                    <div className="d-flex   justify-content-start align-items-center me-5 mb-3 ">
                      <h5 className=" me-2 fs-6 fw-light">نام نرم افزار :</h5>
                      <h6 className=" ">{item.text}</h6>
                    </div>
                    <div className="d-flex  justify-content-start align-items-center mb-3  ">
                      <h5 className=" me-2  fs-6 fw-light">سطح مهارت:</h5>
                      <h6 className=" ">{item.level.name}</h6>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="col-6">
              {resumeContext.data.softExpertEn.map((item, key) => (
                <>
                  <div className="d-flex px-4" dir="ltr">
                    <div
                      className="d-flex ms-5  justify-content-start align-items-center mb-3 "
                      dir="ltr"
                    >
                      <h5 className=" ms-2 fs-6 ff-roboto fw-light">
                        Software name :
                      </h5>
                      <h6 className=" ff-roboto">{item.text}</h6>
                    </div>
                    <div
                      className="d-flex  me-3   align-items-center  mb-3 "
                      dir="ltr"
                    >
                      <h5 className=" ms-3 fs-6 ff-roboto fw-light">Leval:</h5>
                      <h6 className="ff-roboto ">{item.level.name}</h6>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          <BreakLine />
        </>
      )}
    </>
  );
};

export default VerifySoftExpert;
