import UserContext from "../../context/employeeContext/User/UserContext";
import { useRouter } from "next/router";
import { useContext } from "react";
import Login, { handleSignIn } from "./Login";
import { fontSize } from "@mui/system";
import style from "./HomeStyles/home.module.css";

const NewAd = () => {
  const userContext = useContext(UserContext);
  const router = useRouter();
  const handleNewAd = () => {
    if (userContext.data.user.auth) {
      router.push({
        pathname: "/adtype",
      });
    } else {
      userContext.dispatch({ type: "signUp", payload: true });
    }
  };

  return (
    <li
      className={`  ${style.sec43}  d-flex px-3 py-1 `}
      onClick={() => handleNewAd()}
    >
      <img src="/assets/images/add.svg" width={19} />
      <h5
        className={`  ${style.sec42}  fs-5 text-center lh-sm  my-0 `}
        style={{}}
      >
        آگهـــــی بزن
      </h5>
    </li>
  );
};
export default NewAd;
