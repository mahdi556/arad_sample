import Footer from "../components/Footer";
import axios from "axios";
import useDownloader from "react-use-downloader";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import BreakLine from "../components/Employee/Resume/FormInputs/BreakLine";
import { useContext, useEffect, useState } from "react";
import AuthContext from "context/Auth/AuthContext";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  boxShadow: 24,
  borderRadius: 10,
  // p: 2,
};
const Adshow = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const { user } = useContext(AuthContext);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  useEffect(() => {
    axios({
      url: "/getAd",
      method: "post",
      data: {
        ad_id: router.query.ad,
      },
    })
      .then((response) => {
        setData(response.data.data.ad);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [router.query.ad]);
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
      <div
        className="d-flex col-12 mt-5 position-relative justify-content-center "
        style={{
          paddingRight: 73,
          paddingBottom: 200,
        }}
      >
        <div className="col-9">
          <div
            className="d-flex flex-column col-11  px-5 mx-auto position-relative"
            style={{
              backgroundColor: "#fff",
              borderRadius: 30,
              marginTop: 100,
            }}
          >
            <div
              className="d-flex pe-4  ps-4 pt-2 pb-2 align-items-center"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "#11999e",

                borderTopLeftRadius: 30,
                borderBottomRightRadius: 30,
              }}
            >
              <div
                className="me-2"
                style={{
                  cursor: "pointer",
                }}
              >
                <img
                  src="/assets/images/shareWhite.svg"
                  height={25}
                  width={25}
                />
              </div>
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={() => handleLottie()}
              >
                <img
                  src="/assets/images/saveWhite.svg"
                  height={25}
                  width={25}
                />
              </div>
            </div>
            <div className="d-flex align-items-center mt-5 ">
              <div>
                {data && (
                  <img
                    src={data.image}
                    height={150}
                    width={150}
                    style={{ borderRadius: "50%" }}
                  />
                )}
              </div>

              <div className="d-flex flex-column justify-content-center  ms-4">
                <h4
                  className="  mb-4"
                  style={{
                    fontFamily: "iranBlack",
                    fontSize: "34px",
                  }}
                >
                  {data && data.title}
                </h4>
                <h6
                  className=" "
                  style={{
                    fontSize: 23,
                  }}
                >
                  {data.user && data.user.name}{" "}
                </h6>
              </div>
              {data.video && (
                <div className="d-flex flex-column ms-auto">
                  <h5
                    className=" mb-4"
                    style={{
                      fontFamily: "iranBlack",
                      fontSize: 20,
                    }}
                  >
                    ویدیو معرفی
                  </h5>
                  <div
                    style={{
                      borderRadius: 20,
                      overflow: "hidden",
                    }}
                  >
               
                    <video
                      width="267"
                      height="144"
                      src={data.video}
                      poster="/assets/images/video-sample.png"
                      onClick={({ target: video }) =>
                        video.paused ? video.play() : video.pause()
                      }
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
            </div>
            <BreakLine />
            <div className="d-flex justify-content-between mt-4">
              <div className="d-flex flex-column  col-5 ">
                <div className="d-flex mb-2 ">
                  <h6 className="col-5 txtSec1 px-2"> دسته بندی حرفه</h6>
                  <h6 className="col-7 txtSec2 px-2">
                    {data.jobCategory && data.jobCategory.fa_name}
                  </h6>
                </div>
                <div className="d-flex mb-2 ">
                  <h6 className="col-5 txtSec1 px-2"> وضعیت سربازی</h6>
                  <h6 className="col-7 txtSec2 px-2">
                    {" "}
                    {data.personal && data.personal.military === 1
                      ? "انجام دادم "
                      : data.personal && data.personal.military === 0
                      ? "انجام ندادم"
                      : null}{" "}
                  </h6>
                </div>
                <div className="d-flex mb-2">
                  <h6 className="col-5 txtSec1 px-2"> تقاضای بیمه</h6>
                  <h6 className="col-7 txtSec2 px-2">
                    {data.personal && data.personal.insurrance == 1
                      ? "دارم"
                      : data.personal && data.personal.insurrance == 0
                      ? "ندارم"
                      : null}{" "}
                  </h6>
                </div>
                <div className="d-flex mb-2">
                  <h6 className="col-5 txtSec1 px-2"> وضعیت تاهل</h6>
                  <h6 className="col-7 txtSec2 px-2">
                    {data.personal && data.personal.married == 1
                      ? "متاهل"
                      : data.personal && data.personal.married == 0
                      ? "مجرد"
                      : null}
                  </h6>
                </div>
                <div className="d-flex mb-2">
                  <h6 className="col-5 txtSec1 px-2"> تاریخ تولد</h6>
                  <h6 className="col-7 txtSec2 px-2">
                    {data.personal && data.personal.fa_birth_y}/
                    {data.personal && data.personal.fa_birth_m}/
                    {data.personal && data.personal.fa_birth_d}
                  </h6>
                </div>
              </div>

              <div className="d-flex flex-column  col-5 ">
                <div className="d-flex mb-2 ">
                  <h6 className="col-5 txtSec1 px-2"> میزان حقوق دریافتی</h6>
                  <h6 className="col-7 txtSec2 px-2">
                    {" "}
                    از {data.personal && data.personal.fa_salary_from} تومان تا
                    {data.personal && data.personal.fa_salary_to}تومان
                  </h6>
                </div>
                <div className="d-flex mb-2 ">
                  <h6 className="col-5 txtSec1 px-2"> استان</h6>
                  <h6 className="col-7 txtSec2 px-2">
                    {data.personal && data.personal.city_fa}
                  </h6>
                </div>
                <div className="d-flex mb-2">
                  <h6 className="col-5 txtSec1 px-2"> شهر</h6>
                  <h6 className="col-7 txtSec2 px-2">
                    {data.personal && data.personal.city_fa}
                  </h6>
                </div>
                <div className="d-flex mb-2">
                  <h6 className="col-5 txtSec1 px-2"> جنسیت</h6>
                  <h6 className="col-7 txtSec2 px-2">
                    {data.personal && data.personal.sex == 1 ? "مرد" : "زن"}
                  </h6>
                </div>
                <div className="d-flex mb-2">
                  <h6 className="col-5 txtSec1 px-2"> نوع همکاری</h6>
                  <h6 className="col-7 txtSec2 px-2">
                    {data.personal && data.personal.corporate_type == 1
                      ? "حضوری"
                      : data.personal && data.personal.corporate_type == 2
                      ? "دورکاری"
                      : data.personal && data.personal.corporate_type == 3
                      ? "هردو"
                      : null}
                  </h6>
                </div>
              </div>
            </div>
            <div className="row  flex-wrap"></div>
            {data.experiences && data.experiences.length > 0 && (
              <>
                <BreakLine />
                <div className="d-flex flex-column me-auto   mb-4 col-12">
                  <h5
                    className=" d-flex   mb-4"
                    style={{
                      fontFamily: "iranBlack",
                    }}
                  >
                    سوابق کاری
                  </h5>
                  <div className=" row g-2   flex-wrap ">
                    {data.experiences &&
                      data.experiences.map((item, key) => (
                        <div className="col-4 px-2">
                          <div
                            className="    "
                            style={{
                              backgroundColor: "#fff",
                              borderRadius: 20,
                              boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                            }}
                          >
                            <div
                              className="d-flex col-12 px-4 py-2 justify-content-between align-items-center"
                              style={{
                                backgroundColor: "#11999e",
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                              }}
                            >
                              <h5
                                className="text-center text-white"
                                style={{
                                  fontSize: 16,
                                }}
                              >
                                نام سازمان:{" "}
                              </h5>
                              <h6
                                className="text-center text-white fw-light"
                                style={{
                                  fontSize: 18,
                                }}
                              >
                                {item.fa_org}{" "}
                              </h6>
                            </div>
                            <div className="d-flex px-3 pt-2 mb-2">
                              <h3
                                className="me-auto"
                                style={{
                                  fontSize: 20,
                                }}
                              >
                                سمت
                              </h3>
                              <h3
                                className="fw-light"
                                style={{
                                  fontSize: 18,
                                  color: "rgba(0,0,0,0.5)",
                                }}
                              >
                                {item.fa_title}
                              </h3>
                            </div>
                            <div className="d-flex px-3 pt-2 mb-2">
                              <h3
                                className="me-auto"
                                style={{
                                  fontSize: 20,
                                }}
                              >
                                میزان سابقه
                              </h3>
                              <h3
                                className="fw-light"
                                style={{
                                  fontSize: 18,
                                  color: "rgba(0,0,0,0.5)",
                                }}
                              >
                                {" "}
                                از
                                {item.fa_start_y}/{item.fa_start_m}
                                تا
                                {item.fa_finish_y}/{item.fa_finish_m}
                              </h3>
                            </div>
                            <div className="d-flex px-3 pt-2 mb-2">
                              <h3
                                className="me-auto"
                                style={{
                                  fontSize: 20,
                                }}
                              >
                                دلیل ترک
                              </h3>
                              <h3
                                className="fw-light"
                                style={{
                                  fontSize: 18,
                                  color: "rgba(0,0,0,0.5)",
                                }}
                              >
                                {item.fa_reason}{" "}
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}
            {data.degrees && data.degrees.length > 0 && (
              <>
                <BreakLine />
                <div className="d-flex flex-column me-auto   mb-4 col-12">
                  <h5
                    className=" d-flex   mb-4"
                    style={{
                      fontFamily: "iranBlack",
                    }}
                  >
                    سوابق تحصیلی
                  </h5>
                  <div className=" row g-2  flex-wrap ">
                    {data.degrees &&
                      data.degrees.map((item, key) => (
                        <div className="col-4 px-2">
                          <div
                            className="    "
                            style={{
                              backgroundColor: "#fff",
                              borderRadius: 20,
                              boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                            }}
                          >
                            <div
                              className="d-flex col-12 px-4 py-2 justify-content-between align-items-center"
                              style={{
                                backgroundColor: "#11999e",
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                              }}
                            >
                              <h5
                                className="text-center text-white"
                                style={{
                                  fontSize: 16,
                                }}
                              >
                                رشته تحصیلی :{" "}
                              </h5>
                              <h6
                                className="text-center text-white fw-light"
                                style={{
                                  fontSize: 18,
                                }}
                              >
                                {item.fa_degree}{" "}
                              </h6>
                            </div>
                            <div className="d-flex px-3 pt-2 mb-2">
                              <h3
                                className="me-auto"
                                style={{
                                  fontSize: 16,
                                  color: "#000",
                                }}
                              >
                                آخرین مدرک تحصیلی :
                              </h3>
                              <h3
                                className="fw-light"
                                style={{
                                  fontSize: 16,
                                  color: "rgba(0,0,0,0.5)",
                                }}
                              >
                                {item.fa_name}
                              </h3>
                            </div>
                            <div className="d-flex px-3 pt-2 mb-2">
                              <h3
                                className="me-auto"
                                style={{
                                  fontSize: 16,
                                  color: "#000",
                                }}
                              >
                                سال فارغ التحصیلی
                              </h3>
                              <h3
                                className="fw-light"
                                style={{
                                  fontSize: 18,
                                  color: "rgba(0,0,0,0.5)",
                                }}
                              >
                                {" "}
                                {item.fa_date_y}/{item.fa_date_m}/
                                {item.fa_date_d}
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}
            {data.langExperts && data.langExperts.length > 0 && (
              <>
                <BreakLine />
                <div className="mb-4">
                  <h5
                    className="mt-2 mb-5 fs-5 text-start   w-75"
                    style={{
                      fontFamily: "iranBlack",
                    }}
                  >
                    مهارت های زبان
                  </h5>
                  <div className="row row-cols-4  ">
                    {data.langExperts &&
                      data.langExperts.map((item, key) => (
                        <div className="col  px-3">
                          <div className="   eAdshowSec3  ">
                            {item.text}
                            <div className="d-flex col-12 justify-content-between px-2">
                              <div
                                className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}
                              >
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
              </>
            )}
            {data.softExperts && data.softExperts.length > 0 && (
              <>
                <BreakLine />
                <div className="mb-4">
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
                              <div
                                className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}
                              >
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
              </>
            )}
            <BreakLine />
            <h5
              className="mt-2 mb-5 fs-5 text-start   w-75"
              style={{
                fontFamily: "iranBlack",
              }}
            >
              نمونه کارها
            </h5>
            <div className=" row g-2  mb-4 flex-wrap ">
              {data.samples &&
                data.samples.length > 0 &&
                data.samples.map((item, key) => (
                  <div className="col-4 px-2">
                    <div
                      className=" d-flex flex-column align-items-center justify-content-center py-2   "
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: 20,
                        boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                      }}
                    >
                      <p>
                        Download is in{" "}
                        {isInProgress ? "in progress" : "stopped"}
                      </p>
                      <button onClick={() => download(item.file, item.title)}>
                        Click to download the file
                      </button>
                      <button onClick={() => cancel()}>
                        Cancel the download
                      </button>
                      <p>Download size in bytes {size}</p>
                      <label for="file">Downloading progress:</label>
                      <progress id="file" value={percentage} max="100" />
                      <p>Elapsed time in seconds {elapsed}</p>
                      {error && <p>possible error {JSON.stringify(error)}</p>}

                      <h5 className="mt-2 mb-1 fs-6 text-start fw-bold w-75">
                        {item.title}
                      </h5>
                      <h5 className="mt-1 mb-1 fs-6 text-end fw-light text-primary w-75">
                        {item.link}
                      </h5>
                      <p className="px-3 fs-9">{item.faDiscription} </p>
                    </div>
                  </div>
                ))}
            </div>
            <BreakLine />
            <h5
              className="mt-2 mb-3 fs-5 text-start  w-75"
              style={{
                fontFamily: "iranBlack",
              }}
            >
              نوضیحات تکمیلی
            </h5>
            <p className="px-1 fs-9 mb-5">
              {data.personal && data.personal.description}
            </p>
          </div>
        </div>
        <div className="col-3 ">
          <div
            className="d-flex flex-column col-10     py-2 px-2 align-items-center "
            style={{
              position: "sticky",
              top: "15%",
              backgroundColor: "#fff",
              borderRadius: 30,
              marginTop: 100,
            }}
          >
            <div
              className="py-2 my-2   d-flex align-items-center justify-content-center adShowModal"
              onClick={() => setOpen1(true)}
            >
              <div className="me-2 mt-1  ">
                <img src="/assets/images/call.svg" width={23} height={23} />
              </div>
              اطلاعات تماس
            </div>
            <div className="py-2 my-2   d-flex align-items-center justify-content-center adShowModal">
              <div className="me-2 mt-1">
                <img
                  src="/assets/images/interview.svg"
                  width={20}
                  height={20}
                />
              </div>
              درخواست مصاحبه آنلاین
            </div>
            <div className="py-2 my-2   d-flex align-items-center justify-content-center adShowModal">
              <div className="me-2 mt-1">
                <img
                  src="/assets/images/chat-arad.svg"
                  width={23}
                  height={23}
                />
              </div>
              چت در چیتیت
            </div>
            <div className="py-2 mt-2     d-flex align-items-center justify-content-center adShowModal">
              <div className="me-2 mt-1 ">
                <img src="/assets/images/network.svg" width={23} height={23} />
              </div>
              شبکه های اجتماعی
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal open={open1} onClose={() => setOpen1(false)}>
        <Box sx={style} className="px-4 py-3">
          <div className="col-12 d-flex flex-column  justify-content-between py-5 px-5">
            <h1
              style={{
                fontFamily: "iranBlack",
                fontSize: 35,
              }}
            >
              اطلاعات تماس
            </h1>
            <div className="d-flex mt-4 px-4 align-items-center">
              <div
                className="d-flex me-4 align-items-center justify-content-center"
                style={{
                  height: 50,
                  width: 52,
                  borderTopRightRadius: 5,
                  borderBottomLeftRadius: 5,
                  borderTopLeftRadius: "50%",
                  borderBottomRightRadius: "50%",
                  backgroundColor: "#11999e",
                }}
              >
                <img src="/assets/images/mobile.svg" height={30} width={30} />
              </div>
              <h3
                className="mt-2"
                style={{
                  fontFamily: "iranBlack",
                  fontSize: 23,
                }}
              >
                {data.personal && data.personal.cellphone}
              </h3>
            </div>
            <div className="d-flex mt-4 px-4 align-items-center">
              <div
                className="d-flex me-4 align-items-center justify-content-center"
                style={{
                  height: 50,
                  width: 52,
                  borderTopRightRadius: 5,
                  borderBottomLeftRadius: 5,
                  borderTopLeftRadius: "50%",
                  borderBottomRightRadius: "50%",
                  backgroundColor: "#11999e",
                }}
              >
                <img src="/assets/images/whatsapp.svg" height={30} width={30} />
              </div>
              <h3
                className="mt-2"
                style={{
                  fontFamily: "iranBlack",
                  fontSize: 23,
                }}
              >
                {data.personal && data.personal.whatsapp}
              </h3>
            </div>
            <div className="d-flex mt-4 px-4 align-items-center">
              <div
                className="d-flex me-4 align-items-center justify-content-center"
                style={{
                  height: 50,
                  width: 52,
                  borderTopRightRadius: 5,
                  borderBottomLeftRadius: 5,
                  borderTopLeftRadius: "50%",
                  borderBottomRightRadius: "50%",
                  backgroundColor: "#11999e",
                }}
              >
                <img src="/assets/images/telegram.svg" height={30} width={30} />
              </div>
              <h3
                className="mt-2"
                style={{
                  fontFamily: "iranBlack",
                  fontSize: 23,
                }}
              >
                {data.personal && data.personal.telegram}
              </h3>
            </div>
            <div className="d-flex mt-4 px-4 align-items-center">
              <div
                className="d-flex me-4 align-items-center justify-content-center"
                style={{
                  height: 50,
                  width: 52,
                  borderTopRightRadius: 5,
                  borderBottomLeftRadius: 5,
                  borderTopLeftRadius: "50%",
                  borderBottomRightRadius: "50%",
                  backgroundColor: "#11999e",
                }}
              >
                <img src="/assets/images/email.svg" height={30} width={30} />
              </div>
              <h3
                className="mt-2"
                style={{
                  fontFamily: "iranBlack",
                  fontSize: 23,
                }}
              >
                {data.personal && data.personal.email}
              </h3>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Adshow;
