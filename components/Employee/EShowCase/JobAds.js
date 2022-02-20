import EAdShow from "./EAdShow";
import JobAsList from "./JobAsList";

const JobAds = () => {
  return (
    <>
      <div className="d-flex col-12 mt-5 justify-content-center jobAds bg-white mb-5">
        <div className="col-4 py-2 rightsec1">همه فرصت های شغلی</div>
        <div className="col-4 py-2 middlesec1">فرصت های شغلی فعال</div>
        <div className="col-4 py-2 leftsec1">کارشناسی ارشد شبکه های اجتماعی</div>
      </div>
       
      {/* <JobAsList /> */}
      <EAdShow />
     
    </>
  );
};
export default JobAds;
