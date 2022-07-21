import AdInformation from "components/Employee/EShowCase/SentResumeComponents/AdInformation";
import BreakLine from "components/Ads/Tools/BreakLine";
import style from "components/Employee/EShowCase/styles/eshow.module.css";
const RejectedAdPreview = ({ item }) => {
  return (
    <>
      <div className="col-12 d-flex bg-white   py-4">
        <AdInformation item={item} />

        <div className="d-flex col-5 ms-auto  pe-4 align-items-center  ">
          <div className={`${style.cansel_circle}  ms-auto `}>رد شده</div>
        </div>
      </div>
      <BreakLine />
    </>
  );
};
export default RejectedAdPreview;
