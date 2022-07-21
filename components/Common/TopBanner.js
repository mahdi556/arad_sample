import { useEffect, useRef, useState } from "react";
import SearchInputs from "./SearchInputs";
import Lottie from "react-lottie";
import animationData from "../Lottie-json/search.json";
const TopBanner = ({ type }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderer: "svg",
  };
  return (
    <>
      <div>
        <div className="top-banner1 ps-4">
          <div className="col-4">
            <Lottie options={defaultOptions} height={500} width={500} />
          </div>
          <div className="col-7 d-flex flex-column align-items-center ms-auto me-5 ">
            <div
              className=" mb-4     "
              style={{
                color: "#fff",
                fontSize: 30,
                fontWeight: "bold",
                paddingTop: "10rem",
                fontFamily: "iranBlack",
                textShadow:' 0px 10px 14px rgba(0, 0, 0, 0.25)'
              }}
            >
              تحصیلات عالی و فرصت های شغلی بازار{" "}
            </div>

            <h2
              className="mb-5 "
              style={{
                color: "#000",
                fontSize: 30,
                fontWeight: "bold",
                fontFamily: "iranBlack",
                textShadow: '0px 10px 14px rgba(0, 0, 0, 0.25)'
              }}
            >
              تضمین کننده موفقیت نیست تا وقتی ندانیم دنبال چه هستیم
            </h2>
            <div className="col-11">
              <SearchInputs type={type} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopBanner;
