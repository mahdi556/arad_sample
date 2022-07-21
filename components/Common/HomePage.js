// import UserProvider from "../../context/employeeContext/User/UserProvider";
import Footer from "../Footer";
import NavBar from "../NavBar";
import HomeAds from "./HomeAds";
import HomeTopSection from "./HomeTopSection";
import SupportDrawer from "./SupportDrawer";

const HomePage = () => {
  return (
    <>
      {/* <UserProvider> */}
      <NavBar />
      <HomeTopSection />
      <HomeAds />
      <SupportDrawer />

      <Footer />
      {/* </UserProvider> */}
    </>
  );
};

export default HomePage;
