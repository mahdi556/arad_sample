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
            handleStep(2, "30%");
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
      <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
        <h5 className="col-6">عنوان شغلی:</h5>
        <h6 className="col-6">{resumeContext.data.name}</h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4" dir="ltr" >
        <h5 className="col-6">name:</h5>
        <h6 className="col-6">{resumeContext.data.Ename}</h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
        <h5 className="col-6">نام سازمان:</h5>
        <h6 className="col-6">{resumeContext.data.lastname}</h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4 "dir="ltr">
        <h5 className="col-6">lastname:</h5>
        <h6 className="col-6">{resumeContext.data.Elastname}</h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">دلیل ترک:</h5>
        <h6 className="col-6">
          {resumeContext.data.birthday.year}/{resumeContext.data.birthday.month}
          /{resumeContext.data.birthday.day}
        </h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4"dir="ltr">
        <h5 className="col-6">birthday:</h5>
        <h6 className="col-6">
          {resumeContext.data.Ebirthday.year}/{resumeContext.data.Ebirthday.month}
          /{resumeContext.data.Ebirthday.day}
        </h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">تاریخ شروع همکاری:</h5>
        <h6 className="col-6">
          {resumeContext.data.birthday.year}/{resumeContext.data.birthday.month}
          /{resumeContext.data.birthday.day}
        </h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">جنسیت:</h5>
        <h6 className="col-6">{resumeContext.data.sex == 1 ? "مرد" : "زن"}</h6>
      </div>
      <div className="d-flex col-6 justify-content-start align-items-center mb-4">
        <h5 className="col-6">تاریخ پایان همکاری:</h5>
        <h6 className="col-6">
          {resumeContext.data.birthday.year}/{resumeContext.data.birthday.month}
          /{resumeContext.data.birthday.day}
        </h6>
      </div>
       
    </>
  );
};

export default VerifyData;
