import style from "./HomeStyles/home.module.css";

const HomeTopSection = () => {
  return (
    <>
      <div className={`${style.home_top_section}    `}>
        <div className="d-flex col-6 ">
          <div className="d-flex flex-column align-items-start justify-content-start mx-auto">
            <h2 className={`${style.sec16}  mb-4  `}>بیش از 20 میلیون بیکار</h2>
            <h2 className={`${style.sec16} `}>
              بیش از هزاران کارفرمای نیازمند نیروی کار
            </h2>
            <h2 className={`${style.sec17} mx-auto mt-5 ps-5  `}>
              رفع این نیاز جامعه با چیتیت
            </h2>
          </div>
        </div>
        <div className="col-6 d-flex   align-items-start justify-content-start mx-auto  ">
          {/* <img className="mx-auto"
          style={{
            maxWidth:500,
            maxHeight:500
          }}
          src="/assets/images/ezgif.gif" /> */}
          {/* <video className="mx-auto"
           autoPlay
           loop
            width={500}
            height={500}
            src= "/assets/images/home.mp4"
            style={{
              cursor: "pointer",
            }}
          >
            Your browser does not support the video tag.
          </video> */}
        </div>
        <div
          className={` col-xxl-5 col-xl-6 col-lg-7 ${style.sec19} py-3 px-4  `}
        >
          <div className={`  ${style.sec18} py-3 px-4 `}>
            میخوای استخدام بشی
          </div>

          <h4 className="home-top-sec4 mx-2">یا</h4>
          <div className={`  ${style.sec18_1} py-3 px-4 `}>
            میخوای استخدام کنی؟
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeTopSection;
