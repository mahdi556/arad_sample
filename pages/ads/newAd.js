import ResumeProvider from "context/Ad/CreateResume/ResumeProvider";
import Head from "next/head";
import CreateAd from "components/Ads/CreateAd";
 export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>چیتیت</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResumeProvider>
        <CreateAd />
      </ResumeProvider>
    </>
  );
}
