import Head from "next/head";
import { useRouter } from "next/router";
import HomePage from "../components/Common/HomePage";
import Search from "../components/Common/Search";
export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>چیتیت</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
    </>
  );
}

 