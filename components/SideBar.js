import { useContext, useEffect, useState } from "react";
import FilterContext from "../context/employeeContext/FilterContext/FilterContext";
import SwitchButtion from "./Employee/FormInputs/SwitchButton";

const SideBar = ({ data, sendFilterData }) => {
  const filterContext = useContext(FilterContext);
  const [dropdown, setDropdown] = useState({ 1: styles.hide, 2: styles.hide });
  const [sideVisible, setSideVisible] = useState({
    width: "70%",
    display: "",
  });
  const [ins, setIns] = useState(0);
  const [corType, setCorType] = useState(1);

  const toggle = (i) => {
    if (dropdown[i] === styles.hide) {
      dropdown[1] = styles.hide;
      dropdown[2] = styles.hide;
      dropdown[3] = styles.hide;
      setDropdown({
        ...dropdown,
        [i]: styles.show,
      });
    } else {
      setDropdown({
        ...dropdown,
        [i]: styles.hide,
      });
    }
  };

  const toggleSidebar = () => {
    sideVisible.width !== 0
      ? setSideVisible({ width: 0, display: "none" })
      : setSideVisible({ width: "70%", display: "" });
  };
  const insHandler = (value) => {
    filterContext.dispatch({
      type: "ins",
      payload: value,
    });
  };
  const militaryHandler = (value) => {
    filterContext.dispatch({
      type: "military",
      payload: value,
    });
  };
  const experienceHandler = (value) => {
    filterContext.dispatch({
      type: "experience",
      payload: value,
    });
  };
  const vipHandler = (value) => {
    filterContext.dispatch({
      type: "vip",
      payload: value,
    });
  };

  return (
    <>
      <div
        className="sidebar-wrap    pt-3"
        style={{
          width: sideVisible.width,
          position: "relative",
          backgroundColor: "#fff",
          marginBottom: "10rem",
        }}
      >
        <div
          style={{
            display: sideVisible.display,
            backgroundColor: "#fff",
          }}
        >
          <ul
            className="list-unstyled  px-3"
            style={{
              display: sideVisible.display,
              backgroundColor: "#fff",
            }}
          >
            <li className="sidebar-item   ">
              {/* <div className="sidebar-radio ">
                <span>ارسال آگهی های پیشنهادی</span>
                <div className="ms-auto">
                  <SwitchButtion />
                </div>
              </div> */}
            </li>
            {/* <li className="sidebar-item  ">
              <div className="sidebar-link" onClick={() => toggle(1)}>
                <span>دسته بندی</span>
                <i className="ms-auto bi bi-chevron-down"></i>
              </div>
              <ul className="submenu " style={dropdown[1]}>
                <li className="submenu-item">
                  <a href="">کارگر</a>
                </li>
                <li className="submenu-item">
                  <a href="">مدیر</a>
                </li>
                <li className="submenu-item">
                  <a href="">کامند</a>
                </li>
                <li className="submenu-item">
                  <a href="">مهندس</a>
                </li>
              </ul>
            </li> */}
            {/* <li className="sidebar-item ">
              <div className="sidebar-link" onClick={() => toggle(2)}>
                <span>نیاز به سابقه</span>
                <i className="ms-auto bi bi-chevron-down"></i>
              </div>
              <ul className="submenu " style={dropdown[2]}>
                <li className="submenu-item">
                  <a href="">کارگر</a>
                </li>
                <li className="submenu-item">
                  <a href="">مدیر</a>
                </li>
                <li className="submenu-item">
                  <a href="">کامند</a>
                </li>
                <li className="submenu-item">
                  <a href="">مهندس</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item ">
              <div className="sidebar-link" onClick={() => toggle(2)}>
                <span>مکان</span>
                <i className="ms-auto bi bi-chevron-down"></i>
              </div>
              <ul className="submenu " style={dropdown[2]}>
                <li className="submenu-item">
                  <a href="">کارگر</a>
                </li>
                <li className="submenu-item">
                  <a href="">مدیر</a>
                </li>
                <li className="submenu-item">
                  <a href="">کامند</a>
                </li>
                <li className="submenu-item">
                  <a href="">مهندس</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item ">
              <div className="sidebar-link" onClick={() => toggle(2)}>
                <span>حقوق</span>
                <i className="ms-auto bi bi-chevron-down"></i>
              </div>
              <ul className="submenu " style={dropdown[2]}>
                <li className="submenu-item">
                  <a href="">کارگر</a>
                </li>
                <li className="submenu-item">
                  <a href="">مدیر</a>
                </li>
                <li className="submenu-item">
                  <a href="">کامند</a>
                </li>
                <li className="submenu-item">
                  <a href="">مهندس</a>
                </li>
              </ul>
            </li> */}
            <li className="sidebar-item  ">
              <div className="sidebar-link" href="">
                <span>کارت پایان خدمت یا معافیت</span>
                <div className="ms-auto">
                  <SwitchButtion
                    valueHandler={militaryHandler}
                    status={filterContext.data.military}
                  />
                </div>
              </div>
            </li>
            <li className="sidebar-item  ">
              <div className="sidebar-link" href="">
                <span>دارای سابقه کاری</span>
                <div className="ms-auto">
                  <SwitchButtion
                    valueHandler={experienceHandler}
                    status={filterContext.data.experience}
                  />
                </div>
              </div>
            </li>
            <li className="sidebar-item  ">
              <div className="sidebar-link" href="">
                <span>درخواست بیمه</span>
                <div className="ms-auto">
                  <SwitchButtion
                    valueHandler={insHandler}
                    status={filterContext.data.ins}
                  />
                </div>
              </div>
            </li>
            <li className="sidebar-item  ">
              <div className="sidebar-link" href="">
                <span>آگهی های متخصص</span>
                <div className="ms-2">
                  <img src="/assets/images/crown.png" width={18} height={18} />
                </div>
                <div className="ms-auto">
                <SwitchButtion
                    valueHandler={vipHandler}
                    status={filterContext.data.vip}
                  />
                </div>
              </div>
            </li>
          </ul>
          <div className=" row justify-content-center align-items-center pt-5 ">
            <div className=" d-flex flex-row justify-content-center align-items-center fs-11">
              <div className="me-1">
                <img src="/assets/images/support1.png" width={18} height={18} />
              </div>
              <div className="d-flex">تماس با پشتیبانی 0000 000 0912</div>
            </div>

            <div
              className="d-flex col-7 flex-row justify-content-center  mt-2 py-2 px-3"
              style={{
                backgroundColor: "#e92b59",
                borderRadius: 20,
                color: "#fff",
                fontSize: 15,
              }}
            >
              دانلود اپلیکیشن
              <div className="ms-auto mt-1">
                <img
                  src="/assets/images/download1.png"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="d-flex align-items-center justify-content-center  sidebar-handle">
          <i
            className="bi bi-chevron-right   "
            onClick={() => toggleSidebar()}
          ></i>
        </div> */}
      </div>
    </>
  );
};

const styles = {
  hide: {
    maxHeight: 0,
    visibility: "hidden",
    transition: "all",
    transitionDuration: "0.7s",
  },
  show: {
    maxHeight: 300,
    visibility: "visible",
    transition: "all",
    transitionDuration: "0.9s",
  },
};

export default SideBar;
