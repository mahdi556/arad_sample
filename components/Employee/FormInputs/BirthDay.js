import { useContext, useState } from "react";
import VipContext from "../../../context/employeeContext/VipContext";

const BirthDay = () => {
   const vipContext = useContext(VipContext);
  return (
    <>
      <div className="d-flex flex-column pt-4 col-6 justify-content-between">
        <div className="col-12">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            تاریخ تولد
          </label>
        </div>

        <div className="d-flex justify-content-center  mb-3    pe-2">
          <input
            className="col-2   inputStyle "
            type="text"
            value={vipContext.data.birthday.day}
            onChange={(e) => {
              vipContext.dispatch({
                type: "birthday-d",
                payload: e.target.value,
              });
            }}
          />
          <div
            className="d-flex align-items-center me-1 px-2"
            style={{
              backgroundColor: "#11999e",
              height: "100%",
              color: "#fff",
              fontSize: 13,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          >
            روز
          </div>
          <input
            className="col-2   inputStyle "
            type="text"
            value={vipContext.data.birthday.month}
            onChange={(e) => {
              vipContext.dispatch({
                type: "birthday-m",
                payload: e.target.value,
              });
            }}
          />
          <div
            className="d-flex align-items-center px-2 me-1"
            style={{
              backgroundColor: "#11999e",
              height: "100%",
              color: "#fff",
              fontSize: 13,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          >
            ماه
          </div>
          <input
            className="col-2  inputStyle "
            type="text"
            value={vipContext.data.birthday.year}
            onChange={(e) => {
              vipContext.dispatch({
                type: "birthday-y",
                payload: e.target.value,
              });
            }}
          />
          <div
            className="d-flex align-items-center px-2"
            style={{
              backgroundColor: "#11999e",
              height: "100%",
              color: "#fff",
              fontSize: 13,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          >
            سال
          </div>
        </div>
      </div>
    </>
  );
};
export default BirthDay;
