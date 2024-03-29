import AdBoxNewEmployer from "../../Common/AdBoxNewEmployer";
import BreakLine from "../../Employee/Resume/FormInputs/BreakLine";
import axios from "axios";
import Lottie from "lottie-react";
import { ToastContainer, toast } from "react-toastify";
import saveLottie from "../../../components/Lottie-json/save-lottie.json";
import { useRef, useState, useContext, useEffect } from "react";
import { Hidden } from "@mui/material";
import AuthContext from "context/Auth/AuthContext";
const RAdShow = ({ data }) => {
  const lottieRef = useRef();
  const [play, settPlay] = useState(false);
  const [salaryTypes, setSalaryTypes] = useState([]);
  const [shareClass, setShareClass] = useState("share_close");
  const width = "33%";
  const { user } = useContext(AuthContext);

  const SalaryType = [
    { id: 1, fa: "ماهانه", en: "" },
    { id: 2, fa: "روزانه", en: "" },
    { id: 3, fa: "ساعتی", en: "" },
    { id: 4, fa: "پورسانتی", en: "" },
    { id: 5, fa: "توافقی", en: "" },
  ];

  const handleLottie = () => {
    axios({
      url: "/storesavead",
      method: "post",
      data: {
        user_id: user.id,
        ad_id: data.id,
      },
    })
      .then((response) => {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="d-flex flex-column z s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      eAdshow px-5">
        <div className="d-flex justify-content-between mt-4 ">
          <div className="d-flex flex-column mt-4">
            <h1
              className="eAdshowSec1 "
              style={{
                fontFamily: "iranBlack",
              }}
            >
              {" "}
              {data.title}{" "}
              <h5 className="d-inline-flex">
                {data.personal && data.personal.corporate_type == 1
                  ? "(حضوری)"
                  : data.personal && data.personal.corporate_type == 2
                  ? "(دورکاری)"
                  : data.personal && data.personal.corporate_type == 3
                  ? "(حضوری و دورکاری)"
                  : null}
              </h5>
            </h1>
            <h4 className="eAdshowSec2">
              دسته {data.jobCategory && data.jobCategory.fa_name}
              {/* <h6 className="d-inline-flex fw-light">3روز پیش</h6> */}
            </h4>
          </div>
          <div className="d-flex pt-4  ">
            <div
              className="me-3"
              onClick={() => handleLottie()}
              style={{
                cursor: "pointer",
              }}
            >
              <img src="/assets/images/save.png" height={32} width={32} />

              {/* <Lottie
                animationData={saveLottie}
                loop={false}
                autoPlay={false}
                style={{
                  height: 50,
                }}
                lottieRef={lottieRef}
              /> */}
            </div>
            <div className="position-relative">
              <div
                className="d-flex flex-column align-items-center justify-content-center share_button "
                style={{
                  height: 40,
                  cursor: "pointer",
                }}
                onClick={() => setShareClass("share")}
              >
                <img
                  src="/assets/images/share.png"
                  style={{
                    visibility: shareClass == "share" ? "hidden" : "visible",
                  }}
                  height={32}
                  width={32}
                />
              </div>
              <div className={shareClass}>
                <img
                  className="share_button2"
                  src="/assets/images/share.png"
                  height={32}
                  width={32}
                  onClick={() => setShareClass("share_close")}
                />
                <div className="share_sec1">
                  <img
                    src="/assets/images/share_1.svg"
                    height={22}
                    width={22}
                  />
                </div>
                <div className="share_sec1">
                  {" "}
                  <img
                    src="/assets/images/share_2.svg"
                    height={22}
                    width={22}
                  />
                </div>
                <div className="share_sec1">
                  {" "}
                  <img
                    src="/assets/images/share_3.svg"
                    height={22}
                    width={22}
                  />
                </div>
                <div className="share_sec1">
                  {" "}
                  <img
                    src="/assets/images/share_4.svg"
                    height={22}
                    width={22}
                  />
                </div>
                <div className="share_sec1">
                  {" "}
                  <img
                    src="/assets/images/share_5.svg"
                    height={22}
                    width={22}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <BreakLine />
        <div className="d-flex flex-column ">
          <div className="d-flex col-12 justify-content-between">
            <div className="d-flex col-4">
              <h6 className="col-5 txtSec1"> میزان حقوق دریافتی</h6>
              <h6 className="col-7 txtSec2">
                {" "}
                از {data.personal && data.personal.fa_salary_from} تاتومان
                {data.personal && data.personal.fa_salary_to}تومان
              </h6>
            </div>
            <div className="d-flex col-4 ms-4">
              <h6 className="col-5 txtSec1">بیمه</h6>
              <h6 className="col-7 txtSec2">
                {" "}
                {data.personal && data.personal.insurrance == 1
                  ? "دارد"
                  : data.personal && data.personal.insurrance == 0
                  ? "ندارد"
                  : null}{" "}
              </h6>
            </div>
            <div className="d-flex col-3 ms-4 ">
              <h6 className="col-5 txtSec1">نوع همکاری</h6>
              <h6 className="col-7 txtSec2">
                {" "}
                {data.personal && data.personal.corporate_type == 1
                  ? "حضوری"
                  : data.personal && data.personal.corporate_type == 2
                  ? "دورکاری"
                  : data.personal && data.personal.corporate_type == 3
                  ? "(حضوری و دورکاری)"
                  : null}
              </h6>
            </div>
          </div>
          <div className="d-flex col-12 justify-content-between">
            <div className="d-flex col-4">
              <h6 className="col-5 txtSec1"> نحوه پرداخت حقوق </h6>
              <h6 className="col-7 txtSec2">
                {" "}
                {data.personal &&
                  data.personal.salary_type &&
                  SalaryType[data.personal.salary_type - 1].fa}{" "}
              </h6>
            </div>
            <div className="d-flex col-4 ms-4">
              <h6 className="col-5 txtSec1">محدوده سنی</h6>
              <h6 className="col-7 txtSec2">
                از {data.personal && data.personal.fa_age_range_from} سال تا{" "}
                {data.personal && data.personal.fa_age_range_to} سال
              </h6>
            </div>
            <div className="d-flex col-3 ms-4 ">
              <h6 className="col-5 txtSec1">ساعات کاری</h6>
              <h6 className="col-7 txtSec2">
                از ساعت {data.personal && data.personal.fa_work_hour_from} تا
                ساعت {data.personal && data.personal.fa_work_hour_to}
              </h6>
            </div>
          </div>
        </div>
        <BreakLine />
        {data.softExpert && data.softExperts.length > 0 && (
          <>
            <div className=" ">
              <h5
                className="mt-2 mb-5 fs-5 text-start   w-75"
                style={{
                  fontFamily: "iranBlack",
                }}
              >
                مهارت های نرم افزاری
              </h5>
              <div className="row row-cols-4  ">
                {data.softExperts &&
                  data.softExperts.map((item, key) => (
                    <div className="col  px-3">
                      <div className="   eAdshowSec3  ">
                        {item.fa_name}
                        <div className="d-flex col-12 justify-content-between px-2">
                          <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}>
                            {item.level == 1 && "مقدماتی"}
                          </div>
                          <div
                            className={
                              item.level == 2 || item.level == 3
                                ? "eAdshowSec6 col-4 mt-2 me-1 pb-1"
                                : "eAdshowSec8 col-4 mt-2 me-1 pb-1"
                            }
                            // {`eAdshowSec6 col-4 mt-2 me-1 pb-1`}
                          >
                            {item.level == 2 && "متوسط"}
                          </div>
                          <div
                            className={
                              item.level == 3
                                ? "eAdshowSec6 col-4 mt-2 me-1 pb-1"
                                : "eAdshowSec8 col-4 mt-2 me-1 pb-1"
                            }
                          >
                            {item.level == 3 && "پیشرفته"}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <BreakLine />
          </>
        )}
        {data.langExperts && data.langExperts.length > 0 && (
          <>
            <div className=" ">
              <h5
                className=" mb-5 fs-5 text-start  pt-0 w-75"
                style={{
                  fontFamily: "iranBlack",
                }}
              >
                مهارت های زبان
              </h5>
              <div className="row row-cols-4 mb-2 ">
                {data.langExperts &&
                  data.langExperts.map((item, key) => (
                    <div className="col  px-3">
                      <div className="   eAdshowSec3  ">
                        {item.fa_name}
                        <div className="d-flex col-12 justify-content-between px-2">
                          <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}>
                            {item.level == 1 && "مقدماتی"}
                          </div>
                          <div
                            className={
                              item.level == 2 || item.level == 3
                                ? "eAdshowSec6 col-4 mt-2 me-1 pb-1"
                                : "eAdshowSec8 col-4 mt-2 me-1 pb-1"
                            }
                            // {`eAdshowSec6 col-4 mt-2 me-1 pb-1`}
                          >
                            {item.level == 2 && "متوسط"}
                          </div>
                          <div
                            className={
                              item.level == 3
                                ? "eAdshowSec6 col-4 mt-2 me-1 pb-1"
                                : "eAdshowSec8 col-4 mt-2 me-1 pb-1"
                            }
                          >
                            {item.level == 3 && "پیشرفته"}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <BreakLine />
          </>
        )}
        <h5
          className="  text-start  w-75"
          style={{
            fontFamily: "iranBlack",
          }}
        >
          توضیحات
        </h5>
        <p
          style={{
            fontSize: 16,
            lineHeight: 2,
          }}
        >
          {data.personal && data.personal.description}
        </p>
        <BreakLine />
        <h5
          className="  mb-5 fs-4 text-start   w-75"
          style={{
            fontFamily: "iranBlack",
          }}
        >
          تسهیلات و مزایا
        </h5>
        <div className="d-flex flex-wrap mb-3">
          <h3 className="d-flex eAdshowSec7 mx-2">وام</h3>
          <h3 className="d-flex eAdshowSec7 mx-2">مکان استراحت</h3>
          <h3 className="d-flex eAdshowSec7 mx-2">یخچال</h3>
          <h3 className="d-flex eAdshowSec7 mx-2">کیک</h3>
        </div>
      </div>
      <h5 className="mt-5 mb-5 fs-4 text-start fw-bold w-75">آگهی های مرتبط</h5>
      <div className="row gx-5 gy-4   ">
        {/* <AdBoxNewEmployer width={width} />
        <AdBoxNewEmployer width={width} />
        <AdBoxNewEmployer width={width} />
        <AdBoxNewEmployer width={width} />
        <AdBoxNewEmployer width={width} />
        <AdBoxNewEmployer width={width} /> */}
      </div>
    </>
  );
};
export default RAdShow;
