import axios from "axios";
import BreakLine from "./BreakLine";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ToastContainer, toast } from "react-toastify";
import { useRef, useState, useContext, useEffect } from "react";
import moment from "jalali-moment";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  boxShadow: 24,
  borderRadius: 10,
  // p: 2,
};

const RAdShow = ({ data }) => {
  const lottieRef = useRef();
  const [play, settPlay] = useState(false);
  const width = "33%";
  const [open4, setOpen4] = useState(false);
  const [reason, setReason] = useState("");

  useEffect(() => {}, [data]);
  const SalaryType = [
    { id: 1, fa: "ماهانه", en: "" },
    { id: 2, fa: "روزانه", en: "" },
    { id: 3, fa: "ساعتی", en: "" },
    { id: 4, fa: "پورسانتی", en: "" },
    { id: 5, fa: "توافقی", en: "" },
  ];

  const handleStatus = (status) => {
    console.log(status);
    axios({
      url: "/adminChangeStatus",
      method: "post",
      data: {
        id: data.id,
        status: status,
      },
    })
      .then((response) => {
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleRejectedAd = () => {
    axios({
      url: "/adminRejectAd",
      method: "post",
      data: {
        id: data.id,
        reason: reason,
      },
    })
      .then((response) => {
        setOpen4(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="d-flex col-12 px-5">
        <div className="d-flex flex-column mx-auto col-8 px-4 mt-5 eAdshow">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column mt-4">
              <h1 className="eAdshowSec1">
                {" "}
                {data.title}{" "}
                <h5 className="d-inline-flex">
                  {data.personal && data.personal.corporate_type == 1
                    ? "حضوری"
                    : data.personal && data.personal.corporate_type == 2
                    ? "دورکاری"
                    : data.personal && data.personal.corporate_type == 3
                    ? "(حضوری و دورکاری)"
                    : null}
                </h5>
              </h1>
              <h4 className="eAdshowSec2">
                دسته {data.jobCategory && data.jobCategory.fa_name}
                <h6 className="d-inline-flex fw-light">3روز پیش</h6>
              </h4>
            </div>
          </div>
          <BreakLine />
          <div className="d-flex flex-column pe-4">
            <div className="d-flex col-12">
              <div className="d-flex col-4">
                <h6 className="col-5 txtSec1"> میزان حقوق دریافتی</h6>
                <h6 className="col-7 txtSec2">
                  {" "}
                  از {data.personal && data.personal.fa_salary_from} تاتومان
                  {data.personal && data.personal.fa_salary_to}تومان
                </h6>
              </div>
              <div className="d-flex col-4 ms-4">
                <h6 className="col-5 txtSec1">بیمه</h6>
                <h6 className="col-7 txtSec2">
                  {" "}
                  {data.personal && data.personal.insurrance == 1
                    ? "دارد"
                    : data.personal && data.personal.insurrance == 0
                    ? "ندارد"
                    : null}{" "}
                </h6>
              </div>
              <div className="d-flex col-3 ms-4 ">
                <h6 className="col-5 txtSec1">نوع همکاری</h6>
                <h6 className="col-7 txtSec2">
                  {" "}
                  {data.personal && data.personal.corporate_type == 1
                    ? "حضوری"
                    : data.personal && data.personal.corporate_type == 2
                    ? "دورکاری"
                    : data.personal && data.personal.corporate_type == 3
                    ? "(حضوری و دورکاری)"
                    : null}
                </h6>
              </div>
            </div>
            <div className="d-flex col-12">
              <div className="d-flex col-4">
                <h6 className="col-5 txtSec1"> نحوه پرداخت حقوق </h6>
                <h6 className="col-7 txtSec2">
                  {" "}
                  {data.personal &&
                    data.personal.salary_type &&
                    SalaryType[data.personal.salary_type - 1].fa}{" "}
                </h6>
              </div>
              <div className="d-flex col-4 ms-4">
                <h6 className="col-5 txtSec1">محدوده سنی</h6>
                <h6 className="col-7 txtSec2">
                  از {data.personal && data.personal.fa_age_range_from} سال تا{" "}
                  {data.personal && data.personal.fa_age_range_to} سال
                </h6>
              </div>
              <div className="d-flex col-3 ms-4 ">
                <h6 className="col-5 txtSec1">ساعات کاری</h6>
                <h6 className="col-7 txtSec2">
                  از ساعت {data.personal && data.personal.fa_work_hour_from} تا
                  ساعت {data.personal && data.personal.fa_work_hour_to}
                </h6>
              </div>
            </div>
            <BreakLine />
          </div>
          {data.softExpert && data.softExperts.length > 0 && (
            <div className="mb-4">
              <h5 className="mt-2 mb-5 fs-5 text-start fw-bold w-75">
                مهارت های نرم افزاری
              </h5>
              <div className="row row-cols-4  ">
                {data.softExperts &&
                  data.softExperts.map((item, key) => (
                    <div className="col  px-3">
                      <div className="   eAdshowSec3  ">
                        {item.fa_name}
                        <div className="d-flex col-12 justify-content-between px-2">
                          <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}>
                            {item.level == 1 && "مقدماتی"}
                          </div>
                          <div
                            className={
                              item.level == 2 || item.level == 3
                                ? "eAdshowSec6 col-4 mt-2 me-1 pb-1"
                                : "eAdshowSec8 col-4 mt-2 me-1 pb-1"
                            }
                            // {`eAdshowSec6 col-4 mt-2 me-1 pb-1`}
                          >
                            {item.level == 2 && "متوسط"}
                          </div>
                          <div
                            className={
                              item.level == 3
                                ? "eAdshowSec6 col-4 mt-2 me-1 pb-1"
                                : "eAdshowSec8 col-4 mt-2 me-1 pb-1"
                            }
                          >
                            {item.level == 3 && "پیشرفته"}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <BreakLine />
            </div>
          )}
          {data.langExperts && data.langExperts.length > 0 && (
            <div className="mb-4">
              <h5 className="mt-2 mb-5 fs-5 text-start fw-bold w-75">
                مهارت های زبان
              </h5>
              <div className="row row-cols-4  ">
                {data.langExperts &&
                  data.langExperts.map((item, key) => (
                    <div className="col  px-3">
                      <div className="   eAdshowSec3  ">
                        {item.fa_name}
                        <div className="d-flex col-12 justify-content-between px-2">
                          <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}>
                            {item.level == 1 && "مقدماتی"}
                          </div>
                          <div
                            className={
                              item.level == 2 || item.level == 3
                                ? "eAdshowSec6 col-4 mt-2 me-1 pb-1"
                                : "eAdshowSec8 col-4 mt-2 me-1 pb-1"
                            }
                            // {`eAdshowSec6 col-4 mt-2 me-1 pb-1`}
                          >
                            {item.level == 2 && "متوسط"}
                          </div>
                          <div
                            className={
                              item.level == 3
                                ? "eAdshowSec6 col-4 mt-2 me-1 pb-1"
                                : "eAdshowSec8 col-4 mt-2 me-1 pb-1"
                            }
                          >
                            {item.level == 3 && "پیشرفته"}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <BreakLine />
            </div>
          )}
          <h5 className="mt-2 mb-5 fs-5 text-start fw-bold w-75">توضیحات</h5>
          <p
            style={{
              fontSize: 16,
              lineHeight: 2,
            }}
          >
            {data.personal && data.personal.description}
          </p>
          <h5 className="  my-5 fs-4 text-start fw-bold w-75">
            تسهیلات و مزایا
          </h5>
          <div className="d-flex flex-wrap mb-3">
            <h3 className="d-flex eAdshowSec7 mx-2">وام</h3>
            <h3 className="d-flex eAdshowSec7 mx-2">مکان استراحت</h3>
            <h3 className="d-flex eAdshowSec7 mx-2">یخچال</h3>
            <h3 className="d-flex eAdshowSec7 mx-2">کیک</h3>
          </div>
        </div>
        <div className="col-4">
          <div
            className="d-flex flex-column col-10 mt-5 mx-auto py-2 px-2 align-items-center "
            style={{
              backgroundColor: "#fff",
              borderRadius: 30,
            }}
          >
            <div className="col-12 mb-4">
              <h3 className=" col-9  mx-auto">نظارت بر آگهی</h3>
            </div>
            <div className="d-flex mb-2 col-12 ">
              <h6 className="col-5 txtSec1 px-2"> تاریخ ثبت آگهی</h6>
              <h6 className="col-7 txtSec2 px-2">
                {moment(data.created_at).locale("fa").format("YYYY/M/D")}
              </h6>
            </div>
            <div className="d-flex mb-2 col-12">
              <h6 className="col-5 txtSec1 px-2">وضعیت آگهی</h6>
              <h6 className="col-7 txtSec2 px-2">
                {data.status === "registered"
                  ? "ثبت اولیه توسط کاربر"
                  : data.status === "paying"
                  ? "در انتظار پرداخت"
                  : data.status === "paid"
                  ? "پرداخت شده در انتظار تایید"
                  : data.status === "accepted"
                  ? "تایید نهایی"
                  : data.status === "rejected"
                  ? "ردشده"
                  : null}
              </h6>
            </div>
            <div className="d-flex mb-2 col-12">
              <h6 className="col-5 txtSec1 px-2"> دلیل رد آگهی</h6>
              <h6 className="col-7 txtSec2 px-2">کلمات نامناسب</h6>
            </div>
            <div className="col-12 d-flex flex-column">
              <button
                type="button"
                className="btn btn-primary mb-2 col-8 mx-auto"
                onClick={() => handleStatus("paying")}
              >
                تایید جهت پرداخت
              </button>
              <button
                type="button"
                className="btn btn-success  mb-2 col-6 mx-auto"
                onClick={() => handleStatus("accepted")}
              >
                تایید نهایی
              </button>
              <button
                type="button"
                className="btn btn-danger  mb-2 col-6 mx-auto"
                onClick={() => setOpen4(true)}
              >
                رد آگهی
              </button>
              <button
                type="button"
                className="btn btn-warning  mb-2 col-6 mx-auto"
                onClick={() => handleStatus("suspensed")}
              >
                تعلیق آگهی
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open4} onClose={() => setOpen4(false)}>
        <Box sx={style} className="px-4 py-3">
          <div className="col-12 d-flex flex-column  justify-content-between py-5 px-5">
            <h1
              style={{
                fontFamily: "iranBlack",
                fontSize: 20,
              }}
            >
              دلیل رد آگهی
            </h1>
            <div className="d-flex mt-4 px-4 align-items-center">
              <textarea
                type="text"
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-info col-8 mt-5"
              onClick={() => handleRejectedAd()}
            >
              ارسال
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default RAdShow;
