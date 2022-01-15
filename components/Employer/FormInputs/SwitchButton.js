import { useState } from "react";

const SwitchButtion = () => {
  const [switchHolder, setSwitchHolder] = useState(false);
  const [switchButton, setSwitchButton] = useState(false);
  return (
    <div
    className={switchHolder ? 'ActiveswitchHolder' : 'disActiveswitchHolder' }
      onClick={() => {setSwitchButton(!switchButton);setSwitchHolder(!switchHolder)}}
    >
      <div className={switchButton ? 'Activeswitch' : 'disActiveswitch' }></div>
    </div>
  );
};

export default SwitchButtion;
