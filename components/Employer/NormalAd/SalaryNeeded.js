import { useContext } from "react";
import NormalAdContext from "../../../context/employerContext/CreateAd/NormalAd/NormalAdContext";
import { numberToWords } from "@persian-tools/persian-tools";
const SalaryNeeded = () => {
  const normalAdContext = useContext(NormalAdContext);
  return (
    <>
      <div className="d-flex flex-column col-12 pt-4 justify-content-between">
        <div className="col-12">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
              fontWeight: "normal",
              fontStyle: "normal",
            }}
          >
            میزان حقوق درخواستی
          </label>
        </div>
        <div className="d-flex col-12 justify-content-center align-items-center">
          از
          <div className="   input-group input-group-sm mx-2">
            <input
              className={
                normalAdContext.data.salary.fa.from == ""
                  ? "col-10 inputStyle"
                  : "col-10 inputFilled"
              }
              onChange={(e) =>
                normalAdContext.dispatch({
                  type: "salary-fa-from",
                  payload: e.target.value,
                })
              }
              type="text"
              value={normalAdContext.data.salary.fa.from}
            />
            <span
              className="input-group-text"
              style={{
                backgroundColor: "#EBEBEB",
                height: "100%",
                color: "#000",
                fontSize: 13,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                border: "none",
                lineHeight: "1.5rem",
              }}
            >
              تومان
            </span>
            <div
              style={{
                fontSize: 13,
              }}
            >
              {numberToWords(normalAdContext.data.salary.fa.from)} تومان
            </div>
          </div>
          تا
          <div className="   input-group input-group-sm  ms-2">
            <input
              className={
                normalAdContext.data.salary.fa.to == ""
                  ? "col-10 inputStyle"
                  : "col-10 inputFilled"
              }
              onChange={(e) =>
                normalAdContext.dispatch({
                  type: "salary-fa-to",
                  payload: e.target.value,
                })
              }
              value={normalAdContext.data.salary.fa.to}
            />
            <span
              className="input-group-text"
              style={{
                backgroundColor: "#EBEBEB",
                height: "100%",
                color: "#000",
                fontSize: 13,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                border: "none",
                lineHeight: "1.5rem",
              }}
            >
              تومان
            </span>
            <div
              style={{
                fontSize: 13,
              }}
            >
              {numberToWords(normalAdContext.data.salary.fa.to)} تومان
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SalaryNeeded;
