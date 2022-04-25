import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const RightMenu = () => {
  const router = useRouter();
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
        <div className="d-flex flex-column ps-5 pt-4 align-items-center">
          <Image src="/assets/images/Eavatar.png" width={50} height={50} />
          <h4
            className="ms-3 mt-2"
            style={{
              fontSize: 19,
            }}
          >
            شرکت ماهان پردازش هیراد
          </h4>
        </div>
        <div className="d-flex ms-4 mt-5 py-2 px-2 EsubItem">
          <div>
            <Image src="/assets/images/edashboard.png" width={20} height={20} />
          </div>

          <h6
            className="ms-3 "
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
              آگهی ها
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
            <h6 className="mt-2 py-2 ps-2 EsubItem ">لیست آگهی های ثبت شده</h6>
            <h6
              className="mt-2 py-2 ps-2 EsubItem"
              onClick={() =>
                router.push({
                  pathname: "/employer/createAdPage",
                  query: { type: "normal" },
                })
              }
            >
              ثبت آگهی جدید
            </h6>
          </div>
        </div>
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
            رزومه ها
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
          <h6
            className="mt-2 py-2 ps-2 EsubItem "
            onClick={() =>
              router.push({
                pathname: "/employer/employees-resume",
              })
            }
          >
            بانک کارجویان
          </h6>
          <h6
            className="mt-2 py-2 ps-2 EsubItem"
            onClick={() => router.push("/employer/employees-resume")}
          >
            پوشه رزومه های ذخیره شده
          </h6>
          <h6
            className="mt-2 py-2 ps-2 EsubItem"
            onClick={() => router.push("/employer/employees-resume")}
          >
            رزومه های دریافتی
          </h6>
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
              سفارشات و بسته ها
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
            <h6 className="mt-2 py-2 ps-2 EsubItem">بسته ثبت آگهی</h6>
            <h6 className="mt-2 py-2 ps-2 EsubItem">بسته بانک رزومه</h6>
            <h6 className="mt-2 py-2 ps-2 EsubItem">بسته ترکیبی(اقتصادی)</h6>
            <h6 className="mt-2 py-2 ps-2 EsubItem">بسته پنل پیامکی</h6>
            <h6 className="mt-2 py-2 ps-2 EsubItem"> فاکتورها</h6>
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
              اطلاعات سازمان
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
            <h6
              className="mt-2 py-2 ps-2 EsubItem"
              onClick={() => router.push("/employer/org-profile")}
            >
              پروفایل سازمانی
            </h6>
            <h6 className="mt-2 py-2 ps-2 EsubItem"
             onClick={() => router.push("/employer/org-profile")}
            >دسترسی کاربران</h6>
            <h6 className="mt-2 py-2 ps-2 EsubItem"
             onClick={() => router.push("/employer/setting")}
            >تنظیمات حساب</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightMenu;
