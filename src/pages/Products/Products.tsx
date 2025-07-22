import { ProductFilters, ProductList } from "../../components";
import "./Products.css";
import { ProductsContext } from "./Products.helpers";
import { use, useEffect, useState } from "react";
import {
   type ProductContextType,
   type ProductFiltersType,
   type ProductFiltersKeys,
   type ProductListType,
   type ProductUnits,
} from "../../components/helpers/types";
import { getProducts } from "../../components/api/api";

const productsPromise = getProducts();

const ProductsContextProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [currentUnits] = useState<ProductUnits>({
      weight: "kg",
      currency: "pln",
   });
   const [filteredProducts, setFilteredProducts] = useState<ProductListType>(
      []
   );
   const [filters, setFilters] = useState<ProductFiltersType>({
      query: "",
      sort: "",
      functions: "",
      energyClass: "",
      capacity: "",
   });
   const [chosenProductId, setChosenProductId] = useState<string | undefined>(
      undefined
   );

   const data = use(productsPromise);

   useEffect(
      () =>
         setFilteredProducts(
            data.products
               .filter(product => {
                  let display = true;
                  Object.keys(filters).map(key => {
                     switch (key) {
                        case "functions":
                           if (
                              !product[key].find(func =>
                                 func
                                    .toLowerCase()
                                    .includes(filters[key].toLowerCase())
                              )
                           )
                              display = false;
                           break;
                        case "energyClass":
                           if (
                              !product[key]
                                 .toLowerCase()
                                 .includes(filters[key].toLowerCase())
                           )
                              display = false;
                           break;
                        case "capacity":
                           if (
                              !product[key][currentUnits.weight]
                                 .toString()
                                 .toLowerCase()
                                 .includes(filters[key].toLowerCase())
                           )
                              display = false;
                           break;
                     }
                  });
                  return display;
               })
               .sort((productA, productB) => {
                  switch (filters.sort) {
                     case "capacity":
                        return (
                           productA.capacity[currentUnits.weight] -
                           productB.capacity[currentUnits.weight]
                        );
                     case "price":
                        return (
                           productA.price[currentUnits.currency].value -
                           productB.price[currentUnits.currency].value
                        );
                     default:
                        return 0;
                  }
               })
         ),
      [filters, data.products, currentUnits]
   );

   const changeFilter = (filter: ProductFiltersKeys, value: string) => {
      console.log(filters);
      setFilters({
         ...filters,
         [filter]: value,
      });
   };
   const context: ProductContextType = {
      currentUnits,
      filteredProducts,
      filters,
      chosenProductId,
      setChosenProductId,
      changeFilter,
   };
   return (
      <ProductsContext.Provider value={context}>
         {children}
      </ProductsContext.Provider>
   );
};

const Products = () => {
   return (
      <ProductsContextProvider>
         <div className="products">
            <ProductFilters />
            <ProductList />
         </div>
      </ProductsContextProvider>
   );
};

export default Products;
