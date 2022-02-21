import Image from "next/image";
import AdBoxNew from "../../AdBoxNew";
import BreakLine from "../Resume/FormInputs/BreakLine";

const EAdShow = () => {
  const width = "33%";
  return (
    <>
      <div className="d-flex flex-column px-4 eAdshow">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column mt-4">
            <h1 className="eAdshowSec1">
              {" "}
              کارشناس ارشد شبکه های اجتماعی{" "}
              <h5 className="d-inline-flex">(دورکاری)</h5>
            </h1>
            <h4 className="eAdshowSec2">
              دسته دیجیتال مارکتینگ{" "}
              <h6 className="d-inline-flex fw-light">3روز پیش</h6>
            </h4>
          </div>
          <div className="d-flex pt-4">
            <div className="me-3">
              <Image src="/assets/images/save.png" height={32} width={32} />
            </div>
            <div>
              <Image src="/assets/images/share.png" height={32} width={32} />
            </div>
          </div>
        </div>
        <BreakLine />
        <div className="d-flex flex-column pe-4">
          <div className="d-flex col-12">
            <div className="d-flex col-4">
              <h6 className="col-5 txtSec1"> میزان حقوق دریافتی</h6>
              <h6 className="col-7 txtSec2"> از 2000000 تا 300000000</h6>
            </div>
            <div className="d-flex col-4 ms-4">
              <h6 className="col-5 txtSec1">بیمه</h6>
              <h6 className="col-7 txtSec2">دارد</h6>
            </div>
            <div className="d-flex col-3 ms-4 ">
              <h6 className="col-5 txtSec1">نوع همکاری</h6>
              <h6 className="col-7 txtSec2">کارآموزی</h6>
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
            <div className="col px-3 mb-4">
              <div className="   eAdshowSec3  ">
                اکسل
                <div className="d-flex col-12 justify-content-between px-2">
                  <div className={`eAdshowSec4 col-4 mt-2 me-1 pb-1`}>
                    مقدماتی
                  </div>
                  <div className={`eAdshowSec5 col-4 mt-2 me-1 pb-1`}> </div>
                  <div className={`eAdshowSec5 col-4 mt-2 me-1 pb-1`}> </div>
                </div>
              </div>
            </div>
            <div className="col  px-3">
              <div className="   eAdshowSec3  ">
                اکسل
                <div className="d-flex col-12 justify-content-between px-2">
                  <div className={`eAdshowSec4 col-4 mt-2 me-1 pb-1`}>
                    مقدماتی
                  </div>
                  <div className={`eAdshowSec5 col-4 mt-2 me-1 pb-1`}> </div>
                  <div className={`eAdshowSec5 col-4 mt-2 me-1 pb-1`}> </div>
                </div>
              </div>
            </div>
            <div className="col  px-3">
              <div className="   eAdshowSec3  ">
                اکسل
                <div className="d-flex col-12 justify-content-between px-2">
                  <div className={`eAdshowSec4 col-4 mt-2 me-1 pb-1`}>
                    مقدماتی
                  </div>
                  <div className={`eAdshowSec5 col-4 mt-2 me-1 pb-1`}> </div>
                  <div className={`eAdshowSec5 col-4 mt-2 me-1 pb-1`}> </div>
                </div>
              </div>
            </div>
            <div className="col  px-3">
              <div className="   eAdshowSec3  ">
                اکسل
                <div className="d-flex col-12 justify-content-between px-2">
                  <div className={`eAdshowSec4 col-4 mt-2 me-1 pb-1`}>
                    مقدماتی
                  </div>
                  <div className={`eAdshowSec5 col-4 mt-2 me-1 pb-1`}> </div>
                  <div className={`eAdshowSec5 col-4 mt-2 me-1 pb-1`}> </div>
                </div>
              </div>
            </div>
            <div className="col  px-3">
              <div className="   eAdshowSec3  ">
                اکسل
                <div className="d-flex col-12 justify-content-between px-2">
                  <div className={`eAdshowSec4 col-4 mt-2 me-1 pb-1`}>
                    مقدماتی
                  </div>
                  <div className={`eAdshowSec5 col-4 mt-2 me-1 pb-1`}> </div>
                  <div className={`eAdshowSec5 col-4 mt-2 me-1 pb-1`}> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BreakLine />
        <div className="mb-4">
          <h5 className="mt-2 mb-5 fs-5 text-start fw-bold w-75">
            مهارت های زبان
          </h5>
          <div className="row row-cols-4  ">
            <div className="col  px-3">
              <div className="   eAdshowSec3  ">
                اکسل
                <div className="d-flex col-12 justify-content-between px-2">
                  <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}></div>
                  <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}> </div>
                  <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}> خوب</div>
                </div>
              </div>
            </div>
            <div className="col  px-3">
              <div className="   eAdshowSec3  ">
                اکسل
                <div className="d-flex col-12 justify-content-between px-2">
                  <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}></div>
                  <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}> </div>
                  <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}> خوب</div>
                </div>
              </div>
            </div>
            <div className="col  px-3">
              <div className="   eAdshowSec3  ">
                اکسل
                <div className="d-flex col-12 justify-content-between px-2">
                  <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}></div>
                  <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}> </div>
                  <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}> خوب</div>
                </div>
              </div>
            </div>
            <div className="col  px-3">
              <div className="   eAdshowSec3  ">
                اکسل
                <div className="d-flex col-12 justify-content-between px-2">
                  <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}></div>
                  <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}> </div>
                  <div className={`eAdshowSec6 col-4 mt-2 me-1 pb-1`}> خوب</div>
                </div>
              </div>
            </div>
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
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
          با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
          با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
          با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
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
      <div class="row gx-5 gy-4   ">
        <AdBoxNew width={width} />
        <AdBoxNew width={width} />
        <AdBoxNew width={width} />
        <AdBoxNew width={width} />
        <AdBoxNew width={width} />
        <AdBoxNew width={width} />
      </div>
    </>
  );
};
export default EAdShow;
