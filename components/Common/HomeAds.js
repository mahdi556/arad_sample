 import Image from "next/image";
import AdBoxNew from "../Micapp/Common/MedicalBox";
const HomeAds = () => {
  const width = "50%";
  return (
    <>
    <div className="mx-auto" 
    style={{

      maxWidth:2300
    }}
    >

      <div
        className="d-flex p-2 justify-content-between bg-white ms-4 shadow3 mb-5"
        style={{
          width: 343,
          borderRadius: 15,
        }}
      >
        <div
          className="d-flex flex-column justify-content-between px-3 py-2 col-10 me-2"
          style={{
            backgroundColor: "#C7E4E5",
            borderRadius: 10,
          }}
        >
          <h6>پشتیبان برای شما آگهی ثبت می کند</h6>
          <h2
            className="fw-bold"
            style={{
              fontFamily: "iransansdn",
            }}
          >
            091200000
          </h2>
        </div>
        <div className="">
          <Image src="/assets/images/Group9338.png" height={40} width={40} />
          <Image src="/assets/images/Group9335.png" height={40} width={40} />
        </div>
      </div>
      <div
        className="d-flex  justify-content-center mx-auto "
        // style={{
        //   maxWidth: 2300,
        // }}
      >
        <div
          className=" "
          style={{
            width: "46%",
          }}
        >
          <h1 className=" homeColTitel mx-auto ">افراد جویای کار</h1>

          <div
            class="row  gx-3 gy-4   pe-4 pt-0 "
            style={{
              borderLeftStyle: "solid",
              borderLeftColor: "#000",
              borderLeftWidth: 0.5,
            }}
          >
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
          </div>
          <h1 className=" homeButton mx-auto ">ادامه لیست</h1>
        </div>
        <div
          className=" "
          style={{
            width: "46%",
          }}
        >
          <div className="col-12 d-flex justify-content-center">
            <h1 className="d-inline-block homeColTitel mx-auto ">
              آگهی های شغلی
            </h1>
          </div>
          <div class="row    gx-3 gy-4  ms-4 ps-1 ">
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
            <AdBoxNew width={" col-xl-12 col-xxl-6 "} />
          </div>
          <h1 className=" homeButton mx-auto ">ادامه لیست</h1>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomeAds;
