import Image from "next/image";

const Paginate = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="d-flex align-items-center nextPage">
          <div className="mt-1">
            <Image
              src="/assets/images/arrow-right.png"
              height={15}
              width={20}
            />
          </div>
          <h6 className="text-white ms-2 mt-1 ">صفحه بعد</h6>
        </div>
        <div className="pageNumber">1</div>
        <div className="pageNumber">2</div>
        <div className="pageNumber">3</div>
        <div className="pageNumber">4</div>
        <div className="pageNumberDis"> </div>
        <div className="pageNumberDis"> </div>
        <div className="pageNumberDis"> </div>
        <div className="pageNumberDis"> </div>
        <div className="pageNumber">4</div>
        <div className="pageNumber">4</div>
        <div className="pageNumber">4</div>
        <div className="d-flex align-items-center ms-2 nextPage">
          <h6 className="text-white me-2 mt-1 ">صفحه قبل</h6>
          <div className="mt-1">
            <Image
              src="/assets/images/arrow-left.png"
              height={15}
              width={20}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Paginate;
