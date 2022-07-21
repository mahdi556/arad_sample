  
import style from "./styles/eshow.module.css";

const SearchBar = () => {
  return (
    <>
      <div className={`${style.searchBox} mt-5`}>
        <div className="d-flex align-items-center">جستجو</div>
        <div className="ms-auto pt-2 ">
          <img src="/assets/images/magnifire3.svg" height={30} width={30} />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
