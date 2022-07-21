import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
  
import SelectOption from "../components/Employee/Resume/FormInputs/SelectOption";
import { Province } from "../components/StaticData/City";
import { Cities } from "../components/StaticData/City";
import { useState } from "react";
const ChatRoom = () => {
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
       <div
        className="d-flex justify-content-between"
        style={{
          width: "100%",

          marginTop: 80,
          backgroundColor: "#f2f5f6",
        }}
      >
        {/* <RightMenu /> */}
        <div
          className="d-flex mx-auto mt-5"
          style={{
            width: "75%",
            borderRadius: 30,
            height: null,
          }}
        >
          <div className="col-8  px-3  ">
            <div className="d-flex flex-column col-12">
              <div
                className="d-flex align-items-center  col-12 mx-auto pe-2 mt-2 ps-3  pt-2"
                style={{
                  boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                  borderRadius: 10,
                  position: "relative",
                  backgroundColor: "#c7e4e5",
                }}
              >
                <div
                  className=""
                  style={{
                    borderRadius: "50%",
                    overflow: "hidden",
                    position: "absolute",
                    right: "1%",
                    bottom: "-40%",
                  }}
                >
                  <img
                    src="/assets/images/Eavatar.png"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="ps-5">
                  <h5
                    style={{
                      fontSize: 17,
                    }}
                  >
                    مهدی حقیقتی
                  </h5>
                  <h6
                    style={{
                      fontSize: 14,
                    }}
                  >
                    فروشنده حرفه ای
                  </h6>
                </div>
                <div className="d-flex ms-auto">
                  <div
                    className="py-2 px-1 mx-auto me-2   "
                    style={{
                      fontSize: 14,
                      textAlign: "center",
                      borderRadius: 10,
                      cursor: "pointer",
                      color: "#E92B59",
                      border: "1px solid #E92B59",
                    }}
                  >
                    درخواست نمایش رزومه
                  </div>
                  <div
                    className="py-2 px-1  text-white  "
                    style={{
                      fontSize: 14,
                      backgroundColor: "#E92B59",
                      textAlign: "center",
                      borderRadius: 10,
                      cursor: "pointer",
                    }}
                  >
                    درخواست مصاحبه آنلاین
                  </div>
                </div>
              </div>
              <div
                className="col-12 mt-5  "
                style={{
                  height: 500,
                }}
              >
                <div className="d-flex">
                  <img
                    src="/assets/images/Eavatar.png"
                    width={30}
                    height={30}
                    style={{
                      borderRadius: 25,
                    }}
                  />
                  <div
                    className="col-4 p-2 ms-2 fw-light"
                    style={{
                      fontSize: 15,
                      backgroundColor: "#11999e",
                      color: "#fff",
                      borderRadius: 10,
                      lineHeight: "1.7rem",
                    }}
                  >
                    با سلام این یک پیام است این یک پیام است این یک پیام است
                  </div>
                </div>
                <div
                  className="d-flex"
                  style={{
                    flexDirection: "row-reverse",
                  }}
                >
                  <img
                    src="/assets/images/Eavatar.png"
                    width={30}
                    height={30}
                    style={{
                      borderRadius: 25,
                    }}
                  />
                  <div
                    className="col-4 p-2 me-2 fw-light"
                    style={{
                      fontSize: 15,
                      backgroundColor: "#c7e4e5",
                      color: "#000",
                      borderRadius: 10,
                      lineHeight: "1.7rem",
                    }}
                  >
                    با سلام این یک پیام است این یک پیام است این یک پیام است
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div
                  className="col-9   px-2 py-2"
                  style={{
                    backgroundColor: "#e4e4e4",
                    borderRadius: 10,
                    fontSize: 16,
                    boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                  }}
                >
                  <input
                    className="col-12 input-chat"
                    placeholder="متن پیام"
                    type="text"
                  />
                </div>
                <button
                  className=" px-2 py-1 ms-3"
                  style={{
                    backgroundColor: "#e4e4e4",
                    borderRadius: 10,
                    fontSize: 16,
                    boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                  }}
                >
                  ارسال
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-4"
            style={{
              borderRight: "1px solid #c0c0c0",
            }}
          >
            <div
              className="d-flex align-items-center col-11 mx-auto px-2 py-2"
              style={{
                backgroundColor: "#e4e4e4",
                borderRadius: 20,
                fontSize: 16,
              }}
            >
              <img
                src="/assets/images/magnifire.svg"
                height="18%"
                width="18%"
              />
              <input
                className="col-11 input-chat ms-2"
                placeholder="جستجو"
                type="text"
              />
            </div>
            <div className="d-flex pt-4 ps-4 pe-4 align-items-center">
              <img
                src="/assets/images/Eavatar.png"
                width={45}
                height={45}
                style={{
                  borderRadius: 25,
                }}
              />
              <div className="ps-2">
                <h5
                  style={{
                    fontSize: 17,
                  }}
                >
                  مهدی حقیقتی
                </h5>
                <h6
                  className="fw-light"
                  style={{
                    fontSize: 14,
                    color: "#7e7e7e",
                  }}
                >
                  فروشنده حرفه ای
                </h6>
              </div>
              <h5
                className="ms-auto"
                style={{
                  fontSize: 14,
                  color: "#7e7e7e",
                }}
              >
                1400/2/2
              </h5>
            </div>
            <div className="col-9 mx-auto">
              <img
                src="/assets/images/line-chat.svg"
                height={10}
                width={400}
              />
            </div>
            <div className="d-flex pt-4 ps-4 pe-4 align-items-center">
              <img
                src="/assets/images/Eavatar.png"
                width={45}
                height={45}
                style={{
                  borderRadius: 25,
                }}
              />
              <div className="ps-2">
                <h5
                  style={{
                    fontSize: 17,
                  }}
                >
                  مهدی حقیقتی
                </h5>
                <h6
                  className="fw-light"
                  style={{
                    fontSize: 14,
                    color: "#7e7e7e",
                  }}
                >
                  فروشنده حرفه ای
                </h6>
              </div>
              <h5
                className="ms-auto"
                style={{
                  fontSize: 14,
                  color: "#7e7e7e",
                }}
              >
                1400/2/2
              </h5>
            </div>
            <div className="col-9 mx-auto">
              <img
                src="/assets/images/line-chat.svg"
                height={10}
                width={400}
              />
            </div>
            <div className="d-flex pt-4 ps-4 pe-4 align-items-center">
              <img
                src="/assets/images/Eavatar.png"
                width={45}
                height={45}
                style={{
                  borderRadius: 25,
                }}
              />
              <div className="ps-2">
                <h5
                  style={{
                    fontSize: 17,
                  }}
                >
                  مهدی حقیقتی
                </h5>
                <h6
                  className="fw-light"
                  style={{
                    fontSize: 14,
                    color: "#7e7e7e",
                  }}
                >
                  فروشنده حرفه ای
                </h6>
              </div>
              <h5
                className="ms-auto"
                style={{
                  fontSize: 14,
                  color: "#7e7e7e",
                }}
              >
                1400/2/2
              </h5>
            </div>
            <div className="col-9 mx-auto">
              <img
                src="/assets/images/line-chat.svg"
                height={10}
                width={400}
              />
            </div>
            <div className="d-flex pt-4 ps-4 pe-4 align-items-center">
              <img
                src="/assets/images/Eavatar.png"
                width={45}
                height={45}
                style={{
                  borderRadius: 25,
                }}
              />
              <div className="ps-2">
                <h5
                  style={{
                    fontSize: 17,
                  }}
                >
                  مهدی حقیقتی
                </h5>
                <h6
                  className="fw-light"
                  style={{
                    fontSize: 14,
                    color: "#7e7e7e",
                  }}
                >
                  فروشنده حرفه ای
                </h6>
              </div>
              <h5
                className="ms-auto"
                style={{
                  fontSize: 14,
                  color: "#7e7e7e",
                }}
              >
                1400/2/2
              </h5>
            </div>
            <div className="col-9 mx-auto">
              <img
                src="/assets/images/line-chat.svg"
                height={10}
                width={400}
              />
            </div>
            <div className="d-flex pt-4 ps-4 pe-4 align-items-center">
              <img
                src="/assets/images/Eavatar.png"
                width={45}
                height={45}
                style={{
                  borderRadius: 25,
                }}
              />
              <div className="ps-2">
                <h5
                  style={{
                    fontSize: 17,
                  }}
                >
                  مهدی حقیقتی
                </h5>
                <h6
                  className="fw-light"
                  style={{
                    fontSize: 14,
                    color: "#7e7e7e",
                  }}
                >
                  فروشنده حرفه ای
                </h6>
              </div>
              <h5
                className="ms-auto"
                style={{
                  fontSize: 14,
                  color: "#7e7e7e",
                }}
              >
                1400/2/2
              </h5>
            </div>
            <div className="col-9 mx-auto">
              <img
                src="/assets/images/line-chat.svg"
                height={10}
                width={400}
              />
            </div>
            <div className="d-flex pt-4 ps-4 pe-4 align-items-center">
              <img
                src="/assets/images/Eavatar.png"
                width={45}
                height={45}
                style={{
                  borderRadius: 25,
                }}
              />
              <div className="ps-2">
                <h5
                  style={{
                    fontSize: 17,
                  }}
                >
                  مهدی حقیقتی
                </h5>
                <h6
                  className="fw-light"
                  style={{
                    fontSize: 14,
                    color: "#7e7e7e",
                  }}
                >
                  فروشنده حرفه ای
                </h6>
              </div>
              <h5
                className="ms-auto"
                style={{
                  fontSize: 14,
                  color: "#7e7e7e",
                }}
              >
                1400/2/2
              </h5>
            </div>
            <div className="col-9 mx-auto">
              <img
                src="/assets/images/line-chat.svg"
                height={10}
                width={400}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChatRoom;
