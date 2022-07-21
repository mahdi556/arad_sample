import { useState } from "react";
 import PersonalSetting from "./PersonalSetting";
 const Setting = ({ data }) => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <div className="eShowContainer mx-auto ">
        <div className="d-flex col-12 justify-content-center mainSec bg-white ">
          <div
            className={
              tab == 1
                ? "col-6 py-2 rightsec jobAds-selected-top"
                : "col-6 py-2 rightsec "
            }
            onClick={() => setTab(1)}
          >
            تنظیمات حساب کاربری
          </div>

          <div
            className={
              tab == 2
                ? "col-6 py-2 leftsec jobAds-selected-top"
                : "col-6 py-2 leftsec "
            }
            onClick={() => setTab(2)}
          >
            تنظیمات اطلاع رسانی
          </div>
        </div>
        {tab == 1 ? (
          <PersonalSetting />
        ) : (
          <PersonalSetting />
         
        )}
      </div>
    </>
  );
};
export default Setting;
