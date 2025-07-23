import "./Ui.css";
const Searchbar = ({
   ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
   return (
      <input
         type="text"
         {...props}
      ></input>
   );
};

export default Searchbar;
