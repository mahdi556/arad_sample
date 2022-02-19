import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Ads from "../components/Common/Ads";
import Filters from "../components/Common/Filters";
import SideBar from "../components/SideBar";
import TopBanner from "../components/Common/TopBanner";
const Search = () => {
  return (
    <>
      <NavBar />
      <TopBanner />
      <div
        className="mx-auto"
        style={{
         
          backgroundColor: "#f2f5f6",
        }}
      >
        <div className="d-flex col-12">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="  col-8 ">
            <Filters />
            <Ads />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
