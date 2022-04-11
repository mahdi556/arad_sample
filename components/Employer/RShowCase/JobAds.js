import { useEffect, useState } from "react";
import EAdShow from "./RAdShow";
import JobAsList from "./JobAsList";

const JobAds = ({ data }) => {
  const [tab, setTab] = useState(3);
  useEffect(()=>{
    setTab(3)
  },[data])
  return (
    <>
      <div className="d-flex col-12 mt-5 justify-content-center jobAds bg-white mb-5">
        <div
          className={
            tab == 1
              ? "col-4 py-2 rightsec1 jobAds-selected"
              : "col-4 py-2 rightsec1 "
          }
          onClick={() => setTab(1)}
        >
          همه فرصت های شغلی
        </div>
        <div className={
            tab == 2
              ? "col-4 py-2 middlesec1 jobAds-selected"
              : "col-4 py-2 middlesec1 "
          } onClick={() => setTab(1)}>
          فرصت های شغلی فعال
        </div>
        <div className={
            tab == 3
              ? "col-4 py-2 leftsec1 jobAds-selected"
              : "col-4 py-2 leftsec1 "
          } onClick={() => setTab(3)}>
          {data.title}
        </div>
      </div>

      {tab == 1 ? (
        <JobAsList  id={data.user.id} />
      ) : tab == 2 ? (
        <EAdShow />
      ) : (
        <EAdShow data={data} />
      )}
    </>
  );
};
export default JobAds;
