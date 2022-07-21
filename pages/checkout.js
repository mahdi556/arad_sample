import RightMenu from "../components/Employee/RightMenu/RightMenu";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
  
import SelectOption from "../components/Employee/Resume/FormInputs/SelectOption";
import { Province } from "../components/StaticData/City";
import { Cities } from "../components/StaticData/City";
import { useState } from "react";
const Checkout = () => {
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  let proId = province;
  const citi = Cities.filter((item, key) => item.provinceId == proId);
  const provinceHandler = (id, fa) => {
    setProvince(id);
  };

  const cityHandler = (id, fa) => {
    setCity(id);
  };
  return (
    <>
      <NavBar />
      <div
        className="d-flex justify-content-between"
        style={{
          width: "100%",

          marginTop: 80,
          backgroundColor: "#f2f5f6",
        }}
      >
        <RightMenu />
        <div
          className="d-flex mx-auto mt-5"
          style={{
            backgroundColor: "#fff",
            width: "65%",
            borderRadius: 30,
            height: null,
          }}
        >
          {/* <div className="col-8 pt-4 px-3  ">
            <div
              className="  col-11 mx-auto pe-5 mt-4 ps-3 py-3"
              style={{
                boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                borderRadius: 15,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-15%",
                  left: "-2%",
                }}
              >
                <img
                  src="/assets/images/delete-box.svg"
                  height="60%"
                  width="50%"
                />
              </div>
              <div
                className="d-flex col-12"
                style={{
                  borderBottom: "2px solid #ddd",
                }}
              >
                <h6>ثبت آگهی</h6>
                <h6 className="ms-auto">50 تومان</h6>
              </div>
              <div className=" d-flex col-12 mt-4" style={{}}>
                <div className="me-2" style={{}}>
                  <img
                    src="/assets/images/check-black.svg"
                    height="20%"
                    width="20%"
                  />
                </div>
                <h6>کارجو متخصص</h6>
              </div>
            </div>
          </div> */}
          <div className="col-8 pt-4 px-4  ">
            <div
              className="d-flex col-6 justify-content-between   mx-auto mt-4 "
              style={{
                borderRadius: 51,
                backgroundColor: "#EAEAEA",
                fontSize: 25,
              }}
            >
              <h6
                className="col-6 text-center my-auto py-2"
                style={{
                  // backgroundColor:'#11999e',
                  // borderRadius:51,
                  // color:'#fff',
                  fontSize: 25,
                }}
              >
                حقیقی
              </h6>
              <h6
                className="col-6 text-center my-auto py-2"
                style={{
                  backgroundColor: "#11999e",
                  borderRadius: 51,
                  color: "#fff",
                  fontSize: 25,
                }}
              >
                حقوقی
              </h6>
            </div>
            <h4
              className="px-2 py-2 mt-5"
              style={{
                fontSize: 20,
                backgroundColor: "rgba(251, 104, 104, 0.83)",
                borderRadius: 10,
                color: "#fff",
              }}
            >
              در صورت تایید اطلاعات به مرحله بعد می روید
            </h4>
            <div className="d-flex flex-column col-12 mb-3 mt-4">
              <label
                className="  "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                  fontSize: 20,
                }}
              >
                نام شرکت
              </label>
              <input
                className="inputStyle "
                // {
                //   normalAdContext.data.title == ""
                //     ? "col-12 mb-3 ps-2 inputStyle"
                //     : "col-12 mb-3 ps-2 inputFilled"
                // }
                type="text"
                // value={normalAdContext.data.title}
                // onChange={(e) => {
                //   normalAdContext.dispatch({
                //     type: "title",
                //     payload: e.target.value,
                //   });
                // }}
              />
            </div>
            <div className="d-flex flex-column col-12 mb-3 mt-4">
              <label
                className="  "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                  fontSize: 20,
                }}
              >
                شناسه اقتصادی
              </label>
              <input className="inputStyle " type="text" />
            </div>
            <div className="d-flex flex-column col-12 mb-3 mt-4">
              <label
                className="  "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                  fontSize: 20,
                }}
              >
                شماره ثبت
              </label>
              <input className="inputStyle " type="text" />
            </div>
            <div className="d-flex flex-column col-12 mb-3 mt-4">
              <label
                className="  "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                  fontSize: 20,
                }}
              >
                شناسه ملی
              </label>
              <input className="inputStyle " type="text" />
            </div>
            <div className="d-flex align-items-center">
              <div
                className="col-3 px-1"
                style={{
                  maxHeight: "6rem",
                  zIndex: 9,
                }}
              >
                <SelectOption
                  data={Province}
                  name="استان"
                  valueHandler={provinceHandler}
                  // predata={normalAdContext.data.province.fa}
                />
              </div>
              {proId !== "" && (
                <div
                  className="col-3 px-1"
                  style={{
                    maxHeight: "6rem",
                    zIndex: 9,
                  }}
                >
                  <SelectOption
                    data={Province}
                    name="شهر"
                    valueHandler={provinceHandler}
                    // predata={normalAdContext.data.province.fa}
                  />
                </div>
              )}

              <div className="d-flex flex-column col-6 px-1 mb-3 mt-4">
                <label
                  className="  "
                  style={{
                    marginBottom: "0.5rem",
                    fontWeight: "normal",
                    fontSize: 20,
                  }}
                >
                  کد پستی
                </label>
                <input className="inputStyle " type="text" />
              </div>
            </div>
            <div className="d-flex flex-column col-12 mb-3 mt-4">
              <label
                className="  "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                  fontSize: 20,
                }}
              >
                آدرس
              </label>
              <input className="inputStyle " type="text" />
            </div>
            <div className="d-flex flex-column col-12 mb-3 mt-4">
              <label
                className="  "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                  fontSize: 20,
                }}
              >
                شماره تلفن
              </label>
              <input className="inputStyle " type="text" />
            </div>
          </div>

          <div
            className="col-4"
            style={{
              backgroundColor: "#c7e4e5",
              borderRadius: 30,
            }}
          >
            <div
              className="col-10 mx-auto mt-5 px-3 py-1"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.71)",
                borderRadius: 5,
                fontSize: 20,
                color: "#000",
                height: 37,
              }}
            >
              کد تخفیف
            </div>
            <div
              className="mt-4 col-10 mx-auto"
              style={{
                borderBottom: "1px solid rgba(0, 0, 0, 0.11)",
              }}
            ></div>
            <div className="d-flex px-4 mt-4 ">
              <h6
                className="fw-light"
                style={{
                  fontSize: 20,
                }}
              >
                جمع کل
              </h6>
              <h6
                className="ms-auto"
                style={{
                  fontSize: 25,
                  color: "#11999e",
                }}
              >
                50 تومان
              </h6>
            </div>
            <div className="d-flex px-4 mt-4 ">
              <h6
                className="fw-light"
                style={{
                  fontSize: 20,
                }}
              >
                نخفیف
              </h6>
              <h6
                className="ms-auto"
                style={{
                  fontSize: 25,
                  color: "#11999e",
                }}
              >
                0 تومان
              </h6>
            </div>
            <div className="d-flex px-4 mt-4 ">
              <h6
                className="fw-bold"
                style={{
                  fontSize: 20,
                }}
              >
                مبلغ پرداختی
              </h6>
              <h6
                className="ms-auto fw-bold"
                style={{
                  fontSize: 25,
                  color: "#11999e",
                }}
              >
                50 تومان
              </h6>
            </div>
            <div
              className="py-2 mx-auto text-white mt-5"
              style={{
                width: "75%",
                fontSize: "1.2rem",
                backgroundColor: "#E92B59",
                textAlign: "center",
                borderRadius: 12,
                cursor: "pointer",
              }}
            >
              مرحله بعدی
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
