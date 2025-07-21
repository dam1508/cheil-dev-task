import { ProductFilters, ProductList } from "../../components";
import "./Products.css";
import { ProductsContext } from "./Products.helpers";
import { use, useEffect, useState } from "react";
import {
   type ProductContextType,
   type ProductFiltersType,
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
      functions: "",
      energyClass: "",
      capacity: "",
   });

   const data = use(productsPromise);
   useEffect(
      () =>
         setFilteredProducts(
            data.products.filter(product => {
               let display = true;
               Object.keys(filters).map(key => {
                  switch (key) {
                     case "functions":
                        if (
                           !product[key].find(func =>
                              func.includes(filters[key])
                           )
                        )
                           display = false;
                        break;
                     case "energyClass":
                        if (!product[key].includes(filters[key]))
                           display = false;
                        break;
                     case "capacity":
                        if (
                           !product[key][currentUnits.weight]
                              .toString()
                              .includes(filters[key])
                        )
                           display = false;
                        break;
                  }
               });
               return display;
            })
         ),
      [filters, data.products, currentUnits.weight]
   );

   const context: ProductContextType = {
      currentUnits,
      filteredProducts,
      filters,
      onSubmitFilters: (filters: string = "xd") => {
         console.log(filters);
      },
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
