import { useContext, useEffect, useState } from "react";
 import ResumeContext from "../../../context/employeeContext/CreateResume/ResumeContext";
import UserContext from "../../../context/employeeContext/User/UserContext";

const FirstForm = () => {
  const [image, setImage] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [videofile, setVideofile] = useState([]);
  const [videoUrl, setVideoUrl] = useState([]);
  const [display, setDisplay] = useState("none");

   const userContext = useContext(UserContext);
  const resumeContext=useContext(ResumeContext)

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
      resumeContext.dispatch({
        type: "userVideoFile",
        payload: videofile[0],
      });
      resumeContext.dispatch({ type: "userVideo", payload: newVideoUrl });
    }
    resumeContext.dispatch({
      type: "user_id",
      payload: userContext.data.user.id,
    });
  }, [image, videofile]);
  useEffect(() => {
    if (resumeContext.data.stepClick) {
         resumeContext.dispatch({ type: "fieldCheck", payload: true });
       
       
    }
  }, [resumeContext.data.stepClick]);

  return (
    <div
      className="row pt-1 "
      style={{
        background: "#fff",
        borderRadius: 15,
        paddingRight: "5rem",
        paddingLeft: "5rem",
        paddingBottom: 30,
      }}
    >
      <div className="d-flex align-items-start ">
        <div className="d-flex col-6 flex-column   pe-2">
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
                    src="../../../../assets/images/upload.svg"
                    width="10%"
                  />
                  تغییر تصویر
                </label>
              </div>
            </>
          ) : (
            <label
              htmlFor="imageInput"
              className="d-flex     "
              style={{
                height: 120,
                backgroundColor: "#EBEBEB",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                borderRadius: 7,
                width: 140,
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
                src="../../../../assets/images/upload.svg"
                width={23}
              />

              <h5>آپلود لگو</h5>
            </label>
          )}
        </div>
        <div className="  col-6 ps-3 pt-2    ">
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
                  className="d-flex mt-2 justify-content-center align-items-center   "
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
              className="d-flex col-6 mx-auto mt-3 px-4 py-3 "
              htmlFor="VideoUpload"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 2,
                borderStyle: "dotted",
                borderColor: "#11999E",
                justifyContent: "start",
                alignItems: "center",
                fontSize: 15,
                borderRadius: 7,
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
                src="../../../../assets/images/upload.svg"
                width={20}
              />
              آپلود ویدیو
            </label>
          )}
          <div
            className="row col-8 offset-3 mt-2"
            style={{
              color: "#11999E",
              fontSize: 13,
            }}
          >
            * با آپلود ویدیو شانس استخدام شدن خود را چندین برابر کنید.(70% درصد
            کارفرماها تقاضای رزومه ویدیویی دارند)
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
