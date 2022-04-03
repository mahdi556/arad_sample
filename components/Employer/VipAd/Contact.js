import { useContext, useState } from "react";
import NormalAdContext from "../../../context/employerContext/CreateAd/NormalAd/NormalAdContext";
import SwitchButtion from "../FormInputs/SwitchButton";

const ContactForm = () => {
   
  const normalAdContext = useContext(NormalAdContext);
  
  return (
    <>
      <div
        className="row pt-4 pb-4 mt-4"
        style={{
          background: "#C7E4E5",
          borderRadius: 15,
          paddingRight: "5rem",
          paddingLeft: "5rem",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
          }}
        >
          اطلاعات تماس
        </div>
        <div className="d-flex  justify-content-between">
          <div className="col-5">
            <label
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
              }}
            >
              شماره موبایل
            </label>
            <input
              className={
                normalAdContext.data.cellphone == ""
                  ? "col-12 mb-3 ps-2 inputStyle"
                  : "col-12 mb-3 ps-2 inputFilled"
              }
              onChange={(e) =>
                normalAdContext.dispatch({
                  type: "cellphone",
                  payload: e.target.value,
                })
              }
              type="text"
            />
          </div>
          <div className="col-5">
            <label
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
              }}
            >
              شماره واتساپ
            </label>
            <input
              className={
                normalAdContext.data.whatsapp == ""
                  ? "col-12 mb-3 ps-2 inputStyle"
                  : "col-12 mb-3 ps-2 inputFilled"
              }
              onChange={(e) =>
                normalAdContext.dispatch({
                  type: "whatsapp",
                  payload: e.target.value,
                })
              }
              type="text"
            />
          </div>
        </div>
        <div className="d-flex  justify-content-between">
          <div className="col-5">
            <label
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
              }}
            >
              تلگرام
            </label>
            <input
              className={
                normalAdContext.data.telegram == ""
                  ? "col-12 mb-3 ps-2 inputStyle"
                  : "col-12 mb-3 ps-2 inputFilled"
              }
              onChange={(e) =>
                normalAdContext.dispatch({
                  type: "telegram",
                  payload: e.target.value,
                })
              }
              type="text"
            />
          </div>
          <div className="col-5">
            <label
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
              }}
            >
              ایمیل
            </label>
            <input
              className={
                normalAdContext.data.email == ""
                  ? "col-12 mb-3 ps-2 inputStyle"
                  : "col-12 mb-3 ps-2 inputFilled"
              }
              onChange={(e) =>
                normalAdContext.dispatch({
                  type: "email",
                  payload: e.target.value,
                })
              }
              type="text"
            />
          </div>
        </div>
        <div className="d-flex  justify-content-between mt-3">
          <div className="d-flex align-items-start col-5">
            <label
              style={{
                marginBottom: "0.5rem",
                fontSize: "0.9rem",
                fontWeight: "600",
                paddingLeft: "1.2rem",
              }}
            >
              امکان چت در سایت
            </label>

            <SwitchButtion />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ContactForm;
