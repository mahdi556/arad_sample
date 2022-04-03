import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
 import Filters from "../components/Common/Filters";
import SideBar from "../components/SideBar";
import SearchBar from "../components/Common/SearchBar";
import Paginate from "../components/Common/Paginate";
import RegisterMedical from "../components/Micapp/Common/RegisterMedical";
import RegisterClinic from "../components/Micapp/Common/RegisterClinic";
import MedicalList from "../components/Micapp/Common/MedicalList";
import RegisterDoctor from "../components/Micapp/Common/RegisterDoctor";
const AdsList = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
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
            <div className="d-flex">
              <RegisterMedical />
              <RegisterClinic />
              <RegisterDoctor />
            </div>
            <MedicalList />
            <Paginate />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdsList;
