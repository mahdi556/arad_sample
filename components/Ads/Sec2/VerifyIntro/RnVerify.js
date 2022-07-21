import { useContext, useEffect, useState } from "react";
import SectionEditTitle from "components/Ads/Layouts/SectionEditTitle";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
const RnVerify = () => {
  const [imageUrl, setImageUrl] = useState("");
  const resumeContext = useContext(ResumeContext);
  useEffect(() => {
    if (resumeContext.data.userImageFile.name) {
      setImageUrl(URL.createObjectURL(resumeContext.data.userImageFile));
    }
  }, []);

  return (
    <>
      <SectionLayout>
        <div className="d-flex align-items-start pt-1">
          <div
            className="d-flex col-12 flex-column   pe-2"
            style={{
              fontWeight: 600,
            }}
          >
            <SectionEditTitle title="معرفی کارفرما" step={1} />

            <div className="d-flex col-12 justify-content-evenly mt-3 align-items-center">
              <div className="col- 4 rShadow">
                <img
                  className="rShadow"
                  src={imageUrl}
                  width={120}
                  height={120}
                  style={{
                    borderRadius: 12,
                  }}
                />
              </div>
              <div className="d-flex col-8 flex-column">
                <div className="d-flex ms-5  col-6 justify-content-start align-items-center mb-4 ">
                  <h5 className="col-6 fs-6 fw-light">نام شرکت:</h5>
                  <h6 className="col-6 fs-6  ">{resumeContext.data.name}</h6>
                </div>
                <div className="d-flex ms-5  col-6 justify-content-start align-items-center mb-4 ">
                  <h5 className="col-6 fs-6 fw-light">شناسه ملی:</h5>
                  <h6 className="col-6 fs-6  ">
                    {resumeContext.data.companyId}
                  </h6>
                </div>
                <div
                  className="col-5 ms-5 py-2"
                  style={{
                    marginTop: 5,
                    backgroundColor: "#11999E",
                    padding: "0.2rem",
                    borderRadius: 10,
                    color: "#fff",
                    fontSize: "0.8rem",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  تکمیل پروفایل سازمانی
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default RnVerify;
