import { useContext } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import BreakLine from "components/Ads/Tools/BreakLine";
import style from "components/Ads/Sec3/FormStyles/form.module.css";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
import SectionEditTitle from "components/Ads/Layouts/SectionEditTitle";
const VerifyExperience = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <BreakLine />

      <SectionLayout marginTop={false}>
        <SectionEditTitle title="سابقه کاری" step={3} />

        {resumeContext.data.experiences.length == 0 ? (
          <div className="text-center my-3">
            <h6 className="mb-4">سابقه کاری ثبت نشده است</h6>
            <BreakLine />
          </div>
        ) : (
          resumeContext.data.experiences.map((item, key) => (
            <>
              <div className="d-flex col-6 justify-content-start align-items-center my-4 ">
                <h5 className={`col-6 ${style.txt5}`}>عنوان شغلی:</h5>
                <h6 className={`col-6 ${style.txt6}`}>{item.title}</h6>
              </div>

              <div className="d-flex col-6 justify-content-start align-items-center mb-4 ">
                <h5 className={`col-6 ${style.txt5}`}>نام سازمان:</h5>
                <h6 className={`col-6 ${style.txt6}`}>{item.name}</h6>
              </div>

              <div className="d-flex col-6 justify-content-start align-items-center mb-4">
                <h5 className={`col-6 ${style.txt5}`}>دلیل ترک:</h5>
                <h6 className={`col-6 ${style.txt6}`}>{item.reason}</h6>
              </div>

              <div className="d-flex col-6 justify-content-start align-items-center mb-4">
                <h5 className={`col-6 ${style.txt5}`}>تاریخ شروع همکاری:</h5>
                <h6 className={`col-6 ${style.txt6}`}>
                  {item.start.y}/{item.start.m}
                </h6>
              </div>

              <div className="d-flex col-6 flex-wrap justify-content-start align-items-center mb-4">
                <h5 className={`col-6 ${style.txt5}`}>تاریخ پایان همکاری:</h5>
                <h6 className={`col-6 ${style.txt6}`}>
                  {item.finish.y}/{item.finish.m}
                </h6>
                {item.active && <h6 className="mt-4">مشغول به کار هستم</h6>}
              </div>

              <BreakLine />
            </>
          ))
        )}
      </SectionLayout>
    </>
  );
};

export default VerifyExperience;
