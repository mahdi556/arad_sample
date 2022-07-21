import style from "./HomeStyles/home.module.css";
import { useRouter } from "next/router";

const HomeTopSection = () => {
  const router = useRouter();

  return (
    <>
      <div className="col-12 d-flex ">
        <div className={`${style.home_top_section}     `}>
          <div className="d-flex col-6 ">
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
          <div className="col-5  d-flex   align-items-start justify-content-start   ">
            <video
              className=""
              autoPlay
              loop
              width={800}
              height={800}
              src="/assets/images/home.mp4"
              style={{
                cursor: "pointer",
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-2"></div>
          <div className={` ${style.sec19}  `}>
            <div
              className={`${style.sec18} ${style.loader}`}
              onClick={() =>
                router.push({
                  pathname: "/search",
                  query: { type: "employee" },
                })
              }
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              میخوای استخدام بشی
            </div>

            <h4 className="home-top-sec4 mx-4 ">یا</h4>
            <div
              className={`  ${style.sec18_1} ${style.loader2} `}
              onClick={() =>
                router.push({
                  pathname: "/search",
                  query: { type: "employer" },
                })
              }
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              میخوای استخدام کنی؟
            </div>
            {/* <div className={`  ${style.loader}   `}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeTopSection;
