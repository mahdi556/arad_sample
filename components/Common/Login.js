import Image from "next/image";
import axios from "../../axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useContext, useState } from "react";
import InputCode from "./InputCode";
import UserContext from "../../context/employeeContext/User/UserContext";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "#C7E4E5",
  boxShadow: 24,
  borderRadius: 5,
  // p: 2,
};
const Login = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [token, setToken] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [otp, setOtp] = useState("");
  const [roll, setRoll] = useState("");
  const [countdown, setCountdown] = useState("");
  const [resend, setResend] = useState(false);

  const userContext = useContext(UserContext);
  const initialSingHandler = () => {
    axios({
      url: "/register",
      method: "post",
      data: {
        cellphone: cellphone,
      },
    })
      .then((response) => {
        setToken(response.data.login_token);
        // startTimer();
        // const login_token = response.data.login_token;
        // navigation.navigate("Forget", {
        //   cellphone: cellphone,
        //   login_token: login_token,
        // });
      })
      .catch(function (error) {
        console.log(error);
      });
    // }
  };
  const otpCheckHandler = () => {
    axios({
      url: "/checkotp",
      method: "post",
      data: {
        cellphone: cellphone,
        otp: otp,
        login_token: token,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          handleClose2();
          handleOpen3();
        }
       })
      .catch(function (error) {
        console.log(error);
      });
    // }
  };
   const signUpHandler = () => {
    axios({
      url: "/firstSignUp",
      method: "post",
      data: {
        firstName: firstName,
        lastName: lastName,
        login_token: token,
      },
    })
      .then((response) => {
        console.log(response);
        userContext.dispatch({
          type: "user",
          payload: {
            id: response.data.id,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            auth: true,
          },
        });
        handleClose3();
      })
      .catch(function (error) {
        console.log(error);
      });
    // }
  };
   

  
  return (
    <>
      <div
        className="d-flex px-2 py-2 me-5 align-items-center "
        style={{
          borderRadius: 10,
          backgroundColor: "#11999E",
          borderWidth: 1,
          borderStyle: "solid",
          fontSize: 14,
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={handleOpen1}
      >
        {userContext.data.user.auth
         ? (
          `${userContext.data.user.firstName}  ${userContext.data.user.lastName}`
          
        ) : (
          <>
            <div className="d-flex me-2  ">
              <Image src="/assets/images/login.svg" height={22} width={24} />
            </div>
            ورود/ثبت نام
          </>
        )} 
      </div>

      <Modal open={open1} onClose={handleClose1}>
        <Box sx={style} className="px-4 py-3">
          <div className="col-12 d-flex flex-column  justify-content-between">
            <div>
              <div
                className="fw-bold text-center"
                style={{
                  fontSize: 50,
                }}
              >
                ورود و ثبت نام
              </div>
              <div
                className="  text-center mt-2"
                style={{
                  fontSize: 18,
                }}
              >
                برای استفاده از قابلیت های چیتیت شماره خود را وارد کنید
              </div>
            </div>
            <div className="d-flex flex-column   mx-4">
              <label
                className=" "
                style={{
                  marginTop: 80,
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                  fontSize: 25,
                }}
              >
                شماره موبایل
              </label>
              <input
                className="inputStyle"
                // className={
                //   resumecontext.data.name == ""
                //     ? "col-12 mb-3 ps-2 inputStyle"
                //     : "col-12 mb-3 ps-2 inputFilled"
                // }
                type="text"
                // value={resumecontext.data.name}
                onChange={(e) => setCellphone(e.target.value)}
              />
              <h6
                className="mt-3"
                style={{
                  fontSize: 18,
                }}
              >
                *شرایط استفاده از خدمات و حریم خصوصی چیتیت را می پذیرم
              </h6>
            </div>
            <div
              className="py-2 text-white   px-2 mx-auto"
              style={{
                marginTop: 100,
                fontSize: "1.9rem",
                backgroundColor: "#E92B59",
                textAlign: "center",
                borderRadius: 8,
                cursor: "pointer",
                width: "80%",
              }}
              onClick={() => {
                initialSingHandler();
                handleClose1();
                handleOpen2();
              }}
            >
              ارسال کد تایید
            </div>
          </div>
        </Box>
      </Modal>
      <Modal open={open2} onClose={handleClose2}>
        <Box sx={style} className="px-4 py-3">
          <div className="col-12 d-flex flex-column  justify-content-between">
            <div>
              <div
                className="fw-bold text-center"
                style={{
                  fontSize: 40,
                }}
              >
                ورود و ثبت نام
              </div>
              <div
                className="  text-center  "
                style={{
                  fontSize: 25,
                  marginTop: 50,
                }}
              >
                کد تایید به شماره
                <h3
                  className="d-inline-flex"
                  style={{
                    fontSize: 25,
                    color: "#11999e",
                  }}
                >
                  &nbsp;
                  {cellphone} &nbsp;
                </h3>
                ارسال شد.
              </div>
              <h4
                style={{
                  fontSize: 19,
                  color: "#11999e",
                  textAlign: "center",
                  cursor: "pointer",
                  marginTop: 10,
                }}
                onClick={() => {
                  handleClose2();
                  handleOpen1();
                }}
              >
                اصلاح شماره
              </h4>
            </div>
            <div className="d-flex flex-column mt-5 mx-4">
              <label
                className=""
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                  fontSize: 25,
                }}
              >
                کد تایید
              </label>

              <div className="loginInput ">
                <InputCode
                  length={4}
                  onComplete={(code) => {
                    setOtp(code);
                  }}
                />
              </div>
              {resend ? (
                <div
                  className="text-end mt-2"
                  style={{
                    cursor: "pointer",
                    color: "#ec4b72",
                  }}
                  onClick={() => {
                    initialSingHandler();
                    setResend(false);
                    // startTimer();
                  }}
                >
                  ارسال مجدد
                </div>
              ) : (
                <div className="text-end mt-2">{countdown}</div>
              )}
            </div>
            <div
              className="py-2 text-white   px-2 mx-auto"
              style={{
                width: "80%",
                fontSize: "1.9rem",
                backgroundColor: "#E92B59",
                textAlign: "center",
                borderRadius: 8,
                cursor: "pointer",
                marginTop: 100,
              }}
              onClick={() => otpCheckHandler()}
            >
              ورود یا ثبت نام
            </div>
          </div>
        </Box>
      </Modal>
      <Modal open={open3} onClose={handleClose3}>
        <Box sx={style} className="px-4 py-4">
          <div className="col-12 d-flex flex-column  justify-content-between">
            <div>
              <div
                className="fw-bold text-center"
                style={{
                  fontSize: 23,
                }}
              >
                تنها با وارد کردن اطلاعات زیر حساب کاربری خود را ایجاد کنید.
              </div>
            </div>
            <div className="d-flex flex-column mt-5 mx-4">
              <label
                className="  "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                  fontSize: 25,
                }}
              >
                نام
              </label>
              <input
                className="inputStyle"
                // className={
                //   resumecontext.data.name == ""
                //     ? "col-12 mb-3 ps-2 inputStyle"
                //     : "col-12 mb-3 ps-2 inputFilled"
                // }
                type="text"
                // value={resumecontext.data.name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="d-flex flex-column mt-5  mx-4">
              <label
                className=" "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                  fontSize: 25,
                }}
              >
                نام خانوادگی
              </label>
              <input
                className="inputStyle"
                // className={
                //   resumecontext.data.name == ""
                //     ? "col-12 mb-3 ps-2 inputStyle"
                //     : "col-12 mb-3 ps-2 inputFilled"
                // }
                type="text"
                // value={resumecontext.data.name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-between mx-4 mt-5">
              <div
                className="d-flex align-items-center"
                onClick={() => setRoll("employer")}
              >
                <h3
                  style={{
                    marginBottom: "0.5rem",
                    fontWeight: "normal",
                    fontSize: 30,
                    cursor: "pointer",
                  }}
                >
                  کارفرما هستم
                </h3>
                <div className="d-flex ms-2   ">
                  <Image
                    src={
                      roll == "employer"
                        ? "/assets/images/radio-selected.svg"
                        : "/assets/images/radio-unselected.svg"
                    }
                    height={22}
                    width={24}
                  />
                </div>
              </div>
              <div
                className="d-flex align-items-center"
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                  fontSize: 30,
                  cursor: "pointer",
                }}
                onClick={() => setRoll("employee")}
              >
                <h3
                  style={{
                    marginBottom: "0.5rem",
                    fontWeight: "normal",
                    fontSize: 30,
                    cursor: "pointer",
                  }}
                >
                  کارجو هستم
                </h3>
                <div className="d-flex ms-2  ">
                  <Image
                    src={
                      roll == "employee"
                        ? "/assets/images/radio-selected.svg"
                        : "/assets/images/radio-unselected.svg"
                    }
                    height={22}
                    width={24}
                  />
                </div>
              </div>
            </div>
            <div
              className="py-2 text-white mt-5 px-2 mx-auto"
              style={{
                width: "80%",
                fontSize: "1.9rem",
                backgroundColor: "#E92B59",
                textAlign: "center",
                borderRadius: 8,
                cursor: "pointer",
              }}
              onClick={() => signUpHandler()}
            >
              ثبت نام
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Login;
