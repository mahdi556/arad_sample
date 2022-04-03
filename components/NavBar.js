import Image from "next/image";
import UserProvider from "../context/employeeContext/User/UserProvider";
import Login from "./Common/Login";
import { useRouter } from "next/router";
import AdminLogin from "./Common/AdminLogin";

const NavBar = () => {
  const router = useRouter();
  return (
    <UserProvider>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white navshadow">
        <div className="container-fluid">
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
              <li className="navitems activeNav">
                صفحه نخست
                {/* <div
                style={{
                  width: "50%",
                  borderBottomStyle: "solid",
                  borderColor: "#11999e",
                }}
              ></div> */}
              </li>
              <li className="navitems"
              onClick={() => {
                          router.push({
                            pathname: "/medicals"
                          });
                        }}
              >    مراکز درمانی  </li>

              
              <li
                className="px-3 py-1"
                style={{
                  backgroundColor: "#EC4B72",
                  borderRadius: 10,
                  color: "#fff",
                }}
              >
                <h5
                  className="  fs-5 text-center lh-sm py-0 my-0"
                  style={{ fontWeight: 700, cursor: "pointer" }}
                >
                  آگـــهی بزن
                </h5>
              </li>
              <li
                className="px-3 py-1"
                onClick={() => {
                  router.push({
                    pathname: "/employee/createAdPage",
                    query: { type: "normal" },
                  });
                }}
              >
                <h5
                  className="  fs-5 text-center lh-sm py-0 my-0"
                  style={{ fontWeight: 700, cursor: "pointer" }}
                >
                  ثبت آگهی کارجو
                </h5>
              </li>
              <li
                className="px-3 py-1"
                onClick={() => {
                  router.push({
                    pathname: "/employee/createAdPage",
                    query: { type: "vip" },
                  });
                }}
              >
                <h5
                  className="  fs-5 text-center lh-sm py-0 my-0"
                  style={{ fontWeight: 700, cursor: "pointer" }}
                >
                  ثبت آگهی کارجو ویژه
                </h5>
              </li>
              <li
                className="px-3 py-1"
                onClick={() => {
                  router.push({
                    pathname: "/employer/createAdPage",
                    query: { type: "normal" },
                  });
                }}
              >
                <h5
                  className="  fs-5 text-center lh-sm py-0 my-0"
                  style={{ fontWeight: 700, cursor: "pointer" }}
                >
                  ثبت آگهی کارفرما
                </h5>
              </li>
              <li
                className="px-3 py-1"
                onClick={() => {
                  router.push({
                    pathname: "/employer/createAdPage",
                    query: { type: "vip" },
                  });
                }}
              >
                <h5
                  className="  fs-5 text-center lh-sm py-0 my-0"
                  style={{ fontWeight: 700, cursor: "pointer" }}
                >
                  ثبت آگهی کارفرما ویژه
                </h5>
              </li>
            </ul>
            <Login />
            <AdminLogin />
          </div>
        </div>
      </nav>
    </UserProvider>
  );
};

export default NavBar;
