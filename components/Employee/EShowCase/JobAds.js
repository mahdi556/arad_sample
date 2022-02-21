import { useState } from "react";
import EAdShow from "./EAdShow";
import JobAsList from "./JobAsList";

const JobAds = () => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <div className="d-flex col-12 mt-5 justify-content-center jobAds bg-white mb-5">
        <div className="col-4 py-2 rightsec1" onClick={() => setTab(1)}>همه فرصت های شغلی</div>
        <div className="col-4 py-2 middlesec1" onClick={() => setTab(1)}>فرصت های شغلی فعال</div>
        <div className="col-4 py-2 leftsec1" onClick={() => setTab(3)}>
          کارشناسی ارشد شبکه های اجتماعی
        </div>
      </div>

      {tab == 1 ? <JobAsList /> : <EAdShow />}
    </>
  );
};
export default JobAds;
