import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import RAdsAdmin from "../../components/Admin/RAdsAdmin";
const AdminAdS = () => {
  return (
    <>
       <div
        className="mx-auto"
        style={{
          backgroundColor: "#f2f5f6",
        }}
      >
        <RAdsAdmin />
      </div>
      <Footer />
    </>
  );
};

export default AdminAdS;
