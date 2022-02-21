import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <div
        style={{
          height: "80vh",
          marginTop: 80,
        }}
      >
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            router.push({
              pathname: "/employer/createAdPage",
              query: { type: "normal" },
            });
          }}
        >
          استخدام کارفرما
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            router.push({
              pathname: "/employee/createAdPage",
              query: { type: "normal" },
            });
          }}
        >
          استخدام کارجو
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            router.push({
              pathname: "/employee/dashboard",
            });
          }}
        >
          داشبورد کارجو
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            router.push({
              pathname: "/search ",
            });
          }}
        >
          جستجو
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            router.push({
              pathname: "/home ",
            });
          }}
        >
          خانه
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            router.push({
              pathname: "/adslist ",
            });
          }}
        >
          لیست آگهی ها
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            router.push({
              pathname: "/eShowcase ",
            });
          }}
        >
          ویترین کارفرما
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            router.push({
              pathname: "/rShowcase ",
            });
          }}
        >
          ویترین کارجو
        </div>
      </div>
      <Footer />
    </>
  );
}
