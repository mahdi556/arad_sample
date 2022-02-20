import JobAds from "./JobAds";

const EShowContent = () => {
  return (
    <>
      <div className="eShowContainer mx-auto">
        <div className="d-flex col-12 justify-content-center mainSec bg-white">
             
        <div className="col-4 py-2 rightsec">پروفایل سازمانی</div>
        <div className="col-4 py-2 middlesec">فرصت های شغلی</div>
        <div className="col-4 py-2 leftsec">پست ها</div>
        </div>
        <JobAds />
      </div>
    </>
  );
};
export default EShowContent;
