import { useState } from "react";
import ECProfile from "./ECProfile";
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
            پروفایل سازمانی
          </div>
          <div
            className={
              tab == 2
                ? "col-4 py-2 middlesec jobAds-selected-top"
                : "col-4 py-2 middlesec "
            }
            onClick={() => setTab(2)}
          >
            فرصت های شغلی
          </div>
          <div className="col-4 py-2 leftsec">پست ها</div>
        </div>
        {tab == 1 ? <ECProfile /> : <JobAds data={data} />}
      </div>
    </>
  );
};
export default EShowContent;
