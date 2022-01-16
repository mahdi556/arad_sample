const FirstForm = () => {
  return (
    <div
      className="row pt-4 pb-4"
      style={{
        background: "#fff",
        borderRadius: 15,
        paddingRight: "5rem",
        paddingLeft: "5rem",
      }}
    >
      <div className="d-flex align-items-start pt-1">
        <div className="d-flex col-3 flex-column   pe-2">
          <div
            className="d-flex  "
            style={{
              height: 130,
              backgroundColor: "#EBEBEB",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRadius: 7,
              width: "90%",
            }}
          >
            <img
              className="me-2"
              src= "../../../../assets/images/upload-logo.png" 
              width="10%"
            />
            آپلود لوگو
          </div>
        </div>
        <div className="  col-9 ps-3 pt-2  ">
          <div className="row col-12 mb-2">
            <div
              className="d-flex col-5 offset-6   px-4 py-4"
              style={{
                borderWidth: 3.2,
                borderStyle: "dotted",
                borderColor: "#11999E",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 17,
                borderRadius: 10,
              }}
            >
              <img
                className="me-4"
                src= "../../../../assets/images/upload-logo.png" 
                width="15%"
              />
              آپلود ویدیو
            </div>
          </div>
          <div className="row col-6 offset-5" style={{
               color: "#11999E",
               fontSize:13

          }}>
            با آپلود ویدیو شانس استخدام شدن خود را چندین برابر کنید.(70% درصد
            کارفرماها تقاضای رزومه ویدیویی دارند)
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
