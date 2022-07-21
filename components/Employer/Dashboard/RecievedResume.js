import { useContext, useEffect, useState } from "react";
import style from "./styles/rshow.module.css";
import axios from "axios";
import BreakLine from "../../Employee/Resume/FormInputs/BreakLine";
import RequsetInterview from "./RequsetInterview";
import AuthContext from "context/Auth/AuthContext";
const RecievedResume = () => {
  const { user } = useContext(AuthContext);
  const [tab, setTab] = useState(1);
  const [status, setStatus] = useState("");
  const [resumes, setResumes] = useState([]);
  useEffect(() => {
    resumes.length == 0 &&
      user &&
      axios({
        url: "/getRecievedResume",
        method: "get",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
        .then((response) => {
          console.log(response);
          setResumes(response.data.data.resumes);
        })
        .catch(function (error) {
          console.log(error);
        });
  }, [resumes, user]);
  const UnseenAdPreview = ({ item }) => {
    return (
      <>
        <div className="col-12 d-flex bg-white position-relative  py-4">
          <div className="col-6  d-flex align-items-center px-3">
            <div
              className=" d-flex flex-column   justify-content-center align-items-center shadow2 col-3 "
              style={{
                fontSize: 15,
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
                <img src="/assets/images/adimage.png" width={74} height={74} />
              </div>
              <h6
                className="text-center my-auto py-2 "
                style={{
                  fontSize: 14,
                }}
              >
                برقراری ارتباط
              </h6>
            </div>
            <div className="d-flex flex-column px-3">
              <h4 className={`${style.txt1} `}> آگهی {item.ad.title}</h4>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt2} `}>
                  جویای کار {item.type == "site" && item.resume.title}{" "}
                </h5>
                {/* <h6 className={`${style.txt6} ms-2 `}>(متخصص)</h6> */}
              </div>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt3} `}>
                  {" "}
                  {item.type == "site" &&
                    item.resume.jobCategory.fa_name}{" "}
                </h5>
                <h6 className={`${style.txt5} ms-2 `}>
                  {" "}
                  {item.type == "site" && `( ${item.resume.personal.city_fa})`}
                </h6>
              </div>
              <div className="d-flex align-items-center">
                {item.type == "site" && item.resume.experiences.length > 0 && (
                  <h5 className={`${style.txt4} `}> دارای سابقه</h5>
                )}
              </div>
            </div>
          </div>
          <div className="d-flex col-6 ms-auto  pe-4 align-items-center  ">
            {(item.status == "seen" || item.status == "unseen") && (
              <div className="d-flex col-7 flex-column ms-auto">
                <div
                  className={`${style.sec8} py-2 `}
                  onClick={() => setModalVisible(!modalVisible)}
                >
                  تایید درخواست و درخواست مصاحبه
                </div>
                <h6 className="text-center mb-2">
                  ـــــــــــــــــ یا ـــــــــــــــــ{" "}
                </h6>
                <div className={`${style.sec9} py-2 `}>رد کردن درخواست</div>
              </div>
            )}
          </div>
        </div>
        <BreakLine />
      </>
    );
  };
  const RejectedAdPreview = ({ item }) => {
    return (
      <>
        <div className="col-12 d-flex bg-white position-relative  py-4">
          <div
            className="col-6  d-flex align-items-center px-3"
            style={{
              opacity: 0.5,
            }}
          >
            <div
              className=" d-flex flex-column   justify-content-center align-items-center shadow2 col-3 "
              style={{
                fontSize: 15,
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
                <img src="/assets/images/adimage.png" width={74} height={74} />
              </div>
              <h6
                className="text-center my-auto py-2 "
                style={{
                  fontSize: 14,
                }}
              >
                برقراری ارتباط
              </h6>
            </div>
            <div className="d-flex flex-column px-3">
              <h4 className={`${style.txt1} `}> آگهی {item.ad.title}</h4>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt2} `}>
                  جویای کار {item.type == "site" && item.resume.title}{" "}
                </h5>
                {/* <h6 className={`${style.txt6} ms-2 `}>(متخصص)</h6> */}
              </div>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt3} `}>
                  {" "}
                  {item.type == "site" &&
                    item.resume.jobCategory.fa_name}{" "}
                </h5>
                <h6 className={`${style.txt5} ms-2 `}>
                  {" "}
                  {item.type == "site" && `( ${item.resume.personal.city_fa})`}
                </h6>
              </div>
              <div className="d-flex align-items-center">
                {item.type == "site" && item.resume.experiences.length > 0 && (
                  <h5 className={`${style.txt4} `}> دارای سابقه</h5>
                )}
              </div>
            </div>
          </div>

          <div className={`${style.sec10} `}>
            درخواست همکاری این کاربر رد شده است
            <h6 className={`${style.txt6} d-inline-block  ms-2 `}>
              تغییر وضعیت
            </h6>
          </div>
        </div>
        <BreakLine />
      </>
    );
  };
  const AcceptedAdPreview = ({ item }) => {
    return (
      <>
        <div className="col-12 d-flex bg-white position-relative  py-4">
          <div className="col-6  d-flex align-items-center px-3">
            <div
              className=" d-flex flex-column   justify-content-center align-items-center shadow2 col-3 "
              style={{
                fontSize: 15,
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
                <img src="/assets/images/adimage.png" width={74} height={74} />
              </div>
              <h6
                className="text-center my-auto py-2 "
                style={{
                  fontSize: 14,
                }}
              >
                برقراری ارتباط
              </h6>
            </div>
            <div className="d-flex flex-column px-3">
              <h4 className={`${style.txt1} `}> آگهی {item.ad.title}</h4>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt2} `}>
                  جویای کار {item.type == "site" && item.resume.title}{" "}
                </h5>
                {/* <h6 className={`${style.txt6} ms-2 `}>(متخصص)</h6> */}
              </div>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt3} `}>
                  {" "}
                  {item.type == "site" &&
                    item.resume.jobCategory.fa_name}{" "}
                </h5>
                <h6 className={`${style.txt5} ms-2 `}>
                  {" "}
                  {item.type == "site" && `( ${item.resume.personal.city_fa})`}
                </h6>
              </div>
              <div className="d-flex align-items-center">
                {item.type == "site" && item.resume.experiences.length > 0 && (
                  <h5 className={`${style.txt4} `}> دارای سابقه</h5>
                )}
              </div>
            </div>
          </div>
          <div className="d-flex col-6 ms-auto  pe-4 align-items-center  ">
            <div className="d-flex col-7 flex-column ms-auto">
              <h6 className={`  ${style.text1} me-3 `}>
                شما با این کاربر درتاریخ 5/1/1400 ساعت 17:45 درخواست مصاحبه کرده
                اید
              </h6>
              <div className="d-flex justify-content-between">
                <div className={`${style.alls} d-flex  `}>
                  تغییر زمان مصاحبه
                </div>
                <div className={`${style.alls} d-flex  `}>مدیریت مصاحبه ها</div>
              </div>
            </div>
          </div>
        </div>
        <BreakLine />
      </>
    );
  };
  const AllAdPreview = ({ item }) => {
    return (
      <>
        <div className="col-12 d-flex bg-white position-relative  py-4">
          <div
            className="col-6  d-flex align-items-center px-3"
            style={{
              opacity: item.status == "rejected" ? 0.5 : 1,
            }}
          >
            <div
              className=" d-flex flex-column   justify-content-center align-items-center shadow2 col-3 "
              style={{
                fontSize: 15,
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
                <img src="/assets/images/adimage.png" width={74} height={74} />
              </div>
              <h6
                className="text-center my-auto py-2 "
                style={{
                  fontSize: 14,
                }}
              >
                برقراری ارتباط
              </h6>
            </div>
            <div className="d-flex flex-column px-3">
              <h4 className={`${style.txt1} `}> آگهی {item.ad.title}</h4>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt2} `}>
                  جویای کار {item.type == "site" && item.resume.title}{" "}
                </h5>
                {/* <h6 className={`${style.txt6} ms-2 `}>(متخصص)</h6> */}
              </div>
              <div className="d-flex align-items-center">
                <h5 className={`${style.txt3} `}>
                  {" "}
                  {item.type == "site" &&
                    item.resume.jobCategory.fa_name}{" "}
                </h5>
                <h6 className={`${style.txt5} ms-2 `}>
                  {" "}
                  {item.type == "site" && `( ${item.resume.personal.city_fa})`}
                </h6>
              </div>
              <div className="d-flex align-items-center">
                {item.type == "site" && item.resume.experiences.length > 0 && (
                  <h5 className={`${style.txt4} `}> دارای سابقه</h5>
                )}
              </div>
            </div>
          </div>
          {item.status !== "rejected" && (
            <div className="d-flex col-6 ms-auto  pe-4 align-items-center  ">
              {(item.status == "seen" || item.status == "unseen") && (
                <div className="d-flex col-7 flex-column ms-auto">
                  <div
                    className={`${style.sec8} py-2 `}
                    onClick={() => setModalVisible(!modalVisible)}
                  >
                    تایید درخواست و درخواست مصاحبه
                  </div>
                  <h6 className="text-center mb-2">
                    ـــــــــــــــــ یا ـــــــــــــــــ{" "}
                  </h6>
                  <div className={`${style.sec9} py-2 `}>رد کردن درخواست</div>
                </div>
              )}
              {item.status == "accepted" && (
                <div className="d-flex col-7 flex-column ms-auto">
                  <h6 className={`  ${style.text1} me-3 `}>
                    شما با این کاربر درتاریخ 5/1/1400 ساعت 17:45 درخواست مصاحبه
                    کرده اید
                  </h6>
                  <div className="d-flex justify-content-between">
                    <div className={`${style.alls} d-flex  `}>
                      تغییر زمان مصاحبه
                    </div>
                    <div className={`${style.alls} d-flex  `}>
                      مدیریت مصاحبه ها
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {item.status === "rejected" && (
            <div className={`${style.sec10} `}>
              درخواست همکاری این کاربر رد شده است
              <h6 className={`${style.txt6} d-inline-block  ms-2 `}>
                تغییر وضعیت
              </h6>
            </div>
          )}
        </div>
        <BreakLine />
      </>
    );
  };
  return (
    <>
      <div
        className="d-flex col-12 mt-5 justify-content-center jobAds bg-white   "
        style={{
          borderBottom: "#000 1px solid",
        }}
      >
        <div
          className={
            tab == 1
              ? "col-3 py-2 rightsec1 jobAds-selected"
              : "col-3 py-2 rightsec1 "
          }
          onClick={() => {
            setTab(1);
            setStatus("unseen");
          }}
        >
          در انتظار بررسی
        </div>
        <div
          className={
            tab == 2
              ? "col-3 py-2 middlesec1 jobAds-selected"
              : "col-3 py-2 middlesec1 "
          }
          onClick={() => {
            setTab(2);
            setStatus("rejected");
          }}
        >
          رد شده
        </div>
        <div
          className={
            tab == 3
              ? "col-3 py-2 middlesec1 jobAds-selected"
              : "col-3 py-2 middlesec1 "
          }
          onClick={() => {
            setTab(3);
            setStatus("accepted");
          }}
        >
          تائید شده
        </div>
        <div
          className={
            tab == 4
              ? "col-3 py-2 leftsec1 jobAds-selected"
              : "col-3 py-2 leftsec1 "
          }
          onClick={() => {
            setTab(4);
            setStatus("all");
          }}
        >
          نمایش همه
        </div>
      </div>

      <div className="bg-white py-5">
        {resumes.length > 0 &&
          resumes.map((item, key) =>
            item.status == "unseen" && tab == 1 ? (
              <UnseenAdPreview item={item} />
            ) : item.status == "rejected" && tab == 2 ? (
              <RejectedAdPreview item={item} />
            ) : item.status == "accepted" && tab == 3 ? (
              <AcceptedAdPreview item={item} />
            ) : tab == 4 ? (
              <AllAdPreview item={item} />
            ) : null
          )}
      </div>
    </>
  );
};
export default RecievedResume;
