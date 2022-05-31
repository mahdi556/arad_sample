import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SearchBar from "../components/Common/SearchBar";
import { useRouter } from "next/router";
import FilterProvider from "../context/employeeContext/FilterContext/FilterProvider";
import Adlist from "../components/Common/Adlist";
const EAdsList = () => {
  const router= useRouter();
  useEffect(()=>{},[router.query.type])

  return (
    <>
      <NavBar />
      <FilterProvider>
        <SearchBar />
        <Adlist cat_id={router.query.cat} local_id={router.query.localId} type={router.query.type} />
      </FilterProvider>
      <Footer />
    </>
  );
};

export default EAdsList;
