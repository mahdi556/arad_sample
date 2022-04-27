import React from "react";

import style from "./HomeStyles/home.module.css";

const SupportDrawer = () => {
  const [drawer, setDrawer] = React.useState(false);
  return (
    <>
      <div className={`${drawer ? style.sec20_open : style.sec20}  mb-4  `}>
        <div className={`${style.sec21}   `}>
          <div lassName={`${style.sec22}   `}>
            <img src="/assets/images/drawer.svg" width="100%" height="100%" />
          </div>
          <div className={`${style.sec23} `} onClick={() => setDrawer(!drawer)}>
            <img
              src="/assets/images/arrow_right.svg"
              width="100%"
              height="100%"
            />
          </div>
          <div
            className={`${style.sec24}  d-flex flex-column align-items-center col-9 pe-4  `}
          >
            <div className="d-flex mb-3 col-12">
              {!drawer && (
                <img src="/assets/images/phone.svg" width="25%" height="60%" />
              )}
              {drawer && (
                <div
                  className={`${style.sec25}  d-flex  col-12 justify-content-between align-items-center  pt-1  px-4  `}
                >
                  <div>
                    <img
                      src="/assets/images/support1.svg"
                      width={40}
                      height="100%"
                    />
                  </div>
                  <div className="">
                    <h3 className={`${style.sec26}  d-flex      `}>
                      ثبت آگهی تلفنی
                    </h3>
                    <h1 className={`${style.sec27}  d-flex     `}>09120000</h1>
                  </div>
                </div>
              )}
            </div>
            <div className="d-flex mb-3 col-12">
              {!drawer && (
                <img
                  src="/assets/images/message.svg"
                  width="25%"
                  height="60%"
                />
              )}
              {drawer && (
                <div
                  className={`${style.sec28}  d-flex  col-12 justify-content-between align-items-center py-1 px-4 `}
                >
                  <div>
                    <img
                      src="/assets/images/support2.svg"
                      width={35}
                      height="100%"
                    />
                  </div>
                  <div className=" ">
                    <h1 className={`${style.sec27}  d-flex     `}>
                      چت با کاربران
                    </h1>
                  </div>
                </div>
              )}
            </div>
            <div className="d-flex mb-3 col-12">
              {!drawer && (
                <img
                  src="/assets/images/headphone.svg"
                  width="25%"
                  height="60%"
                />
              )}
              {drawer && (
                <div
                  className={`${style.sec29}  d-flex  col-12 justify-content-between align-items-center pt-2 pb-1 px-4 `}
                >
                  <div>
                    <img
                      src="/assets/images/support3.svg"
                      width={35}
                      height="100%"
                    />
                  </div>
                  <div className=" ">
                    <h1 className={`${style.sec27}  d-flex     `}>
                      چت با پشتیبانی
                    </h1>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportDrawer;
