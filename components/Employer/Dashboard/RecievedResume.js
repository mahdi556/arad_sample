import { useEffect, useState } from "react";
import EAdShow from "./RAdShow";
import JobAsList from "./JobAsList";
import Image from "next/image";
import style from "./styles/rshow.module.css";
import BreakLine from "../../Employee/Resume/FormInputs/BreakLine";
const RecievedResume = () => {
  const [tab, setTab] = useState(3);
  // useEffect(()=>{
  //   setTab(3)
  // },[data])
  return (
    <>
      <div
        className="d-flex col-12 mt-5 justify-content-center jobAds bg-white   "
        style={{
          borderBottom: "#000 1px solid",
        }}
      >
        <div
          className={
            tab == 1
              ? "col-3 py-2 rightsec1 jobAds-selected"
              : "col-3 py-2 rightsec1 "
          }
          onClick={() => setTab(1)}
        >
          دیده نشده
        </div>
        <div
          className={
            tab == 2
              ? "col-3 py-2 middlesec1 jobAds-selected"
              : "col-3 py-2 middlesec1 "
          }
          onClick={() => setTab(2)}
        >
          رد شده
        </div>
        <div
          className={
            tab == 3
              ? "col-3 py-2 middlesec1 jobAds-selected"
              : "col-3 py-2 middlesec1 "
          }
          onClick={() => setTab(3)}
        >
          تائید شده
        </div>
        <div
          className={
            tab == 4
              ? "col-3 py-2 leftsec1 jobAds-selected"
              : "col-3 py-2 leftsec1 "
          }
          onClick={() => setTab(4)}
        >
          نمایش همه
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="col-12 d-flex bg-white   py-4">
          <div className="col-6  d-flex align-items-center px-3">
            <div
              className=" d-flex flex-column   justify-content-center align-items-center shadow2 col-3 "
              style={{
                fontSize: 15,
                borderRadius: 10,
              }}
            >
              <div
                className="d-flex justify-content-center align-items-center "
                style={{
                  backgroundColor: "rgb(17,153,158,0.09)",
                  borderRadius: 10,
                  width: "100%",
                  height: 90,
                }}
              >
                <Image
                  src="/assets/images/adimage.png"
                  width={74}
                  height={74}
                />
              </div>
              <h6
                className="text-center my-auto py-2 "
                style={{
                  fontSize: 14,
                }}
              >
                برقراری ارتباط
              </h6>
            </div>
            <div className="d-flex flex-column px-3">
              <h4 className={`${style.txt1} `}>آگهی طراح ui/ux</h4>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt2} `}>جویای کار طراح ui/ux </h5>
                <h6 className={`${style.txt6} ms-2 `}>(متخصص)</h6>
              </div>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt3} `}> طراح ui/ux </h5>
                <h6 className={`${style.txt5} ms-2 `}>(اصفهان)</h6>
              </div>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt4} `}> دارای سابقه</h5>
              </div>
            </div>
          </div>
          <div className="d-flex col-6 ms-auto  pe-4 align-items-center  ">
            <div className="d-flex col-7 flex-column ms-auto">
              <h6 className={`  ${style.text1} me-3 `}>
                شما با این کاربر درتاریخ 5/1/1400 ساعت 17:45 درخواست مصاحبه کرده
                اید
              </h6>
              <div className="d-flex justify-content-between">
                <div className={`${style.alls} d-flex  `}>
                  تغییر زمان مصاحبه
                </div>
                <div className={`${style.alls} d-flex  `}>مدیریت مصاحبه ها</div>
              </div>
            </div>
          </div>
        </div>
        <BreakLine />
        <div className="col-12 d-flex bg-white   py-4">
          <div className="col-6  d-flex align-items-center px-3">
            <div
              className=" d-flex flex-column   justify-content-center align-items-center shadow2 col-3 "
              style={{
                fontSize: 15,
                borderRadius: 10,
              }}
            >
              <div
                className="d-flex justify-content-center align-items-center "
                style={{
                  backgroundColor: "rgb(17,153,158,0.09)",
                  borderRadius: 10,
                  width: "100%",
                  height: 90,
                }}
              >
                <Image
                  src="/assets/images/adimage.png"
                  width={74}
                  height={74}
                />
              </div>
              <h6
                className="text-center my-auto py-2 "
                style={{
                  fontSize: 14,
                }}
              >
                برقراری ارتباط
              </h6>
            </div>
            <div className="d-flex flex-column px-3">
              <h4 className={`${style.txt1} `}>آگهی طراح ui/ux</h4>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt2} `}>جویای کار طراح ui/ux </h5>
                <h6 className={`${style.txt6} ms-2 `}>(متخصص)</h6>
              </div>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt3} `}> طراح ui/ux </h5>
                <h6 className={`${style.txt5} ms-2 `}>(اصفهان)</h6>
              </div>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt4} `}> دارای سابقه</h5>
              </div>
            </div>
          </div>
          <div className="d-flex col-6 ms-auto  pe-4 align-items-center  ">
            <div className="d-flex col-7 flex-column ms-auto">
              <div className={`${style.sec8} py-2 `}>
                تایید درخواست و درخواست مصاحبه
              </div>
              <h6 className="text-center mb-2">
                ـــــــــــــــــ یا ـــــــــــــــــ{" "}
              </h6>
              <div className={`${style.sec9} py-2 `}>رد کردن درخواست</div>
            </div>
          </div>
        </div>
        <BreakLine />
        <div className="col-12 d-flex bg-white position-relative  py-4">
          <div className="col-6  d-flex align-items-center px-3  opacity-50">
            <div
              className=" d-flex flex-column   justify-content-center align-items-center shadow2 col-3 "
              style={{
                fontSize: 15,
                borderRadius: 10,
              }}
            >
              <div
                className="d-flex justify-content-center align-items-center "
                style={{
                  backgroundColor: "rgb(17,153,158,0.09)",
                  borderRadius: 10,
                  width: "100%",
                  height: 90,
                }}
              >
                <Image
                  src="/assets/images/adimage.png"
                  width={74}
                  height={74}
                />
              </div>
              <h6
                className="text-center my-auto py-2 "
                style={{
                  fontSize: 14,
                }}
              >
                برقراری ارتباط
              </h6>
            </div>
            <div className="d-flex flex-column px-3">
              <h4 className={`${style.txt1} `}>آگهی طراح ui/ux</h4>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt2} `}>جویای کار طراح ui/ux </h5>
                <h6 className={`${style.txt6} ms-2 `}>(متخصص)</h6>
              </div>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt3} `}> طراح ui/ux </h5>
                <h6 className={`${style.txt5} ms-2 `}>(اصفهان)</h6>
              </div>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt4} `}> دارای سابقه</h5>
              </div>
            </div>
          </div>
          <div className={`${style.sec10} `}>درخواست همکاری این کاربر رد شده است
           <h6 className={`${style.txt6} d-inline-block  ms-2 `}>تغییر وضعیت</h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecievedResume;
