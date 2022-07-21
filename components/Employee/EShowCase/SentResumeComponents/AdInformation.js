import { useRouter } from "next/router";
const AdInformation = ({ item }) => {
  const router = useRouter();

  return (
    <>
      <div className="col-6  d-flex align-items-center px-3">
        <div
          className=" d-flex flex-column   justify-content-center align-items-center shadow2 col-3 "
          style={{
            fontSize: 15,
            borderRadius: 10,
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center "
            style={{
              backgroundColor: "rgb(17,153,158,0.09)",
              borderRadius: 10,
              width: "100%",
              height: 90,
            }}
          >
            <img src={item.ad.image} width={74} height={74} />
          </div>
          <h6
            className="text-center my-auto py-2 "
            style={{
              fontSize: 14,
            }}
          >
            برقراری ارتباط
          </h6>
        </div>
        <div
          className="d-flex flex-column px-3"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            router.push({
              pathname: "/eShowcase",
              query: { ad: item.ad.id },
            });
          }}
        >
          <h4>{item.ad.title}</h4>
          <div className="d-flex align-items-center">
            <h5>{item.ad.user_name} </h5>
            <h6 className="ms-2">{item.ad.personal.city_fa}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdInformation;
