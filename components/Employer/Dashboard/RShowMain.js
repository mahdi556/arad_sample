import Image from "next/image";
import RAdBoxes from "./RAdBoxes";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import style from "./styles/rshow.module.css";
import BreakeLine from "../../Employee/Resume/FormInputs/BreakLine";
import AdBoxNewEmployer from "../../Common/AdBoxNewEmployer";
const width = "33%";
const RShowMain = () => {
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
  return (
    <>
      <div
      // style={{
      //   width: "100%",
      // }}
      >
        <div className="rShowCase-sec1  ">
          <div className="d-flex justify-content-between col-12 rShowCase-sec2">
            <div
              className={`${style.rShowCase_sec3}  d-flex col-3 align-items-center px-3   `}
            >
              <h5 className="col-8">وارد کردن شناسه ملی یا روزنامه</h5>
              <div className={`${style.verify_circle} col-4  `}>تائید</div>
            </div>
            <div className="d-flex rShowCase-sec3  col-3">
              <h4 className="rShowCase-sec4">تکمیل پروفایل سازمانی</h4>
              <div>
                <Image src="/assets/images/add.svg" height={60} width={60} />
              </div>
            </div>
            <div className="d-flex rShowCase-sec3  col-3">
              <h4 className="rShowCase-sec4">ثبت آگهی ویژه</h4>
              <div>
                <Image
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
              <RAdBoxes />
              <RAdBoxes />
              <RAdBoxes />
              <RAdBoxes />
              <RAdBoxes />
              <RAdBoxes />
            </div>
            <div className="d-flex align-items-center py-2 col-5 mx-auto rShowCase-sec6">
              <div className="d-inline-flex me-3  ">
                <Image
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
                  <Image
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
                  <Image
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
      </div>
    </>
  );
};
export default RShowMain;
