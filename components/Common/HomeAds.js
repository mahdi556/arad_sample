import { useEffect, useState } from "react";
import style from "./HomeStyles/home.module.css";
import axios from "../../axios";
import AdBoxNewEmployer from "./AdBoxNewEmployer";
import AdBoxNewEmployee from "./AdBoxNewEmployee";
import { useRouter } from "next/router";
import NavBarItem from "./NavBarItem";

const HomeAds = () => {
  const router = useRouter();
  const [eads, setEads] = useState({});
  const [rads, setRads] = useState({});
  const [sec1, setSec1] = useState(false);
  const [sec2, setSec2] = useState(false);
  const [sec3, setSec3] = useState(false);
  useEffect(() => {
    axios({
      url: "/mainPageAds",
      method: "get",
    })
      .then((response) => {
        setEads(response.data.data.eads);
        setRads(response.data.data.rads);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const width = "50%";
  return (
    <>
      <div
        className="mx-auto"
        style={{
          maxWidth: 2300,
          paddingBottom:150
        }}
      >
        <div
          className="d-flex  justify-content-center mx-auto "
          // style={{
          //   maxWidth: 2300,
          // }}
        >
          <div
            className=" "
            style={{
              width: "46%",
            }}
          >
            <h1 className=" homeColTitel mx-auto ">افراد جویای کار</h1>

            <div
              class="row  gx-3 gy-4   pe-4 pt-0 "
              style={{
                borderLeftStyle: "solid",
                borderLeftColor: "#000",
                borderLeftWidth: 0.5,
              }}
            >
              {eads.length &&
                eads.map((item, key) => (
                  <AdBoxNewEmployee
                    width={" col-xl-12 col-xxl-6 "}
                    data={item}
                    key={item.id}
                  />
                ))}
            </div>
            <h1
              className=" homeButton mx-auto "
              onClick={() =>
                router.push({
                  pathname: "/search",
                  query: { type: "employee" },
                })
              }
            >
              ادامه لیست
            </h1>
          </div>
          <div
            className=" "
            style={{
              width: "46%",
            }}
          >
            <div className="col-12 d-flex justify-content-center">
              <h1 className="d-inline-block homeColTitel mx-auto ">
                آگهی های شغلی
              </h1>
            </div>
            <div class="row  gx-4 gy-4  ms-4 ps-1 ">
              {rads.length &&
                rads.map((item, key) => (
                  <AdBoxNewEmployer
                    width={" col-xl-12 col-xxl-6 "}
                    data={item}
                    key={item.id}
                  />
                ))}
            </div>
            <h1
              className=" homeButton mx-auto "
              onClick={() =>
                router.push({
                  pathname: "/search",
                  query: { type: "employer" },
                })
              }
            >
              ادامه لیست
            </h1>
          </div>
        </div>
        <h3
          style={{
            fontFamily: "iranBlack",
            fontSize: 40,
            marginTop: 150,
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          مراحل ثبت آکهی کارجو و کارفرما
        </h3>
        <div
          className="d-flex col-12  justify-content-center align-items-center"
          style={{}}
        >
          <div
            className="d-flex flex-column col-3 pe-5 pb-5 "
            style={{
              height: 650,
            }}
          >
            <h2
              className="mx-auto mt-auto"
              style={{
                fontFamily: "iranBLack",
                color: "#11999e",
                fontSize: "3.4em",
              }}
            >
              کارجوی عزیز
            </h2>
            <h2
              className="mt-3 mx-auto"
              style={{
                fontFamily: "iranBold",
                color: "#000",
                fontSize: 25,
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              با معرفی درست خود در سه مرحله درخواست های همکاری عالی دریافت کن
            </h2>
            <div
              className="py-2 mt-3 mx-auto"
              style={{
                backgroundColor: "#EC4B72",
                color: "#fff",
                borderRadius: 10,
                textAlign: "center",
                width: "50%",
              }}
            >
              ثبت آگهی کارجو
            </div>
          </div>
          <div className="d-flex flex-column col-4">
            <div
              className={`${style.sec1_image}    `}
              style={{
                marginRight: "-25%",
              }}
            >
              <img
                src="/assets/images/home-images8.png"
                height={650}
                width={720}
              />
            </div>
          </div>
          <div
            className="d-flex flex-column col-3 mb-auto ps-3"
            style={{
              height: 650,
            }}
          >
            <h2
              className="mx-auto  "
              style={{
                fontFamily: "iranBLack",
                color: "#11999e",
                fontSize: "3.4em",
                marginTop: 80,
              }}
            >
              کارفرمای محترم
            </h2>
            <h2
              className="mt-4 mx-auto"
              style={{
                fontFamily: "iranBold",
                color: "#000",
                fontSize: 25,
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              شما میتونی فرصت شغلی رو در سه مرحله معرفی کنی و با کارجوهای زیادی
              مصاحبه کنی
            </h2>
            <div
              className="py-2 mt-3 mx-auto"
              style={{
                backgroundColor: "#EC4B72",
                color: "#fff",
                borderRadius: 10,
                textAlign: "center",
                width: "50%",
              }}
            >
              ثبت آگهی کارجو
            </div>
          </div>
        </div>
        <div
          className="d-flex col-12  justify-content-between align-items-center  "
          style={{
            marginTop: 150,
            paddingRight: 110,
            paddingLeft: 0,
          }}
        >
          <div className="d-flex flex-column col-5 ">
            <h2 className={`  ${style.sec3} me-3 `}>ارزش رزومه ویدیویی</h2>
            <h4 className={`  ${style.sec4} me-3 col-12 mt-4  `}>
              به عنوان یه کارجو میتونی از قابلیت رزومه ویدیویی استفاده کنی و
              نسبت به بقیه شانس بیشتری برای استخدام شدن داشته باشی و با این
              رزومه ویدیویی خیلی متفاوت تر و گویا تر میتونی خودتو معرفی کنی
            </h4>
            <div className={`  ${style.sec5} py-2 mt-3  `} style={{}}>
              ساخت رزومه ویدیویی
            </div>
          </div>
          <div
            className="col-6   ms-auto"
            style={{
              marginLeft: -60,
            }}
          >
            <img
              className="ms-auto"
              src="/assets/images/home_image3.png"
              height={310}
              width={540}
            />
          </div>
        </div>
        <div
          className="d-flex col-12 px-5 justify-content-center align-items-start  "
          style={{
            marginTop: 150,
          }}
        >
          <div className="col-12 d-flex flex-column flex-wrap  align-items-center position-relative ">
            <h3 className={`  ${style.sec9}   `}>مصــــاحبه آنــلاین</h3>
            <div className="col-12 d-flex flex-wrap" style={{}}>
              <img
                className="mx-auto"
                src="/assets/images/home_image4.png"
                height={400}
                width={680}
              />
            </div>
            <div
              className="d-flex flex-column col-4 position-absolute"
              style={{
                top: "2%",
                right: "4.0%",
              }}
            >
              <div
                className="d-flex align-items-center col-10 "
                style={{
                  marginBottom: 40,
                }}
              >
                <div className="d-flex flex-column">
                  <h5 className={`  ${style.sec7}      `}>
                    تعداد زیادی مصاحبه
                  </h5>
                  <h6 className={`  ${style.sec8}   `}>
                    {" "}
                    در یک بستر تخصصی می توانید با کارجو/کارفرماهای ریادی مصاحبه
                    کنید
                  </h6>
                </div>
                <div className={`  ${style.sec6} px-3 py-3  `}>
                  <img
                    src="/assets/images/home_image5.svg"
                    height={50}
                    width={50}
                  />
                </div>
              </div>
              <div
                className="d-flex align-items-center col-10 "
                style={{
                  marginBottom: 40,
                }}
              >
                <div className="d-flex flex-column">
                  <h5 className={`  ${style.sec7}      `}>
                    تعداد زیادی مصاحبه
                  </h5>
                  <h6 className={`  ${style.sec8}   `}>
                    {" "}
                    در یک بستر تخصصی می توانید با کارجو/کارفرماهای ریادی مصاحبه
                    کنید
                  </h6>
                </div>
                <div className={`  ${style.sec6} px-3 py-3  `}>
                  <img
                    src="/assets/images/home_image5.svg"
                    height={50}
                    width={50}
                  />
                </div>
              </div>
              <div
                className="d-flex align-items-center col-10  "
                style={{
                  marginBottom: 40,
                }}
              >
                <div className="d-flex flex-column">
                  <h5 className={`  ${style.sec7}      `}>
                    تعداد زیادی مصاحبه
                  </h5>
                  <h6 className={`  ${style.sec8}   `}>
                    {" "}
                    در یک بستر تخصصی می توانید با کارجو/کارفرماهای ریادی مصاحبه
                    کنید
                  </h6>
                </div>
                <div className={`  ${style.sec6} px-3 py-3  `}>
                  <img
                    src="/assets/images/home_image5.svg"
                    height={50}
                    width={50}
                  />
                </div>
              </div>
            </div>
            <div
              className="d-flex flex-column col-4 position-absolute ps-4"
              style={{
                top: "2%",
                left: "0%",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-between col-10 "
                style={{
                  marginBottom: 40,
                }}
              >
                <div className={`  ${style.sec6} px-3 py-3 me-4 `}>
                  <img
                    src="/assets/images/home_image5.svg"
                    height={50}
                    width={50}
                  />
                </div>
                <div className="d-flex flex-column">
                  <h5 className={`  ${style.sec7}      `}>
                    تعداد زیادی مصاحبه
                  </h5>
                  <h6 className={`  ${style.sec8}   `}>
                    {" "}
                    در یک بستر تخصصی می توانید با کارجو/کارفرماهای ریادی مصاحبه
                    کنید
                  </h6>
                </div>
              </div>
              <div
                className="d-flex align-items-center justify-content-between col-10  "
                style={{
                  marginBottom: 40,
                }}
              >
                <div className={`  ${style.sec6} px-3 py-3 me-4 `}>
                  <img
                    src="/assets/images/home_image5.svg"
                    height={50}
                    width={50}
                  />
                </div>
                <div className="d-flex flex-column">
                  <h5 className={`  ${style.sec7}      `}>
                    تعداد زیادی مصاحبه
                  </h5>
                  <h6 className={`  ${style.sec8}   `}>
                    {" "}
                    در یک بستر تخصصی می توانید با کارجو/کارفرماهای ریادی مصاحبه
                    کنید
                  </h6>
                </div>
              </div>
              <div
                className="d-flex align-items-center justify-content-between col-10  "
                style={{
                  marginBottom: 40,
                }}
              >
                <div className={`  ${style.sec6} px-3 py-3 me-4 `}>
                  <img
                    src="/assets/images/home_image5.svg"
                    height={50}
                    width={50}
                  />
                </div>
                <div className="d-flex flex-column">
                  <h5 className={`  ${style.sec7}      `}>
                    تعداد زیادی مصاحبه
                  </h5>
                  <h6 className={`  ${style.sec8}   `}>
                    {" "}
                    در یک بستر تخصصی می توانید با کارجو/کارفرماهای ریادی مصاحبه
                    کنید
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`    d-flex col-12      justify-content-center align-items-center mt-5   `}
        >
          <div className={`  ${style.sec12} d-flex mx-auto no-wrap  `}>
            <div
              className="d-flex flex-column col-6 justify-content-center align-items-start    "
              style={{
                paddingRight: 100,
                height: 550,
              }}
            >
              <h3 className={`  ${style.sec10} col-10     `}>
                دانلود اپلیکیشن چیتیت
              </h3>
              <h5 className={`  ${style.sec11}  col-10  mt-2`}>
                با نصب اپلیکیشن چیتیت استخدام دسترسی سریع و راحت در هر مکان و هر
                زمانی به آگهی های کارجویان و کارفرمایان دسترسی داشته باشید و از
                آنها در اولین فرصت با خبر شوید
              </h5>
              <div className="d-flex col-12 mt-2">
                <div className="me-3">
                  <img
                    src="/assets/images/home_image9.png"
                    height={30}
                    width={100}
                  />
                </div>
                <div>
                  <img
                    src="/assets/images/home_image10.png"
                    height={30}
                    width={100}
                  />
                </div>
              </div>
            </div>
            <div
              className="d-flex col-6 ms-auto align-items-center "
              style={{
                marginTop: -30,
              }}
            >
              <img
                src="/assets/images/home_image6.png"
                height={390}
                width={600}
              />
            </div>
          </div>
        </div>
        <div className="d-flex col-12 mx-auto px-5 justify-content-start align-items-center mt-5 py-5">
          <div className="col-7 d-flex flex-column ps-5">
            <h3 className={`  ${style.sec13} mb-4  `}>هدف چیتیت چیست</h3>
            <div>
              <div
                className={`  ${style.sec14_1}  d-flex justify-content-between align-items-center col-8 ps-3 pe-1 `}
                onClick={() => setSec1(!sec1)}
              >
                <h3 className={`  ${style.sec14} col-6 mt-2  `}>
                  هدف چیتیت چیست
                </h3>
                {/* <div className="drop-arrow"> */}
                <div className={`${sec1 ? "arrow" : ""}`}>
                  {sec1 && (
                    <img
                      className="img-fluid  "
                      src="../../../../assets/images/arrow_double.svg"
                      width="80%"
                    />
                  )}
                </div>
                <div className={`${!sec1 ? "arrow" : ""}`}>
                  {!sec1 && (
                    <img
                      className="img-fluid  "
                      src="../../../../assets/images/arrow_double2.svg"
                      width="80%"
                    />
                  )}
                </div>
                {/* </div> */}
              </div>
              <div
                className={`${
                  sec1 ? style.sec40_open : style.sec40
                } col-8 mt-2 ps-3 `}
              >
                ما با بررسی و در ک نیاز جامعه در حوزه استخدام تصمیم گرفتیم به
                عنوان یک پل ارتباطی هوشمند بین کارجو و کارفرما قرار بگیریم همه
                اقشار جویای کار از کارگز ساده تا افراد متخصص در حوزه های مختلف
                را به سمت شغل مورد نظرشان سوق دهیم. یک ارتباط هوشمند در هر کجایی
                که هستید خود را به همه صاحبین کسب و کار معرفی کنید و بدون اتلاف
                وقت به کار مورد علاقه خود مشغول شوید.
              </div>
            </div>
            <img
              src="/assets/images/break_line.svg"
              height={10}
              width={500}
            />
            <div>
              <div
                className={`  ${style.sec14_1}  d-flex justify-content-between align-items-center col-8 ps-3 pe-1 `}
                onClick={() => setSec2(!sec2)}
              >
                <h3 className={`  ${style.sec14} col-6 mt-2  `}>
                  هدف چیتیت چیست
                </h3>
                {/* <div className="drop-arrow"> */}
                <div className={`${sec2 ? "arrow" : ""}`}>
                  {sec2 && (
                    <img
                      className="img-fluid  "
                      src="../../../../assets/images/arrow_double.svg"
                      width="80%"
                    />
                  )}
                </div>
                <div className={`${!sec2 ? "arrow" : ""}`}>
                  {!sec2&& (
                    <img
                      className="img-fluid  "
                      src="../../../../assets/images/arrow_double2.svg"
                      width="80%"
                    />
                  )}
                </div>
                {/* </div> */}
              </div>
              <div
                className={`${
                  sec2 ? style.sec40_open : style.sec40
                } col-8 mt-2 ps-3 `}
              >
                ما با بررسی و در ک نیاز جامعه در حوزه استخدام تصمیم گرفتیم به
                عنوان یک پل ارتباطی هوشمند بین کارجو و کارفرما قرار بگیریم همه
                اقشار جویای کار از کارگز ساده تا افراد متخصص در حوزه های مختلف
                را به سمت شغل مورد نظرشان سوق دهیم. یک ارتباط هوشمند در هر کجایی
                که هستید خود را به همه صاحبین کسب و کار معرفی کنید و بدون اتلاف
                وقت به کار مورد علاقه خود مشغول شوید.
              </div>
            </div>
              <img
              src="/assets/images/break_line.svg"
              height={10}
              width={500}
            />
            <div>
              <div
                className={`  ${style.sec14_1}  d-flex justify-content-between align-items-center col-8 ps-3 pe-1 `}
                onClick={() => setSec3(!sec3)}
              >
                <h3 className={`  ${style.sec14} col-6 mt-2  `}>
                  هدف چیتیت چیست
                </h3>
                {/* <div className="drop-arrow"> */}
                <div className={`${sec3 ? "arrow" : ""}`}>
                  {sec3 && (
                    <img
                      className="img-fluid  "
                      src="../../../../assets/images/arrow_double.svg"
                      width="80%"
                    />
                  )}
                </div>
                <div className={`${!sec3 ? "arrow" : ""}`}>
                  {!sec3 && (
                    <img
                      className="img-fluid  "
                      src="../../../../assets/images/arrow_double2.svg"
                      width="80%"
                    />
                  )}
                </div>
                {/* </div> */}
              </div>
              <div
                className={`${
                  sec3 ? style.sec40_open : style.sec40
                } col-8 mt-2 ps-3 `}
              >
                ما با بررسی و در ک نیاز جامعه در حوزه استخدام تصمیم گرفتیم به
                عنوان یک پل ارتباطی هوشمند بین کارجو و کارفرما قرار بگیریم همه
                اقشار جویای کار از کارگز ساده تا افراد متخصص در حوزه های مختلف
                را به سمت شغل مورد نظرشان سوق دهیم. یک ارتباط هوشمند در هر کجایی
                که هستید خود را به همه صاحبین کسب و کار معرفی کنید و بدون اتلاف
                وقت به کار مورد علاقه خود مشغول شوید.
              </div>
            </div>
          </div>

          <div className="col-4 "
          style={{marginRight:90}}
          >
            <img
              src="/assets/images/home_image11.png"
              height={400}
              width={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAds;
