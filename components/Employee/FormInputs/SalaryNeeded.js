
const SalaryNeeded=()=>{
return(
    <>
      <div className="d-flex flex-column col-12 pt-4 justify-content-between">
        <div className="col-12">
          <label
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            میزان حقوق درخواستی
          </label>
        </div>
        <div className="d-flex col-12 justify-content-center">
          از
          <div
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
          </div>
          تا
          <div
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
          </div>
        </div>
      </div>

    </>
)

}
export default SalaryNeeded