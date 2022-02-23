import Image from "next/image";
const AdBoxNew = ({ width }) => {
  return (
    <div
      className={ width }
      // style={{
      //   width: width,
      // }}
    >
      <div className="d-flex col-12 p-4 adbox">
        <div className="d-flex col-8 pe-2 flex-column  ">
          <div className="">
            <div className="d-inline-flex">
              <h5
                style={{
                  fontSize: "1rem",
                  lineHeight: "2rem",
                }}
              >
                فروشنده حرفه ای فروشنده حرفه ای
                <h5
                  className=" d-inline-flex ms-2"
                  style={{
                    color: "#11999e",
                    fontSize: 14,
                  }}
                >
                  (متخصص)
                </h5>
              </h5>
            </div>
          </div>
          <div className="mt-1">
            <h6
              style={{
                fontSize: 16,
              }}
            >
              اسنپ
              <h5
                className=" d-inline-flex ms-2"
                style={{
                  color: "#a8a8a8",
                  fontSize: 14,
                }}
              >
                اصفهان
              </h5>
            </h6>
          </div>

          <div
            className="d-flex  justify-content-start align-items-start"
            style={{
              fontSize: "0.9rem",
            }}
          >
            <div className="d-flex justify-content-center align-items-center me-2  ">
              <Image src="/assets/images/addCheck.png" width={17} height={17} />
            </div>
            شرکت معتبر
            <div className="d-flex justify-content-center align-items-center ms-2 me-1  ">
              <Image src="/assets/images/addCheck.png" width={17} height={17} />
            </div>
            بیمه
          </div>
        </div>
        <div
          className="  col-4   "
          style={{
            width: "37%",
          }}
        >
          <div className="adbox-label">
            دورکاری
            <div className="d-flex justify-content-center align-items-center mx-auto ">
              <Image src="/assets/images/doorkari.png" width={17} height={17} />
            </div>
          </div>
          <div
            className=" d-flex flex-column   justify-content-center align-items-center shadow2 "
            style={{
              fontSize: "0.9rem",
              borderRadius: 10,
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center "
              style={{
                backgroundColor: "rgb(17,153,158,0.09)",
                borderRadius: 10,
                width: "100%",
                height: 90,
              }}
            >
              <Image src="/assets/images/adimage.png" width={74} height={74} />
            </div>
            <h6 className="text-center">برقراری ارتباط</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBoxNew;
