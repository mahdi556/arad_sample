import { useState } from "react";
import ECProfile from "../../Employee/EShowCase/ECProfile";
import JobAds from "../../Employee/EShowCase/JobAds";
 
const RShowContent = () => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <div className="eShowContainer mx-auto ">
        <div className="d-flex col-12 justify-content-center mainSec bg-white ">
          <div className="col-4 py-2 rightsec" onClick={() => setTab(1)}>
            پروفایل سازمانی
          </div>
          <div className="col-4 py-2 middlesec" onClick={() => setTab(2)}>
            فرصت های شغلی
          </div>
          <div className="col-4 py-2 leftsec">پست ها</div>
        </div>
        {tab == 1 ? <ECProfile /> : <JobAds /> }
      </div>
    </>
  );
};
export default RShowContent;
