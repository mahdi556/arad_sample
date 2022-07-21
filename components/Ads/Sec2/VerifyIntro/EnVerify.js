import { useContext, useEffect, useState } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
import SectionEditTitle from "components/Ads/Layouts/SectionEditTitle";
const VerifyIntroNormal = () => {
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
            <SectionEditTitle title="معرفی من" step={1} />

            <div className="d-flex mt-3 align-items-center">
              <div className="rShadow">
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
              <div className="ms-3 rShadow">
                <video
                  className="rShadow"
                  src={resumeContext.data.userVideo}
                  width={120}
                  height={120}
                  type="video/*"
                  controls
                  style={{
                    borderRadius: 12,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default VerifyIntroNormal;
