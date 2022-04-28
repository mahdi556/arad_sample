  
import { useContext, useEffect, useState } from "react";
import axios from "../../../axios";
import RAdBoxes from "./RAdBoxes";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import BreakeLine from "../../Employee/Resume/FormInputs/BreakLine";
import AdBoxNewEmployer from "../../Common/AdBoxNewEmployer";
import UserContext from "../../../context/employeeContext/User/UserContext";
const width = "33%";
const RShowMain = () => {
  const userContext = useContext(UserContext);
  const [reged, setReged] = useState([]);
  const [rads, setRads] = useState({});

  const router = useRouter();

  const data = {
    options: {
      colors: ["#11999e"],
      grid: {
        show: false,
      },

      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        width: 3,
        dashArray: 0,
      },

      chart: {
        id: "basic-bar",
        offsetX: 0,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          [8, "شنبه"],
          [9, "یکشنبه"],
          [10, "دوشنبه"],
          [11, "سه شنبه"],
          [12, "چهارشنبه"],
          [13, "پنج شنبه"],
          [14, "جمعه"],
        ],
        labels: {
          offsetX: 35,
        },
        axisBorder: {
          show: false,
          color: "#78909C",
          height: 1,
          width: "100%",
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: true,
          borderType: "solid",
          color: "#78909C",
          height: 6,
          offsetX: 100,
          offsetY: 0,
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70],
      },
    ],
  };
  useEffect(() => {
    userContext.data.user.id !== "" &&
      axios({
        url: "/getmyEmployeeAds",
        method: "post",
        data: {
          user_id: userContext.data.user.id,
        },
      })
        .then((response) => {
          setReged(response.data.data.rads);
          setRads(response.data.data.rads);
        })
        .catch(function (error) {
          console.log(error);
        });
  }, [userContext.data.user.id]);

  return (
    <>
      <div>
        <div className="rShowCase-sec1  ">
          <div className="d-flex justify-content-between col-12 rShowCase-sec2">
            <div
              className="d-flex rShowCase-sec3 col-3   "
              onClick={() =>
                router.push({
                  pathname: "/employee/create-resume",
                  query: { type: "vip" },
                })
              }
              style={{
                cursor: "pointer",
              }}
            >
              <h4>
                تکمیل رزومه <h6 className="mt-2"> + سابقه کاری </h6>
              </h4>
              <div class="progress blue mt-1">
                {" "}
                <span class="progress-left">
                  {" "}
                  <span class="progress-bar"></span>{" "}
                </span>{" "}
                <span class="progress-right">
                  {" "}
                  <span class="progress-bar"></span>{" "}
                </span>
                <div class="progress-value">90%</div>
              </div>
            </div>
            <div
              className="d-flex rShowCase-sec3  col-3"
              style={{
                cursor: "pointer",
              }}
            >
              <h4 className="rShowCase-sec4">ارتقا به کارجو متخصص</h4>
              <div>
                <img src="/assets/images/cup.png" height={60} width={60} />
              </div>
            </div>
            <div
              className="d-flex rShowCase-sec3  col-3"
              onClick={() =>
                router.push({
                  pathname: "/employee/createAdPage",
                  query: { type: "vip" },
                })
              }
              style={{
                cursor: "pointer",
              }}
            >
              <h4 className="rShowCase-sec4">ثبت آگهی</h4>
              <div>
                <img
                  src="/assets/images/speaker.png"
                  height={60}
                  width={60}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 align-items-start d-flex my-5 pt-5 ps-5">
          <div className="col-4  ">
            <h5 className="mt-2 mb-5 text-start fw-bold w-75 ">
              آگهی های ثبت شده
            </h5>
            <div className="col-12 ps-5 rShowCase-sec5 " dir="ltr">
              {reged &&
                reged.length > 0 &&
                reged.map((item, key) => (
                  <RAdBoxes key={item.id} data={item} />
                ))}
            </div>
            <div
              className="d-flex align-items-center py-2 col-5 mx-auto rShowCase-sec6"
              onClick={() =>
                router.push({
                  pathname: "/employee/createAdPage",
                  query: { type: "normal" },
                })
              }
            >
              <div className="d-inline-flex me-3  ">
                <img
                  src="/assets/images/addButton.png"
                  height={18}
                  width={18}
                />
              </div>
              ثبت آگهی جدید
            </div>
          </div>
          <div className="col-5  offset-2">
            <h5 className="mt-2 text-start fw-bold w-75 ">آمار بازدید آگهی</h5>
            <div
              className=""
              style={{
                position: "relative",
              }}
            >
              <Chart
                options={data.options}
                series={data.series}
                type="line"
                width="100%"
              />
              <div
                className="d-flex rShowCase-sec7"
                style={{
                  position: "absolute",
                  bottom: "8%",
                  right: "-20%",
                  alignItems: "center",
                }}
              >
                <div className="d-inline-flex me-2 ">
                  <img
                    src="/assets/images/arrow-right-black.png"
                    height={10}
                    width={10}
                  />
                </div>
                هفته بعد
              </div>
              <div
                className=" d-flex rShowCase-sec7 "
                style={{
                  position: "absolute",
                  bottom: "8%",
                  left: "5%",
                  alignItems: "center",
                }}
              >
                هفته قبل
                <div className="d-inline-flex ms-2 ">
                  <img
                    src="/assets/images/arrow-left-black.png"
                    height={10}
                    width={10}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <div className=" me-4 rShowCase-sec7">مشاهده آگهی</div>
              <div className="rShowCase-sec7 red-color">بستن آگهی</div>
            </div>
          </div>
        </div>
        <BreakeLine />
        <h3 className="my-5 ms-5 text-start fw-bold w-75 ">
          آگهی های پیشنهادی
        </h3>
        <div class="row    gx-5 gy-4  mx-4 px-5 ">
          {rads.length &&
            rads.map((item, key) => (
              <AdBoxNewEmployer
                width={" col-xl-6 col-xxl-4 "}
                data={item}
                key={item.id}
              />
            ))}
        </div>
        <div className="d-flex">
          <div className="d-inline-flex align-items-center  py-2 px-3  mx-auto rShowCase-sec6">
            لیست کامل
          </div>
        </div>
      </div>
    </>
  );
};
export default RShowMain;
