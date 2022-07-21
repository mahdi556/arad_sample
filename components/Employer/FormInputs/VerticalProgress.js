
const Circle = (props) => {
    const top = props.top;
    return (
      <div
        style={{
          position: "absolute",
          top: top,
          right: "25%",
          width: 10,
          height: 10,
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
      ></div>
    );
  };
  const Tick = (props) => {
    const top = props.top;
    return (
      <img
        className="img-fluid "
        src= "../../../../assets/images/progress.png" 
        style={{
          position: "absolute",
          top: top,
        }}
        width="80%"
      />
    );
  };
  
const VerticalProgress=({step,p_height})=>{
    return(
<div
    className="sticky-top"
    style={{
      paddingTop: "6rem",
    }}
  >
    <div
      className="d-flex flex-column    align-items-center bg-white py-3 "
      style={{
        borderRadius: 18,
         width: "5%",
        paddingRight: "2.5rem",
        paddingLeft: "2.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "2.5rem",
          height: "2.5rem",
          borderRadius: 30,
          backgroundColor: "#E92B59",
          zIndex: 2,
         }}
      ></div>
      <div
        style={{
          marginTop: -10,
          width: 20,
          height: "70vh",
          borderRadius: 20,
          backgroundColor: "#ccc",
          position: "relative",
          zIndex: 0,
        }}
      >
        {step == 1 ? <Circle top="5%" /> : <Tick top="5%" />}
        {step <= 2 ? <Circle top="25%" /> : <Tick top="25%" />}
        {step <= 3 ? <Circle top="47%" /> : <Tick top="47%" />}
        {step <= 4 ? <Circle top="71%" /> : <Tick top="71%" />}
        {step !== 6 ? <Circle top="93%" /> : <Tick top="93%" />}

        <div
          style={{
            display: "flex",
            width: "100%",
            height: p_height,
            backgroundColor: "#E92B59",
            borderRadius: 10,
            justifyContent: "center",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: -10,
          width: "2.5rem",
          height: "2.5rem",
          borderRadius: 30,
          backgroundColor: "#EBEBEB",
          justifyContent: "center",
          borderStyle: "solid",
          borderWidth: 2,
          borderColor: "#9D9D9D",
          zIndex: 2,
        }}
      ></div>
    </div>
  </div>
    )
    
}
export default VerticalProgress;