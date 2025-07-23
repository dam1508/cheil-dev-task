import "./Ui.css";
import { colors } from "../helpers/constants";

const ChooseButton = ({
   isChosen,
   ...props
}: { isChosen: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
   const currentColor = isChosen ? colors.samsungBlack : colors.samsungBlue;
   const currentText = isChosen ? "WYBRANE" : "WYBIERZ";

   return (
      <button
         className="choose-button"
         style={{ backgroundColor: currentColor }}
         {...props}
      >
         {currentText}
      </button>
   );
};

export default ChooseButton;
