import React from 'react';
import {useRouter} from "next/router";

const AdCard = ({data}) => {
    const router = useRouter();
    return (
        <div className="ad-card-wrapper" onClick={() => {
            router.push({
                pathname: "/adshow",
                query: { ad: data.id },
            });
        }}>
            <div className="row">
                <div className="col-6">
                    <div className="d-flex align-items-center">
                        <h2 className="title">{data && data.title}</h2>
                        {data && data.personal.corporate_type == 2 && (
                            <div className="status">( دورکاری )</div>
                        )}
                    </div>
                    <div className="jub-category">{data && data.jobCategory && data.jobCategory.fa_name}</div>
                    <div className="city">شهر : <span
                        className="value">{data.jobCategory && data.personal.city_fa}</span></div>
                    <div className="options">
                        <div className="d-flex align-items-center">
                            {data && data.experiences.length ? (
                                <div className="option">
                                    سابقه کاری
                                    <svg
                                        className="mx-2"
                                        width="15"
                                        height="16"
                                        viewBox="0 0 15 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 8.34552C0 14.6487 1.32375 15.9996 7.5 15.9996C13.6763 15.9996 15 14.6487 15 8.34552C15 2.04236 13.6763 0.691406 7.5 0.691406C1.32375 0.691406 0 2.04236 0 8.34552ZM10.4419 5.98096C10.686 6.23006 10.686 6.63392 10.4419 6.88301L7.31694 10.0722C7.07288 10.3213 6.67712 10.3213 6.43306 10.0722L4.87056 8.47761C4.62648 8.22854 4.62648 7.82465 4.87056 7.57558C5.11464 7.3265 5.51036 7.3265 5.75444 7.57558L6.875 8.71916L9.55806 5.98096C9.80212 5.73187 10.1979 5.73187 10.4419 5.98096Z"
                                            fill="#32AE3E"
                                        />
                                    </svg>

                                    <span className="space mx-2">_</span>
                                </div>
                            ) : null}


                            {data && data.personal.insurrance == "1" && (
                                <div className="option">
                                    درخواست بیمه دارم
                                    <svg
                                        className="mx-2"
                                        width="15"
                                        height="16"
                                        viewBox="0 0 15 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 8.34552C0 14.6487 1.32375 15.9996 7.5 15.9996C13.6763 15.9996 15 14.6487 15 8.34552C15 2.04236 13.6763 0.691406 7.5 0.691406C1.32375 0.691406 0 2.04236 0 8.34552ZM10.4419 5.98096C10.686 6.23006 10.686 6.63392 10.4419 6.88301L7.31694 10.0722C7.07288 10.3213 6.67712 10.3213 6.43306 10.0722L4.87056 8.47761C4.62648 8.22854 4.62648 7.82465 4.87056 7.57558C5.11464 7.3265 5.51036 7.3265 5.75444 7.57558L6.875 8.71916L9.55806 5.98096C9.80212 5.73187 10.1979 5.73187 10.4419 5.98096Z"
                                            fill="#32AE3E"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <div className="d-flex align-items-center">
                            {data && data.personal && data.personal.sex && (
                                <div className="option">
                                    <span style={{fontWeight:300}}>جنسیت
                                    :</span> {data.personal.sex == "1" ? "آقا" : data.personal.sex == "2" ? "خانم" : " "}
                                    <span className="space mx-2">_</span>
                                </div>
                            )}
                            {data && data.personal.fa_salary_from && data.personal.fa_salary_to && (
                                <div className="option">
                                    <span style={{fontWeight:300}}>حقوق درخواستی :</span> از {data.personal.fa_salary_from.toLocaleString()} تومان تا{" "}
                                    {data.personal.fa_salary_to.toLocaleString()} تومان
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-7">
                            <div className="ad-video">
                                {data&&data.video?(
                                    <img src={data && data.video} alt="video"/>
                                ):(
                                    <img src={data && data.image} alt="video" className="not-found-video"/>
                                )}
                            </div>
                        </div>
                        <div className="col-5">
                                <img className="ad-img" src={data && data.image} alt={data && data.title}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdCard;
