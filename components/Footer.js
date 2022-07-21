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
          bottom: "50%",
          right: 0,
          zIndex: -2,
        }}
      />
      <img
        className="d-none d-lg-block"
        src="/assets/images/leftbuild.png"
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
          {/* <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="footer_text_item">
              <span className="dot "></span>آزمون های استخدامی
            </h3>
          </div> */}
        </div>
        <div className="col-lg-2 col-6   align-items-start">
          <h3 className="footer_text_title">کارفرمایان</h3>
          <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="footer_text_item">
              <span className="dot "></span>ثبت آگهی ضغلی
            </h3>
          </div>
          <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="  footer_text_item">
              <span className="dot"> </span>
              ثبت سازمان به عنوان شرکت معتبر
            </h3>
          </div>
          <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="footer_text_item">
              <span className="dot "></span> جست و جوی افراد جویای کار
            </h3>
          </div>
          {/* <div className="d-flex  align-items-center ">
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
          </div> */}
        </div>
        <div className="col-lg-2 col-6   align-items-start pe-2">
          <h3 className="footer_text_title">خدمات</h3>
          <div className="d-flex flex-row align-items-center pb-1">
            <h3 className="footer_text_item">
              <span className="dot "></span>دانستنی های استخدام
            </h3>
          </div>
        </div>

        <div
          className="d-flex col-lg-6    align-items-center   justify-content-center  flex-wrap      pb-2"
          style={{
            paddingTop: "5%",
            paddingLeft: 130,
          }}
        >
          {/* <div className="   col-6  col-xl-3      ">
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
          </div> */}
          <div
            className="d-flex flex-column me-3 col-6  col-xl-3 "
            style={{
              height: 100,
            }}
          >
            <div
              className="      "
              style={{
                width: 100,
              }}
            >
              <img
                src="/assets/images/download_box.png"
                width={160}
                height={70}
              />
            </div>
            <div className="col-12  col-xl-6  position-relative  mt-auto  ms-3 wrapper ">
              {/* <div className="col-12 footer_social"> 
                    شبکه های اجتماعی
              </div> */}
              <div className="contents">
                {/* <div className="inner">These are the contents of this div</div> */}
              <div className="d-flex     align-items-center  footer-left-columns inner justify-content-between">
                <div className=" col-3   ">
                  <div className="footer_icon-wrapper">
                    <img src="/assets/images/telegram_2.svg" height={18} />
                  </div>
                </div>
                <div className="  col-3    ">
                  <div className="footer_icon-wrapper">
                    <img src="/assets/images/youtube_1.svg" height={18} />
                  </div>
                </div>
                <div className=" col-3    ">
                  <div className="footer_icon-wrapper">
                    <img src="/assets/images/dribbble_1.svg" height={18} />
                  </div>
                </div>
                <div className="   col-3  ">
                  <div className="footer_icon-wrapper">
                    <img src="/assets/images/insta.svg" height={18} />
                  </div>
                </div>
              </div>
              </div>
                <div className="col-12 footer_social "> 
                    شبکه های اجتماعی
              </div>

            </div>
          </div>

          <div
            className="  col-6 col-sm-2 col-md-3 col-lg-4  col-xl-3    "
            style={{
              marginRight: 30,
            }}
          >
            {/* <div
              className=" d-flex    align-items-center justify-content-center"
              style={{
                backgroundColor: "#fff",
                borderRadius: "2.5rem",
                height: 95,
                width: "80%",
              }}
            > */}
            {/* <div
                className="d-flex col-9 justify-content-center align-items-center ishadow "
                style={{
                  backgroundColor: "#38a2cf",
                  borderRadius: '1.7rem',
                  height: "80%",
                }}
              > */}
            <div className="d-flex">
              <img
                className="me-4"
                src="/assets/images/enemad.png"
                width={100}
                height={100}
              />
              <img
                className="me-4"
                src="/assets/images/enemad.png"
                width={100}
                height={100}
              />
              <img src="/assets/images/enemad.png" width={100} height={100} />
            </div>
            {/* </div> */}
            {/* </div> */}
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
