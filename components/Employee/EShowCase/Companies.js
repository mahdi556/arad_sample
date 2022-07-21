import { useState } from "react";
 import ActiveCompanies from "./ActiveCompanies";
import FollowCompanies from "./FollowCompanies";
import VipAds from "./VipAds";
 const Companies = ({ data }) => {
  const [tab, setTab] = useState(1);
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
            شرکت های معتبر
          </div>
          <div
            className={
              tab == 2
                ? "col-4 py-2 middlesec jobAds-selected-top"
                : "col-4 py-2 middlesec "
            }
            onClick={() => setTab(2)}
          >
            شرکت های دنبال شونده
          </div>
          <div
            className={
              tab == 3
                ? "col-4 py-2 leftsec jobAds-selected-top"
                : "col-4 py-2 leftsec "
            }
            onClick={() => setTab(3)}
          >
            آگهی های ویژه
          </div>
        </div>
        {tab == 1 ? (
          <ActiveCompanies />
        ) : tab == 2 ? (
          <FollowCompanies />
        ) : (
          <VipAds />
        )}
      </div>
    </>
  );
};
export default Companies;
