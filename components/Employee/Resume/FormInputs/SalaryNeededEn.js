import { useContext } from "react";
import ResumeContext from "../../../../context/employeeContext/CreateResume/ResumeContext";

const SalaryNeededEn = () => {
  const resumeContext = useContext(ResumeContext);
  return (
    <>
      <div className="d-flex flex-column col-12 pt-4 justify-content-between ">
        <div className="col-12">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            Amount of salary requested
          </label>
        </div>
        <div className="d-flex col-12 justify-content-center align-items-start">
          From
          <div class="input-group input-group-sm mb-3">
            <span
              class="input-group-text order-2"
              style={{
                backgroundColor: "#EBEBEB",
                borderStyle: "none",
                // borderRadius: 5,
                alignItems: "center",
                width: "50%",
                color: "#000",
                fontSize: 12,
              }}
              id="basic-addon1"
            >
              Tooman
            </span>
            <input
              type="text"
              class="form-control order-1"
              style={{
                backgroundColor: "#EBEBEB",
                borderStyle: "none",
                // borderRadius: 5,
              }}
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "salary-en-from",
                  payload: e.target.value,
                })
              }
            />
          </div>
          {/* <div
            className="d-flex   mb-3 me-1 ms-2 pe-2"
            style={{
              backgroundColor: "#EBEBEB",
              borderStyle: "none",
              borderRadius: 5,
              alignItems: "center",
              width: "49%",
            }}
          >
            <input
              className="col-8 me-auto form-input"
              style={{
                backgroundColor: "#EBEBEB",
                borderStyle: "none",
                borderRadius: 5,
              }}
              type="text"
            />
            <h6>تومان</h6>
          </div> */}
          To
          <div class="input-group input-group-sm mb-3">
            <span
              class="input-group-text order-2"
              style={{
                backgroundColor: "#EBEBEB",
                borderStyle: "none",
                // borderRadius: 5,
                alignItems: "center",
                width: "50%",
                color: "#000",
                fontSize: 12,
              }}
              id="basic-addon1"
            >
              Tooman
            </span>
            <input
              type="text"
              class="form-control order-1"
              style={{
                backgroundColor: "#EBEBEB",
                borderStyle: "none",
                // borderRadius: 5,
              }}
              onChange={(e) =>
                resumeContext.dispatch({
                  type: "salary-en-to",
                  payload: e.target.value,
                })
              }
            />
          </div>
          {/* <div
            className="d-flex   mb-3 me-1 ms-2 pe-2"
            style={{
              backgroundColor: "#EBEBEB",
              borderStyle: "none",
              borderRadius: 5,
              alignItems: "center",
              width: "49%",
            }}
          >
            <input
              className="col-8 me-auto form-input"
              style={{
                backgroundColor: "#EBEBEB",
                borderStyle: "none",
                borderRadius: 5,
              }}
              type="text"
            />
            <h6>تومان</h6>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default SalaryNeededEn;
