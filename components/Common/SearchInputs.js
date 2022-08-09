import {useEffect, useRef, useState} from "react";
import style from "./SearchStyles/search.module.css";
import {Province} from "../StaticData/City";
import {JobCats} from "../StaticData/JobCategory";
import {useRouter} from "next/router";

const SearchInputs = ({type}) => {
    const [catInput, setCatInput] = useState(false);
    const [localInput, setLocalInput] = useState(false);
    const [input1, setInput1] = useState("inputStyle");
    const [dropdown1, setDropdown1] = useState("dropdown-close");
    const [drop1, setDrop1] = useState(false);
    const [datas1, setDatas1] = useState(null);
    const [cat, setCat] = useState(null);
    const [input2, setInput2] = useState("inputStyle");
    const [dropdown2, setDropdown2] = useState("dropdown-close");
    const [drop2, setDrop2] = useState(false);
    const [datas2, setDatas2] = useState(null);
    const [local, setLocal] = useState(null);
    const [localId, setLocalId] = useState(0);
    const [catId, setCatId] = useState(0);
    const router = useRouter();
    const dropRef = useRef(null);
    useEffect(() => {
        // setDatas(Langsfa);
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, [drop1]);
    useEffect(() => {
        // setDatas(Langsfa);
        document.addEventListener("click", handleClickOutside2, false);
        return () => {
            document.removeEventListener("click", handleClickOutside2, false);
        };
    }, [drop2]);
    const handleClickOutside = (event) => {
        if (
            dropRef.current &&
            !dropRef.current.contains(event.target) &&
            drop2 == true
        ) {
            setDropdown1("close-drop");
            setDrop1(false);
        }
    };
    const handleClickOutside2 = (event) => {
        if (
            dropRef.current &&
            !dropRef.current.contains(event.target) &&
            drop2 == true
        ) {
            setDropdown2("close-drop");
            setDrop2(false);
        }
    };
    const dropfilter = (text) => {
        let filterList1 = [];
        setDatas2(filterList1);
        Province.filter(function check(item) {
            if (item.fa.indexOf(text) != -1) {
                filterList1.push({id: item.id, fa: item.fa});
            }
        });
        if (filterList1.length == 0) {
            setDrop1(false);
        }
    };
    const jobfilter = (text) => {
        let filterList2 = [];
        setDatas1(filterList2);
        JobCats.filter(function check(item) {
            if (item.fa.indexOf(text) != -1) {
                filterList2.push({id: item.id, fa: item.fa});
            }
        });
        if (filterList2.length == 0) {
            setDrop2(false);
        }
    };
    const searchHandle = () => {
        router.push({
            pathname: "/eadslist",
            query: {localId: localId, cat: catId, type: type},
        });
    };

    return (
        <>
            <div
                className="d-flex flex-row col-12 search-box-1   justify-content-center  bg-white  "
            >
                <div
                    className=" col-4  cat-search-item   me-4  position-relative"
                    style={
                        {
                            // marginTop:5
                        }
                    }
                >
                    <img src="/assets/images/Group 10786.svg" alt="search"/>
                    <input
                        placeholder="سرچ شغل مورد نظر"
                        className={`col-12 ${style.sec1}  ms-2 search-placeholder`}
                        type="text"
                        value={cat}
                        onChange={(e) => {
                            setCat(e.target.value);
                            setInput1("inputStyle");
                            setDrop1(true);
                            jobfilter(e.target.value);
                            setDropdown1("dropdown-open");
                            // setLocalInput(false)
                        }}
                    />
                    {/* </div> */}

                    {drop1 === true && (
                        <div
                            className={
                                dropdown1 == "dropdown-open"
                                    ? style.dropdown_open
                                    : style.dropdown_close
                            }
                            style={{
                                borderRadius: "0.7rem",
                            }}
                            ref={dropRef}
                        >
                            <div
                                style={{
                                    borderRadius: "0.7rem",
                                    border: "1px solid #11999e",
                                    zIndex: 30,
                                    padding: "0.7rem 0",
                                }}
                            >
                                <div
                                    style={{
                                        marginTop: 1,
                                        maxHeight: "10rem",
                                        width: "100%",
                                        overflowY: "scroll",
                                        paddingRight: "0.8rem",
                                        paddingLeft: "0.8rem",
                                        scrollbarColor: "#ec4b72 #fff",
                                        scrollbarWidth: "thin",
                                        zIndex: 30,
                                        backgroundColor: "#fff",
                                    }}
                                >
                                    {datas1.map((item, key) => (
                                        <div
                                            className={` ${style.dropdown_item}`}
                                            key={item.id}
                                            onClick={() => {
                                                setCat(item.fa);
                                                setCatId(item.id);
                                                setDrop1(false);
                                                setDropdown1("close-drop");
                                            }}
                                        >
                                            {item.fa}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className=" col-5  cat-search-item  me-4 position-relative" style={{paddingRight:"45px",borderRight:"1px solid rgba(0, 0, 0, 0.17"}}>
                    <img src="/assets/images/Group 10785.svg" alt="location"/>
                    <input
                        placeholder="یک منطقه وارد کنید"
                        className={`col-12 ${style.sec1}  ms-2 search-placeholder`}
                        type="text"
                        value={local}
                        onChange={(e) => {
                            setLocal(e.target.value);
                            setInput2("inputStyle");
                            setDrop2(true);
                            dropfilter(e.target.value);
                            setDropdown2("dropdown-open");
                            // setLocalInput(false)
                        }}
                    />
                    {/* </div> */}

                    {drop2 === true && (
                        <div
                            className={
                                dropdown2 == "dropdown-open"
                                    ? style.dropdown_open
                                    : style.dropdown_close
                            }
                            ref={dropRef}
                        >
                            <div
                                style={{
                                    borderRadius: "0.7rem",
                                    border: "1px solid #11999e",
                                    zIndex: 30,
                                    padding: "0.7rem 0",
                                }}
                            >
                                <div
                                    style={{
                                        marginTop: 1,
                                        maxHeight: "10rem",
                                        width: "100%",
                                        overflowY: "scroll",
                                        paddingRight: "0.8rem",
                                        paddingLeft: "0.8rem",
                                        scrollbarColor: "#ec4b72 #fff",
                                        scrollbarWidth: "thin",
                                        zIndex: 30,
                                        backgroundColor: "#fff",
                                    }}
                                >
                                    {datas2.map((item, key) => (
                                        <div
                                            className={` ${style.dropdown_item}`}
                                            key={item.id}
                                            onClick={() => {
                                                setLocal(item.fa);
                                                setLocalId(item.id);
                                                setDrop2(false);
                                                setDropdown2("close-drop");
                                            }}
                                        >
                                            {item.fa}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div
                    className="d-flex col-4 search-button-1  justify-content-center align-items-center"
                    onClick={() => searchHandle()}
                >
                    جست و جو
                </div>
            </div>
        </>
    );
};
export default SearchInputs;
