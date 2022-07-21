import AdInformation from "components/Employee/EShowCase/SentResumeComponents/AdInformation";
import BreakLine from "components/Ads/Tools/BreakLine";
import style from "components/Employee/EShowCase/styles/eshow.module.css";
const AllAdPreview = ({ item }) => {
  return (
    <>
      <div className="col-12 d-flex bg-white  py-4" key={item.id}>
        <AdInformation item={item} />
        {item.status == "accepted" ? (
          <div className="d-flex col-6 ms-auto  pe-4 align-items-center  ">
            <div className="d-flex col-7 flex-column ms-auto">
              <h6 className={`  ${style.text1} me-3 `}>
                کارفرما برای تاریخ 1/4/1740 درخواست مصاحبه کرده است
              </h6>
              <div className="d-flex">
                <div className={`${style.canselText} d-flex  `}>
                  رد کردن
                  <img src="/assets/images/cansel.svg" height={20} width={20} />
                </div>
                <div className={`${style.acceptText} d-flex mx-2 `}>
                  تایید کردن
                  <img src="/assets/images/accept.svg" height={20} width={20} />
                </div>
                <div className={`${style.alls} d-flex  `}>همه مصاحبه ها</div>
              </div>
            </div>
            <div className={`${style.verify_circle}   `}>تائید</div>
          </div>
        ) : item.status == "unseen" ? (
          <div className="d-flex col-5 ms-auto  pe-4 align-items-center  ">
            <div className={`${style.waiting_circle}  ms-auto `}>
              در انتظار بررسی
            </div>
          </div>
        ) : item.status == "rejected" ? (
          <div className="d-flex col-5 ms-auto  pe-4 align-items-center  ">
            <div className={`${style.cansel_circle}  ms-auto `}>رد شده</div>
          </div>
        ) : null}
      </div>
      <BreakLine />
    </>
  );
};
export default AllAdPreview;
