import RightMenu from "../components/Employee/RightMenu/RightMenu";
// import RShowContent from "../components/Employer/RShowCase/RshowContent";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const SentResume = () => {
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

       </div>
      <Footer />
    </>
  );
};

export default SentResume;
