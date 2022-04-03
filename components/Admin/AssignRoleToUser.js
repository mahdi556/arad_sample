import Box from "@mui/material/Box";
import axios from "../../axios";
import Modal from "@mui/material/Modal";
import { useContext, useEffect, useState } from "react";
import ButtonAd from "./ButtonAdd";
import SelectOption from "./SelectOption";
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
const AssignRoleToUser = () => {
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [myUser, setMyUser] = useState({});
  const [roles, setRoles] = useState("");
  const [users, setUsers] = useState({});
  const getpermissions = () => {
    axios({
      url: "/getUsers_Roles",
      method: "get",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => {
        setRoles(response.data.data.roles);
        setUsers(response.data.data.users);
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {}, [roles]);
  let checkItems = [];

  const handlePermissions = (e) => {
    let item = checkItems.find((item) => item === e.target.value);
    if (item) {
      checkItems = checkItems.filter((item) => item !== e.target.value);
    } else {
      checkItems.push(e.target.value);
    }
    console.log(checkItems)
   };

  const AssignHandler = () => {
    axios({
      url: "/assignRoletoUser",

      method: "post",
      data: {
        roles: checkItems,
        user: myUser,
      },
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const userHandler = (id, name) => {
    setMyUser(id);
  };
  
  return (
    <>
      <div
        onClick={() => {
          handleOpen1();
          getpermissions();
        }}
      >
        <ButtonAd data="الصاق نقش کاربری به کاربر" />
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
                الصاق نقش کاربری به کاربر
              </div>
            </div>
            <div className="d-flex flex-column col-6  mx-4">
              {users.length && (
                <SelectOption
                  data={users}
                  name="انتخاب کاربر"
                  valueHandler={userHandler}
                  // predata={normalAdContext.data.jobCategory.fa}
                />
              )}
            </div>

            <p>
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                مشاهده نقش ها
              </button>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card">
                <div className=" row  ms-2  card-body ">
                  {roles.length &&
                    roles.map((item, key) => (
                      <div className="col-3  form-check" key={item.id}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item.ename}
                          id={item.name}
                          onChange={(e) => handlePermissions(e)}
                        />
                        <label className="form-check-label" htmlFor={item.name}>
                          {item.display_name}
                        </label>
                      </div>
                    ))}
                </div>
              </div>
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
                AssignHandler();
                handleClose1();
              }}
            >
              ثبت نقش کاربری
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AssignRoleToUser;
