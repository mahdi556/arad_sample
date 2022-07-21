import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "../styles/style.css";
import "../styles/circle.scss";
import "react-toastify/dist/ReactToastify.css";
import "react-modern-drawer/dist/index.css";
import axios from "axios";
import { useEffect } from "react";
import { AuthProvider } from "../context/Auth/AuthContext";
import { AdProvider } from "context/Ad/AdContext";
import NavBar from "components/NavBar";
import { ToastContainer } from "react-toastify";
import Router from "next/router";
import NProgress from 'nprogress';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);
  return (
    <AuthProvider>
      <AdProvider>
        <NavBar />
        <Component {...pageProps} />
        <ToastContainer />
      </AdProvider>
    </AuthProvider>
  );
}

export default MyApp;
