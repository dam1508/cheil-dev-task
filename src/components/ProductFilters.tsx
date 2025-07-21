import { productFilterValues } from "./helpers/constants";
import { Dropdown, Searchbar } from "./ui";

const ProductFilters = () => {
   const filterPlaceholder = "all";
   const { sort, functions, energyClass, capacity } = productFilterValues;
   return (
      <form className="product-filters">
         <Searchbar
            className="searchbar"
            placeholder="Search..."
         />
         <div className="filters-dropdowns">
            <Dropdown
               className="filter"
               description="Sortuj po:"
               name="sort"
               options={sort}
               defaultValue={filterPlaceholder}
            />
            <Dropdown
               className="filter"
               description="Funkcje:"
               name="functions"
               options={functions}
            />
            <Dropdown
               className="filter"
               description="Klasa energetyczna:"
               name="energyClass"
               options={energyClass}
            />
            <Dropdown
               className="filter"
               description="Pojemność:"
               name="capacity"
               options={capacity}
            />
         </div>
         <span className="quantity"></span>
      </form>
   );
};

export default ProductFilters;
