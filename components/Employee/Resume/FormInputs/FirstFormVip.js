import { useContext, useEffect, useState } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
 
const FirstFormVip = () => {
  const [socialInasta, setSocialInsta] = useState("");
  const [socialYoutube, setSocialYoutube] = useState("");
  const [socialWeb, setSocialWeb] = useState("");
  const [socialTwitter, setSocialTwitter] = useState("");
  const [image, setImage] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [videofile, setVideofile] = useState([]);
  const [videoUrl, setVideoUrl] = useState([]);
  const resumeContext = useContext(ResumeContext);
   useEffect(() => {
    if (image.length > 0) {
      const newImageUrl = [];
      newImageUrl.push(URL.createObjectURL(image[0]));
      setImageUrl(newImageUrl);
      resumeContext.dispatch({ type: "userImageFile", payload: image[0] });
      resumeContext.dispatch({ type: "userImage", payload: newImageUrl });
    }

    if (videofile.length > 0) {
      const newVideoUrl = [];
      newVideoUrl.push(URL.createObjectURL(videofile[0]));
      setVideoUrl(newVideoUrl);
      resumeContext.dispatch({ type: "userVideo", payload: newVideoUrl });
    }
     
  }, [image, videofile]);

  return (
    <div
      className="row pt-4 pb-4"
      style={{
        background: "#fff",
        borderRadius: 15,
        paddingRight: "1rem",
        // paddingLeft: "1rem",
      }}
    >
      <div className="d-flex   align-items-start  pt-1">
        <div
          className="d-flex col-6  flex-column   pe-2"
          style={{
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          معرفی من
          {image.length > 0 ? (
            <>
              <div
                className="row"
                style={{
                  backgroundColor: "#EBEBEB",
                  borderRadius: 7,
                  width: "50%",
                  cursor: "pointer",
                }}
              >
                {imageUrl.map((imageSrc) => (
                  <img src={imageSrc} width="5%" />
                ))}
                <label
                  className="d-flex mt-2 justify-content-center align-items-center "
                  htmlFor="changeImage"
                  style={{ cursor: "pointer" }}
                >
                  <input
                    type="file"
                    style={{ display: "none" }}
                    id="changeImage"
                    onChange={(e) => setImage(e.target.files)}
                  />
                  <img
                    className="me-2"
                    src="../../../../assets/images/upload-1.png"
                    width="10%"
                  />
                  تغییر تصویر
                </label>
              </div>
            </>
          ) : (
            <label
              htmlFor="imageInput"
              className="d-flex flex-column shadow1 "
              style={{
                height: 120,
                backgroundColor: "#EBEBEB",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                borderRadius: 7,
                width: "35%",
                marginTop: 25,
                fontWeight: 300,
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              <input
                type="file"
                style={{ display: "none" }}
                id="imageInput"
                onChange={(e) => setImage(e.target.files)}
              />
              <img
                className="me-2 mb-2"
                src="../../../../assets/images/upload-1.png"
                width="20%"
              />

              <h5>آپلود عکس</h5>
            </label>
          )}
          {videofile.length > 0 ? (
            <>
              <div
                className="row"
                style={{
                  backgroundColor: "#EBEBEB",
                  borderRadius: 7,
                  width: "50%",
                  cursor: "pointer",
                }}
              >
                {videoUrl.map((videoSrc) => (
                  <video src={videoSrc} width="50%" type="video/*" controls />
                ))}
                <label
                  className="d-flex mt-2 justify-content-center align-items-center "
                  htmlFor="changeVideo"
                  style={{ cursor: "pointer" }}
                >
                  <input
                    type="file"
                    style={{ display: "none" }}
                    id="changeVideo"
                    onChange={(e) => setVideofile(e.target.files)}
                  />
                  <img
                    className="me-2"
                    src="../../../../assets/images/upload2.png"
                    width="10%"
                  />
                  تغییر ویدیو
                </label>
              </div>
            </>
          ) : (
            <label
              className="d-flex col-6  mt-3 px-1 py-1 "
              htmlFor="VideoUpload"
              style={{
                borderWidth: 2,
                borderStyle: "dotted",
                borderColor: "#11999E",
                justifyContent: "start",
                alignItems: "center",
                fontSize: 12,
                borderRadius: 30,
                width: "35%",
                cursor: "pointer",
              }}
            >
              <input
                type="file"
                id="VideoUpload"
                style={{ display: "none" }}
                onChange={(e) => setVideofile(e.target.files)}
              />
              <img
                className="me-4"
                src="../../../../assets/images/upload2.png"
                width="25%"
              />
              آپلود ویدیو
            </label>
          )}
          <div
            className="row col-12  mt-2"
            style={{
              color: "#11999E",
              fontSize: 14,
              fontWeight: 300,
            }}
          >
            با آپلود ویدیو شانس استخدام شدن خود را چندین برابر کنید.(70% درصد
            کارفرماها تقاضای رزومه ویدیویی دارند)
          </div>
        </div>
        <div className="  col-5 offset-1  pt-2 fw-bold ">
          <h6 className="fw-bold"> شبکه های اجتماعی من</h6>

          <div className="row col-12  mt-4 mb-2">
            <div
              className="d-flex col-12 align-items-start   justify-content-end "
              style={{
                marginBottom: 1,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                }}
              >
                <img src="/assets/images/twitterx.png" width={35} height={30} />
              </div>

              <input
                dir="ltr"
                className="col-10   inputStyle"
                style={
                  socialTwitter == "" ? { fontSize: 11 } : { fontSize: 18 }
                }
                placeholder=" وارد کردن لینک پروفایل توییتر"
                type="text"
                onChange={(e) =>
                  resumeContext.dispatch({
                    type: "social-twitter",
                    payload: e.target.value,
                  })
                }
                value={resumeContext.data.socials.twitter}
              />
            </div>
            <div
              className="d-flex col-12  align-items-start justify-content-end"
              style={{
                marginBottom: 1,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                }}
              >
                <img src="/assets/images/webx.png" width={33} height={30} />
              </div>

              <input
                dir="ltr"
                className="col-10   inputStyle"
                style={socialWeb == "" ? { fontSize: 11 } : { fontSize: 18 }}
                placeholder=" وارد کردن لینک پروفایل دریبل"
                type="text"
                onChange={(e) =>
                  resumeContext.dispatch({
                    type: "social-dribble",
                    payload: e.target.value,
                  })
                }
                value={resumeContext.data.socials.dribble}
              />
            </div>
            <div
              className="d-flex col-12 align-items-start justify-content-end"
              style={{
                marginBottom: 1,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                }}
              >
                <img src="/assets/images/instax.png" width={32} height={30} />
              </div>
              <input
                dir="ltr"
                className="col-10   inputStyle "
                style={socialInasta == "" ? { fontSize: 11 } : { fontSize: 18 }}
                placeholder=" وارد کردن لینک پروفایل ایسنتاگرام"
                type="text"
                onChange={(e) =>
                  resumeContext.dispatch({
                    type: "social-insta",
                    payload: e.target.value,
                  })
                }
                value={resumeContext.data.socials.instagram}
              />
            </div>
            <div
              className="d-flex col-12 align-items-start justify-content-end "
              style={{
                marginBottom: 5,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                }}
              >
                <img src="/assets/images/youtubex.png" width={30} height={25} />
              </div>
              <input
                dir="ltr"
                className="col-10  inputStyle"
                style={
                  socialYoutube == "" ? { fontSize: 11 } : { fontSize: 18 }
                }
                placeholder=" وارد کردن لینک پروفایل یوتیوب"
                type="text"
                onChange={(e) =>
                  resumeContext.dispatch({
                    type: "social-youtube",
                    payload: e.target.value,
                  })
                }
                value={resumeContext.data.socials.youtube}
              />
            </div>
            <div
              className="d-flex align-items-center justify-content-start "
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
  );
};

export default FirstFormVip;
