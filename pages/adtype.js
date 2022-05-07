import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { useContext } from "react";
import UserContext from "../context/employeeContext/User/UserContext";
import { useRouter } from "next/router";

const AdType = () => {
  const router = useRouter();
  const userContext = useContext(UserContext);
  const handleNavigate1 = () => {
    userContext.data.user.role[0] == "employee"
      ? router.push({
          pathname: "/employee/createAdPage",
          query: { type: "normal" },
        })
      : userContext.data.user.role[0] == "employer"
      ? router.push({
          pathname: "/employer/createAdPage",
          query: { type: "normal" },
        })
      : null;
  };
  const handleNavigate2 = () => {
    userContext.data.user.role[0] == "employee"
      ? router.push({
          pathname: "/employee/createAdPage",
          query: { type: "vip" },
        })
      : userContext.data.user.role[0] == "employer"
      ? router.push({
          pathname: "/employer/createAdPage",
          query: { type: "vip" },
        })
      : null;
  };
  return (
    <>
      <NavBar />
      <div
        className=" bg-white col-10 mx-auto  pb-5 pt-3 px-4"
        style={{
          borderRadius: 20,
          marginTop: "6rem",
        }}
      >
        <h3
          className="fw-bold mt-5 px-5"
          style={{
            fontFamily: "iranBLack",
            fontSize: 45,
          }}
        >
          {" "}
          انتخاب نوع آگهی{" "}
        </h3>
        <div className="d-flex justify-content-center  mt-5">
          <div
            className="mx-auto   adType-parent position-relative"
            onClick={() => handleNavigate1()}
          >
            <div className="adType-price px-4 py-1  col-4 mx-auto"> رایگان</div>
            <div className="mt-5  d-flex flex-column align-items-center pt-4">
              <div className="d-flex align-items-center  mx-auto mb-2">
                <h3 className="adType-txt1 me-2 ">آگهی معمولی</h3>
                <h4 className="adType-txt2   ">فارسی</h4>
              </div>
              <h4 className="adType-txt3 mx-auto">معرفی به عنوان غیر متخصص</h4>
            </div>
            <div className="d-flex adType-down col-8 mx-auto px-2 pt-2   ">
              <h3 className="adType-txt4 me-2 ">ثبت آگهی معمولی</h3>
              <h4 className="adType-txt5   ">فارسی</h4>
            </div>
          </div>
          <div
            className="mx-auto   adType-parent-white position-relative"
            onClick={() => handleNavigate2()}
          >
            <div className="d-flex adType-price2 px-4 pt-2  col-4 mx-auto">
              <h3 className="adType-txt6 me-2 ">20</h3>
              <h4 className="adType-txt7   ">تومان</h4>
            </div>
            <div className="mt-5  d-flex flex-column align-items-center pt-4">
              <div className="d-flex align-items-center  mx-auto mb-2">
                <h3 className="adType-txt1 me-2 ">آگهی ویژه</h3>
                <h4 className="adType-txt2   ">فارسی</h4>
              </div>
              <h4 className="adType-txt3 mx-auto">معرفی به عنوان غیر متخصص</h4>
            </div>
            <div className="d-flex adType-down col-8 mx-auto px-2 pt-2   ">
              <h3 className="adType-txt4 me-2 ">ثبت آگهی ویژه</h3>
              <h4 className="adType-txt5   ">فارسی</h4>
            </div>
          </div>
          <div className="mx-auto   adType-parent-white position-relative">
            <div className="d-flex adType-price2 px-4 pt-2  col-4 mx-auto">
              <h3 className="adType-txt6 me-2 ">20</h3>
              <h4 className="adType-txt7   ">تومان</h4>
            </div>
            <div className="mt-5  d-flex flex-column align-items-center pt-4">
              <div className="d-flex align-items-center  mx-auto mb-2">
                <h3 className="adType-txt1 me-2 ">آگهی ویژه</h3>
                <h4 className="adType-txt2   ">انگلیسی</h4>
              </div>
              <h4 className="adType-txt3 mx-auto">معرفی به عنوان غیر متخصص</h4>
            </div>
            <div className="d-flex adType-down col-8 mx-auto px-2 pt-2   ">
              <h3 className="adType-txt4 me-2 ">ثبت آگهی ویژه</h3>
              <h4 className="adType-txt5   ">انگلیسی</h4>
            </div>
          </div>
        </div>

        <h3 className="mt-5 text-center fs-4">
          بعد از دیدن این ویدیو کوتاه با آگاهی کامل نوع آگهی را انتخاب کن
        </h3>
        <div
          className="col-10 d-flex mx-auto mt-4 justify-content-center align-items-center mb-5 "
          style={{
            backgroundColor: "#dddddd",
            borderRadius: 20,
            height: 550,
          }}
        >
          <img src="/assets/images/play.svg" height={80} width={80} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdType;
