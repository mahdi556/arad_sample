import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "../styles/style.css";
import "../styles/circle.scss";
import { useEffect } from "react";
import UserProvider from "../context/employeeContext/User/UserProvider";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);
  return (
    <UserProvider>
      {" "}
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
