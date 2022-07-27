import React from 'react';
import Link from "next/link";

const JobSeekerDashboardMenu = () => {
    return (
        <div className="row mega-menu">
            <div className="col-3">
                <div className="item">
                    <h4 className="list-title">آگهی ها</h4>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/Vector.svg" alt="vector"/></div>
                            <Link className="text" href="/">آگهی های ثبت شده</Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/635152.svg" alt="vector"/></div>
                            <Link className="text" href="/">پیشنهاد شغل شما</Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/Group10858.svg" alt="vector"/></div>
                            <Link className="text" href="/">شغل های ذخیره شده</Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/89564.svg" alt="vector"/></div>
                            <Link className="text" href="/">شرکت های دنبال شونده</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-3">
                <div className="item">
                    <h4 className="list-title">سفارشات و بسته ها</h4>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/646654.svg" alt="vector"/></div>
                            <Link className="text" href="/">بسته ارتقاع به کارجو ویژه</Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/545455.svg" alt="vector"/></div>
                            <Link className="text" href="/">سوابق خرید</Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/Group10862.svg" alt="vector"/></div>
                            <Link className="text" href="/">تنظیمات حساب کاربری</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-3">
                <div className="item">
                    <h4 className="list-title">رزومه</h4>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center">
                            <div className="icon notification"><img src="/assets/images/9612358.svg" alt="vector"/></div>
                            <div>
                                <Link className="text" href="/">رزومه من</Link>
                                <span className="status">27%</span>
                            </div>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/4564654.svg" alt="vector"/></div>
                            <Link className="text" href="/">پیگیری رزومه های ارسال شده</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-3">
                <div className="item">
                    <h4 className="list-title">تقویم مصاحبه آنلاین</h4>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/mosa.svg" alt="vector"/></div>
                            <div>
                                <Link className="text" href="/">درخواست های مصاحبه</Link>
                                <span className="status">2درخواست</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="logout-button position-absolute">
                <img src="/assets/images/Group10853.svg" alt="vector"/>
                <span className="log-out ms-2">خروج از حساب کاربری</span>
            </div>

        </div>
    );
};

export default JobSeekerDashboardMenu;
