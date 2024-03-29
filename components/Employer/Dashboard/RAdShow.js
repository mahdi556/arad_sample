  
import AdBoxNewEmployer from "../../Common/AdBoxNewEmployer";
import BreakLine from "../../Employee/Resume/FormInputs/BreakLine";

const RAdShow = ({ data }) => {
  const width = "33%";

  return (
    <>
      <div className="d-flex flex-column px-4 eAdshow">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column mt-4">
            <h1 className="eAdshowSec1">
              {" "}
              {data.title}{" "}
              <h5 className="d-inline-flex">
                {data.personal && data.personal.corporate_type == 1
                  ? "حضوری"
                  : data.personal && data.personal.corporate_type == 2
                  ? "دورکاری"
                  : data.personal && data.personal.corporate_type == 3
                  ? "(حضوری و دورکاری)"
                  : null}
              </h5>
            </h1>
            <h4 className="eAdshowSec2">
              دسته {data.jobCategory && data.jobCategory.fa_name}
              <h6 className="d-inline-flex fw-light">3روز پیش</h6>
            </h4>
          </div>
          <div className="d-flex pt-4">
            <div className="me-3">
              <img src="/assets/images/save.png" height={32} width={32} />
            </div>
            <div>
              <img src="/assets/images/share.png" height={32} width={32} />
            </div>
          </div>
        </div>
        <BreakLine />
        <div className="d-flex flex-column pe-4">
          <div className="d-flex col-12">
            <div className="d-flex col-4">
              <h6 className="col-5 txtSec1"> میزان حقوق دریافتی</h6>
              <h6 className="col-7 txtSec2">
                {" "}
                از {data.personal && data.personal.fa_salary_from} تاتومان
                {data.personal && data.personal.fa_salary_to}تومان
              </h6>
            </div>
            <div className="d-flex col-4 ms-4">
              <h6 className="col-5 txtSec1">بیمه</h6>
              <h6 className="col-7 txtSec2">
                {" "}
                {data.personal && data.personal.insurrance == 1
                  ? "دارد"
                  : data.personal && data.personal.insurrance == 0
                  ? "ندارد"
                  : null}{" "}
              </h6>
            </div>
            <div className="d-flex col-3 ms-4 ">
              <h6 className="col-5 txtSec1">نوع همکاری</h6>
              <h6 className="col-7 txtSec2">
                {" "}
                {data.personal && data.personal.corporate_type == 1
                  ? "حضوری"
                  : data.personal && data.personal.corporate_type == 2
                  ? "دورکاری"
                  : data.personal && data.personal.corporate_type == 3
                  ? "(حضوری و دورکاری)"
                  : null}
              </h6>
            </div>
          </div>
          <div className="d-flex col-12">
            <div className="d-flex col-4">
              <h6 className="col-5 txtSec1"> نحوه پرداخت حقوق </h6>
              <h6 className="col-7 txtSec2"> ماهانه </h6>
            </div>
            <div className="d-flex col-4 ms-4">
              <h6 className="col-5 txtSec1">محدوده سنی</h6>
              <h6 className="col-7 txtSec2">از 21 سال تا 25 سال</h6>
            </div>
            <div className="d-flex col-3 ms-4 ">
              <h6 className="col-5 txtSec1">ساعات کاری</h6>
              <h6 className="col-7 txtSec2">از ساعت 8 تا ساعت 17</h6>
            </div>
          </div>
        </div>
        <BreakLine />
        <div className="mb-4">
          <h5 className="mt-2 mb-5 fs-5 text-start fw-bold w-75">
            مهارت های نرم افزاری
          </h5>
          <div className="row row-cols-4  ">
            {data.softExperts &&
              data.softExperts.map((item, key) => (
                <div className="col  px-3">
                  <div className="   eAdshowSec3  ">
                    {item.fa_name}
                    <div className="d-flex col-12 justify-content-between px-2">
                      <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}>
                        {item.level == 1 && "مقدماتی"}
                      </div>
                      <div
                        className={
                          item.level == 2 || item.level == 3
                            ? "eAdshowSec6 col-4 mt-2 me-1 pb-1"
                            : "eAdshowSec8 col-4 mt-2 me-1 pb-1"
                        }
                        // {`eAdshowSec6 col-4 mt-2 me-1 pb-1`}
                      >
                        {item.level == 2 && "متوسط"}
                      </div>
                      <div
                        className={
                          item.level == 3
                            ? "eAdshowSec6 col-4 mt-2 me-1 pb-1"
                            : "eAdshowSec8 col-4 mt-2 me-1 pb-1"
                        }
                      >
                        {item.level == 3 && "پیشرفته"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <BreakLine />
        <div className="mb-4">
          <h5 className="mt-2 mb-5 fs-5 text-start fw-bold w-75">
            مهارت های زبان
          </h5>
          <div className="row row-cols-4  ">
            {data.langExperts &&
              data.langExperts.map((item, key) => (
                <div className="col  px-3">
                  <div className="   eAdshowSec3  ">
                    {item.fa_name}
                    <div className="d-flex col-12 justify-content-between px-2">
                      <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}>
                        {item.level == 1 && "مقدماتی"}
                      </div>
                      <div
                        className={
                          item.level == 2 || item.level == 3
                            ? "eAdshowSec6 col-4 mt-2 me-1 pb-1"
                            : "eAdshowSec8 col-4 mt-2 me-1 pb-1"
                        }
                        // {`eAdshowSec6 col-4 mt-2 me-1 pb-1`}
                      >
                        {item.level == 2 && "متوسط"}
                      </div>
                      <div
                        className={
                          item.level == 3
                            ? "eAdshowSec6 col-4 mt-2 me-1 pb-1"
                            : "eAdshowSec8 col-4 mt-2 me-1 pb-1"
                        }
                      >
                        {item.level == 3 && "پیشرفته"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <BreakLine />
        <h5 className="mt-2 mb-5 fs-5 text-start fw-bold w-75">توضیحات</h5>
        <p
          style={{
            fontSize: 16,
            lineHeight: 2,
          }}
        >
          {data.personal && data.personal.description}
        </p>
        <h5 className="  my-5 fs-4 text-start fw-bold w-75">تسهیلات و مزایا</h5>
        <div className="d-flex flex-wrap mb-3">
          <h3 className="d-flex eAdshowSec7 mx-2">وام</h3>
          <h3 className="d-flex eAdshowSec7 mx-2">مکان استراحت</h3>
          <h3 className="d-flex eAdshowSec7 mx-2">یخچال</h3>
          <h3 className="d-flex eAdshowSec7 mx-2">کیک</h3>
        </div>
      </div>
      <h5 className="mt-5 mb-5 fs-4 text-start fw-bold w-75">آگهی های مرتبط</h5>
      <div className="row gx-5 gy-4   ">
        <AdBoxNewEmployer width={width} />
        <AdBoxNewEmployer width={width} />
        <AdBoxNewEmployer width={width} />
        <AdBoxNewEmployer width={width} />
        <AdBoxNewEmployer width={width} />
        <AdBoxNewEmployer width={width} />
      </div>
    </>
  );
};
export default RAdShow;
