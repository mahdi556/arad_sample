import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Search from "../components/Common/Search";
import FilterProvider from "../context/employeeContext/FilterContext/FilterProvider";
export default function Home() {
  const router = useRouter();
      useEffect(()=>{},[router.query.type])
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>چیتیت</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FilterProvider>
        <Search type={router.query.type} />
      </FilterProvider>
    </>
  );
}
