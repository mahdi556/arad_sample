import Image from "next/image";

const TopBanner = () => {
  return (
    <>
      <div className="top-banner1">
       
          
          <div
            className="row textshadow   "
            style={{
              color: "#fff",
              fontSize: 50,
              fontWeight: "bold",
              paddingTop: "10rem",
            }}
          >
            حرفه ای باشید!
          </div>
          <div
            style={{
              paddingRight:'20rem',
              fontSize: 30,
            }}
            className="d-flex flex-row   textshadow pt-3   "
          >
            <h2 className="d-inline-flex ms-5  text-white">نیاز شغلی خود را عنوان کنید <h2 className="d-inline-flex text-dark ms-3 fw-bold ">ما بر طرف می کنیم</h2></h2>
            
          </div>
         
        <div
           class="d-flex flex-row col-6 intro_sec1   justify-content-between  bg-white px-3   "
        >
          <div class=" col-6   intro2   my-3 ">
            <h6 className="text-black fw-bold ps-3 pt-2 ">
              دسته شغلی یا عبارت کلیدی ...
            </h6>
            <h6 className="fs-11 text-dark ps-3 ">برنامه نویسی</h6>
          </div>
          <div class=" col-4  intro2    my-3 ">
            <h6 className="text-black ps-3 pt-2 fw-bold "> موقعیت مکانی </h6>
            <h6 className="fs-11 text-dark ps-3 ">اصفهان</h6>
          </div>
          <div class="d-flex col-1 intro3  justify-content-center align-items-center   my-3 ">
            <Image src="/assets/images/magnifire2.png" height={34} width={34} />
          </div>
        </div>
      </div>
    </>
  );
};
export default TopBanner;
