import SectionEditTitle from "components/Ads/Layouts/SectionEditTitle";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
import { useContext, useEffect, useState } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
const VerifyFirstForm = () => {
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
            className="d-flex col-6 flex-column   pe-2"
            style={{
              fontWeight: 600,
            }}
          >
            <SectionEditTitle title="معرفی من" stap={1} />

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

          <div className="  col-6 ps-3 pt-2 fw-bold ">
            شبکه های اجتماعی من
            <div className="row col-12 offset-1 mt-4 mb-2">
              <div className="d-flex mb-3">
                {/* <div > */}
                <img src="/assets/images/twitterx.png" width={30} height={30} />
                {/* </div> */}

                <h6 className="ms-4 text-center w-100">
                  {resumeContext.data.socials.twitter}
                </h6>
              </div>

              <div className="d-flex mb-3">
                <img src="/assets/images/webx.png" width={30} height={30} />
                <h6 className="ms-4  text-center w-100" dir="ltr">
                  {resumeContext.data.socials.dribble}
                </h6>
              </div>

              <div className="d-flex mb-3">
                <img src="/assets/images/instax.png" width={30} height={30} />
                <h6 className="ms-4 text-center w-100">
                  {resumeContext.data.socials.instagram}
                </h6>
              </div>

              <div className="d-flex mb-3">
                <img src="/assets/images/youtubex.png" width={30} height={30} />
                <h6 className="ms-4 text-center w-100">
                  {resumeContext.data.socials.youtube}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default VerifyFirstForm;
