import BreakLine from "../Resume/FormInputs/BreakLine";
import ESlideShow from "./ESlideShow";

const ECProfile = () => {
  return (
    <>
      <div className="d-flex col-12 mt-5">
        <div className="col-4 eCProfile-sec1 me-2">
          <h5 className="mt-2 text-start fw-bold w-75 ">مشخصات شرکت</h5>
          <div className="d-flex mt-5 mb-3 ps-2">
            <h4 className="col-4 4 eCProfile-sec3">حیطه فعالیت :</h4>
            <h6 className="col-8 4 eCProfile-sec4 ">دیجیتال مارکتینگ</h6>
          </div>
          <div className="d-flex my-3 ps-2">
            <h4 className="col-4 4 eCProfile-sec3">سال تاسیس :</h4>
            <h6 className="col-8 4 eCProfile-sec4">1345</h6>
          </div>
          <div className="d-flex my-3 ps-2">
            <h4 className="col-4 4 eCProfile-sec3">تعداد پرسنل :</h4>
            <h6 className="col-8 4 eCProfile-sec4">107 نفر</h6>
          </div>
          <div className="d-flex my-3 ps-2">
            <h4 className="col-4 4 eCProfile-sec3">نوع فعالیت :</h4>
            <h6 className="col-8 4 eCProfile-sec4">معاف</h6>
          </div>
        </div>
        <div className="col-8 eCProfile-sec2 ms-2">
          <h5 className="mt-3 mb-4 text-start fw-bold w-75 ms-3 ">
            توضیحات معرفی
          </h5>
          <p className="px-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
          </p>
        </div>
      </div>
      <div className="d-flex col-12">
        <div className="col-6 eCProfile-sec1 mt-5 me-2">
          <h5 className="mt-3 mb-4 text-start fw-bold w-75 ms-3 ">شعبه ها</h5>
          <div className="d-flex">
            <h1 className="me-5">1</h1>
            <h5 className="eCProfile-sec5  ">
              آدرس
              <h5 className="eCProfile-sec6 mt-2 ">
                اصفهان، کوله پارچه، خ آبشار سوم
              </h5>
            </h5>

            <h4 className="eCProfile-sec5  ms-auto">
              شماره <h5 className="eCProfile-sec6 mt-2 ">091200000</h5>
            </h4>
          </div>
          <BreakLine />
          <div className="d-flex">
            <h1 className="me-5">2</h1>
            <h5 className="eCProfile-sec5  ">
              آدرس
              <h5 className="eCProfile-sec6 mt-2 ">
                اصفهان، کوله پارچه، خ آبشار سوم
              </h5>
            </h5>

            <h4 className="eCProfile-sec5  ms-auto">
              شماره <h5 className="eCProfile-sec6 mt-2 ">091200000</h5>
            </h4>
          </div>
          <BreakLine />
          <div className="d-flex">
            <h1 className="me-5">3</h1>
            <h5 className="eCProfile-sec5  ">
              آدرس
              <h5 className="eCProfile-sec6 mt-2 ">
                اصفهان، کوله پارچه، خ آبشار سوم
              </h5>
            </h5>

            <h4 className="eCProfile-sec5  ms-auto">
              شماره <h5 className="eCProfile-sec6 mt-2 ">091200000</h5>
            </h4>
          </div>
        </div>
        <div className="col-6 eCProfile-sec1 mt-5 ms-2">
          {/* <ESlideShow /> */}
        </div>
      </div>
    </>
  );
};

export default ECProfile;
