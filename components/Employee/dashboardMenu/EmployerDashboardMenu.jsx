import React from 'react';
import Link from 'next/link'

const EmployerDashboardMenu = () => {
    return (
        <div className="row mega-menu">
            <div className="col-3">
                <div className="item">
                    <h4 className="list-title">آگهی ها</h4>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/Vector.svg" alt="vector"/></div>
                            <Link className="text" href="/">لیست آگهی های ثبت شده</Link>
                        </li>
                    </ul>
                </div>
         {/*       <div className="item mt-4">
                    <h4 className="list-title">تقویم مصاحبه آنلاین</h4>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center">
                            <div className="icon notification"><img src="/assets/images/mosa.svg" alt="vector"/></div>
                            <Link className="text" href="/">مصاحبه ها</Link>
                        </li>
                    </ul>
                </div>*/}
            </div>
            <div className="col-3">
                <div className="item">
                    <h4 className="list-title">رزومه</h4>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/Group10857.svg" alt="vector"/></div>
                            <Link className="text" href="/">بانک کارجویان</Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/65463.svg" alt="vector"/></div>
                            <Link className="text" href="/">رزومه های دریافت شده</Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/Group10858.svg" alt="vector"/></div>
                            <Link className="text" href="/">رزومه های ذخیره شده</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-3">
                <div className="item">
                    <h4 className="list-title">سفارشات و بسته ها</h4>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/Group10860.svg" alt="vector"/></div>
                            <Link className="text" href="/">بسته ثبت آگهی</Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/Group10861.svg" alt="vector"/></div>
                            <Link className="text" href="/">بسته بانک رزومه</Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/Group10862.svg" alt="vector"/></div>
                            <Link className="text" href="/">بسته ترکیبی (اقتصادی)</Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/56565654.svg" alt="vector"/></div>
                            <Link className="text" href="/">فاکتورها</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-3">
                <div className="item">
                    <h4 className="list-title">اطلاعات سازمانی</h4>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/65465654.svg" alt="vector"/></div>
                            <Link className="text" href="/">پروفایل سازمانی</Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/9878799.svg" alt="vector"/></div>
                            <Link className="text" href="/">تنظیمات حساب کاربری</Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/Group10862.svg" alt="vector"/></div>
                            <Link className="text" href="/">تنظیمات حساب کاربری</Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="icon"><img src="/assets/images/Group10856.svg" alt="vector"/></div>
                            <Link className="text" href="/">دسترسی کاربران</Link>
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

export default EmployerDashboardMenu;
