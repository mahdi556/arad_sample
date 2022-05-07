  
import UserProvider from "../context/employeeContext/User/UserProvider";
import Login from "./Common/Login";
import { useRouter } from "next/router";
import AdminLogin from "./Common/AdminLogin";
import UserContext from "../context/employeeContext/User/UserContext";
import { useContext, useEffect, useState } from "react";
import NewAd from "./Common/NewAd";
import NavBarItem from "./Common/NavBarItem";
const NavBar = () => {
  const userContext = useContext(UserContext);
  const [user, setUser] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (window.localStorage.getItem("user") !== null) {
      setUser(JSON.parse(window.localStorage.getItem("user")));
    }
  }, []);
  useEffect(() => {
    userContext.dispatch({
      type: "user",
      payload: user,
    });
  }, [user]);
  return (
    // <UserProvider>

    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white navshadow "
    style={{
      overflow:'visible'
    }}
    >
      <div className="container-fluid"
        style={{
          overflow:'visible'
        }}>
        {/* <a className="navbar-brand" href="#"> */}

        {/* </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav align-items-center   me-auto mb-2 mb-lg-0 ">
             
          <li
              className="navitems ps-2 "
              onClick={() => {
                router.push({
                  pathname: "/",
                });
              }}
            >
              <img
                 src="/assets/images/logo2.png" width={100} height={50}    
         />
            </li>
            <li
              className="navitems "
              onClick={() => {
                router.push({
                  pathname: "/",
                });
              }}
            >
              <h5
                className="  fs-5 text-center lh-sm py-0 my-0"
                style={{ fontFamily: "iranBold", cursor: "pointer" }}
              >
                صفحه نخست
              </h5>
            </li>

            <li
              className="navitems"
              onClick={() => {
                router.push({
                  pathname: "/employee/createAdPage",
                  query: { type: "normal" },
                });
              }}
            >
              <h5
                className="  fs-5 text-center lh-sm py-0 my-0"
                style={{ fontFamily: "iranBold", cursor: "pointer" }}
              >
                لیست آگهی ها
              </h5>
            {/* <NavBarItem /> */}
            </li>
            <li className="navitems">
              <h5
                className="  fs-5 text-center lh-sm py-0 my-0"
                style={{ fontFamily: "iranBold", cursor: "pointer" }}
              >
                کارجویان
              </h5>
            </li>
            <li className="navitems">
              <h5
                className="  fs-5 text-center lh-sm py-0 my-0"
                style={{ fontFamily: "iranBold", cursor: "pointer" }}
              >
                کارفرمایان
              </h5>
            </li>
            <li className="navitems">
              <h5
                className="  fs-5 text-center lh-sm py-0 my-0"
                style={{ fontFamily: "iranBold", cursor: "pointer" }}
              >
                کار در منزل
              </h5>
            </li>
            {/* <li className="navitems">
              <h5
                className="  fs-5 text-center lh-sm py-0 my-0"
                style={{ fontFamily: "iranBold", cursor: "pointer" }}
              >
                دانستنی های استخدامی
              </h5>
            </li>
            <li className="navitems">
              <h5
                className="  fs-5 text-center lh-sm py-0 my-0"
                style={{ fontFamily: "iranBold", cursor: "pointer" }}
              >
                دانلود اپلیکیشن
              </h5>
            </li> */}
            <NewAd />
          </ul>
          <Login />
           {/* <AdminLogin /> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
