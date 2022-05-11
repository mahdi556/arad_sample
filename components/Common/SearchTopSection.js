import style from "./HomeStyles/home.module.css";
 
const SearchTopSection = () => {
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
            {/* <img src="/assets/images/homeTop.png" height="400vh" width={700} /> */}
          </div>
        </div>
        <div className="col-6 d-flex   align-items-start justify-content-start mx-auto ">
          {/* <img className="mx-auto" src="/assets/images/ezgif.gif" /> */}
        </div>
      </div>
     
    </>
  );
};
export default SearchTopSection;
