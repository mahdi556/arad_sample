import SectionEditTitle from "components/Ads/Layouts/SectionEditTitle";
import { useContext } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import style from "components/Ads/Sec3/FormStyles/form.module.css";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
import AuthContext from "context/Auth/AuthContext";

const VerifyPersonalData = () => {
  const { user } = useContext(AuthContext);
  const resumeContext = useContext(ResumeContext);
  console.log(resumeContext.data);
  return (
    <>
      <SectionLayout>
        <SectionEditTitle title="اطلاعات شخصی" step={2} />
        <div className="d-flex col-12 flex-wrap mt-4">
          <div className="d-flex col-12 justify-content-start align-items-center mb-4 ">
            <h5 className={`col-3 ${style.txt5}`}>عنوان:</h5>
            <h6 className={`col-3 ${style.txt6}`}>
              {resumeContext.data.title}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
            <h5 className={`col-6 ${style.txt5}`}>نام:</h5>
            <h6 className={`col-6 ${style.txt6}`}>{user.first_name}</h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
            <h5 className={`col-6 ${style.txt5}`}>نام خانوادگی:</h5>
            <h6 className={`col-6 ${style.txt6}`}>{user.last_name}</h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>تاریخ تولد:</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {resumeContext.data.birthday.year}/
              {resumeContext.data.birthday.month}/
              {resumeContext.data.birthday.day}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>جنسیت:</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {resumeContext.data.sex.id == 1 ? "مرد" : "زن"}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>وضعیت تاهل:</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {resumeContext.data.married.id == 1 ? "مجرد" : "متاهل"}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>دسته شغلی:</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {resumeContext.data.jobCategory.fa}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>تقاضای بیمه:</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {resumeContext.data.insurrance == 1 ? "دارم" : "ندارم"}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>استان:</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {resumeContext.data.province.fa}
            </h6>
          </div>{" "}
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>منطقه:</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {resumeContext.data.city.fa}
            </h6>
          </div>
          <div className="d-flex col-6 justify-content-start align-items-center mb-4">
            <h5 className={`col-6 ${style.txt5}`}>حقوق درخواستی :</h5>
            <h6 className={`col-6 ${style.txt6}`}>
              {" "}
              از {resumeContext.data.salary.fa.from} تا{" "}
              {resumeContext.data.salary.fa.to}
            </h6>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default VerifyPersonalData;
