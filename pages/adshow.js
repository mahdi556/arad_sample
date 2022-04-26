import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Image from "next/image";
import axios from "../axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import BreakLine from "../components/Employee/Resume/FormInputs/BreakLine";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/employeeContext/User/UserContext";
const Adshow = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const userContext = useContext(UserContext);
  useEffect(() => {
    axios({
      url: "/getAd",
      method: "post",
      data: {
        ad_id: router.query.ad,
      },
    })
      .then((response) => {
        console.log(response.data.data.ad);

        setData(response.data.data.ad);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [router.query.ad]);
  const myLoader = ({ src, width, quality }) => {
    return data.image;
  };
  const handleLottie = () => {
    axios({
      url: "/storesavead",
      method: "post",
      data: {
        user_id: userContext.data.user.id,
        ad_id: data.id,
      },
    })
      .then((response) => {
        console.log(response);
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
      <NavBar />
      <div className="d-flex col-12 mt-5">
        <div className="col-8">
          <div
            className="d-flex flex-column col-11 mt-5 px-5 mx-auto position-relative"
            style={{
              backgroundColor: "#fff",
              borderRadius: 30,
            }}
          >
            <div
              className="d-flex pe-4  ps-3 pt-2 align-items-center"
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
                className="me-3"
                style={{
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/assets/images/shareWhite.svg"
                  height={32}
                  width={32}
                />
              </div>
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={() => handleLottie()}
              >
                <Image
                  src="/assets/images/saveWhite.svg"
                  height={32}
                  width={32}
                />
              </div>
            </div>
            <div className="d-flex align-items-center mt-5 ">
              <div>
                {data && (
                  <img
                    // loader={myLoader}
                    src={data.image}
                    height={100}
                    width={100}
                    style={{ borderRadius: "50%" }}
                  />
                )}
              </div>

              <div className="d-flex flex-column justify-content-center  ms-4">
                <h4 className="fw-bold mb-4">{data && data.title}</h4>
                <h6 className="fw-bold "> {data.user && data.user.name} </h6>
              </div>
              <div className="d-flex flex-column ms-auto">
                <h5 className="fw-bold mb-4">ویدیو معرفی</h5>
                <div
                  style={{
                    borderRadius: 300,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={"/assets/images/video-sample.png"}
                    height={160}
                    width={230}
                  />
                </div>
              </div>
            </div>
            <BreakLine />
            <div className="d-flex justify-content-between mt-4">
              <div className="d-flex flex-column  col-4 ">
                <div className="d-flex mb-2 ">
                  <h6 className="col-5 txtSec1 px-2"> دسته بندی حرفه</h6>
                  <h6 className="col-7 txtSec2 px-2">
                    {data.jobCategory && data.jobCategory[0].fa_name}
                  </h6>
                </div>
                <div className="d-flex mb-2 ">
                  <h6 className="col-5 txtSec1 px-2"> وضعیت سربازی</h6>
                  <h6 className="col-7 txtSec2 px-2">
                    {" "}
                    از 2000000 تا 300000000
                  </h6>
                </div>
                <div className="d-flex mb-2">
                  <h6 className="col-5 txtSec1 px-2"> تقاضای بیمه</h6>
                  <h6 className="col-7 txtSec2 px-2">
                    {data.personal && data.personal.insurrance == 1
                      ? "دارد"
                      : data.personal && data.personal.insurrance == 0
                      ? "ندارد"
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

              <div className="d-flex flex-column  col-4 ">
                <div className="d-flex mb-2 ">
                  <h6 className="col-5 txtSec1 px-2"> میزان حقوق دریافتی</h6>
                  <h6 className="col-7 txtSec2 px-2">
                    {" "}
                    از {data.personal && data.personal.fa_salary_from} تاتومان
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
            <BreakLine />
            <div className="d-flex flex-column me-auto mb-4 col-12">
              <h5 className=" d-flex fw-bold mb-4">سوابق کاری</h5>
              <div className=" row g-2  mb-4 flex-wrap ">
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
              <BreakLine />
            </div>
            <div className="d-flex flex-column me-auto mb-4 col-12">
              <h5 className=" d-flex fw-bold mb-4">سوابق تحصیلی</h5>
              <div className=" row g-2  mb-4 flex-wrap ">
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
                            {item.fa_major}{" "}
                          </h6>
                        </div>
                        <div className="d-flex px-3 pt-2 mb-2">
                          <h3
                            className="me-auto"
                            style={{
                              fontSize: 18,
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
                              fontSize: 20,
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
                            {item.fa_date_y}/{item.fa_date_m}/{item.fa_date_d}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <BreakLine />
            </div>
            <div className="mb-4">
              <h5 className="mt-2 mb-5 fs-5 text-start fw-bold w-75">
                مهارت های زبان
              </h5>
              <div className="row row-cols-4  ">
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
            <div className="mb-4">
              <h5 className="mt-2 mb-5 fs-5 text-start fw-bold w-75">
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
            <h5 className="mt-2 mb-5 fs-5 text-start fw-bold w-75">
              نمونه کارها
            </h5>
            <div className=" row g-2  mb-4 flex-wrap ">
              <div className="col-4 px-2">
                <div
                  className=" d-flex flex-column align-items-center justify-content-center py-2   "
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                  }}
                >
                  <Image
                    src="/assets/images/sample-work.png"
                    height={200}
                    width={300}
                  />
                  <h5 className="mt-2 mb-1 fs-6 text-start fw-bold w-75">
                    طراح ui/ux
                  </h5>
                  <h5 className="mt-1 mb-1 fs-6 text-end fw-light text-primary w-75">
                    https://www.figma.com/file/
                  </h5>
                  <p className="px-3 fs-9">
                    لورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم
                    ایپسوملورم ایپسوملورم ایپسوم
                  </p>
                </div>
              </div>
              <div className="col-4 px-2">
                <div
                  className=" d-flex flex-column align-items-center justify-content-center py-2   "
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                  }}
                >
                  <Image
                    src="/assets/images/sample-work.png"
                    height={200}
                    width={300}
                  />
                  <h5 className="mt-2 mb-1 fs-6 text-start fw-bold w-75">
                    طراح ui/ux
                  </h5>
                  <h5 className="mt-1 mb-1 fs-6 text-end fw-light text-primary w-75">
                    https://www.figma.com/file/
                  </h5>
                  <p className="px-3 fs-9">
                    لورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم
                    ایپسوملورم ایپسوملورم ایپسوم
                  </p>
                </div>
              </div>
              <div className="col-4 px-2">
                <div
                  className=" d-flex flex-column align-items-center justify-content-center py-2   "
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                  }}
                >
                  <Image
                    src="/assets/images/sample-work.png"
                    height={200}
                    width={300}
                  />
                  <h5 className="mt-2 mb-1 fs-6 text-start fw-bold w-75">
                    طراح ui/ux
                  </h5>
                  <h5 className="mt-1 mb-1 fs-6 text-end fw-light text-primary w-75">
                    https://www.figma.com/file/
                  </h5>
                  <p className="px-3 fs-9">
                    لورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم
                    ایپسوملورم ایپسوملورم ایپسوم
                  </p>
                </div>
              </div>
              <div className="col-4 px-2">
                <div
                  className="    "
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                  }}
                ></div>
              </div>
            </div>
            <BreakLine />
            <h5 className="mt-2 mb-3 fs-5 text-start fw-bold w-75">
              نوضیحات تکمیلی
            </h5>
            <p className="px-1 fs-9 mb-5">
              {data.personal && data.personal.description}
            </p>
          </div>
        </div>
        <div className="col-3 ">
          <div
            className="d-flex flex-column col-10 mt-5 mx-auto py-2 px-2 align-items-center "
            style={{
              backgroundColor: "#fff",
              borderRadius: 30,
            }}
          >
            <div
              className="py-2 my-2 text-white d-flex align-items-center justify-content-center"
              style={{
                width: "80%",
                fontSize: "1rem",
                backgroundColor: "#E92B59",
                textAlign: "center",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <div className="me-2 mt-1">
                <Image src="/assets/images/call.svg" width={23} height={23} />
              </div>
              اطلاعات تماس
            </div>
            <div
              className="py-2 my-2 text-white d-flex align-items-center justify-content-center"
              style={{
                width: "80%",
                fontSize: " 1rem",
                backgroundColor: "#E92B59",
                textAlign: "center",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <div className="me-2 mt-1">
                <Image
                  src="/assets/images/interview.svg"
                  width={20}
                  height={20}
                />
              </div>
              درخواست مصاحبه آنلاین
            </div>
            <div
              className="py-2 my-2 text-white d-flex align-items-center justify-content-center"
              style={{
                width: "80%",
                fontSize: "1rem",
                backgroundColor: "#E92B59",
                textAlign: "center",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <div className="me-2 mt-1">
                <Image
                  src="/assets/images/chat-arad.svg"
                  width={23}
                  height={23}
                />
              </div>
              چت آراد
            </div>
            <div
              className="py-2 mt-2   text-white d-flex align-items-center justify-content-center"
              style={{
                width: "80%",
                fontSize: "1rem",
                backgroundColor: "#E92B59",
                textAlign: "center",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <div className="me-2 mt-1 ">
                <Image
                  src="/assets/images/network.svg"
                  width={23}
                  height={23}
                />
              </div>
              شبکه های اجتماعی
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Adshow;
