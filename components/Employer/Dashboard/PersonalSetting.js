import { useState } from "react";
import Image from "next/image";
const PersonalSetting = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cellphone, setCellPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [province, setProvince] = useState("");
  return (
    <>
      <div
        className="bg-white py-4 px-4 mt-5"
        style={{
          borderRadius: 15,
        }}
      >
        <div
          className="d-flex"
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
            width: "100%",
            paddingRight: "1rem",
          }}
        >
          اطلاعات شخصی
          <div className="ms-3">
            <Image src="/assets/images/edit_red.svg" height={25} width={25} />
          </div>
        </div>
        <div className="d-flex flex-wrap pe-4 col-12   ">
          <div className="d-flex col-12 justify-content-between flex-wrap">
            <div className="col-5 mb-3">
              <label
                className="fs-6  "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                }}
              >
                نام رابط سازمانی
              </label>
              <input
                className={
                  name == ""
                    ? "col-12 mb-3 ps-2 inputStyle"
                    : "col-12 mb-3 ps-2 inputFilled"
                }
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="col-5">
              <label
                className="fs-6 "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                }}
              >
                نام خانوادگی رابط سازمانی
              </label>
              <input
                className={
                  lastName == ""
                    ? "col-12 mb-3 ps-2 inputStyle"
                    : "col-12 mb-3 ps-2 inputFilled"
                }
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="col-5">
              <label
                className="fs-6 "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                }}
              >
                شماره موبایل
              </label>
              <input
                className={
                  lastName == ""
                    ? "col-12 mb-3 ps-2 inputStyle"
                    : "col-12 mb-3 ps-2 inputFilled"
                }
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="col-5">
              <label
                className="fs-6 "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                }}
              >
                ایمیل
              </label>
              <input
                className={
                  lastName == ""
                    ? "col-12 mb-3 ps-2 inputStyle"
                    : "col-12 mb-3 ps-2 inputFilled"
                }
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-white py-4 px-4 mt-5"
        style={{
          borderRadius: 15,
        }}
      >
        <div
          className="d-flex"
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
            width: "100%",
            paddingRight: "1rem",
          }}
        >
          رمز عبور
          <div className="ms-3">
            <Image src="/assets/images/edit_red.svg" height={25} width={25} />
          </div>
        </div>
        <div className="d-flex flex-wrap pe-4 col-12   ">
          <div className="d-flex col-12 justify-content-between flex-wrap">
            <div className="col-5 mb-3">
              <label
                className="fs-6  "
                style={{
                  marginBottom: "0.5rem",
                  fontWeight: "normal",
                }}
              >
                رمز عبور
              </label>
              <input
                className={
                  name == ""
                    ? "col-12 mb-3 ps-2 inputStyle"
                    : "col-12 mb-3 ps-2 inputFilled"
                }
                type="password"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalSetting;
