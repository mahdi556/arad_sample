  
import { useContext } from "react";
import ResumeContext from "../../../context/employeeContext/CreateResume/ResumeContext";
  const VerifyPersonalData = ({ handleStep }) => {
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
          شرایط شغلی ما
          <div
            className="ms-2 pt-2"
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              handleStep(2, "55%");
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
          <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
            <h5 className="col-6 fs-6 fw-light">عنوان:</h5>
            <h6 className="col-6 fs-6  ">{resumeContext.data.title}</h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
            <h5 className="col-6 fs-6 fw-light">همکاری به صورت:</h5>
            <h6 className="col-6  fs-6  ">
              {resumeContext.data.corporateType == 1
                ? "فقط حضوری"
                : resumeContext.data.corporateType == 2
                ? "فقط دورکاری"
                : "هردو"}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light">نوع همکاری:</h5>
            <h6 className="col-6  fs-6  ">
              {resumeContext.data.corporateTime.fa}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light">دسته بندی شغلی:</h5>
            <h6 className="col-6  fs-6  ">
              {resumeContext.data.jobCategory.fa}
            </h6>
          </div>
          
          
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6  fs-6 fw-light">تقاضای بیمه:</h5>
            <h6 className="col-6 fs-6  ">
              {resumeContext.data.insurrance == 1 ? "دارم" : "ندارم"}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light">استان:</h5>
            <h6 className="col-6 fs-6  ">
              {resumeContext.data.province.fa}
            </h6>
          </div>{" "}
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light">شهر:</h5>
            <h6 className="col-6 fs-6  ">{resumeContext.data.city.fa}</h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light ">حقوق درخواستی :</h5>
            <h6 className="col-6 fs-6  ">
              {" "}
              از {resumeContext.data.salary.fa.from} تا{" "}
              {resumeContext.data.salary.fa.to}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light">نحوه پرداخت حقوق:</h5>
            <h6 className="col-6  fs-6  ">
              {resumeContext.data.salaryType.fa}
            </h6>
          </div>          

          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className="col-6 fs-6 fw-light ">ساعات کاری :</h5>
            <h6 className="col-6 fs-6  ">
              {" "}
              از {resumeContext.data.workHour.fa.from} تا{" "}
              {resumeContext.data.workHour.fa.to}
            </h6>
          </div>          

        </div>
      </div>
    </>
  );
};

export default VerifyPersonalData;
