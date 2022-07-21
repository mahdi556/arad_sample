import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import EAdsAdmin from "../../components/Admin/EAdsAdmin";
const AdminAdS = () => {
  return (
    <>
       <div
        className="mx-auto"
        style={{
          backgroundColor: "#f2f5f6",
        }}
      >
        <EAdsAdmin />
      </div>
      <Footer />
    </>
  );
};

export default AdminAdS;
