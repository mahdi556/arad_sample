import Image from "next/image";
import { useContext } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
const VerifyData = ({ handleStep }) => {
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
        اطلاعات شخصی
        <div
          className="ms-2 pt-2"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            resumeContext.dispatch({ type: "step", payload: 2 });
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
          <h5 className="col-6 fs-6 fw-light">دسته بندی شغلی:</h5>
          <h6 className="col-6  fs-6  ">{resumeContext.data.jobCategory.fa}</h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6 fw-light">تاریخ تولد:</h5>
          <h6 className="col-6  fs-6  ">
            {resumeContext.data.birthday.year}/
            {resumeContext.data.birthday.month}/
            {resumeContext.data.birthday.day}
          </h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6 fw-light">جنسیت:</h5>
          <h6 className="col-6  fs-6  ">
            {resumeContext.data.sex == 1 ? "مرد" : "زن"}
          </h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6 fw-light">وضعیت تاهل:</h5>
          <h6 className="col-6  fs-6  ">
            {resumeContext.data.married == 1 ? "مجرد" : "متاهل"}
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
          <h6 className="col-6 fs-6  ">{resumeContext.data.province.name}</h6>
        </div>{" "}
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6 fw-light">شهر:</h5>
          <h6 className="col-6 fs-6  ">{resumeContext.data.city.name}</h6>
        </div>
        <div className="d-flex col-6 justify-content-start align-items-center mb-4">
          <h5 className="col-6 fs-6 fw-light ">حقوق درخواستی :</h5>
          <h6 className="col-6 fs-6  ">
            {" "}
            از {resumeContext.data.salary.fa.from} تا{" "}
            {resumeContext.data.salary.fa.to}
          </h6>
        </div>
      </div>
    </>
  );
};

export default VerifyData;
