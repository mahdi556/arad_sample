// import UserProvider from "../../context/employeeContext/User/UserProvider";
import Footer from "../Footer";
import axios from "../../axios";
import NavBar from "../NavBar";
import Adlist from "./Adlist";
import SearchBar from "./SearchBar";
import SearchTopSection from "./SearchTopSection";
import SupportDrawer from "./SupportDrawer";
import Filters from "./Filters";
import TopBanner from "./TopBanner";
import { useEffect, useState } from "react";
 
const Search = () => {
  const [eads, setEads] = useState({});

   return (
    <>
      <NavBar />
      <TopBanner />
      <SupportDrawer />

      <Adlist />
      <Footer />
    </>
  );
};

export default Search;
