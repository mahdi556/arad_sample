import { useEffect, useState } from "react";

const Paginate = ({ totalPage, currentPage, goNext, goPrev,goPage }) => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    let page = [];
    for (var i = 0; i < totalPage; i++) {
      page.unshift({ page: i });
    }
     setPages(page);
  }, [totalPage]);
   useEffect(() => {}, [pages]);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div
          className="d-flex align-items-center nextPage"
          onClick={() => goNext()}
        >
          <div className="mt-1">
            <img src="/assets/images/arrow-right.png" height={15} width={20} />
          </div>
          <h6 className="text-white ms-2 mt-1 ">صفحه بعد</h6>
        </div>
        {pages &&
          pages.map((item, key) => (
            <div
              className="pageNumber"
              key={item.page}
              onClick={()=>goPage(item.page +1)}
            >
              {item.page + 1}
            </div>
          ))}

        <div
          className="d-flex align-items-center ms-2 nextPage"
          onClick={() => goPrev()}
        >
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
