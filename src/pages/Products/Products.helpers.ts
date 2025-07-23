import { createContext, use } from "react";
import { type ProductContextType } from "../../components/helpers/types";

export const ProductsContext = createContext<ProductContextType | null>(null);

export const useProductContext = () => {
   const context = use(ProductsContext);

   if (!context) throw new Error("Product context does not exist");

   return context;
};

export const getAllValues = (product?: object) => {
   let values = "";
   if (product !== undefined)
      values = Object.values(product)
         .map(value => {
            if (typeof value === "object") return getAllValues(value);
            if (Array.isArray(value)) return value.join(" ");
            return value;
         })
         .join(" ");

   return values;
};
