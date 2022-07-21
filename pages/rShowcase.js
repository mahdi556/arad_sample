import RightMenu from "../components/Employee/RightMenu/RightMenu";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const RShowCase = () => {
  return (
    <>
       <div
        className="d-flex justify-content-between"
        style={{
          width: "100%",
           
          marginTop: 80,
          backgroundColor: "#f2f5f6",
        }}
      >
        <RightMenu />

        {/* <RShowMain /> */}
      </div>
      <Footer />
    </>
  );
};

export default RShowCase;
