import Image from "next/image";
import Box from "@mui/material/Box";
import axios from "../../../axios";
import Modal from "@mui/material/Modal";
import { useContext, useState } from "react";
import ButtonAd from "./ButtonAdd";
 const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "#C7E4E5",
  boxShadow: 24,
  borderRadius: 5,
  // p: 2,
};
const RegisterDoctor = () => {
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [token, setToken] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
 
  // const userContext = useContext(UserContext);
  const doctorRegister = () => {
    axios({
      url: "/doctorRegister",
      method: "post",
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    })
      .then((response) => {
         console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
    // }
  };

  return (
    <>
      <div onClick={() => handleOpen1()}>
        <ButtonAd data="ثبت پزشک" />
      </div>

      <Modal open={open1} onClose={handleClose1}>
        <Box sx={style} className="px-4 py-3">
          <div className="col-12 d-flex flex-column  justify-content-between">
            <div>
              <div
                className="fw-bold text-center"
                style={{
                  fontSize: 30,
                }}
              >
                ثبت پزشک
              </div>
            </div>
            <div className="d-flex flex-column col-6  mx-4">
              <label
                className=" "
                style={{
                  marginTop: 30,
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                  fontSize: 25,
                }}
              >
                نام پزشک
              </label>
              <input
                className={
                  firstName == ""
                    ? "col-12 mb-3 ps-2 inputStyle"
                    : "col-12 mb-3 ps-2 inputFilled"
                }
                type="text"
                 onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="d-flex flex-column col-6  mx-4">
              <label
                className=" "
                style={{
                  marginTop: 30,
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                  fontSize: 25,
                }}
              >
                نام خانوادگی پزشک
              </label>
              <input
                className={
                  lastName == ""
                    ? "col-12 mb-3 ps-2 inputStyle"
                    : "col-12 mb-3 ps-2 inputFilled"
                }
                type="text"
                // value={resumecontext.data.name}
                onChange={(e) => setLastName(e.target.value)}
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
                doctorRegister();
                handleClose1();
               }}
            >
              ثبت نام پزشک
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default RegisterDoctor;
