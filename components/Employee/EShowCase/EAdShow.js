import Image from "next/image";
import BreakLine from "../Resume/FormInputs/BreakLine";

const EAdShow = () => {
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
        <div className="d-flex flex-column">
          <div className="d-flex col-12">
            <div className="d-flex col-4">
              <h6 className="col-5 txtSec1"> میزان حقوق دریافتی</h6>
              <h6 className="col-7 txtSec2"> از 2000000 تا 300000000</h6>
            </div>
            <div className="d-flex col-4 ms-4">
              <h6 className="col-5 txtSec1">بیمه</h6>
              <h6 className="col-7 txtSec2">دارد</h6>
            </div>
            <div className="d-flex col-4 mx-4">
              <h6 className="col-5 txtSec1">نوع همکاری</h6>
              <h6 className="col-7 txtSec2">کارآموزی</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EAdShow;
