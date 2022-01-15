import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faHome } from "@fortawesome/free-solid-svg-icons";

const AdBox = (props) => {
  const cols= props.col;
  return (
   <div className={`d-flex       mb-5        ${cols} `}   >
       <div
       className={`d-flex  flex-row        p-0  pb-4   `}
      style={{
        borderRadius: 15,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#bbb",
        backgroundColor: "#fff",
      }}
    >
      <div className="d-flex flex-column col-8 pt-5 pb-2  justify-contnt-center px-2">
        <h3 className="fs-11"> جویای کار طراح ui/ux</h3>
        <h3 className="fs-11"> طراح ui/ux</h3>

        <div className="d-flex flex-row align-items-center  ">
          <img
            src={require("../../assets/images/check.png")}
            style={{
              borderRadius: '0.2rem',
            }}
            width="10%"
          />
          <h3 className="fs-10" style={{ paddingRight: 10, paddingTop: 8 }}>
            دارای سابقه
          </h3>
         </div>
      </div>

      <div className="d-flex flex-column    col-4 p-0    ">
        <div
          className="d-inline-flex align-self-end justify-content-center  align-items-center  col-9   py-0  "
          style={{
            backgroundColor: "#11999e",
            borderTopLeftRadius: "0.9rem",
            borderBottomRightRadius: "2.2rem",
          }}
        >
          <div className="p-0">
            <h6
              className="d-inline-flex   fs-10 ps-2 pe-1 py-0     "
              style={{
                fontWeight: 100,
                color: "#fff",
                lineHeight: 0,
              }}
            >
              دورکاری
            </h6>
          </div>

          <FontAwesomeIcon
                className="  ishadow rounded-3 "
                icon={faHome}
                // size='1.5rem'
                color="#fff"
                style={{width:'0.7rem'}}
              />
          {/* <img
            className="d-inline-flex w-10 h-30 p-0  "
            src={require("../../assets/images/home.png")}
             
          /> */}
        </div>
        <div className="d-flex col-12 align-items-center justify-content-center pt-3 pe-2">
        <div
          className="rounded-5   "
          style={{
            // borderRadius: 15,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#11999e",
            position: "relative",
            width: "100%",
          }}
        >
          <div className="d-flex justify-content-center">
            <img
            className="pb-4 pt-1"
              src={require("../../assets/images/user.png")}
              style={{
                padding: 0,
                justifyContent: "center",
              }}
              width="60%"
              
            />
          </div>
          <div
            className="fs-10 no-wrap pt-1 px-1"
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              borderTopStyle: "solid",
              borderWidth: 1,
              borderColor: "#11999e",
              textAlign: "center",
              backgroundColor: "#e4f9f5",
              borderBottomLeftRadius: "0.9rem",
              borderBottomRightRadius: "0.9rem",
              color: "#000",
              textAlign: "center",
               
            }}
          >
            برقراری ارتباط
          </div>
        </div>
        </div>
       
      </div>
    </div>
   </div>
  
  );
};

export default AdBox;
