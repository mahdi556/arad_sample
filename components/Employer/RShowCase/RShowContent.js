import { useState } from "react";
import RCProfile from "./RCProfile";
import JobAds from "./JobAds";

const RShowContent = ({ data }) => {
  const [tab, setTab] = useState(2);
  return (
    <>
      <div className="eShowContainer mx-auto pb-5">
        <div className="d-flex col-12 justify-content-center mainSec bg-white ">
          <div
            className={
              tab == 1
                ? "col-6 py-2 rightsec jobAds-selected-top"
                : "col-6 py-2 rightsec "
            }
            onClick={() => setTab(1)}
          >
            پروفایل سازمانی
          </div>
          <div
            className={
              tab == 2
                ? "col-6 py-2 leftsec jobAds-selected-top"
                : "col-6 py-2 leftsec "
            }
            onClick={() => setTab(2)}
          >
            فرصت های شغلی
          </div>
          {/* <div className="col-4 py-2 leftsec">پست ها</div> */}
        </div>
        {tab == 1 ? <RCProfile /> : <JobAds data={data} />}
      </div>
      
    </>
  );
};
export default RShowContent;
