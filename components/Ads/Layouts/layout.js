import VerticalProgress from "components/Ads/Tools/VerticalProgress";

export default function Layout({ children }) {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#E5E5E5",
          paddingTop: "7rem",
          paddingBottom: 400,
        }}
      >
        <div
          style={{
            width: "62%",
            marginRight: "13%",
            marginLeft: "25%",
          }}
        >
          <div className="d-flex justify-content-between  ">
            <div
              style={{
                width: "15%",
              }}
            >
              <VerticalProgress step={1} p_height={20} />
            </div>
            <div
              style={{
                width: "83%",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
