import Image from "next/image";
import RAdBoxes from "./RAdBoxes";

const RShowMain = () => {
  return (
    <>
      <div
        style={{
          width: "80%",
        }}
      >
        <div className="rShowCase-sec1">
          <div className="d-flex justify-content-between col-12 rShowCase-sec2">
            <div className="d-flex rShowCase-sec3 col-3   ">
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
            <div className="d-flex rShowCase-sec3  col-3">
              <h4 className="rShowCase-sec4">ارتقا به کارجو متخصص</h4>
              <div>
                <Image src="/assets/images/cup.png" height={60} width={60} />
              </div>
            </div>
            <div className="d-flex rShowCase-sec3  col-3">
              <h4 className="rShowCase-sec4">ثبت آگهی</h4>
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
        <div className="col-12 mt-5 pt-5 ps-5">
          <div className="col-6  ">
            <h5 className="mt-2 text-start fw-bold w-75 ">آگهی هاای ثبت شده</h5>
            <div className="col-8 rShowCase-sec5 " dir="ltr">
                <RAdBoxes />
                <RAdBoxes />
                <RAdBoxes />
                <RAdBoxes />
                <RAdBoxes />
                <RAdBoxes />
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </>
  );
};
export default RShowMain;
