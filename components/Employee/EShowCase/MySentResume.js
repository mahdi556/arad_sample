import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "context/Auth/AuthContext";
import UnseenAdPreview from "./SentResumeComponents/UnseenAdPreview";
import RejectedAdPreview from "./SentResumeComponents/RejectedAdPreview";
import AcceptedAdPreview from "./SentResumeComponents/AcceptedAdPreview";
import AllAdPreview from "./SentResumeComponents/AllAdPreview";
const MySentResume = () => {
  const [tab, setTab] = useState(3);
  const { user } = useContext(AuthContext);
  const [ads, setAds] = useState([]);
  useEffect(() => {
    user &&
      axios({
        url: "/getMySentResumes",
        method: "get",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
        .then((response) => {
          console.log(response);
          setAds(response.data.data.ads);
        })
        .catch(function (error) {
          console.log(error);
        });
  }, [user]);

  return (
    <>
      <div
        className="d-flex col-12 mt-5 justify-content-center jobAds bg-white   "
        style={{
          borderBottom: "#000 1px solid",
        }}
      >
        <div
          className={
            tab == 1
              ? "col-3 py-2 rightsec1 jobAds-selected"
              : "col-3 py-2 rightsec1 "
          }
          onClick={() => setTab(1)}
        >
          درانتظار
        </div>
        <div
          className={
            tab == 2
              ? "col-3 py-2 middlesec1 jobAds-selected"
              : "col-3 py-2 middlesec1 "
          }
          onClick={() => setTab(2)}
        >
          رد شده
        </div>
        <div
          className={
            tab == 3
              ? "col-3 py-2 middlesec1 jobAds-selected"
              : "col-3 py-2 middlesec1 "
          }
          onClick={() => setTab(3)}
        >
          تائید شده
        </div>
        <div
          className={
            tab == 4
              ? "col-3 py-2 leftsec1 jobAds-selected"
              : "col-3 py-2 leftsec1 "
          }
          onClick={() => setTab(4)}
        >
          نمایش همه
        </div>
      </div>
      <div className="bg-white py-5">
        {ads.length > 0 &&
          ads.map((item, key) =>
            item.status == "unseen" && tab == 1 ? (
              <UnseenAdPreview item={item} />
            ) : item.status == "rejected" && tab == 2 ? (
              <RejectedAdPreview item={item} />
            ) : item.status == "accepted" && tab == 3 ? (
              <AcceptedAdPreview item={item} />
            ) : tab == 4 ? (
              <AllAdPreview item={item} />
            ) : null
          )}
      </div>
    </>
  );
};
export default MySentResume;
