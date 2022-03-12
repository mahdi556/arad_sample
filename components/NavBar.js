import Image from "next/image";
import axios from "../axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "#C7E4E5",
  boxShadow: 24,
  borderRadius: 5,
  // p: 2,
};
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [cellphone, setCellphone] = useState("");

  const signUpHandler = () => {
    axios({
      url: "/register",
      method: "post",
      data: {
        cellphone: cellphone,
      },
    })
      .then((response) => {
        console.log(response);
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

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white navshadow">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#"> */}
        <Image
          className="img-fluid me-3"
          src="/assets/images/logo.png"
          height="50%"
          width="100%"
        />

        {/* </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav align-items-center   me-auto mb-2 mb-lg-0 ">
            <li className="navitems activeNav">
              صفحه نخست
              {/* <div
                style={{
                  width: "50%",
                  borderBottomStyle: "solid",
                  borderColor: "#11999e",
                }}
              ></div> */}
            </li>
            <li className="navitems">لیست آگهی ها</li>

            <li className="navitems   ">آپلود و ساخت رزومه</li>
            <li className="navitems">کار در منزل</li>
            <li className="navitems">وبلاگ</li>
            <li className="navitems">طرح کارورزی</li>
            <li
              className="px-3 py-1"
              style={{
                backgroundColor: "#EC4B72",
                borderRadius: 10,
                color: "#fff",
              }}
            >
              <a>
                <h5
                  className="  fs-5 text-center lh-sm py-0 my-0"
                  style={{ fontWeight: 700 }}
                >
                  آگـــهی بزن
                </h5>
                {/* <h6
                  className="py-1 my-0"
                  style={{ fontSize: 10, textAlign: "center" }}
                >
                  کارفرما/جویای کار
                </h6> */}
              </a>
            </li>
          </ul>
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
            onClick={handleOpen}
          >
            <div className="d-flex me-2  ">
              <Image src="/assets/images/login.svg" height={22} width={24} />
            </div>
            ورود/ثبت نام
          </div>

          <Modal open={open} onClose={handleClose}>
            <Box sx={style} className="px-4 py-3">
              <div className="col-12 d-flex flex-column  justify-content-between">
                <div>
                  <div
                    className="fw-bold text-center"
                    style={{
                      fontSize: 20,
                    }}
                  >
                    ورود و ثبت نام
                  </div>
                  <div
                    className="  text-center mt-2"
                    style={{
                      fontSize: 10,
                    }}
                  >
                    برای استفاده از قابلیت های چیتیت شماره خود را وارد کنید
                  </div>
                </div>
                <div className="d-flex flex-column mt-5 mx-auto">
                  <label
                    className="fs-6  "
                    style={{
                      marginBottom: "0.5rem",
                      fontWeight: "normal",
                    }}
                  >
                    شماره موبایل {cellphone}
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
                      fontSize: 10,
                    }}
                  >
                    *شرایط استفاده از خدمات و حریم خصوصی چیتیت را می پذیرم
                  </h6>
                </div>
                <div
                  className="py-2 text-white mt-5 px-2 mx-auto"
                  style={{
                    fontSize: "1rem",
                    backgroundColor: "#E92B59",
                    textAlign: "center",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}
                  onClick={() => signUpHandler()}
                >
                  ارسال کد تایید
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
