import { useContext } from "react";
import ResumeContext from "../../../context/employeeContext/CreateResume/ResumeContext";
import SubmitRn from "../VipAd/FormInputs/SubmitRn";
 import SwitchButtion from "./SwitchButton";

const ContactForm = () => {
  const resumeContext = useContext(ResumeContext);
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
              className="col-12 mb-3 "
              style={{
                backgroundColor: "#fff",
                borderStyle: "none",
                borderRadius: 5,
              }}
              type="text"
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "cellphone",
                  payload: e.target.value,
                })
              }
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
              className="col-12 mb-3 "
              style={{
                backgroundColor: "#fff",
                borderStyle: "none",
                borderRadius: 5,
              }}
              type="text"
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "whatsapp",
                  payload: e.target.value,
                })
              }
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
              className="col-12 mb-3 "
              style={{
                backgroundColor: "#fff",
                borderStyle: "none",
                borderRadius: 5,
              }}
              type="text"
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "telegram",
                  payload: e.target.value,
                })
              }
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
              className="col-12 mb-3 "
              style={{
                backgroundColor: "#fff",
                borderStyle: "none",
                borderRadius: 5,
              }}
              type="text"
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "email",
                  payload: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="d-flex  justify-content-between mt-3">
          <div className="d-flex col-5 align-items-start">
            <label
              style={{
                marginBottom: "0.5rem",
                fontSize: "0.9rem",
                fontWeight: "600",
                paddingLeft: "1.2rem",
              }}
            >
              امکان ارسال رزومه در پنل کاربری
            </label>
            <SwitchButtion />
          </div>
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
      <SubmitRn />
      
    </>
  );
};

export default ContactForm;
