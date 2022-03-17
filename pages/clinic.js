import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Filters from "../components/Common/Filters";
import SideBar from "../components/SideBar";
import SearchBar from "../components/Common/SearchBar";
import AssignDoctor from "../components/Micapp/Common/AssignDoctor";
const Clinic = () => {
  const router = useRouter();
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
              <AssignDoctor id={router.query.id} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Clinic;
