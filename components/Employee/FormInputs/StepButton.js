 
const StepButton=({step,ph,handleStep})=>{
    
   
    return(
        <div
        className="d-flex mt-5 justify-content-center"
        onClick={() => {
         handleStep(step,ph)
        }}
      >
        <div
          className="py-2 text-white"
          style={{
            width: "35%",
            fontSize: "1.5rem",
            backgroundColor: "#E92B59",
            textAlign: "center",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          بعدی
        </div>
      </div>
    )
}

export default StepButton