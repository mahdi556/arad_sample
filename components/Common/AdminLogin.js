  
import axios from "../../axios";
import axios2 from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
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

const AdminLogin = () => {
  const router = useRouter();

  const [open1, setOpen1] = useState(false);

  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [token, setToken] = useState(null);
  const [password, setPassword] = useState("");
  const [cellphone, setCellphone] = useState("");

  const userContext = useContext(UserContext);
  const initialSingHandler = () => {
    axios2.get("http://192.168.1.102:8000/sanctum/csrf-cookie").then(() => {
    axios({
      url: "/loginOffice",
      method: "post",
      data: {
        cellphone,
        password,
      },
    })
      .then((response) => {
        console.log(response)
        setToken(response.data.login_token);
        localStorage.setItem("auth", JSON.stringify(true));
        localStorage.setItem("token", JSON.stringify(response.data.token));
       
        router.push({
          pathname: "/admin",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    });
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
        {userContext.data.user.auth ? (
          `${userContext.data.user.firstName}  ${userContext.data.user.lastName}`
        ) : (
          <>
            <div className="d-flex me-2  ">
              <img src="/assets/images/login.svg" height={22} width={24} />
            </div>
            ورود پشتیبان
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
                ورود پشتیبان
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
              <label
                className=" "
                style={{
                  marginTop: 80,
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                  fontSize: 25,
                }}
              >
                رمز عبور
              </label>
              <input
                className="inputStyle"
                // className={
                //   resumecontext.data.name == ""
                //     ? "col-12 mb-3 ps-2 inputStyle"
                //     : "col-12 mb-3 ps-2 inputFilled"
                // }
                type="password"
                // value={resumecontext.data.name}
                onChange={(e) => setPassword(e.target.value)}
              />
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
              }}
            >
              ورود
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AdminLogin;
