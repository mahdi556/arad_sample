import { useEffect } from "react";
const SwitchButtion = ({ valueHandler, status }) => {
  useEffect(() => {}, [status]);
  // const [switchHolder, setSwitchHolder] = useState(status);
  // const [switchButton, setSwitchButton] = useState(status);
  return (
    <div
      className={status ? "ActiveswitchHolder" : "disActiveswitchHolder"}
      onClick={() => {
        valueHandler(!status);
      }}
    >
      <div className={status ? "Activeswitch" : "disActiveswitch"}></div>
    </div>
  );
};

export default SwitchButtion;

// import { useState } from "react";

// const SwitchButtion = ({valueHandler}) => {
//   const [switchHolder, setSwitchHolder] = useState(false);
//   const [switchButton, setSwitchButton] = useState(false);
//   return (
//     <div
//     className={switchHolder ? 'ActiveswitchHolder' : 'disActiveswitchHolder' }
//       onClick={() => {valueHandler(!switchButton);setSwitchButton(!switchButton);setSwitchHolder(!switchHolder)}}
//     >
//       <div className={switchButton ? 'Activeswitch' : 'disActiveswitch' }></div>
//     </div>
//   );
// };

// export default SwitchButtion;
