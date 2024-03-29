import { useContext, useEffect, useState } from "react";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import UserContext from "../../../context/employeeContext/User/UserContext";
  
import FieldError from "../../Common/FieldError";
const FirstForm = () => {
  const resumeContext = useContext(ResumeContext);
  const userContext = useContext(UserContext);
  const [image, setImage] = useState([]);
  const [display, setDisplay] = useState("none");
  const [imageUrl, setImageUrl] = useState([]);
  useEffect(() => {
    if (image.length > 0) {
      const newImageUrl = [];
      newImageUrl.push(URL.createObjectURL(image[0]));
      setImageUrl(newImageUrl);
      resumeContext.dispatch({ type: "userImageFile", payload: image[0] });
      resumeContext.dispatch({ type: "userImage", payload: newImageUrl });
    }
    resumeContext.dispatch({
      type: "user_id",
      payload: userContext.data.user.id,
    });
  }, [image]);
  useEffect(() => {
    if (resumeContext.data.stepClick) {
      if (
        resumeContext.data.companyName !== "" &&
        resumeContext.data.companyId !== ""
      ) {
        resumeContext.dispatch({ type: "fieldCheck", payload: true });
      } else {
        setDisplay("");
        resumeContext.dispatch({ type: "stepClick", payload: false });
      }
    }
  }, [resumeContext.data.stepClick]);
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
      <div className="d-flex justify-content-center  align-items-center">
        <h6 className="arad-red fs-6 px-1">`با تکمیل این قسمت ،</h6>
        <h6 className=" arad-red fs-6 fw-bold px-1">اعتبار شرکت خود</h6>
        <h6 className="arad-red fs-6  px-1">را در آگهی نمایش دهید</h6>
      </div>
      <div
        className="d-flex col-12 "
        style={{
          backgroundColor: "#c7e4e5",
          height: 200,
          borderRadius: 50,
        }}
      >
        <img src="/assets/images/enheader.png" height={150} width={819} />
      </div>
      <div className="d-flex align-items-start pt-1">
        <div className="d-flex col-3 flex-column   pe-2">
          <div className="d-flex  ">
            {image.length > 0 ? (
              <>
                <div
                  className="row"
                  style={{
                    backgroundColor: "#EBEBEB",
                    borderRadius: 7,
                    width: "90%",
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
                  height: 130,
                  backgroundColor: "#EBEBEB",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: 7,
                  width: "90%",
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

                <h5>آپلود لوگو</h5>
              </label>
            )}
            {/* <img
              className="me-2"
              src="../../../../assets/images/upload-logo.png"
              width="10%"
            /> */}
          </div>
          <div
            style={{
              marginTop: 5,
              backgroundColor: "#11999E",
              padding: "0.2rem",
              borderRadius: 5,
              color: "#fff",
              fontSize: "0.7rem",
              width: "90%",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            کامل کردن پروفایل سازمانی
          </div>
        </div>
        <div className="d-flex col-9 ps-3 pt-2 ">
          <div className="col-12 text-right  ">
            <label
              style={{
                marginBottom: "0.5rem",
                fontSize: "1.1rem",
              }}
            >
              نام سازمان
            </label>
            <input
              className={
                resumeContext.data.companyName == ""
                  ? "col-12 mb-4 ps-2 inputStyle"
                  : "col-12 mb-4 ps-2 inputFilled"
              }
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "companyName",
                  payload: e.target.value,
                })
              }
              type="text"
              value={resumeContext.data.companyName}
            />
            <FieldError
              data={resumeContext.data.companyName}
              display={display}
            />

            <label
              style={{
                marginBottom: "0.5rem",
                fontSize: "1.1rem",
              }}
            >
              شناسه ملی شرکت
            </label>
            <input
              className={
                resumeContext.data.companyId == ""
                  ? "col-12 mb-3 ps-2 inputStyle"
                  : "col-12 mb-3 ps-2 inputFilled"
              }
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "companyId",
                  payload: e.target.value,
                })
              }
              value={resumeContext.data.companyId}
              type="text"
            />
            <FieldError
              data={resumeContext.data.companyId}
              display={display}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
