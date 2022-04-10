import Image from "next/image";
const EShowSideBar = ({ data }) => {
  return (
    <>
      <div className="eShowCase">
        <div>
          {/* <Image src="/assets/images/shatelLogo.png" width={136} height={136} /> */}
          <img
            // loader={myLoader}
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
          <Image src="/assets/images/whiteLine.png" width={300} height={3} />
        </div>
        <div className="d-flex flex-column jusify-content-end align-items-end">
          <div className="d-flex align-items-center mb-2">
            <h6 className="me-2 mt-1">
              {" "}
              {data.personal && data.personal.cellphone}
            </h6>
            <Image src="/assets/images/phone.png" width={24} height={24} />
          </div>
          <div className="d-flex align-items-center mb-2">
            <h6 className="me-2 mt-1">
              {" "}
              {data.personal && data.personal.whatsapp}
            </h6>
            <Image src="/assets/images/whatsapp.png" width={24} height={24} />
          </div>
          <div className="d-flex align-items-center mb-2">
            <h6 className="me-2 mt-1">
              {" "}
              {data.personal && data.personal.email}
            </h6>
            <Image src="/assets/images/gmail.png" width={24} height={24} />
          </div>
          <div className="d-flex align-items-center mb-2">
            <h6 className="me-2 mt-1">
              {" "}
              {data.personal && data.personal.telegram}
            </h6>
            <Image src="/assets/images/telegram.png" width={24} height={24} />
          </div>
        </div>
        <div>
          <Image src="/assets/images/whiteLine.png" width={300} height={3} />
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
          <Image src="/assets/images/messages2.png" width={24} height={24} />
          <h5 className="ms-2 mt-1">چت آراد</h5>
        </div>
        <div className="d-flex flex-column jusify-content-center align-items-center eShowCase_sec1">
          <h2>ارسال رزومه</h2>
          <h3>تکمیل بیشتر از 30٪ درصد رزومه</h3>
          <div className="orLine">یا</div>
          <div className="py-1 px-3 mb-2 mt-3 upload">آپلود رزومه</div>
          <div
            className=" px-3 mt-2 d-flex align-items-center justify-content-center "
            style={{
              color: "#fff",
              backgroundColor: "#EC4B72",
              borderRadius: 10,
              width: "100%",
            }}
          >
            <h5 className="ms-2  mt-1  ">ارسال</h5>
          </div>
        </div>
        <div>
          <Image src="/assets/images/whiteLine.png" width={300} height={3} />
        </div>
        <h5 className="mt-2 text-start w-75">آدرس</h5>
        <div className="d-flex">
          <div>
            <Image src="/assets/images/location.png" width={24} height={24} />
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
          <Image src="/assets/images/mapSample.png" width={365} height={285} />
        </div>
      </div>
    </>
  );
};
export default EShowSideBar;
