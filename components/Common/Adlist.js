import {useContext, useEffect, useState} from "react";
import axios from "../../axios";
import {useRouter} from "next/router";
import Filters from "./Filters";
import SideBar from "../SideBar";
import Paginate from "./Paginate";
import FilterContext from "../../context/employeeContext/FilterContext/FilterContext";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import AdCard from "./adCard/AdCard";
import Advertising from "./adCard/Advertising";

const Adlist = ({cat_id, local_id, type}) => {
    const filterContext = useContext(FilterContext);
    const router = useRouter();
    const [eads, setEads] = useState({});
    const [activePage, setActivePage] = useState({});
    const [totalPage, setTotalPage] = useState(null);
    const [currentPage, setCurrentPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [path, setPath] = useState(null);
    const [url, setUrl] = useState(null);
    const [showParams, setShowParams] = useState([]);
    const [filterParams, setFilterParams] = useState({});
    useEffect(() => {
        getAdList();
    }, [filterContext.data, cat_id]);
    const getAdList = (
        url = router.query.cat ? "/getSearchedAds" : "/getAdList"
    ) => {
        if (router.query.cat) {
            axios({
                url: url,
                method: "post",
                data: {
                    cat_id: cat_id,
                    local_id: local_id,
                    params: filterContext.data,
                    type: type
                },
            })
                .then((response) => {
                    console.log(response)
                    setEads(response.data.data.eads);
                    setTotalPage(response.data.data.meta.last_page);
                    setCurrentPage(response.data.data.meta.current_page);
                    setNextPage(response.data.data.links.next);
                    setPrevPage(response.data.data.links.prev);
                    setPath(response.data.data.meta.path);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            axios({
                url: url,
                method: "post",
                data: {
                    type: type
                }
            })
                .then((response) => {
                    console.log(response);

                    setEads(response.data.data.eads);
                    setTotalPage(response.data.data.meta.last_page);
                    setCurrentPage(response.data.data.meta.current_page);
                    setNextPage(response.data.data.links.next);
                    setPrevPage(response.data.data.links.prev);
                    setPath(response.data.data.meta.path);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };
    const goToPage = (page) => {
        axios({
            url: `${path}?page=${page}`,
            method: "get",
        })
            .then((response) => {
                setEads(response.data.data.eads);
                setTotalPage(response.data.data.meta.last_page);
                setCurrentPage(response.data.data.meta.current_page);
                setNextPage(response.data.data.links.next);
                setPrevPage(response.data.data.links.prev);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const goNext = () => {
        nextPage && getAdList(nextPage);
    };
    const goPrev = () => {
        prevPage && getAdList(prevPage);
    };
    const handlePageChange = (number) => {
        setActivePage(number);
    };
    const width = "50%";
    return (
        <>
            <div
                className="mx-auto"
                style={{
                    maxWidth: 2300,
                }}
            >
                <div
                    className="mx-auto"
                    style={{
                        backgroundColor: "#f2f5f6",
                    }}
                >
                    <div className="d-flex justify-content-between">
                        <div className="col-3">
                            <SideBar data={eads}/>
                        </div>
                        <div className="col-6">
                            {filterContext.data.showFilterBox && <Filters/>}

                            <div className="row    gx-5 gy-4   ps-1 ad-card-body">
                                {eads.length > 0 &&
                                eads.map((item, key) => (
                                    /*                   <AdBoxNewEmployer
                                                           width={" col-xl-6 col-xxl-4 "}
                                                           data={item}
                                                           key={item.id}
                                                       />*/

                                    key !== 0 && key % 10 === 0 ? (
                                        <div className="row" style={{marginTop:"35px"}}>
                                            <div className="col-6">
                                                <Advertising theme='red' link="/advertising"
                                                             title="لورم ایپسوم متن ساختگی"
                                                             content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده"/>
                                            </div>
                                            <div className="col-6">
                                                <Advertising theme="blue" link="/advertising"
                                                             title="لورم ایپسوم متن ساختگی"
                                                             content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده"/>
                                            </div>
                                        </div>
                                    ) : (
                                        <AdCard data={item}/>
                                    )


                                ))}
                            </div>
                        </div>
                        <div className="col-3 position-relative" style={{direction: "ltr"}}>
                            <LeftSidebar/>
                        </div>
                    </div>
                </div>
                <div>
                    <Paginate
                        totalPage={totalPage}
                        currentPage={currentPage}
                        goNext={goNext}
                        goPrev={goPrev}
                        goPage={goToPage}
                    />
                </div>
            </div>
        </>
    );
};

export default Adlist;
