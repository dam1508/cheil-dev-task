import { useState } from "react";
import "./Ui.css";
import { colors } from "../helpers/constants";
const ChooseButton = () => {
   const [isChosen, setIsChosen] = useState<boolean>(false);
   const currentColor = isChosen ? colors.samsungBlack : colors.samsungBlue;
   const currentText = isChosen ? "WYBRANE" : "WYBIERZ";

   return (
      <button
         className="choose-button"
         style={{ backgroundColor: currentColor }}
      >
         {currentText}
      </button>
   );
};

export default ChooseButton;
