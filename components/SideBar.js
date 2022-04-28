import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import SwitchButtion from "./Employee/FormInputs/SwitchButton";
  

const SideBar = () => {
  const [dropdown, setDropdown] = useState({ 1: styles.hide, 2: styles.hide });
  const [sideVisible, setSideVisible] = useState({
    width: "70%",
    display: "",
  });
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
              <div className="sidebar-radio ">
                <span>ارسال آگهی های پیشنهادی</span>
                <div className="ms-auto">
                  <SwitchButtion />
                </div>
              </div>
            </li>
            <li className="sidebar-item  ">
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
            </li>
            <li className="sidebar-item ">
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
            </li>
            <li className="sidebar-item  ">
              <a className="sidebar-link" href="">
                <span>شرکت های معتبر</span>
                <div className="ms-auto">
                  <SwitchButtion />
                </div>
              </a>
            </li>
            <li className="sidebar-item  ">
              <a className="sidebar-link" href="">
                <span>دورکاری</span>
                <div className="ms-auto">
                  <SwitchButtion />
                </div>
              </a>
            </li>
            <li className="sidebar-item  ">
              <a className="sidebar-link" href="">
                <span>بیمه</span>
                <div className="ms-auto">
                  <SwitchButtion />
                </div>
              </a>
            </li>
            <li className="sidebar-item  ">
              <a className="sidebar-link" href="">
                <span>آگهی های ویژه</span>
                <div className="ms-2">
                  <img
                    src="/assets/images/crown.png"
                    width={18}
                    height={18}
                  />
                </div>
                <div className="ms-auto">
                  <SwitchButtion />
                </div>
              </a>
            </li>
          </ul>
          <div className=" row justify-content-center align-items-center pt-5 ">
            <div className=" d-flex flex-row justify-content-center align-items-center fs-11">
              <div className="me-1">
                <img
                  src="/assets/images/support1.png"
                  width={18}
                  height={18}
                />
              </div>
              <div className="d-flex">تماس با پشتیبانی 0000 000 0912</div>
            </div>

            <div
              className="d-flex col-7 flex-row justify-content-center  mt-2 py-2 px-3"
              style={{
                backgroundColor: "#e92b59",
                borderRadius: 20,
                color: "#fff",
                fontSize:15
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

        <div className="d-flex align-items-center justify-content-center  sidebar-handle">
          <i
            className="bi bi-chevron-right   "
            onClick={() => toggleSidebar()}
          ></i>
        </div>
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
