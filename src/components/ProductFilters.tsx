import { useProductContext } from "../pages/Products/Products.helpers";
import { productFilterValues } from "./helpers/constants";
import { Dropdown, Searchbar } from "./ui";

const ProductFilters = () => {
   const { sort, functions, energyClass, capacity } = productFilterValues;
   const { filters, filteredProducts, changeFilter } = useProductContext();

   return (
      <section className="product-filters">
         <Searchbar
            className="searchbar"
            placeholder="Search..."
            name="query"
            value={filters.query}
            onChange={event => {
               changeFilter("query", event.target.value);
            }}
         />
         <div className="filters-dropdowns">
            <Dropdown
               className="filter"
               description="Sortuj po:"
               name="sort"
               options={sort}
               value={filters.sort}
               onChange={event => {
                  changeFilter("sort", event.target.value);
               }}
            />
            <Dropdown
               className="filter"
               description="Funkcje:"
               name="functions"
               options={functions}
               value={filters.functions}
               onChange={event => {
                  changeFilter("functions", event.target.value);
               }}
            />
            <Dropdown
               className="filter"
               description="Klasa energetyczna:"
               name="energyClass"
               options={energyClass}
               value={filters.energyClass}
               onChange={event => {
                  changeFilter("energyClass", event.target.value);
               }}
            />
            <Dropdown
               className="filter"
               description="Pojemność:"
               name="capacity"
               options={capacity}
               value={filters.capacity}
               onChange={event => {
                  changeFilter("capacity", event.target.value);
               }}
            />
         </div>
         <span className="quantity">
            Liczba wyników: {filteredProducts.length}
         </span>
      </section>
   );
};

export default ProductFilters;
