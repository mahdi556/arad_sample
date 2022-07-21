import { useRouter } from "next/router";
import { useContext } from "react";
import style from "./HomeStyles/home.module.css";
import AuthContext from "context/Auth/AuthContext";

const NewAd = () => {
  const router = useRouter();
  const { user, handleSignIn } = useContext(AuthContext);
  const handleNewAd = () => {
    if (user) {
       router.push({
        pathname: "/ads/adtype",
      });
    } 
    else {
      handleSignIn();
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
