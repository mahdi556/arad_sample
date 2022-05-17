import style from "./HomeStyles/home.module.css";

const HomeTopSection = () => {
  return (
    <>
      <div className="col-12 d-flex ">
        <div className={`${style.home_top_section}     `}>
          <div className="d-flex col-7 ">
            <div
              className="d-flex flex-column align-items-start justify-content-start "
              style={{
                marginRight: 110,
              }}
            >
              <h2
                className={`${style.sec16}   ms-5 `}
                style={{
                  marginBottom: 40,
                }}
              >
                بیش از 20 میلیون بیکار
              </h2>
              <h2 className={`${style.sec16} ms-5 `}>
                بیش از هزاران کارفرمای نیازمند نیروی کار
              </h2>
              <h2
                className={`${style.sec17}   mt-4 ps-5   `}
                style={{
                  marginRight: 120,
                }}
              >
                رفع این نیاز جامعه با چیتیت
              </h2>
            </div>
          </div>
          <div className="col-6 d-flex   align-items-start justify-content-start   ">
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
            className={` ${style.sec19}  `}
          >
            <div className={`  ${style.sec18}   `}  >
              میخوای استخدام بشی
            </div>

            <h4 className="home-top-sec4 mx-4 ">یا</h4>
            <div className={`  ${style.sec18_1}  `}>
              میخوای استخدام کنی؟
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeTopSection;
