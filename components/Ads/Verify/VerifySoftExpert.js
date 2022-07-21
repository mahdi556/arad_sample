import { useContext } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import BreakLine from "components/Ads/Tools/BreakLine";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
import SectionEditTitle from "components/Ads/Layouts/SectionEditTitle";
import style from "components/Ads/Sec3/FormStyles/form.module.css";
const VerifySoftExpert = ({step}) => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      {/* <BreakLine /> */}
      <SectionLayout marginTop={false} paddingTop={false}>
        <SectionEditTitle title="مهارت ها" step={step} />

        {resumeContext.data.softExpert.length == 0 ? (
          <div className="text-center">
            مهارت نرم افزاری ثبت نشده است
            <BreakLine />
          </div>
        ) : (
          <>
            <div className="col-12 mt-3">
              {resumeContext.data.softExpert.map((item, key) => (
                <>
                  <div className="d-flex col-12 justify-content-between my-4">
                    <div className="d-flex col-6  justify-content-start align-items-center me-5   ">
                      <h5 className={`col-6 ${style.txt5}`}>نام نرم افزار :</h5>
                      <h6 className={`col-6 ${style.txt6}`}>{item.text}</h6>
                    </div>
                    <div className="d-flex col-6 justify-content-end align-items-center    ">
                      <h5 className={`col-6 ${style.txt5}`}>سطح مهارت:</h5>
                      <h6 className={`col-6 ${style.txt6}`}>
                        {item.level.name}
                      </h6>
                    </div>
                  </div>
                  <BreakLine />
                </>
              ))}
            </div>
          </>
        )}
      </SectionLayout>
    </>
  );
};

export default VerifySoftExpert;
