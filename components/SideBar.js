import {useContext, useEffect, useState} from "react";
import FilterContext from "../context/employeeContext/FilterContext/FilterContext";
import SwitchButtion from "./Employee/FormInputs/SwitchButton";
import Slider from '@mui/material/Slider';

const SideBar = ({data, sendFilterData}) => {
    const filterContext = useContext(FilterContext);
    const [dropdown, setDropdown] = useState({
        1: styles.hide,
        2: styles.hide,
        3: styles.hide,
        4: styles.hide,
        5: styles.hide,
    });
    const [sideVisible, setSideVisible] = useState({
        width: "75%",
        display: "",
    });
    const [ins, setIns] = useState(0);
    const [corType, setCorType] = useState(1);
    const [minSalary, setMinSalary] = useState(filterContext.data.salary.min);
    const [maxSalary, setMaxSalary] = useState(filterContext.data.salary.max);
    const [minAge, setMinAge] = useState(filterContext.data.age.min);
    const [maxAge, setMaxAge] = useState(filterContext.data.age.max);

    const toggle = (i) => {
        if (dropdown[i] === styles.hide) {
            dropdown[1] = styles.hide;
            dropdown[2] = styles.hide;
            dropdown[3] = styles.hide;
            dropdown[4] = styles.hide;
            dropdown[5] = styles.hide;
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
            ? setSideVisible({width: 0, display: "none"})
            : setSideVisible({width: "65%", display: ""});
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
    const handleAgreeType = (value) => {
        filterContext.dispatch({
            type: "agreeType",
            payload: value,
        });
    };
    const handleAgreeTime = (value) => {
        filterContext.dispatch({
            type: "agreeTime",
            payload: value,
        });
    };
    const handleSex = (value) => {
        filterContext.dispatch({
            type: "sex",
            payload: value,
        });
    };

    const handleSalary = (min, max) => {
        setMinSalary(min);
        setMaxSalary(max);
        filterContext.dispatch({
            type: "salary",
            payload: {min: min, max: max, status: true},
        });
    };
    const handleAge = (min, max) => {
        setMinAge(min);
        setMaxAge(max);
        filterContext.dispatch({
            type: "age",
            payload: {min: min, max: max, status: true},
        });
    };


    const [priceValue, setPriceValue] = useState([0, 100000000]);

    const handleChange = (event, newValue) => {
        setPriceValue(newValue);
    };
    useEffect(() => {
        if (priceValue[0] > 0 || priceValue[1] < 100000000) {
            handleSalary(priceValue[0], priceValue[1]);
        }
    }, [priceValue]);

    return (
        <>
            <div
                className="sidebar-wrap pt-3"
                style={{
                    width: sideVisible.width,
                    position: "relative",
                    backgroundColor: "#fff",
                    marginBottom: "10rem",
                }}
            >
                <div className="pb-5"
                     style={{
                         display: sideVisible.display,
                         backgroundColor: "#fff",
                         // marginTop:50
                         borderTopLeftRadius: 60,
                         borderBottomLeftRadius: 60,
                     }}
                >
                    <ul
                        className="list-unstyled  px-3"
                        style={{
                            display: "sideVisible.display",
                            backgroundColor: "#fff",
                            borderRadius: 60,
                        }}
                    >
                        <li className="sidebar-item   ">
                            <div className="sidebar-radio ">
                <span style={{
                    fontSize: "18px"
                }}>دریافت آگهی های جدید</span>
                                <div className="ms-auto">
                                    <SwitchButtion
                                        valueHandler={vipHandler}
                                        status={filterContext.data.vip}
                                    />
                                </div>
                            </div>
                        </li>
                        <li className="sidebar-item">
                            <div className="border-sidebar"></div>
                        </li>
                        <li className="sidebar-item col-12 "
                        >
                            <div
                                className={`d-flex justify-content-between sidebar-link col-12 ${dropdown[1] == styles.show && "active-sidebar-link"}`}
                                onClick={() => toggle(1)}
                            >
                                <div>
                                    <img style={{marginLeft: "15px"}} src="/assets/images/profile-2user 2.svg"/>
                                    <span
                                        className="sidebar-text"
                                        style={{
                                            fontSize: 16,
                                            color: "#000",
                                        }}
                                    >
                  نوع همکاری
                </span>
                                </div>
                                {dropdown[1] == styles.show ? (
                                    <img className=" " src="/assets/images/Group5756.svg"/>
                                ) : (
                                    <img className=" " src="/assets/images/arrow_down1.svg"/>
                                )}
                                {/* <i className="ms-auto bi bi-chevron-down"></i> */}
                            </div>
                            <ul className="submenu" style={dropdown[1]}>
                                <li className="submenu-item d-flex">
                                    <img
                                        src={
                                            filterContext.data.agreeType.value == 1
                                                ? "/assets/images/Group11075.svg"
                                                : "/assets/images/Vector(1).svg"
                                        }
                                        width={14}
                                    />
                                    <h6
                                        className="my-1 ms-2"
                                        onClick={() => handleAgreeType(1)}
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 300,
                                            color:
                                                filterContext.data.agreeType.value == 1
                                                    ? "rgba(0, 0, 0, 0.9)"
                                                    : "rgba(0, 0, 0, 0.6)",
                                        }}
                                    >
                                        حضوری
                                    </h6>
                                </li>
                                <li
                                    className="submenu-item d-flex"
                                    onClick={() => handleAgreeType(2)}
                                >
                                    <img
                                        src={
                                            filterContext.data.agreeType.value == 2
                                                ? "/assets/images/Group11075.svg"
                                                : "/assets/images/Vector(1).svg"
                                        }
                                        width={14}
                                    />
                                    <h6
                                        className="my-2 ms-2"
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 300,
                                            color:
                                                filterContext.data.agreeType.value == 2
                                                    ? "rgba(0, 0, 0, 0.9)"
                                                    : "rgba(0, 0, 0, 0.6)",
                                        }}
                                    >
                                        دورکاری
                                    </h6>
                                </li>
                                <li
                                    className="submenu-item d-flex"
                                    onClick={() => handleAgreeType(3)}
                                >
                                    <img
                                        src={
                                            filterContext.data.agreeType.value == 3
                                                ? "/assets/images/Group11075.svg"
                                                : "/assets/images/Vector(1).svg"
                                        }
                                        width={14}
                                    />
                                    <h6
                                        className="my-1 ms-2"
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 300,
                                            color:
                                                filterContext.data.agreeType.value == 3
                                                    ? "rgba(0, 0, 0, 0.9)"
                                                    : "rgba(0, 0, 0, 0.6)",
                                        }}
                                    >
                                        هردو
                                    </h6>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item col-12 ">
                            <div
                                className={`d-flex justify-content-between sidebar-link col-12 ${dropdown[2] == styles.show && "active-sidebar-link"}`}
                                onClick={() => toggle(2)}
                            >
                                <div>
                                    <img style={{marginLeft: "15px"}} src="/assets/images/Group11035.svg"/>
                                    <span
                                        className="sidebar-text"
                                        style={{
                                            fontSize: 16,
                                            color: "#000",
                                        }}
                                    >
                 شرایط حضور
                </span>
                                </div>
                                {dropdown[2] == styles.show ? (
                                    <img className=" " src="/assets/images/Group5756.svg"/>
                                ) : (
                                    <img className=" " src="/assets/images/arrow_down1.svg"/>
                                )}
                                {/* <i className="ms-auto bi bi-chevron-down"></i> */}
                            </div>
                            <ul className="submenu " style={dropdown[2]}>
                                <li className="submenu-item d-flex">
                                    <img
                                        src={
                                            filterContext.data.agreeTime.value == 1
                                                ? "/assets/images/Group11075.svg"
                                                : "/assets/images/Vector(1).svg"
                                        }
                                        width={14}
                                    />
                                    <h6
                                        className="my-1 ms-2"
                                        onClick={() => handleAgreeTime(1)}
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 300,
                                            color:
                                                filterContext.data.agreeTime.value == 1
                                                    ? "rgba(0, 0, 0, 0.9)"
                                                    : "rgba(0, 0, 0, 0.6)",
                                        }}
                                    >
                                        تمام وقت
                                    </h6>
                                </li>
                                <li
                                    className="submenu-item d-flex"
                                    onClick={() => handleAgreeTime(2)}
                                >
                                    <img
                                        src={
                                            filterContext.data.agreeTime.value == 2
                                                ? "/assets/images/Group11075.svg"
                                                : "/assets/images/Vector(1).svg"
                                        }
                                        width={14}
                                    />
                                    <h6
                                        className="my-2 ms-2"
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 300,
                                            color:
                                                filterContext.data.agreeTime.value == 2
                                                    ? "rgba(0, 0, 0, 0.9)"
                                                    : "rgba(0, 0, 0, 0.6)",
                                        }}
                                    >
                                        پاره وقت
                                    </h6>
                                </li>
                                <li
                                    className="submenu-item d-flex"
                                    onClick={() => handleAgreeTime(3)}
                                >
                                    <img
                                        src={
                                            filterContext.data.agreeTime.value == 3
                                                ? "/assets/images/Group11075.svg"
                                                : "/assets/images/Vector(1).svg"
                                        }
                                        width={14}
                                    />
                                    <h6
                                        className="my-2 ms-2"
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 300,
                                            color:
                                                filterContext.data.agreeTime.value == 3
                                                    ? "rgba(0, 0, 0, 0.9)"
                                                    : "rgba(0, 0, 0, 0.6)",
                                        }}
                                    >
                                        پروژه ای
                                    </h6>
                                </li>
                                <li
                                    className="submenu-item d-flex"
                                    onClick={() => handleAgreeTime(4)}
                                >
                                    <img
                                        src={
                                            filterContext.data.agreeTime.value == 4
                                                ? "/assets/images/Group11075.svg"
                                                : "/assets/images/Vector(1).svg"
                                        }
                                        width={14}
                                    />
                                    <h6
                                        className="my-2 ms-2"
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 300,
                                            color:
                                                filterContext.data.agreeTime.value == 4
                                                    ? "rgba(0, 0, 0, 0.9)"
                                                    : "rgba(0, 0, 0, 0.6)",
                                        }}
                                    >
                                        کارآموزی
                                    </h6>
                                </li>
                                <li
                                    className="submenu-item d-flex"
                                    onClick={() => handleAgreeTime(5)}
                                >
                                    <img
                                        src={
                                            filterContext.data.agreeTime.value == 5
                                                ? "/assets/images/Group11075.svg"
                                                : "/assets/images/Vector(1).svg"
                                        }
                                        width={14}
                                    />
                                    <h6
                                        className="my-2 ms-2"
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 300,
                                            color:
                                                filterContext.data.agreeTime.value == 5
                                                    ? "rgba(0, 0, 0, 0.9)"
                                                    : "rgba(0, 0, 0, 0.6)",
                                        }}
                                    >
                                        توافقی
                                    </h6>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item col-12 ">
                            <div
                                className={`d-flex justify-content-between sidebar-link col-12 ${dropdown[3] == styles.show && "active-sidebar-link"}`}
                                onClick={() => toggle(3)}
                            >
                                <div>
                                    <img style={{marginLeft: "15px"}} src="/assets/images/profile-2user 2.svg"/>

                                    <span
                                        className="sidebar-text"
                                        style={{
                                            fontSize: 16,
                                            color: "#000",
                                        }}
                                    >
                  جنسیت
                </span>
                                </div>
                                {dropdown[3] == styles.show ? (
                                    <img className=" " src="/assets/images/Group5756.svg"/>
                                ) : (
                                    <img className=" " src="/assets/images/arrow_down1.svg"/>
                                )}{" "}
                            </div>
                            <ul className="submenu " style={dropdown[3]}>
                                <li className="submenu-item d-flex">
                                    <img
                                        src={
                                            filterContext.data.sex.value == 1
                                                ? "/assets/images/Group11075.svg"
                                                : "/assets/images/Vector(1).svg"
                                        }
                                        width={14}
                                    />
                                    <h6
                                        className="my-1 ms-2"
                                        onClick={() => handleSex(1)}
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 300,
                                            color:
                                                filterContext.data.sex.value == 1 ? "rgba(0, 0, 0, 0.9)"
                                                    : "rgba(0, 0, 0, 0.6)",
                                        }}
                                    >
                                        آقا
                                    </h6>
                                </li>
                                <li
                                    className="submenu-item d-flex"
                                    onClick={() => handleSex(2)}
                                >
                                    <img
                                        src={
                                            filterContext.data.sex.value == 2
                                                ? "/assets/images/Group11075.svg"
                                                : "/assets/images/Vector(1).svg"
                                        }
                                        width={14}
                                    />
                                    <h6
                                        className="my-2 ms-2"
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 300,
                                            color:
                                                filterContext.data.sex.value == 2 ? "rgba(0, 0, 0, 0.9)"
                                                    : "rgba(0, 0, 0, 0.6)",
                                        }}
                                    >
                                        خانم
                                    </h6>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item  ">
                            <div
                                className={`d-flex justify-content-between sidebar-link col-12 ${dropdown[4] == styles.show && "active-sidebar-link"}`}
                                onClick={() => toggle(4)}
                                // style={dropdown[4]}
                            >
                                <div>
                                    <img style={{marginLeft: "15px"}} src="/assets/images/dollar-square2.svg"/>

                                    <span
                                        className="sidebar-text"
                                        style={{
                                            fontSize: 16,
                                            color: "#000",
                                        }}
                                    >
                  حقوق
                </span>
                                </div>
                                {dropdown[4] == styles.show ? (
                                    <img className=" " src="/assets/images/Group5756.svg"/>
                                ) : (
                                    <img className=" " src="/assets/images/arrow_down1.svg"/>
                                )}{" "}
                            </div>
                            <div style={dropdown[4]} className="d-flex flex-column align-items-center">
                                <div className="d-flex justify-content-between align-items-center" style={{
                                    width: "80%"
                                }}>
                                    <span style={{
                                        fontSize: "14px",
                                        fontWeight: 300,
                                    }}>بیشترین</span>
                                    <span style={{
                                        fontSize: "14px",
                                        fontWeight: 300
                                    }}>کمترین</span>
                                </div>
                                <div className="slider">
                                    <Slider
                                        min={0}
                                        step={500000}
                                        max={100000000}
                                        getAriaLabel={() => 'Temperature range'}
                                        value={priceValue}
                                        onChange={handleChange}
                                        valueLabelDisplay="off"
                                        style={{width: "100%", margin: "0"}}
                                    />
                                </div>
                                <div
                                    className=""
                                    style={{
                                        paddingRight: 38,
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: 14,
                                            marginLeft: "12px"
                                        }}
                                    >
                                        از
                                    </span>
                                    <input
                                        className="mx-1 px-2"
                                        style={{
                                            backgroundColor: "#c7e4e5",
                                            height: 27,
                                            width: "65%",
                                            fontSize: 14,
                                            borderRadius: 5,
                                            border: "none",
                                        }}
                                        value={filterContext.data.salary.min}
                                        onChange={(e) => {
                                            handleSalary(e.target.value, maxSalary);
                                            setPriceValue([Number(e.target.value), priceValue[1]])
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontSize: 14,
                                            marginRight: "12px"
                                        }}>تومان</span>
                                    <div className="mt-2">
                                    <span
                                        style={{
                                            fontSize: 14,
                                            marginLeft: "12px"
                                        }}
                                    >
                                        تا
                                    </span>
                                        <input
                                            className="mx-1 px-2"
                                            style={{
                                                backgroundColor: "#c7e4e5",
                                                height: 27,
                                                width: "65%",
                                                fontSize: 14,
                                                borderRadius: 5,
                                                border: "none",
                                            }}
                                            value={filterContext.data.salary.max}
                                            onChange={(e) => {
                                                handleSalary(minSalary, e.target.value);
                                                setPriceValue([priceValue[0], Number(e.target.value)]);
                                            }}
                                        />
                                        <span
                                            style={{
                                                fontSize: 14,
                                                marginRight: "12px"
                                            }}>تومان</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/*                     <li className="sidebar-item  ">
                            <div
                                className="d-flex justify-content-between sidebar-link col-12"
                                onClick={() => toggle(5)}
                            >
                <span
                    style={{
                        fontSize: 16,
                        color: "#000",
                    }}
                >
                  محدوده سنی
                </span>
                                {dropdown[5] == styles.show ? (
                                    <img className=" " src="/assets/images/arrow_up1.svg"/>
                                ) : (
                                    <img className=" " src="/assets/images/arrow_down1.svg"/>
                                )}{" "}
                            </div>
                            <div style={dropdown[5]}>
                                <div
                                    className="d-flex align-items-center  mt-2"
                                    style={{
                                        paddingRight: 38,
                                    }}
                                >
                                    <h6
                                        className="mt-2"
                                        style={{
                                            fontSize: 13,
                                        }}
                                    >
                                        از
                                    </h6>
                                    <input
                                        className="mx-1 px-2"
                                        style={{
                                            backgroundColor: "#c7e4e5",
                                            height: 27,
                                            width: 70,
                                            fontSize: 14,
                                            borderRadius: 5,
                                            border: "none",
                                        }}
                                        value={filterContext.data.age.min}
                                        onChange={(e) => {
                                            handleAge(e.target.value, maxAge);
                                        }}
                                    />
                                    <h6
                                        className="mt-2"
                                        style={{
                                            fontSize: 13,
                                        }}
                                    >
                                        سال تا
                                    </h6>
                                    <input
                                        className="mx-1 px-2"
                                        style={{
                                            backgroundColor: "#c7e4e5",
                                            height: 27,
                                            width: 70,
                                            fontSize: 14,
                                            borderRadius: 5,
                                            border: "none",
                                        }}
                                        value={filterContext.data.age.max}
                                        onChange={(e) => {
                                            handleAge(minAge, e.target.value);
                                        }}
                                    />
                                    <h6
                                        className="mt-2"
                                        style={{
                                            fontSize: 13,
                                        }}
                                    >
                                        سال{" "}
                                    </h6>
                                </div>
                            </div>

                      </li>*/}

                        {/*                <li className="sidebar-item ">
                            <div className="sidebar-link" href="">
                <span
                    style={{
                        fontSize: 16,
                        color: "#000",
                    }}
                >
                  کارت پایان خدمت یا معافیت
                </span>
                                <div className="ms-auto">
                                    <SwitchButtion
                                        valueHandler={militaryHandler}
                                        status={filterContext.data.military}
                                    />
                                </div>
                            </div>
                        </li>*/}


                        <li className="sidebar-item col-12 ">
                            <div
                                className={`d-flex justify-content-between sidebar-link col-12 ${dropdown[5] == styles.show && "active-sidebar-link"}`}
                                onClick={() => toggle(5)}
                            >
                                <div>
                                    <img style={{marginLeft: "15px"}} src="/assets/images/profile-2user 2.svg"/>

                                    <span
                                        className="sidebar-text"
                                        style={{
                                            fontSize: 16,
                                            color: "#000",
                                        }}
                                    >
                  وضعیت سربازی
                </span>
                                </div>
                                {dropdown[5] == styles.show ? (
                                    <img className=" " src="/assets/images/Group5756.svg"/>
                                ) : (
                                    <img className=" " src="/assets/images/arrow_down1.svg"/>
                                )}{" "}
                            </div>
                            <ul className="submenu " style={dropdown[5]}>
                                <li className="submenu-item d-flex">
                                    <img
                                        src={
                                            filterContext.data.military == true
                                                ? "/assets/images/Group11075.svg"
                                                : "/assets/images/Vector(1).svg"
                                        }
                                        width={14}
                                    />
                                    <h6
                                        className="my-1 ms-2"
                                        onClick={() => militaryHandler(true)}
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 300,
                                            color:
                                                filterContext.data.military == true ? "rgba(0, 0, 0, 0.9)"
                                                    : "rgba(0, 0, 0, 0.6)",
                                        }}
                                    >
                                        معاف
                                    </h6>
                                </li>
                                <li
                                    className="submenu-item d-flex"
                                    onClick={() => militaryHandler(true)}
                                >
                                    <img
                                        src={
                                            filterContext.data.military == true
                                                ? "/assets/images/Group11075.svg"
                                                : "/assets/images/Vector(1).svg"
                                        }
                                        width={14}
                                    />
                                    <h6
                                        className="my-2 ms-2"
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 300,
                                            color:
                                                filterContext.data.military == true ? "rgba(0, 0, 0, 0.9)"
                                                    : "rgba(0, 0, 0, 0.6)",
                                        }}
                                    >
                                        دارای کارت پایان خدمت
                                    </h6>
                                </li>
                                <li
                                    className="submenu-item d-flex"
                                    onClick={() => militaryHandler(true)}
                                >
                                    <img
                                        src={
                                            filterContext.data.military == true
                                                ? "/assets/images/Group11075.svg"
                                                : "/assets/images/Vector(1).svg"
                                        }
                                        width={14}
                                    />
                                    <h6
                                        className="my-2 ms-2"
                                        style={{
                                            fontSize: 15,
                                            fontWeight: 300,
                                            color:
                                                filterContext.data.military == true ? "rgba(0, 0, 0, 0.9)"
                                                    : "rgba(0, 0, 0, 0.6)",
                                        }}
                                    >
                                        درحال خدمت
                                    </h6>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <div className="border-sidebar"></div>
                        </li>
                        <li className="sidebar-item  ">
                            <div className="sidebar-link" href="">
                                <div>
                                    <img style={{marginLeft: "15px"}} src="/assets/images/favorite-chart1.svg"/>
                                    <span
                                        style={{
                                            fontSize: 16,
                                            color: "#000",
                                        }}
                                    >
                  نیاز به سابقه
                </span>
                                </div>
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
                                <div>
                                    <img style={{marginLeft: "15px"}} src="/assets/images/shield-tick1.svg"/>

                                    <span
                                        style={{
                                            fontSize: 16,
                                            color: "#000",
                                        }}
                                    >
                  درخواست بیمه
                </span>
                                </div>
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
                                <div>
                                    <img style={{marginLeft: "15px"}} src="/assets/images/ranking2.svg"/>
                                    <span
                                        style={{
                                            fontSize: 16,
                                            color: "#000",
                                        }}
                                    >
                  آگهی های ویژه
                </span>
                                </div>
                                <div className="ms-auto">
                                    <SwitchButtion
                                        valueHandler={vipHandler}
                                        status={filterContext.data.vip}
                                    />
                                </div>
                            </div>
                        </li>
                        <li className="sidebar-item">
                            <div className="border-sidebar" style={{marginBottom: "0"}}></div>
                        </li>
                    </ul>
                    <div className=" row justify-content-center align-items-center pt-3 ">
                        <div
                            className="d-flex col-7 flex-row justify-content-center  mt-2 py-2 px-3"
                            style={{
                                backgroundColor: "#EC4B72",
                                borderRadius: 10,
                                color: "#fff",
                                fontSize: 20,
                                width: "80%"
                            }}
                        >
                            تماس با پشتیبانی 0000 000 0912
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
        overflowY: "hidden",
        transitionDuration: "0.7s",
    },
    show: {
        maxHeight: 300,
        overflowY: "hidden",
        visibility: "visible",
        transition: "all",
        transitionDuration: "0.9s",
        backgroundColor: "rgba(231, 245, 245, 1)",
        borderRadius: "0 0 10px 10px",
        paddingBottom: "12px",
        paddingTop: "12px"
    },
};

export default SideBar;
