const Footer = () => {
  return (
    
    <div className="footer1-background   ">
      <img
        className="d-none d-lg-block"
        src="/assets/images/wave1.png"
        sizes="cover"
        width="100%"
        // height="95%"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: -1,
        }}
      />
      <img
        className="d-none d-lg-block"
        src="/assets/images/rightbuild.png"
        sizes="cover"
        width="35%"
        height="95%"
        style={{
          position: "absolute",
          bottom: "42%",
          right: 0,
          zIndex: -2,
        }}
      />
      <img
        className="d-none d-lg-block"
        src= "/assets/images/leftbuild.png"
        sizes="cover"
        width="32%"
        height="95%"
        style={{
          position: "absolute",
          bottom: "28%",
          left: 0,
          zIndex: -2,
        }}
      />

      <div className="row col-12">
        <div className="col-lg-2 col-6    align-items-start">
          <h3 className="footer_text_title">کارجویان</h3>
          <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="footer_text_item">
              <span className="dot "></span>ثبت آگهی
            </h3>
          </div>
          <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="  footer_text_item">
              <span className="dot"> </span>
              کار در منزل(دورکاری)
            </h3>
          </div>
          <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="footer_text_item">
              <span className="dot "></span>ساخت رزومه حرفه ای (رایگان)
            </h3>
          </div>
          <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="footer_text_item">
              <span className="dot "></span>جستجو در فرصت های شغلی
            </h3>
          </div>
          <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="footer_text_item">
              <span className="dot "></span>آزمون های استخدامی
            </h3>
          </div>
        </div>
        <div className="col-lg-2 col-6   align-items-start">
          <h3 className="footer_text_title">کارفرمایان</h3>
          <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="footer_text_item">
              <span className="dot "></span>ثبت آگهی
            </h3>
          </div>
          <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="  footer_text_item">
              <span className="dot"> </span>
              کار در منزل(دورکاری)
            </h3>
          </div>
          <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="footer_text_item">
              <span className="dot "></span>ساخت رزومه حرفه ای (رایگان)
            </h3>
          </div>
          <div className="d-flex  align-items-center ">
            <h3 className="footer_text_item">
              {" "}
              <span className="dot "></span>جستجو در فرصت های شغلی
            </h3>
          </div>
          <div className="d-flex  align-items-center">
            <h3 className="footer_text_item">
              {" "}
              <span className="dot "></span>آزمون های استخدامی
            </h3>
          </div>
        </div>
        <div className="col-lg-2 col-6   align-items-start pe-2">
          <h3 className="footer_text_title">خدمات</h3>
          <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="footer_text_item">
              <span className="dot "></span>قوانین اداره کار
            </h3>
          </div>
          <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="footer_text_item">
              <span className="dot "></span>مقالات
            </h3>
          </div>
          <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="footer_text_item">
              <span className="dot "></span>آزمون ها
            </h3>
          </div>
        </div>

        <div className="d-flex col-lg-6    align-items-center     flex-wrap     pb-2"
        style={{
          paddingTop:'5%'
        }}
        
        >
          <div className=" col-6  col-xl-3      ">
            <div className="d-flex  footer-left-columns">
              <div
                className=" d-flex    "
                style={{
                  width: "23%",
                }}
              >
                <div className="footer_icon-wrapper  ">
                  <img
                    src={require("../public/assets/images/download.png")}
                    width="100%"
                  />
                </div>
              </div>
              <div className="d-flex  text-nowrap pt-1  ps-2  ">
                <h3 className="footer-sec2">دانلود اپلیکیشن</h3>
              </div>
            </div>
          </div>
          <div className="   col-6  col-xl-3      ">
            <div className="d-flex  footer-left-columns">
              <div
                className=" d-flex  "
                style={{
                  //  paddingBottom:'0.1rem',
                  width: "23%",
                }}
              >
                <div className="footer_icon-wrapper  ">
                  <img
                    src={require("../public/assets/images/support.png")}
                    style={{}}
                    width="80%"
                  />
                </div>
              </div>
              <div className="d-flex  text-nowrap pt-2 ps-2 me-2 ">
                <h3 className="footer-sec1">0000 000 0912</h3>
              </div>
            </div>
          </div>

          <div className="    col-6  col-xl-3   ">
            <div className="d-flex  gx-1   footer-left-columns">
              <div className=" col-3   ">
                <div className="footer_icon-wrapper">
                  <img
                    src={require("../public/assets/images/web.png")}
                    
                    width="80%"
                  />
                </div>
              </div>
              <div className="  col-3    ">
                <div className="footer_icon-wrapper">
                  <img
                    src={require("../public/assets/images/youtube.png")}
                     
                    width="80%"
                  />
                </div>
              </div>
              <div className=" col-3    ">
                <div className="footer_icon-wrapper">
                  <img
                    src={require("../public/assets/images/twitter.png")}
                     
                    width="80%"
                  />
                </div>
              </div>
              <div className="   col-3  ">
                <div className="footer_icon-wrapper">
                  <img
                    src={require("../public/assets/images/insta.png")}
                     
                    width="80%"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="  col-6 col-sm-2 col-md-3 col-lg-4  col-xl-3 justify-content-start px-2 ">
            <div
              className=" d-flex    align-items-center justify-content-center"
              style={{
                backgroundColor: "#fff",
                borderRadius: "2.5rem",
                height: 95,
                width: "80%",
              }}
            >
              <div
                className="d-flex col-9 justify-content-center align-items-center ishadow "
                style={{
                  backgroundColor: "#38a2cf",
                  borderRadius: '1.7rem',
                  height: "80%",
                }}
              >
                <img
                  src={require("../public/assets/images/enamad.png")}
                  style={{}}
                  width="80%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  icon: {
    backgroundColor: "#38a2cf",
    // borderRadius: 12,
    // padding: 6,
  },
  right_text: {
    color: "#fff",
  },
};

export default Footer;
