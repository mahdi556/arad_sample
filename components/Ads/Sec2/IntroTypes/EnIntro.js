import { useContext, useEffect, useState } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import AdContext from "context/Ad/AdContext";
import SectionLayout from "components/Ads/Layouts/SectionLayout";
import SectionTitle from "components/Ads/Layouts/SectionTitle";

const EnIntro = () => {
  const [image, setImage] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [videofile, setVideofile] = useState([]);
  const [videoUrl, setVideoUrl] = useState([]);
  const [display, setDisplay] = useState("none");

  const resumeContext = useContext(ResumeContext);
  const { stepClick, setStepClick, step, setStep } = useContext(AdContext);

  useEffect(() => {
    if (image.length > 0) {
      if (image[0].size > 2024000) {
        window.alert("حداکثر حجم آپلودعکس ، 2 مگابایت  می باشد");
      } else {
        const newImageUrl = [];
        newImageUrl.push(URL.createObjectURL(image[0]));
        setImageUrl(newImageUrl);
        resumeContext.dispatch({ type: "userImageFile", payload: image[0] });
        resumeContext.dispatch({ type: "userImage", payload: newImageUrl });
      }
    }

    if (videofile.length > 0) {
      if (videofile[0].size > 10240000) {
        window.alert("حداکثر حجم آپلودویدئو ،10 مگابایت  می باشد");
      } else {
        const newVideoUrl = [];
        newVideoUrl.push(URL.createObjectURL(videofile[0]));
        setVideoUrl(newVideoUrl);
        resumeContext.dispatch({
          type: "userVideoFile",
          payload: videofile[0],
        });
        resumeContext.dispatch({ type: "userVideo", payload: newVideoUrl });
      }
    }
  }, [image, videofile]);
  useEffect(() => {
    if (stepClick) {
      setStepClick(false);
      setStep(step + 1);
      // resumeContext.dispatch({ type: "fieldCheck", payload: true });
    }
  });

  return (
    <SectionLayout>
      <SectionTitle title="معرفی من" />

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
                  <img src={imageSrc} width="5%" height={150} />
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

              <h5>آپلود تصویر</h5>
            </label>
          )}
        </div>
        {/* <div className="  col-6 ps-3 pt-2    ">
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
        </div> */}
      </div>
    </SectionLayout>
  );
};

export default EnIntro;
