import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";
const VerifyFirstForm = ({ handleStep }) => {
  const [imageUrl, setImageUrl] = useState("");
  const resumeContext = useContext(ResumeContext);
  useEffect(() => {
    if (resumeContext.data.userImageFile.name) {
      setImageUrl(URL.createObjectURL(resumeContext.data.userImageFile));
    }
  }, []);

  return (
    <>
      <div
        className="row pt-4 pb-4"
        style={{
          background: "#fff",
          borderRadius: 15,
          paddingRight: "2rem",
          paddingLeft: "2rem",
        }}
      >
        <div className="d-flex align-items-start pt-1">
          <div
            className="d-flex col-6 flex-column   pe-2"
            style={{
              fontWeight: 600,
            }}
          >
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
              معرفی من
              <div
                className="ms-2 pt-2"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleStep(1, "30%");
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
                <Image
                  src="/assets/images/twitterx.png"
                  width={30}
                  height={30}
                />
                {/* </div> */}

                <h6 className="ms-4 text-center w-100">
                  {resumeContext.data.socials.twitter}
                </h6>
              </div>

              <div className="d-flex mb-3">
                <Image src="/assets/images/webx.png" width={30} height={30} />
                <h6 className="ms-4  text-center w-100" dir="ltr">
                  {resumeContext.data.socials.dribble}
                </h6>
              </div>

              <div className="d-flex mb-3">
                <Image src="/assets/images/instax.png" width={30} height={30} />
                <h6 className="ms-4 text-center w-100">
                  {resumeContext.data.socials.instagram}
                </h6>
              </div>

              <div className="d-flex mb-3">
                <Image
                  src="/assets/images/youtubex.png"
                  width={30}
                  height={30}
                />
                <h6 className="ms-4 text-center w-100">
                  {resumeContext.data.socials.youtube}
                </h6>
              </div>

              <div
                className="d-flex align-items-center justify-content-start p-0"
                style={{
                  color: "#11999e",
                  fontWeight: 300,
                }}
              >
                <svg
                  className=" AddTag"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="#11999e"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 19V1"
                    stroke="#11999e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 10H19.5"
                    stroke="#11999e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.5 10H9.99"
                    stroke="#11999e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 19V1"
                    stroke="#11999e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                اضافه کردن
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyFirstForm;