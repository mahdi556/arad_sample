import Image from "next/image";

const SearchBar = () => {
  return (
    <>
      <div className="searchBar">
        
        <div class="d-flex flex-row col-6     justify-content-between  bg-white px-3   "
        style={{
          borderRadius:20
        }}
        >
          <div class=" col-6   intro2   my-3 ">
            <h6 className="text-black   ps-3 pt-2 ">
              دسته شغلی یا عبارت کلیدی ...
            </h6>
            {/* <h6 className="fs-11 text-dark ps-3 ">برنامه نویسی</h6> */}
          </div>
          <div class=" col-5  intro2    my-3 ">
            <h6 className="text-black ps-3 pt-2   "> موقعیت مکانی </h6>
            {/* <h6 className="fs-11 text-dark ps-3 ">اصفهان</h6> */}
          </div>
          <div class="d-flex  px-2 intro3  justify-content-center align-items-center   my-3 ">
            <Image src="/assets/images/magnifire2.png" height={18} width={18} />
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
