import { useContext, useState } from "react";
import VipContext from "../../../context/employeeContext/CreateAd/VipContext";

const BirthDay = () => {
  const vipContext = useContext(VipContext);
  return (
    <>
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
      <div className="col-12  d-flex">
        <div className="input-group input-group-sm mx-1">
          <input className="form-control inputStyle" />
          <span
            className="input-group-text"
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
          </span>
        </div>
        <div className="input-group input-group-sm mx-1 ">
          <input className="form-control inputStyle" />
          <span
            className="input-group-text"
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
          </span>
        </div>
        <div className="input-group input-group-sm mx-1">
          <input className="form-control inputStyle" />
          <span
            className="input-group-text"
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
          </span>
        </div>
      </div>

      {/* <div className="d-flex justify-content-center  mb-3    pe-2">
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
      </div> */}
    </>
  );
};
export default BirthDay;
