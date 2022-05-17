import SendingResume from "./SendingResume";

const RShowSideBar = ({ data }) => {
  return (
    <>
      <div className="eShowCase">
        <div>
          {/* <img src="/assets/images/shatelLogo.png" width={136} height={136} /> */}
          <img
            src={data.image}
            height={100}
            width={100}
            style={{ borderRadius: "50%" }}
          />
        </div>
        <h2
          className="mt-2"
          style={{
            fontSize: "1.3rem",
            lineHeight: 1.5,
          }}
        >
          {data.personal && data.personal.company_name}{" "}
          <h4
            className=" d-inline-flex ms-2"
            style={{
              color: "#11999e",
              fontSize: 16,
            }}
          >
            (شرکت معتبر)
          </h4>{" "}
        </h2>
        <h4
          style={{
            fontSize: 18,
            color: "rgba(0, 0, 0, 0.6)",
            fontFamily: "roboto",
          }}
        >
          www.ratin.agency
        </h4>
        <div
          className="py-1 px-3 mb-2"
          style={{
            color: "#fff",
            backgroundColor: "#11999e",
            borderRadius: 5,
          }}
        >
          از شغل ها با خبرم کن
        </div>
        <div>
          <img src="/assets/images/whiteLine.png" width={300} height={3} />
        </div>
        <div className="d-flex flex-column jusify-content-end align-items-end">
          <div className="d-flex align-items-center mb-2">
            <h6 className="me-2 mt-1">
              {" "}
              {data.personal && data.personal.cellphone}
            </h6>
            <img src="/assets/images/phone.png" width={24} height={24} />
          </div>
          <div className="d-flex align-items-center mb-2">
            <h6 className="me-2 mt-1">
              {" "}
              {data.personal && data.personal.whatsapp}
            </h6>
            <img src="/assets/images/whatsapp.png" width={24} height={24} />
          </div>
          <div className="d-flex align-items-center mb-2">
            <h6 className="me-2 mt-1">
              {" "}
              {data.personal && data.personal.email}
            </h6>
            <img src="/assets/images/gmail.png" width={24} height={24} />
          </div>
          <div className="d-flex align-items-center mb-2">
            <h6 className="me-2 mt-1">
              {" "}
              {data.personal && data.personal.telegram}
            </h6>
            <img src="/assets/images/telegram.png" width={24} height={24} />
          </div>
        </div>
        <div>
          <img src="/assets/images/whiteLine.png" width={300} height={3} />
        </div>
        <div
          className="py-2 px-3 my-3 d-flex align-items-center justify-content-center  "
          style={{
            color: "#fff",
            backgroundColor: "#EC4B72",
            borderRadius: 10,
            width: "80%",
          }}
        >
          <img src="/assets/images/messages2.png" width={24} height={24} />
          <h5 className="ms-2 mt-1">چت آراد</h5>
        </div>
        <SendingResume data={data} />
        <div>
          <img src="/assets/images/whiteLine.png" width={300} height={3} />
        </div>
        <h5 className="mt-2 text-start w-75">آدرس</h5>
        <div className="d-flex">
          <div>
            <img src="/assets/images/location.png" width={24} height={24} />
          </div>
          <h2
            className="ms-2"
            style={{
              fontSize: 17,
            }}
          >
            تهران،منطقه6،اتوبان همت
          </h2>
        </div>
        <div>
          <img src="/assets/images/mapSample.png" width={365} height={285} />
        </div>
      </div>
    </>
  );
};
export default RShowSideBar;
