import { useEffect, useState } from "react";
import EAdShow from "./RAdShow";
import JobAsList from "./JobAsList";

const JobAds = ({ data }) => {
  const [tab, setTab] = useState(3);
  const [twoTab, setTwoTab] = useState(false);
  const [tabClass1, setTabClass1] = useState(
    tab == 1 ? "col-4 py-2 rightsec1 jobAds-selected" : "col-4 py-2 rightsec1 "
  );
  const [tabClass2, setTabClass2] = useState(
    tab == 2
      ? "col-4 py-2 middlesec1 jobAds-selected"
      : "col-4 py-2 middlesec1 "
  );
  useEffect(() => {
    if (twoTab) {
      if (tab == 2) {
        setTabClass2("col-6 py-2 leftsec1 jobAds-selected");
        setTabClass1("col-6 py-2 rightsec1 ");
      } else {
        setTabClass2("col-6 py-2 leftsec1 ");
        setTabClass1("col-6 py-2 rightsec1 jobAds-selected");
      }
    } else {
      if (tab == 2) {
        setTabClass2("col-4 py-2 middlesec1 jobAds-selected");
      } else {
        setTabClass2("col-4 py-2 middlesec1 ");
      }
      if (tab == 1) {
        setTabClass1("col-4  py-2 rightsec1 jobAds-selected");
      } else {
        setTabClass1("col-4 py-2 rightsec1 ");
      }
    }
  }, [twoTab, tab]);
  useEffect(() => {
    setTwoTab(false);
    setTab(3)
  }, [data]);
  const handleTwoTab = () => {
    setTwoTab(true);
    setTab(1)
  };
  return (
    <>
      <div className="d-flex col-12 mt-5 justify-content-center jobAds bg-white mb-5">
        <div className={tabClass1} onClick={() => setTab(1)}>
          همه فرصت های شغلی
        </div>
        <div className={tabClass2} onClick={() => setTab(2)}>
          فرصت های شغلی فعال
        </div>
        {!twoTab && (
          <div
            className={
              tab == 3
                ? "col-4 d-flex py-2 px-4 leftsec1 jobAds-selected"
                : "col-4 d-flex py-2 px-2 leftsec1 "
            }
          >
            <h5 className="col-8" onClick={() => setTab(3)}>{data.title}</h5>
            <img
              className="ms-auto"
              src="/assets/images/close_button.svg"
              width={25}
              onClick={() => handleTwoTab(1)}
            />
          </div>
        )}
      </div>

      {tab == 1 ? (
        <JobAsList id={data.user.id} />
      ) : tab == 2 ? (
        <JobAsList id={data.user.id} />
      ) : (
        <EAdShow data={data} />
      )}
    </>
  );
};
export default JobAds;
