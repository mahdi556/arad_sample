import { useContext, useEffect, useState } from "react";
  
import style from "./styles/rshow.module.css";
const OrgProfile = () => {
  const [image, setImage] = useState([]);
  const [display, setDisplay] = useState("none");
  const [imageUrl, setImageUrl] = useState([]);
  const [companyId, setCompanyId] = useState("");
  const [name, setName] = useState("");
  const [activity, setActivity] = useState("");
  useEffect(() => {
    if (image.length > 0) {
      const newImageUrl = [];
      newImageUrl.push(URL.createObjectURL(image[0]));
      setImageUrl(newImageUrl);
    }
  }, [image]);
  return (
    <>
      <div className={`d-flex  ${style.org_container} mx-auto px-5 py-5 `}>
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
                  height: 160,
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
        </div>
        <div className="  col-6 ps-3 pt-2  ">
          <div className="col-12 text-right">
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
                companyId == ""
                  ? "col-12 mb-1 ps-2 inputStyle"
                  : "col-12 mb-1 ps-2 inputFilled"
              }
              onChange={(e) => setCompanyId(e.target.value)}
              type="text"
              value={companyId}
            />
          </div>
          <h5 className="mx-auto text-center my-3">
            __________________ یا ـــــــــــــــــــ
          </h5>
          <div className={`${style.uploadpaper} py-2`}>آپلود روزنامه شرکت</div>
        </div>
      </div>
      <div className={`${style.org_container} mx-auto px-5 py-5 `}>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
            width: "100%",
            paddingRight: "1rem",
          }}
        >
          اطلاعات شرکت
        </div>
        <div className="d-flex justify-content-between flex-wrap col-12 px-5  ">
          <div className="d-flex flex-wrap pe-4 col-12 ">
            <div className="  col-12 justify-content-between">
              <div className="col-12 mb-3">
                <label
                  className="fs-6  "
                  style={{
                    marginBottom: "0.5rem",
                    fontWeight: "normal",
                  }}
                >
                  نام شرکت
                </label>
                <input
                  className={
                    name == ""
                      ? "col-12 mb-3 ps-2 inputStyle"
                      : "col-12 mb-3 ps-2 inputFilled"
                  }
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap pe-4 col-12 ">
            <div className="  col-12 justify-content-between">
              <div className="col-12 mb-3">
                <label
                  className="fs-6  "
                  style={{
                    marginBottom: "0.5rem",
                    fontWeight: "normal",
                  }}
                >
                  حیطه فعالیت
                </label>
                <input
                  className={
                    name == ""
                      ? "col-12 mb-3 ps-2 inputStyle"
                      : "col-12 mb-3 ps-2 inputFilled"
                  }
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap pe-4 col-12 ">
            <div className="  col-12 justify-content-between">
              <div className="col-12 mb-3">
                <label
                  className="fs-6  "
                  style={{
                    marginBottom: "0.5rem",
                    fontWeight: "normal",
                  }}
                >
                  میزان سابقه شرکت
                </label>
                <input
                  className={
                    name == ""
                      ? "col-12 mb-3 ps-2 inputStyle"
                      : "col-12 mb-3 ps-2 inputFilled"
                  }
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap pe-4 col-12 ">
            <div className="  col-12 justify-content-between">
              <div className="col-12 mb-3">
                <label
                  className="fs-6  "
                  style={{
                    marginBottom: "0.5rem",
                    fontWeight: "normal",
                  }}
                >
                  تعداد پرسنل
                </label>
                <input
                  className={
                    name == ""
                      ? "col-12 mb-3 ps-2 inputStyle"
                      : "col-12 mb-3 ps-2 inputFilled"
                  }
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap pe-4 col-12 ">
            <div className="  col-12 justify-content-between">
              <div className="col-12 mb-3">
                <label
                  className="fs-6  "
                  style={{
                    marginBottom: "0.5rem",
                    fontWeight: "normal",
                  }}
                >
                  وب سایت
                </label>
                <input
                  className={
                    name == ""
                      ? "col-12 mb-3 ps-2 inputStyle"
                      : "col-12 mb-3 ps-2 inputFilled"
                  }
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="d-flex col-6  align-items-center px-4  pe-2"
            style={{
              backgroundColor: "#EBEBEB",
              borderRadius: 7,
              cursor: "pointer",
            }}
          >
            <div className="d-flex col-6 ">
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
                    height: 120,
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
                    border: "1px solid #000",
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

                  <h5>آپلود عکس نمایه</h5>
                </label>
              )}
              {/* <img
              className="me-2"
              src="../../../../assets/images/upload-logo.png"
              width="10%"
            /> */}
            </div>
            <div className="d-flex col-6 px-2 ">
              <h6>لسشیشسیشسیورم ای\سوم شسیسشیسشیسشیسشیسشیسشی</h6>
            </div>
          </div>

          <div className="d-flex flex-wrap pe-4 col-5 ">
            <div className="  col-12 justify-content-between">
              <div className="col-12 mb-3">
                <label
                  className="fs-6  "
                  style={{
                    marginBottom: "0.5rem",
                    fontWeight: "normal",
                  }}
                >
                  توضیحات کوتاه
                </label>
                <textarea
                  className={
                    name == ""
                      ? "col-12 mb-3 ps-2 inputStyle"
                      : "col-12 mb-3 ps-2 inputFilled"
                  }
                  style={{
                    height: 150,
                  }}
                  type="text"
                  rows={10}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.org_container} mx-auto px-5 py-5 `}>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
            width: "100%",
            paddingRight: "1rem",
          }}
        >
          شعبه ها
        </div>
        <div className="d-flex justify-content-between flex-wrap col-12 px-5  ">
          <div className="d-flex flex-wrap pe-4 col-12 ">
            <div className=" d-flex col-12 justify-content-between">
              <div className="col-5 mb-3">
                <label
                  className="fs-6  "
                  style={{
                    marginBottom: "0.5rem",
                    fontWeight: "normal",
                  }}
                >
                  شماره تلفن
                </label>
                <input
                  className={
                    name == ""
                      ? "col-12 mb-3 ps-2 inputStyle"
                      : "col-12 mb-3 ps-2 inputFilled"
                  }
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="col-5 mb-3">
                <label
                  className="fs-6  "
                  style={{
                    marginBottom: "0.5rem",
                    fontWeight: "normal",
                  }}
                >
                  آدرس
                </label>
                <input
                  className={
                    name == ""
                      ? "col-12 mb-3 ps-2 inputStyle"
                      : "col-12 mb-3 ps-2 inputFilled"
                  }
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrgProfile;
