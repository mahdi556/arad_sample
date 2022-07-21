import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useContext, useEffect, useState } from "react";
import InputCode from "./InputCode";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import AuthContext from "../../context/Auth/AuthContext";
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
  const router = useRouter();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => {
    setLoading(false);
    setOpen1(false);
  };
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => {
    setLoading(false);
    setOpen2(false);
  };
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [otp, setOtp] = useState("");
  const [roll, setRoll] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingResend, setLoadingResend] = useState(false);
  const [timer, setTimer] = useState("");
  const [show, setShow] = useState(false);
  const {
    user,
    register,
    checkOtp,
    status,
    setStatus,
    signUp,
    handleSignIn,
    resendOtp,
  } = useContext(AuthContext);
  useEffect(() => {
    if (status == "login") {
      setLoading(false);
      handleOpen1();
      setStatus("");
    }
    if (status == "success") {
      setLoading(false);
      handleClose1();
      handleOpen2();
    }
    if (status == "successOtp") {
      setLoading(false);
      handleClose2();
      setStatus("");
      if (user.new == 1) {
        handleOpen3();
      } else {
        user.role == "employee"
          ? router.push("/employee")
          : user.role == "employer"
          ? router.push("/employer")
          : null;
      }
    }
    if (status == "successSignUp") {
      setLoading(false);
      handleClose3();
      if (user.role.includes("employee")) {
        router.push("/employee");
      } else if (user.role.includes("employer")) {
        router.push("/employer");
      }
    }
  }, [status]);

  useEffect(() => {
    if (status == "success") {
      let time = "0:06";
      let interval = setInterval(() => {
        let countdown = time.split(":");
        let minutes = parseInt(countdown[0], 10);
        let seconds = parseInt(countdown[1], 10);
        --seconds;
        minutes = seconds < 0 ? --minutes : minutes;
        if (minutes < 0) {
          clearInterval(interval);
          setShow(true);
        }
        seconds = seconds < 0 ? 59 : seconds;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        time = minutes + ":" + seconds;
        setTimer(time);
      }, 1000);
      return () => {
        clearInterval(interval);
        setTimer("");
      };
    }
  }, [loadingResend, status]);
  const initialSingHandler = async () => {
    if (cellphone === "") {
      toast.error("شماره موبایل الزامی است");
      return;
    }

    const pattern = /^(\+98|0)?9\d{9}$/;
    if (!pattern.test(cellphone)) {
      toast.error("فرمت شماره موبایل معتبر نیست");
      return;
    }
    setLoading(true);
    const result1 = await register({ cellphone });
  };
  const otpCheckHandler = async () => {
    if (otp === "") {
      toast.error("کد ورود الزامی است");
      return;
    }
    const pattern = /^[0-9]{4}$/;
    if (!pattern.test(otp)) {
      toast.error("فرمت کد ورود معتبر نیست");
      return;
    }

    setLoading(true);
    const result2 = await checkOtp({ otp });
  };
  const handleResendOtp = async () => {
    setLoadingResend(true);
    await resendOtp();
    setLoadingResend(false);
    setShow(false);
  };

  const signUpHandler = async () => {
    const result3 = await signUp({ firstName, lastName, roll });
  };

  return (
    <>
      <div
        className="d-flex px-2 py-2 me-3 align-items-center "
        onClick={() => handleSignIn()}
      >
        {user ? (
          <div
            className=""
            style={{
              backgroundColor: "#c7e4e5",
              borderRadius: 10,
              padding: "13px 18px",
              fontSize: 20,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {user.first_name} {user.last_name}
            <img
              className="ms-3"
              src="/assets/images/arrow_black.svg"
              width={18}
            />
          </div>
        ) : (
          <>
            <div
              className="d-flex me-2  "
              style={{
                cursor: "pointer",
              }}
            >
              <img src="/assets/images/login.svg" height={22} width={24} />
              ورود/ثبت نام
            </div>
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
                !loading && initialSingHandler();
              }}
            >
              {loading ? (
                <>
                  <div className="d-flex col-12 justify-content-center align-items-center  ">
                    <span
                      className="spinner-border spinner-border-sm me-3"
                      role="status"
                    ></span>
                    <h5>در حال بررسی</h5>
                  </div>
                </>
              ) : (
                <h6>ارسال کد تایید</h6>
              )}
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
              {show ? (
                <div
                  className="text-end mt-2"
                  style={{
                    cursor: "pointer",
                    color: "#ec4b72",
                  }}
                  onClick={() => {
                    handleResendOtp();
                  }}
                >
                  ارسال مجدد
                </div>
              ) : (
                <div className="text-end mt-2">{timer}</div>
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
              onClick={() => {
                !loading && otpCheckHandler();
              }}
            >
              {loading ? (
                <>
                  <div className="d-flex col-12 justify-content-center align-items-center  ">
                    <span
                      className="spinner-border spinner-border-sm me-3"
                      role="status"
                    ></span>
                    <h5>در حال بررسی</h5>
                  </div>
                </>
              ) : (
                <h6>ارسال کد تایید</h6>
              )}
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
                  <img
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
                  <img
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
              onClick={() => {
                !loading && signUpHandler();
              }}
            >
              {loading ? (
                <>
                  <div className="d-flex col-12 justify-content-center align-items-center  ">
                    <span
                      className="spinner-border spinner-border-sm me-3"
                      role="status"
                    ></span>
                    <h5>در حال بررسی</h5>
                  </div>
                </>
              ) : (
                <h6>ثبت نام</h6>
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Login;
