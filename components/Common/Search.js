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
 
const Search = ({type}) => {
 
   return (
    <>
      <NavBar />
      <TopBanner  type={type}/>
      <SupportDrawer />

      <Adlist type={type} />
      <Footer />
    </>
  );
};

export default Search;
