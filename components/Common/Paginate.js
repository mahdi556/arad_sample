import { useEffect, useState } from "react";

const Paginate = ({ totalPage, currentPage }) => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    let page = [];
    for (var i = 0; i < totalPage; i++) {
      page.push(i);
    }
    console.log(page);
    setPages(page);
  }, [totalPage]);
  console.log(pages);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="d-flex align-items-center nextPage">
          <div className="mt-1">
            <img src="/assets/images/arrow-right.png" height={15} width={20} />
          </div>
          <h6 className="text-white ms-2 mt-1 ">صفحه بعد</h6>
        </div>
        {pages &&
          pages.map((item, key) => {
            <div className="pageNumber" key={item}>
              {item}
            </div>;
          })}

        <div className="d-flex align-items-center ms-2 nextPage">
          <h6 className="text-white me-2 mt-1 ">صفحه قبل</h6>
          <div className="mt-1">
            <img src="/assets/images/arrow-left.png" height={15} width={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Paginate;
