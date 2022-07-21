import { useEffect, useState } from "react";
import MySentResume from "./MySentResume";
import SuggestAds from "./SuggestAds";
import SavedAds from "./SavedAds";
const EShowContent = ({ section }) => {
  const [tab, setTab] = useState(1);
  useEffect(() => {
    section == "suggestedAds"
      ? setTab(2)
      : section == "savedAds"
      ? setTab(3)
      : section == "sentResume"
      ? setTab(1)
      : null;
  }, [section]);
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
          <div
            className={
              tab == 3
                ? "col-4 py-2 leftsec jobAds-selected-top"
                : "col-4 py-2 leftsec "
            }
            onClick={() => setTab(3)}
          >
            شغل های ذخیره شده
          </div>
        </div>
        {tab == 1 ? <MySentResume /> : tab == 2 ? <SuggestAds /> : <SavedAds />}
      </div>
    </>
  );
};
export default EShowContent;
