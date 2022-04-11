import { useState } from "react";
import RCProfile from "./RCProfile";
import JobAds from "./JobAds";

const EShowContent = ({ data }) => {
  const [tab, setTab] = useState(2);
  return (
    <>
      <div className="eShowContainer mx-auto ">
        <div className="d-flex col-12 justify-content-center mainSec bg-white ">
          <div
            className={
              tab == 1
                ? "col-4 py-2 rightsec jobAds-selected-top"
                : "col-4 py-2 rightsec "
            }
            onClick={() => setTab(1)}
          >
            وضعیت درخواست های همکاری از طرف شما
          </div>
          <div
            className={
              tab == 2
                ? "col-4 py-2 middlesec jobAds-selected-top"
                : "col-4 py-2 middlesec "
            }
            onClick={() => setTab(2)}
          >
            شغل های پیشنهادی
          </div>
          <div className="col-4 py-2 leftsec">شغل های ذخیره شده</div>
        </div>
        {tab == 1 ? <RCProfile /> : <JobAds   />}
      </div>
    </>
  );
};
export default EShowContent;
