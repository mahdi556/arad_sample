  
import { useContext, useEffect, useState } from "react";
import NormalAdContext from "../../../context/employerContext/CreateAd/NormalAd/NormalAdContext";

const FirstFormVip = () => {
  const [socialInasta, setSocialInsta] = useState("");
  const [socialYoutube, setSocialYoutube] = useState("");
  const [socialWeb, setSocialWeb] = useState("");
  const [socialTwitter, setSocialTwitter] = useState("");
  const [image, setImage] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [videofile, setVideofile] = useState([]);
  const [videoUrl, setVideoUrl] = useState([]);
  const normalAdContext = useContext(NormalAdContext);
  useEffect(() => {
    if (image.length > 0) {
      const newImageUrl = [];
      newImageUrl.push(URL.createObjectURL(image[0]));
      setImageUrl(newImageUrl);
      normalAdContext.dispatch({ type: "userImageFile", payload: image[0] });
      normalAdContext.dispatch({ type: "userImage", payload: newImageUrl });
    }

    if (videofile.length > 0) {
      const newVideoUrl = [];
      newVideoUrl.push(URL.createObjectURL(videofile[0]));
      setVideoUrl(newVideoUrl);
      normalAdContext.dispatch({ type: "userVideo", payload: newVideoUrl });
    }
  }, [image, videofile]);

  return (
    <div
      className="row pt-4 pb-4"
      style={{
        background: "#fff",
        borderRadius: 15,
        paddingRight: "5rem",
        paddingLeft: "5rem",
      }}
    >
      <div className="d-flex align-items-start pt-1">
        <div
          className="d-flex col-6 flex-column   pe-2"
          style={{
            fontWeight: 600,
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
                    src="../../../../assets/images/upload-logo.png"
                    width="10%"
                  />
                  تغییر تصویر
                </label>
              </div>
            </>
          ) : (
            <label
              htmlFor="imageInput"
              className="d-flex  "
              style={{
                height: 130,
                backgroundColor: "#EBEBEB",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                borderRadius: 7,
                width: "50%",
                marginTop: 25,
                fontWeight: 300,
                cursor: "pointer",
              }}
            >
              <input
                type="file"
                style={{ display: "none" }}
                id="imageInput"
                onChange={(e) => setImage(e.target.files)}
              />
              <img
                className="me-2"
                src="../../../../assets/images/upload-logo.png"
                width="10%"
              />
              {imageUrl.map((imageSrc) => (
                <img src={imageSrc} width="50%" />
              ))}
              آپلود تصویر
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
                    src="../../../../assets/images/upload-logo.png"
                    width="10%"
                  />
                  تغییر ویدیو
                </label>
              </div>
            </>
          ) : (
            <label
              className="d-flex col-6  mt-3   px-2 py-2"
              htmlFor="VideoUpload"
              style={{
                borderWidth: 2,
                borderStyle: "dotted",
                borderColor: "#11999E",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 12,
                borderRadius: 10,
                width: "50%",
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
                src="../../../../assets/images/upload-logo.png"
                width="15%"
              />
              آپلود ویدیو
            </label>
          )}
          <div
            className="row col-12  mt-2"
            style={{
              color: "#11999E",
              fontSize: 12,
              fontWeight: 300,
            }}
          >
            با آپلود ویدیو شانس استخدام شدن خود را چندین برابر کنید.(70% درصد
            کارفرماها تقاضای رزومه ویدیویی دارند)
          </div>
        </div>
        <div className="  col-6 ps-3 pt-2 fw-bold ">
          شبکه های اجتماعی من
          <div className="row col-12 offset-1 mt-4 mb-2">
            <div className="row mb-3">
              <img src="/assets/images/twitterx.png" width={35} height={10} />
              <input
                dir="ltr"
                className="col-9 ms-2 inputStyle"
                style={
                  socialTwitter == "" ? { fontSize: 11 } : { fontSize: 18 }
                }
                placeholder=" وارد کردن لینک پروفایل توییتر"
                type="text"
                onChange={(e) =>
                  normalAdContext.dispatch({
                    type: "social-twitter",
                    payload: e.target.value,
                  })
                }
                value={normalAdContext.data.socials.twitter}
              />
            </div>
            <div className="row mb-3">
              <img src="/assets/images/webx.png" width={35} height={25} />
              <input
                dir="ltr"
                className="col-9 ms-2 inputStyle"
                style={socialWeb == "" ? { fontSize: 11 } : { fontSize: 18 }}
                placeholder=" وارد کردن لینک پروفایل دریبل"
                type="text"
                onChange={(e) =>
                  normalAdContext.dispatch({
                    type: "social-dribble",
                    payload: e.target.value,
                  })
                }
                value={normalAdContext.data.socials.dribble}
              />
            </div>
            <div className="row mb-3">
              <img src="/assets/images/instax.png" width={35} height={25} />
              <input
                dir="ltr"
                className="col-9 ms-2 inputStyle "
                style={socialInasta == "" ? { fontSize: 11 } : { fontSize: 18 }}
                placeholder=" وارد کردن لینک پروفایل ایسنتاگرام"
                type="text"
                onChange={(e) =>
                  normalAdContext.dispatch({
                    type: "social-insta",
                    payload: e.target.value,
                  })
                }
                value={normalAdContext.data.socials.instagram}
              />
            </div>
            <div className="row mb-3">
              <img src="/assets/images/youtubex.png" width={35} height={25} />
              <input
                dir="ltr"
                className="col-9 ms-2 inputStyle"
                style={
                  socialYoutube == "" ? { fontSize: 11 } : { fontSize: 18 }
                }
                placeholder=" وارد کردن لینک پروفایل یوتیوب"
                type="text"
                onChange={(e) =>
                  normalAdContext.dispatch({
                    type: "social-youtube",
                    payload: e.target.value,
                  })
                }
                value={normalAdContext.data.socials.youtube}
              />
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
  );
};

export default FirstFormVip;
