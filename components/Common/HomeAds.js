  
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
                  pathname: "/eadslist",
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
            <div class="row    gx-3 gy-4  ms-4 ps-1 ">
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
                  pathname: "/eadslist",
                  query: { type: "employee" },
                })
              }
            >
              ادامه لیست
            </h1>
          </div>
        </div>
        <div className="d-flex col-12 px-5 justify-content-between align-items-center">
          <div className="d-flex flex-column col-3 ">
            <h2
              className="mx-auto"
              style={{
                fontFamily: "iranBLack",
                color: "#11999e",
                fontSize: 50,
              }}
            >
              کارجوی عزیز
            </h2>
            <h2
              className="mt-5 mx-auto"
              style={{
                fontFamily: "iranBold",
                color: "#000",
                fontSize: 30,
                textAlign: "center",
              }}
            >
              با معرفی درست خود در سه مرحله درخواست های همکاری عالی دریافت کن
            </h2>
            <div
              className="py-2 mt-5 mx-auto"
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
            <div className={`${style.sec1_image}    `}>
                <img
                src="/assets/images/home_image2.svg"
                height={500}
                width={500}
              />
            </div>
          </div>
          <div className="d-flex flex-column col-3 ">
            <h2
              className="mx-auto"
              style={{
                fontFamily: "iranBLack",
                color: "#11999e",
                fontSize: 50,
              }}
            >
              کارفرمای محترم
            </h2>
            <h2
              className="mt-5 mx-auto"
              style={{
                fontFamily: "iranBold",
                color: "#000",
                fontSize: 30,
                textAlign: "center",
              }}
            >
              شما میتونی فرصت شغلی رو در سه مرحله معرفی کنی و با کارجوهای زیادی
              مصاحبه کنی
            </h2>
            <div
              className="py-2 mt-5 mx-auto"
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
        <div className="d-flex col-12 px-5 justify-content-between align-items-center mt-5">
          <div className="d-flex flex-column col-5 ">
            <h2 className={`  ${style.sec3} me-3 `}>ارزش رزومه ویدیویی</h2>
            <h4 className={`  ${style.sec4} me-3 col-10 mt-4  `}>
              به عنوان یه کارجو میتونی از قابلیت رزومه ویدیویی استفاده کنی و
              نسبت به بقیه شانس بیشتری برای استخدام شدن داشته باشی و با این
              رزومه ویدیویی خیلی متفاوت تر و گویا تر میتونی خودتو معرفی کنی
            </h4>
            <div
              className={`  ${style.sec5} py-2 mt-5  `}
              style={{
                backgroundColor: "#EC4B72",
                color: "#fff",
                borderRadius: 10,
                textAlign: "center",
                width: "40%",
              }}
            >
              ساخت رزومه ویدیویی
            </div>
          </div>
          <div className="col-5">
              {/* <img
              src="/assets/images/home_image3.png"
              height={400}
              width={500}
            /> */}
          </div>
        </div>
        <div className="d-flex col-12 px-5 justify-content-center align-items-start mt-5">
          <div className="col-12 d-flex flex-column flex-wrap  align-items-center position-relative ">
            <h3 className={`  ${style.sec9}   `}>مصــــاحبه آنــلاین</h3>
            <div className="col-12 d-flex flex-wrap" style={{}}>
                {/* <img className="mx-auto"
                src="/assets/images/home_image4.png"
                height={500}
                width={800}
              /> */}
            </div>
            <div
              className="d-flex flex-column col-4 position-absolute"
              style={{
                top: "20%",
                right: 0,
              }}
            >
              <div className="d-flex align-items-center col-10 mb-5">
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
              <div className="d-flex align-items-center col-10 mb-5">
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
              <div className="d-flex align-items-center col-10 mb-5">
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
                top: "20%",
                left: 0,
              }}
            >
              <div className="d-flex align-items-center justify-content-between col-10 mb-5">
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
              <div className="d-flex align-items-center justify-content-between col-10 mb-5">
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
              <div className="d-flex align-items-center justify-content-between col-10 mb-5">
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
          className={`  ${style.sec12} d-flex col-11 mx-auto px-5 justify-content-between align-items-center mt-5 py-5 `}
        >
          <div className="d-flex flex-column col-6 justify-content-start align-items-start">
            <h3 className={`  ${style.sec10} col-10  `}>
              دانلود اپلیکیشن چیتیت
            </h3>
            <h5 className={`  ${style.sec11}  col-8   mt-4`}>
              با نصب اپلیکیشن چیتیت استخدام دسترسی سریع و راحت در هر مکان و هر
              زمانی به آگهی های کارجویان و کارفرمایان دسترسی داشته باشید و از
              آنها در اولین فرصت با خبر شوید
            </h5>
            <div className="d-flex col-12 mt-5">
              <div className="me-3">
                  {/* <img
                  src="/assets/images/home_image9.png"
                  height={30}
                  width={100}
                /> */}
              </div>
              <div>
                  {/* <img
                  src="/assets/images/home_image10.png"
                  height={30}
                  width={100}
                /> */}
              </div>
            </div>
          </div>
          <div className="d-flex col-6 ms-auto justify-content-end">
              {/* <img
              src="/assets/images/home_image6.png"
              height={300}
              width={600}
            /> */}
          </div>
        </div>
        <div className="d-flex col-11 mx-auto px-5 justify-content-between align-items-start mt-5 py-5">
          <div className="col-8 d-flex flex-column">
            <h3 className={`  ${style.sec13}   `}>هدف چیتیت چیست</h3>
            <h3 className={`  ${style.sec14}  mt-3 `}>هدف چیتیت چیست</h3>
            <h6 className={`  ${style.sec15}  col-8   mt-2`}>
              ما با بررسی و در ک نیاز جامعه در حوزه استخدام تصمیم گرفتیم به
              عنوان یک پل ارتباطی هوشمند بین کارجو و کارفرما قرار بگیریم همه
              اقشار جویای کار از کارگز ساده تا افراد متخصص در حوزه های مختلف را
              به سمت شغل مورد نظرشان سوق دهیم. یک ارتباط هوشمند در هر کجایی که
              هستید خود را به همه صاحبین کسب و کار معرفی کنید و بدون اتلاف وقت
              به کار مورد علاقه خود مشغول شوید.
            </h6>
            <div className="col-12">
                <img src="/assets/images/Line433.svg" height={50} width={500} />
            </div>
            <h3 className={`  ${style.sec14}  mt-3 `}>از کجا شروع کنم؟</h3>
            <h6 className={`  ${style.sec15}  col-8   mt-2`}>
              ما با بررسی و در ک نیاز جامعه در حوزه استخدام تصمیم گرفتیم به
              عنوان یک پل ارتباطی هوشمند بین کارجو و کارفرما قرار بگیریم همه
              اقشار جویای کار از کارگز ساده تا افراد متخصص در حوزه های مختلف را
              به سمت شغل مورد نظرشان سوق دهیم. یک ارتباط هوشمند در هر کجایی که
              هستید خود را به همه صاحبین کسب و کار معرفی کنید و بدون اتلاف وقت
              به کار مورد علاقه خود مشغول شوید.
            </h6>
            <div className="col-12">
                <img src="/assets/images/Line433.svg" height={50} width={500} />
            </div>
            <h3 className={`  ${style.sec14}  mt-3 `}>
              بعد از ثبت نام چگونه از درخواست های مطرح شده مطلع شوم؟
            </h3>
            <h6 className={`  ${style.sec15}  col-8   mt-2`}>
              ما با بررسی و در ک نیاز جامعه در حوزه استخدام تصمیم گرفتیم به
              عنوان یک پل ارتباطی هوشمند بین کارجو و کارفرما قرار بگیریم همه
              اقشار جویای کار از کارگز ساده تا افراد متخصص در حوزه های مختلف را
              به سمت شغل مورد نظرشان سوق دهیم. یک ارتباط هوشمند در هر کجایی که
              هستید خود را به همه صاحبین کسب و کار معرفی کنید و بدون اتلاف وقت
              به کار مورد علاقه خود مشغول شوید.
            </h6>
          </div>
          <div className="col-4">
              <img
              src="/assets/images/home_image11.png"
              height={500}
              width={600}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAds;
