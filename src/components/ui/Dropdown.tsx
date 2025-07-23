import { useId } from "react";

type DropdownProps = {
   description: string;
   options: { value: string; description: string }[];
};

const Dropdown = ({
   description,
   options,
   ...props
}: DropdownProps & React.SelectHTMLAttributes<HTMLSelectElement>) => {
   const dropdownId = useId();

   return (
      <div className="dropdown">
         <label
            htmlFor={dropdownId}
            className="label"
         >
            {description}
         </label>
         <select
            {...props}
            id={dropdownId}
         >
            {options.map(option => {
               const { value, description } = option;

               return (
                  <option
                     key={value}
                     value={value}
                  >
                     {description}
                  </option>
               );
            })}
         </select>
      </div>
   );
};

export default Dropdown;
