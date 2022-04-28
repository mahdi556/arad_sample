  
import { useRouter } from "next/router";
import style from './styles/rshow.module.css'
const AdBoxShowCase = ({ width, data }) => {
  const router = useRouter();

  return (
    <div
      className="  mb-4 "
      onClick={() => {
        router.push({
          pathname: "/eShowcase",
          query: { ad: data.id },
        });
      }}
    >
      <div className="d-flex col-12 py-4 ps-5  " id="adbox">
        <div className={`${style.activeCompany_sec6}    `}>
          <img
            src="/assets/images/active_label.svg"
            height={100}
            width={100}
          />
        </div>
        <div className="d-flex col-10 pe-2 flex-column  ">
          <div
            className="  mb-4"
            style={{
              fontSize: 18,
              lineHeight: "1.7rem",
              fontWeight: 400,
            }}
          >
            {data && data.title}
            {data && data.type == "ev" && (
              <h6
                className=" d-inline-flex ms-2"
                style={{
                  color: "#11999e",
                  fontSize: 14,
                }}
              >
                {" "}
                متخصص
              </h6>
            )}
          </div>

          <h6
            className="mb-3"
            style={{
              fontSize: 16,
              lineHeight: "0.2rem",
            }}
          >
            {data && data.jobCategory[0].fa_name}
            <div
              className=" d-inline-flex fw-light ms-2"
              style={{
                color: "#a8a8a8",
                fontSize: 14,
              }}
            >
              {data.personal && data.personal.city_fa}
            </div>
          </h6>

          <div
            className="d-flex  fw-light justify-content-start align-items-start"
            style={{
              fontSize: 15,
            }}
          >
            {data && data.type == "rv" && (
              <>
                <svg
                  className="me-2"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 8.34552C0 14.6487 1.32375 15.9996 7.5 15.9996C13.6763 15.9996 15 14.6487 15 8.34552C15 2.04236 13.6763 0.691406 7.5 0.691406C1.32375 0.691406 0 2.04236 0 8.34552ZM10.4419 5.98096C10.686 6.23006 10.686 6.63392 10.4419 6.88301L7.31694 10.0722C7.07288 10.3213 6.67712 10.3213 6.43306 10.0722L4.87056 8.47761C4.62648 8.22854 4.62648 7.82465 4.87056 7.57558C5.11464 7.3265 5.51036 7.3265 5.75444 7.57558L6.875 8.71916L9.55806 5.98096C9.80212 5.73187 10.1979 5.73187 10.4419 5.98096Z"
                    fill="#32AE3E"
                  />
                </svg>
                شرکت معتبر
              </>
            )}
            {data.personal && data.personal.insurrance == "1" && (
              <>
                <svg
                  className="mx-2"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 8.34552C0 14.6487 1.32375 15.9996 7.5 15.9996C13.6763 15.9996 15 14.6487 15 8.34552C15 2.04236 13.6763 0.691406 7.5 0.691406C1.32375 0.691406 0 2.04236 0 8.34552ZM10.4419 5.98096C10.686 6.23006 10.686 6.63392 10.4419 6.88301L7.31694 10.0722C7.07288 10.3213 6.67712 10.3213 6.43306 10.0722L4.87056 8.47761C4.62648 8.22854 4.62648 7.82465 4.87056 7.57558C5.11464 7.3265 5.51036 7.3265 5.75444 7.57558L6.875 8.71916L9.55806 5.98096C9.80212 5.73187 10.1979 5.73187 10.4419 5.98096Z"
                    fill="#32AE3E"
                  />
                </svg>
                بیمه
              </>
            )}
          </div>
        </div>
        <div
          className="d-flex flex-column col-2  justify-content-center align-items-center shadow2    "
          style={{
            fontSize: "0.9rem",
            borderRadius: 10,
            width: "15%",
          }}
        >
          {data.personal && data.personal.corporate_type == 2 && (
            <div className="adbox-label">
              دورکاری
              <svg
                className="mx-auto"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.81759 11.2296C1.96153 12.0813 2.77719 12.771 3.64084 12.771H10.3581C11.2158 12.771 12.0375 12.0753 12.1814 11.2296L12.9791 6.45555C13.075 5.86779 12.7752 5.08209 12.3133 4.71024L8.15703 1.3876C7.51529 0.871808 6.47771 0.871802 5.84197 1.3816L1.68564 4.71024C1.21783 5.08209 0.91795 5.86779 1.01991 6.45555L1.42775 8.90856"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.99939 5.98828C6.17173 5.98828 5.5 6.66001 5.5 7.48768C5.5 8.31534 6.17173 8.98707 6.99939 8.98707C7.82706 8.98707 8.49879 8.31534 8.49879 7.48768"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          <div
            className="d-flex justify-content-center align-items-center "
            style={{
              backgroundColor: "rgb(17,153,158,0.09)",
              borderRadius: 10,
              width: "100%",
              height: 100,
            }}
          >
            {data && <img src={data.image} width={74} height={74} />}
          </div>
          <div>برقراری ارتباط</div>
        </div>
      </div>
      {/* {data && (
        <h6 className="adbox-salary mx-auto" id="adbox-salary">
          حقوق پرداختی از {data.personal.fa_salary_from} تومان تا{" "}
          {data.personal.fa_salary_to} تومان
        </h6>
      )} */}
    </div>
  );
};

export default AdBoxShowCase;
