import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "../styles/style.css";
import "../styles/circle.scss";
import "react-toastify/dist/ReactToastify.css";
import "react-modern-drawer/dist/index.css";
import 'animate.css';

import { useEffect } from "react";
import UserProvider from "../context/employeeContext/User/UserProvider";
import SupportDrawer from "../components/Common/SupportDrawer";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);
  return (
    <UserProvider>
      {/* <SupportDrawer /> */}
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
