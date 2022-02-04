import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import RightMenu from "../../components/Employee/RightMenu/RightMenu";

import ProgressBar from "../../components/Employee/Resume/ProgrressBar";
import CreateResumeBody from "../../components/Employee/Resume/CreateResumeBody";
import EnProgrressBar from "../../components/Employee/Resume/EnProgrressBar";
const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div
        className="d-flex justify-content-between"
        style={{
          width: "100%",
          //   height: "100vh",
          marginTop: 80,
          backgroundColor: "#E5E5E5",
        }}
      >
        <RightMenu />
        <ProgressBar />
        <CreateResumeBody />
        <EnProgrressBar />
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
