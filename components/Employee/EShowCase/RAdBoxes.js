  
const RAdBoxes = ({data}) => {
  
  return (
    <div
      className=" mb-3  "
      dir="rtl"
      // style={{
      //   width: width,
      // }}
    >
      <div className="d-flex col-12 p-4 rAdbox">
        <div className="d-flex col-8 pe-2 flex-column  ">
        <div className="adbox-rightLabel">
            لغو شده
            <div className="d-flex justify-content-center align-items-center mx-auto ">
              <img src="/assets/images/doorkari.png" width={17} height={17} />
            </div>
          </div>
          <div className="">
            <div className="d-inline-flex">
              <h5
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.5,
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
        </div>
        <div
          className="d-flex flex-column col-4  justify-content-center align-items-center      "
          style={{
            fontSize: "0.9rem",
            borderRadius: 10,
            width: "37%",
          }}
        >
          <div className="adbox-label">
            دورکاری
            <div className="d-flex justify-content-center align-items-center mx-auto ">
              <img src="/assets/images/doorkari.png" width={17} height={17} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RAdBoxes;
