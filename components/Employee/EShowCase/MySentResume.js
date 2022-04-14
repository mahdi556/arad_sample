import { useEffect, useState } from "react";
import EAdShow from "./RAdShow";
import JobAsList from "./JobAsList";
import Image from "next/image";
import style from "./styles/eshow.module.css";
import BreakLine from "../Resume/FormInputs/BreakLine";
const MySentResume = () => {
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
          درانتظار
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
              <h4>فروشنده حرفه ای فروشنده حرفه ای</h4>
              <div className="d-flex align-items-center">
                <h5>آزانس دیجیتال راتین </h5>
                <h6 className="ms-2">اصفهان</h6>
              </div>
            </div>
          </div>
          <div className="d-flex col-5 ms-auto  pe-4 align-items-center  ">
            <div className="d-flex col-7 flex-column ms-auto">
              <h6 className={`  ${style.text1} me-3 `}>
                کارفرما برای تاریخ 1/4/1740 درخواست مصاحبه کرده است
              </h6>
              <div className="d-flex">
                <div className={`${style.canselText} d-flex  `}>
                  رد کردن
                  <Image
                    src="/assets/images/accept.svg"
                    height={20}
                    width={20}
                  />
                </div>
                <div className={`${style.acceptText} d-flex mx-2 `}>
                  تایید کردن
                  <Image
                    src="/assets/images/cansel.svg"
                    height={20}
                    width={20}
                  />
                </div>
                <div className={`${style.alls} d-flex  `}>همه مصاحبه ها</div>
              </div>
            </div>
            <div className={`${style.verify_circle}   `}>تائید</div>
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
              <h4>فروشنده حرفه ای فروشنده حرفه ای</h4>
              <div className="d-flex align-items-center">
                <h5>آزانس دیجیتال راتین </h5>
                <h6 className="ms-2">اصفهان</h6>
              </div>
            </div>
          </div>
          <div className="d-flex col-5 ms-auto  pe-4 align-items-center  ">
            <div className={`${style.waiting_circle}  ms-auto `}>
              در انتظار بررسی
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
              <h4>فروشنده حرفه ای فروشنده حرفه ای</h4>
              <div className="d-flex align-items-center">
                <h5>آزانس دیجیتال راتین </h5>
                <h6 className="ms-2">اصفهان</h6>
              </div>
            </div>
          </div>
          <div className="d-flex col-5 ms-auto  pe-4 align-items-center  ">
            <div className={`${style.cansel_circle}  ms-auto `}>رد شده</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MySentResume;
