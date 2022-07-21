import { useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "context/Auth/AuthContext";
const RightMenu = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  return (
    <>
      <div
        className="pt-5"
        style={{
          backgroundColor: "#fff",
          borderTopLeftRadius: 25,
          zIndex: 10,
          paddingBottom: 200,
          height: "100%",
        }}
      >
        <div className="d-flex ps-5 pt-4 align-items-center">
          <img src="/assets/images/Eavatar.png" width={50} height={50} />
          <h4
            className="ms-3  "
            style={{
              fontSize: 19,
            }}
          >
            {user && user.name}
          </h4>
        </div>
        <div
          className="d-flex ms-4 mt-5  py-2 ps-2 EsubItem"
          onClick={() =>
            router.push({
              pathname: "/employee",
            })
          }
        >
          <div>
            <img src="/assets/images/edashboard.png" width={20} height={20} />
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
            <img src="/assets/images/einterviews.png" width={20} height={20} />
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
        <div
          className="d-flex ms-4 mt-4  py-2 ps-2 EsubItem"
          onClick={() =>
            router.push({
              pathname: "/ads/adtype",
            })
          }
        >
          <div>
            <img src="/assets/images/ead.png" width={20} height={20} />
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
              <img src="/assets/images/eresume.png" width={20} height={20} />
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
            <h6
              className="mt-2 py-2 ps-2 EsubItem "
              onClick={() => router.push("/employee/create-resume")}
            >
              تکمیل و دانلود رزومه
            </h6>
            <h6
              className="mt-2 py-2 ps-2 EsubItem"
              onClick={() =>
                router.push({
                  pathname: "/employee/jobs",
                  query: { tab: "sentResume" },
                })
              }
            >
              پیگیری رزومه های ارسال شده
            </h6>
          </div>
        </div>
        <div>
          <div className="d-flex ms-4 mt-4">
            <div>
              <img src="/assets/images/ejobs.png" width={20} height={20} />
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
            <h6
              className="mt-2 py-2 ps-2 EsubItem"
              onClick={() =>
                router.push({
                  pathname: "/employee/jobs",
                  query: { tab: "suggestedAds" },
                })
              }
            >
              فرصت های شغلی پیشنهادی
            </h6>
            <h6
              className="mt-2 py-2 ps-2 EsubItem"
              onClick={() =>
                router.push({
                  pathname: "/employee/jobs",
                  query: { tab: "savedAds" },
                })
              }
            >
              شغل های ذخیره شده
            </h6>
          </div>
        </div>

        <div>
          <div className="d-flex ms-4 mt-4">
            <div>
              <img src="/assets/images/ecompanies.png" width={20} height={20} />
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
            <h6
              className="mt-2 py-2 ps-2 EsubItem"
              onClick={() => router.push("/employee/companies")}
            >
              شرکتهای معتبر
            </h6>
            <h6
              className="mt-2 py-2 ps-2 EsubItem"
              onClick={() => router.push("/employee/companies")}
            >
              شرکت های دنبال شونده
            </h6>
            <h6
              className="mt-2 py-2 ps-2 EsubItem"
              onClick={() => router.push("/employee/companies")}
            >
              آگهی های ویژه
            </h6>
          </div>
        </div>

        {/* <div className="d-flex ms-4 mt-4">
          <div>
            <img src="/assets/images/eorders.png" width={20} height={20} />
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
        </div> */}

        {/* <div className="d-flex ms-4 mt-4">
          <div>
            <img src="/assets/images/etest.png" width={20} height={20} />
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
        </div> */}
        <div className="d-flex ms-4 mt-4">
          <div>
            <img src="/assets/images/esetting.png" width={20} height={20} />
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
