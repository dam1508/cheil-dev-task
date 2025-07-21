import { createContext, use } from "react";
import { type ProductContextType } from "../../components/helpers/types";

export const ProductsContext = createContext<ProductContextType | null>(null);

export const useProductContext = () => {
   const context = use(ProductsContext);

   if (!context) throw new Error("Product context does not exist");

   return context;
};
