import Image from "next/image";
import { useEffect, useState } from "react";
 import { useRouter } from 'next/router'
const RightMenu = () => {
 
  const router= useRouter()
  return (
    <>
      <div
        className="pt-3"
        style={{
          width: "20%",
          backgroundColor: "#fff",
          borderTopLeftRadius: 25,
          // marginBottom: 200,
          // height: "100%",
          zIndex: 10,
          //  overflow: 'hidden',
          position: "absolute",
          top: "5%",
          right: 0,
        }}
      >
        <div className="d-flex ps-5 pt-4 align-items-center">
          <Image src="/assets/images/Eavatar.png" width={50} height={50} />
          <h4
            className="ms-3"
            style={{
              fontSize: 19,
            }}
          >
            مهدی حقیقتی
          </h4>
        </div>
        <div className="d-flex ms-4 mt-5">
          <div>
            <Image src="/assets/images/edashboard.png" width={20} height={20} />
          </div>

          <h6
            className="ms-3"
            style={{
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            پیشخوان
          </h6>
        </div>
        <div className="d-flex ms-4 mt-4">
          <div>
            <Image
              src="/assets/images/einterviews.png"
              width={20}
              height={20}
            />
          </div>

          <h6
            className="ms-3"
            style={{
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            مصاحبه ها
          </h6>
        </div>
        <div className="d-flex ms-4 mt-4">
          <div>
            <Image src="/assets/images/ead.png" width={20} height={20} />
          </div>

          <h6
            className="ms-3"
            style={{
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            درج آگهی
          </h6>
        </div>
        <div>
          <div className="d-flex ms-4 mt-4" onClick={() => toggle(2)}>
            <div>
              <Image src="/assets/images/eresume.png" width={20} height={20} />
            </div>

            <h6
              className="ms-3"
              style={{
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              رزومه
            </h6>
          </div>
          <div
            className="ps-3 ms-4 mt-3  "
            style={{
                borderRightStyle: "solid",
                borderRightColor: "#000",
                borderWidth: 2,
                // visibility: "hidden",
              }}
          >
            <h6 className="mt-2 py-2 ps-2 EsubItem "
              onClick={()=>router.push('/employee/create-resume')}
            >تکمیل و دانلود رزومه</h6> 
             <h6 className="mt-2 py-2 ps-2 EsubItem"  
             onClick={()=>router.push('/employee/sent-resume')}
             >
              پیگیری رزومه های ارسال شده
            </h6>
          </div>

        </div>
        <div>
          <div className="d-flex ms-4 mt-4">
            <div>
              <Image src="/assets/images/ejobs.png" width={20} height={20} />
            </div>

            <h6
              className="ms-3"
              style={{
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              شغل
            </h6>
          </div>
          <div
            className="ps-4 ms-4 mt-3"
            style={{
              borderRightStyle: "solid",
              borderRightColor: "#000",
              borderWidth: 2,
            }}
          >
            <h6 className="mt-2 py-2 ps-2 EsubItem">فرصت های شغلی پیشنهادی</h6>
            <h6 className="mt-2 py-2 ps-2 EsubItem">شغل های ذخیره شده</h6>
            <h6 className="mt-2 py-2 ps-2 EsubItem">آگهی های ویژه</h6>
          </div>
        </div>

        <div>
          <div className="d-flex ms-4 mt-4">
            <div>
              <Image
                src="/assets/images/ecompanies.png"
                width={20}
                height={20}
              />
            </div>

            <h6
              className="ms-3"
              style={{
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              شرکت ها
            </h6>
          </div>
          <div
            className="ps-4 ms-4 mt-3"
            style={{
              borderRightStyle: "solid",
              borderRightColor: "#000",
              borderWidth: 2,
            }}
          >
            <h6 className="mt-2 py-2 ps-2 EsubItem">فرصت های شغلی پیشنهادی</h6>
            <h6 className="mt-2 py-2 ps-2 EsubItem">شغل های ذخیره شده</h6>
            <h6 className="mt-2 py-2 ps-2 EsubItem">آگهی های ویژه</h6>
          </div>
        </div>

        <div className="d-flex ms-4 mt-4">
          <div>
            <Image src="/assets/images/eorders.png" width={20} height={20} />
          </div>

          <h6
            className="ms-3"
            style={{
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            سفارشات و بسته ها
          </h6>
        </div>

        <div className="d-flex ms-4 mt-4">
          <div>
            <Image src="/assets/images/etest.png" width={20} height={20} />
          </div>

          <h6
            className="ms-3"
            style={{
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            آزمون خودشناسی
          </h6>
        </div>
        <div className="d-flex ms-4 mt-4">
          <div>
            <Image src="/assets/images/esetting.png" width={20} height={20} />
          </div>

          <h6
            className="ms-3"
            style={{
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            تنظیمات حساب کاربری
          </h6>
        </div>
      </div>
    </>
  );
};

export default RightMenu;
