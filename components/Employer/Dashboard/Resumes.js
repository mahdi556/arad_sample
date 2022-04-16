import { useState } from "react";
import EmployeeBank from "./EmployeeBank";
import RecievedResume from "./RecievedResume";
import SavedResume from "./SavedResume";
const Resumes = ({ data }) => {
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
            رزومه های دریافت شده
          </div>
          <div
            className={
              tab == 2
                ? "col-4 py-2 middlesec jobAds-selected-top"
                : "col-4 py-2 middlesec "
            }
            onClick={() => setTab(2)}
          >
            بانک افراد جویای کار
          </div>
          <div
            className={
              tab == 2
                ? "col-4 py-2 leftsec jobAds-selected-top"
                : "col-4 py-2 leftsec "
            }
            onClick={() => setTab(3)}
          >
            پوشه رزومه های ذخیره شده
          </div>
        </div>
        {tab == 1 ? (
          <RecievedResume />
        ) : tab == 2 ? (
          <EmployeeBank />
        ) : (
          <SavedResume />
        )}
      </div>
    </>
  );
};
export default Resumes;
