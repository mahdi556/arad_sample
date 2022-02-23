import RightMenu from "../components/Employee/RightMenu/RightMenu";
import RShowMain from "../components/Employer/RShowCase/RShowMain";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const RShowCase = () => {
  return (
    <>
      <NavBar />
      <div
        className="d-flex justify-content-between"
        style={{
          width: "100%",
           
          marginTop: 80,
          backgroundColor: "#f2f5f6",
        }}
      >
        <RightMenu />

        <RShowMain />
      </div>
      <Footer />
    </>
  );
};

export default RShowCase;
